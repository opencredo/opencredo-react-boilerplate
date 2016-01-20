# Contributing to this project

**Firstly**, thank you getting involved!

## What should I know before I get started?

### Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

Please report unacceptable behaviour to [github@opencredo.com](mailto:github@opencredo.com).

## How Can I Contribute?

### Pull Requests

We :heart: pull requests.

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behaviour :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please perform a search as you might find out that you don't need to create one.


### Before you commit

Please make sure you do the following before committing code:

* do a quick smoke-test to ensure the app appears to be functioning as expected
* run `npm run build` &ndash; ensure no errors


## Style Guide

We're mostly following [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript), with a few overrides that you can check in our .eslintrc file. The lint task will catch most of these so be sure to run it (`npm run lint`) on your code.


### Code Conventions

* We :heart: semicolons `;`
* Commas last `,`
* 2 spaces for indentation (no tabs)
* Prefer single `'` over double `"` quotes.
* Except in JSX. Use double quotes in JSX: `<MyComponent classNames="thank you" />`
* 100 character line length
* Do not use underscore prefix for "private" methods.
* In fact, you probably don't need private methods. Try to keep components small. Compose.

### Git commits

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally ("Fix #17")

