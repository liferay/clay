/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
'use strict';

let _ = require('lodash');
let chalk = require('chalk');
let yeoman = require('yeoman-generator');
let yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
	initializing: function() {
		this.log(
			yosay(
				'Welcome, let\'s generate a ' +
					chalk.blue('Clay') +
					' component!'
			)
		);
	},

	prompting: function() {
		let done = this.async();

		let prompts = [
			{
				type: 'input',
				name: 'componentName',
				message: 'How do you want to name your component?',
				default: 'ClayComponent',
				validate: function(input) {
					if (!input) {
						return 'You must provide a component name.';
					}
					if (!/^[^_\-\s\d][^_\-\s]*$/.test(input)) {
						return (
							'Invalid component name. Component names can\'t contain whitespace or ' +
							'any of the following characters: "-_". Also, class names can\'t ' +
							'start with digits.'
						);
					}

					return true;
				},
			},
			{
				type: 'input',
				name: 'repoDescription',
				message: 'How would you describe this component?',
				default: 'My awesome Clay component',
			},
		];

		this.prompt(
			prompts,
			function(props) {
				let componentName = props.componentName;

				this.camelCaseName = _.camelCase(componentName);
				this.componentName = componentName;
				this.capitalizeName = _.startCase(componentName);
				this.kebabCaseName = _.kebabCase(componentName);

				this.repoName = this.kebabCaseName;
				this.repoOwner = props.repoOwner;
				this.repoDescription = props.repoDescription;
				done();
			}.bind(this)
		);
	},

	writing: function() {
		this.destinationRoot('./packages/' + this.repoName);
		this.fs.copyTpl(
			this.templatePath('demo/_App.tsx'),
			this.destinationPath('demo/App.tsx'),
			{
				camelCaseName: this.camelCaseName,
				componentName: this.componentName,
				capitalizeName: this.capitalizeName,
				kebabCaseName: this.kebabCaseName,
				repoName: this.repoName,
			}
		);
		this.fs.copyTpl(
			this.templatePath('demo/_index.html'),
			this.destinationPath('demo/index.html')
		);
		this.fs.copyTpl(
			this.templatePath('src/_Boilerplate.tsx'),
			this.destinationPath('src/' + this.componentName + '.tsx'),
			{
				buildFormat: this.buildFormat,
				componentName: this.componentName,
				templateLanguage: this.templateLanguage,
				kebabCaseName: this.kebabCaseName,
				repoName: this.repoName,
			}
		);

		this.fs.copyTpl(
			this.templatePath('src/tests/_Boilerplate.tsx'),
			this.destinationPath(
				'src/__tests__/' + this.componentName + '.tsx'
			),
			{
				componentName: this.componentName,
				kebabCaseName: this.kebabCaseName,
			}
		);
		this.fs.copyTpl(
			this.templatePath('src/tests/__snapshots__/_Boilerplate.tsx.snap'),
			this.destinationPath(
				'src/__tests__/__snapshots__/' +
					this.componentName +
					'.tsx.snap'
			),
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
				repoName: this.repoName,
				repoOwner: this.repoOwner,
				repoDescription: this.repoDescription,
			}
		);
		this.fs.copyTpl(
			this.templatePath('_README.md'),
			this.destinationPath('README.md'),
			{
				repoName: this.repoName,
				repoDescription: this.repoDescription,
				componentName: this.componentName,
				kebabCaseName: this.kebabCaseName,
			}
		);
		this.fs.copyTpl(
			this.templatePath('_webpack.config.js'),
			this.destinationPath('webpack.config.js'),
			{
				componentName: this.componentName,
				kebabCaseName: this.kebabCaseName,
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

	install: function() {
		const ps = this.spawnCommand('yarn', ['install', '--no-lockfile'], {
			stdio: 'ignore',
		});
		ps.on('close', code => console.log(`yarn install exited with ${code}`));
	},
});
