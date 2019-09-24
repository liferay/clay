/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

const chalk = require('chalk');
const _ = require('lodash');
const yeoman = require('yeoman-generator');
const yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
	initializing() {
		this.log(
			yosay(`Welcome, let's generate a ${chalk.blue('Clay')} component!`)
		);
	},

	install() {
		if (!this.options.skipInstall) {
			this.log(`${chalk.green('Installing dependencies...')}`);

			const ps = this.spawnCommand('yarn');

			ps.on(
				'close',
				code => console.log(`yarn install exited with ${code}`) // eslint-disable-line no-console
			);
		}
	},

	prompting() {
		const done = this.async();

		const prompts = [
			{
				default: 'ClayComponent',
				message: 'How do you want to name your component?',
				name: 'componentName',
				type: 'input',
				validate: input => {
					if (!input) {
						return 'You must provide a component name.';
					}
					if (!/^[^_\-\s\d][^_\-\s]*$/.test(input)) {
						return (
							"Invalid component name. Component names can't contain whitespace or " +
							'any of the following characters: "-_". Also, class names can\'t ' +
							'start with digits.'
						);
					}

					return true;
				},
			},
			{
				default: 'My awesome Clay component',
				message: 'How would you describe this component?',
				name: 'repoDescription',
				type: 'input',
			},
		];

		this.prompt(
			prompts,
			(props) => {
				const {componentName} = props;

				this.camelCaseName = _.camelCase(componentName);
				this.componentName = componentName;
				this.capitalizeName = _.startCase(componentName);
				this.kebabCaseName = _.kebabCase(componentName);

				this.repoName = this.kebabCaseName;
				this.repoOwner = props.repoOwner;
				this.repoDescription = props.repoDescription;
				done();
			}
		);
	},

	writing() {
		this.destinationRoot(`packages/${this.repoName}`);
		this.fs.copyTpl(
			this.templatePath('_stories/_index.tsx'),
			this.destinationPath('stories/index.tsx'),
			{
				camelCaseName: this.camelCaseName,
				capitalizeName: this.capitalizeName,
				componentName: this.componentName,
				kebabCaseName: this.kebabCaseName,
				repoName: this.repoName,
			}
		);
		this.fs.copyTpl(
			this.templatePath('src/_index.tsx'),
			this.destinationPath(`src/index.tsx`),
			{
				buildFormat: this.buildFormat,
				componentName: this.componentName,
				kebabCaseName: this.kebabCaseName,
				repoName: this.repoName,
				templateLanguage: this.templateLanguage,
			}
		);

		this.fs.copyTpl(
			this.templatePath('src/tests/_index.tsx'),
			this.destinationPath(`src/__tests__/index.tsx`),
			{
				componentName: this.componentName,
				kebabCaseName: this.kebabCaseName,
			}
		);
		this.fs.copyTpl(
			this.templatePath('src/tests/__snapshots__/_index.tsx.snap'),
			this.destinationPath(`src/__tests__/__snapshots__/index.tsx.snap`),
			{
				componentName: this.componentName,
				kebabCaseName: this.kebabCaseName,
			}
		);
		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'),
			{
				componentName: this.componentName,
				packageName: this.repoName.replace('clay-', ''),
				repoDescription: this.repoDescription,
				repoName: this.repoName,
				repoOwner: this.repoOwner,
			}
		);
		this.fs.copyTpl(
			this.templatePath('_README.md'),
			this.destinationPath('README.md'),
			{
				componentName: this.componentName,
				kebabCaseName: this.kebabCaseName,
				repoDescription: this.repoDescription,
				repoName: this.repoName,
			}
		);
		this.fs.copyTpl(
			this.templatePath('_tsconfig.declarations.json'),
			this.destinationPath('tsconfig.declarations.json')
		);
		this.fs.copyTpl(
			this.templatePath('_tsconfig.json'),
			this.destinationPath('tsconfig.json')
		);
	},
});
