# How to contribute

To maintain high traceability and quality, all contributions after the initial setup need to adhere to the following guidelines:

- [Create a github issue](https://github.com/liferay/metal-charts/issues/new) explaining the issue to be fixed or use feature to be implemented.
- [Send a Pull Request](https://github.com/liferay/metal-charts/compare) covering the issue.
	- Append `Fixes #` to commit messages to specify the issue that is fixed by the commit
	- Write unit tests for both issues and new features
	- Document the code [using jsdoc](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler)
	- Pass the gulp _quality_ tests (`lint`, `format`, ~~`complexity`~~)
	- Pass all the tests (`gulp test`) and maintain 100% code coverage (`gulp test:coverage`)
