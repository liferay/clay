import LZString from 'lz-string';

type CodeSandboxProps = {
	/**
	 * The title of the sandbox.
	 */
	title: string;
	/**
	 * The natural language of the sandbox (to be placed in the `html` lang attribute).
	 */
	naturalLanguage?: string;
	/**
	 * The description of the sandbox.
	 */
	description?: string;
	/**
	 * The demo files to be included in the sandbox.
	 */
	demoFiles: DemoFile[];
	/**
	 * The language of the entry point file.
	 */
	demoLanguage: 'js' | 'ts';
	/**
	 * The dependencies to be included in the sandbox.
	 * They are added on top of dependencies found in the demo files.
	 */
	dependencies: Record<string, string>;
	/**
	 * The dev dependencies to be included in the sandbox.
	 */
	devDependencies?: Record<string, string>;
	/**
	 * A function to resolve dependencies versions.
	 * By default, it resolves to the `latest` version.
	 */
	dependencyResolver?: (importPath: string) => Record<string, string>;
	/**
	 * Additional content to be placed in the `head` tag of the `index.html` file.
	 */
	additionalHtmlHeadContent?: string;
	/**
	 * The custom index (JS/TS) file content.
	 */
	customIndexFile?: string;
	/**
	 * A function to customize the files to be included in the sandbox.
	 * It is called for each of the demo files with its name and content.
	 * It expects a tuple with the new file name and content or `null` to apply standard rules
	 * (place the file in the `src` directory).
	 */
	onAddingFile?: (
		fileName: string,
		content: string
	) => [string, string] | null;
};

/**
 * `createCodeSandbox` method is based on base-ui implementation with some modifications.
 * https://github.com/mui/base-ui/blob/2c7fc9a3ec56981d2c0266f919bffb6c4c32239b/docs/src/blocks/createCodeSandbox/createCodeSandbox.ts#L7
 */
export function createCodeSandbox(options: CodeSandboxProps) {
	const payload = createCodeSandboxRequestPayload(options);
	const initialFile = Object.keys(payload)[0];
	const parameters = compress({files: payload});

	const form = document.createElement('form');
	form.method = 'POST';
	form.target = '_blank';
	form.action = 'https://codesandbox.io/api/v1/sandboxes/define';
	addHiddenInput(form, 'parameters', parameters);
	addHiddenInput(form, 'query', `file=${initialFile}`);
	document.body.appendChild(form);
	form.submit();
	document.body.removeChild(form);
}

function createCodeSandboxRequestPayload(options: CodeSandboxProps) {
	const {
		title,
		naturalLanguage = 'en',
		customIndexFile,
		demoFiles,
		demoLanguage,
		additionalHtmlHeadContent,
		onAddingFile,
	} = options;

	const packagedDemo = packDemo(demoFiles);
	const indexExtension = demoLanguage === 'ts' ? '.tsx' : '.js';

	const demoFilesToInclude = transformDemoFiles(
		packagedDemo.processedFiles,
		onAddingFile
	);

	const files: Record<string, {content: string | object}> = {
		...demoFilesToInclude,
		[`src/index${indexExtension}`]: {
			content: customIndexFile ?? getRootIndex(demoLanguage === 'ts'),
		},
		'public/index.html': {
			content: getHtml({
				title,
				language: naturalLanguage,
				additionalHeadContent: additionalHtmlHeadContent,
			}),
		},
		'package.json': {
			content: createPackageJson(
				options,
				packagedDemo.externalImports,
				`src/index${indexExtension}`
			),
		},
	};

	if (demoLanguage === 'ts') {
		files['tsconfig.json'] = {
			content: getTsconfig(),
		};
	}

	return files;
}

function defaultDependencyResolver(importPath: string) {
	return {
		[importPath]: 'latest',
	};
}

function createPackageJson(
	options: CodeSandboxProps,
	sourceDependencies: string[],
	mainFile: string
) {
	const {
		dependencies: hardcodedDependencies,
		description,
		devDependencies,
		dependencyResolver = defaultDependencyResolver,
	} = options;
	const dependencies = new Map<string, string>();

	sourceDependencies.forEach((dependency) => {
		const resolvedDependencies = dependencyResolver(dependency);
		Object.entries(resolvedDependencies).forEach(([name, version]) => {
			dependencies.set(name, version);
		});
	});

	Object.entries(hardcodedDependencies).forEach(([name, version]) => {
		dependencies.set(name, version);
	});

	return {
		description,
		dependencies: Object.fromEntries(dependencies),
		devDependencies,
		scripts: {
			start: 'react-scripts start',
			build: 'react-scripts build',
			test: 'react-scripts test',
			eject: 'react-scripts eject',
		},
		main: mainFile,
	};
}

function transformDemoFiles(
	files: Record<string, string>,
	onAddingFile:
		| ((fileName: string, content: string) => [string, string] | null)
		| undefined
) {
	const processedFiles: Record<string, {content: string}> = {};
	Object.keys(files).forEach((file) => {
		const customProcessed = onAddingFile?.(file, files[file]);
		if (customProcessed) {
			processedFiles[customProcessed[0]] = {content: customProcessed[1]};
		} else {
			processedFiles[`src/${file}`] = {content: files[file]};
		}
	});

	return processedFiles;
}

function compress(object: any) {
	return LZString.compressToBase64(JSON.stringify(object))
		.replace(/\+/g, '-') // Convert '+' to '-'
		.replace(/\//g, '_') // Convert '/' to '_'
		.replace(/=+$/, ''); // Remove ending '='
}

function addHiddenInput(form: HTMLFormElement, name: string, value: string) {
	const input = document.createElement('input');
	input.type = 'hidden';
	input.name = name;
	input.value = value;
	form.appendChild(input);
}

function flattenRelativeImports(rawCode: string, modulePaths: string[] = []) {
	let newCode = rawCode;
	modulePaths.forEach((path: string) => {
		const pathWithoutExtension = path.replace(/\.[a-z]*$/g, '');
		// Move the relative import to the current directory
		const newPath = `./${pathWithoutExtension.replace(/^.*[\\/]/g, '')}`;
		newCode = newCode.replace(pathWithoutExtension, newPath);
	});
	return newCode;
}

type DemoFile = {
	/**
	 * Absolute path to the file.
	 */
	path: string;
	/**
	 * Base name of the file.
	 */
	name: string;
	/**
	 * Content of the file.
	 */
	content: string;
	/**
	 * Pretty content of the file as HTML with highlighted syntax.
	 */
	prettyContent?: string;
	/**
	 * Type of the file.
	 */
	type: string;
};

const SCRIPT_EXTENSIONS = ['js', 'ts', 'jsx', 'tsx'];

export function packDemo(demoFiles: DemoFile[]) {
	const processedFiles: Record<string, string> = {};
	const externalImports: Set<string> = new Set<string>();

	demoFiles.forEach((file, index) => {
		const fileExtension = file.name.split('.').pop() ?? '';
		let newContent = file.content;

		if (SCRIPT_EXTENSIONS.includes(fileExtension)) {
			const relativeImports: Set<string> = new Set<string>();
			const imports = extractImports(file.content);
			imports.forEach((importPath) => {
				if (importPath.startsWith('.')) {
					relativeImports.add(importPath);
				} else {
					externalImports.add(getPackageName(importPath));
				}
			});

			newContent = flattenRelativeImports(file.content, [
				...relativeImports,
			]);
		}

		// the entry point is renamed to App.{ext}
		const newFileName = index === 0 ? `App.${fileExtension}` : file.name;
		processedFiles[newFileName] = newContent;
	});

	return {
		processedFiles,
		externalImports: [...externalImports],
	};
}

function extractImports(code: string) {
	return [
		...code.matchAll(
			/import\s+(?:[^'"]*?\s+from\s+)?['"]([^"'\n]*?)['"]/gm
		),
	].map((match) => match[1]);
}

function getPackageName(importPath: string) {
	if (importPath.startsWith('@')) {
		return importPath.split('/').slice(0, 2).join('/');
	}

	return importPath.split('/')[0];
}

interface GetHtmlParameters {
	title: string;
	language: string;
	additionalHeadContent?: string;
}

export const getHtml = ({
	title,
	language,
	additionalHeadContent,
}: GetHtmlParameters) => {
	return `<!DOCTYPE html>
<html lang="${language}">
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    ${additionalHeadContent ?? ''}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;
};

export function getRootIndex(useTypescript: boolean) {
	// document.querySelector returns 'Element | null' but createRoot expects 'Element | DocumentFragment'.
	const type = useTypescript ? '!' : '';

	return `import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.querySelector("#root")${type}).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;
}

export const getTsconfig = () => `{
  "compilerOptions": {
    "target": "es2022",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": [
    "src"
  ]
}
`;
