# Contributing to this project

**Firstly**, thank you getting involved!

<!-- TODO: insert TOC -->

## What should I know before I get started?

### Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

Please report unacceptable behaviour to [github@opencredo.com](mailto:github@opencredo.com).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behaviour :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one.

When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). If you'd like, you can use [this template](#template-for-submitting-bug-reports) to structure the information.

#### Before Submitting A Bug Report

* Perform a [cursory search](https://github.com/opencredo/opencredo-react-boilerplate/issues?q=is%3Aissue) to see if the problem has already been reported. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). [Create an issue](https://github.com/opencredo/opencredo-react-boilerplate/issues/new) and provide the following information.

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started the project, e.g. which command exactly you used in the terminal. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behaviour you observed after following the steps** and point out what exactly is the problem with that behaviour.
* **Explain which behaviour you expected to see instead and why.**
* **If the Chrome's developer tools pane is shown without you triggering it**, that normally means that an exception was thrown. The Console tab will include an entry for the exception. Expand the exception so that the stack trace is visible, and provide the full exception and stack trace in a [code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines) and as a screenshot.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Include details about your configuration and environment:

* **What's the name and version of the OS you're using**?
* **Which keyboard layout are you using?** Are you using a US layout or some other layout?

#### Template For Submitting Bug Reports

    [Short description of problem here]

    **Reproduction Steps:**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Expected behaviour:**

    [Describe expected behaviour here]

    **Observed behaviour:**

    [Describe observed behaviour here]

    **Screenshots and GIFs**

    ![Screenshots and GIFs which follow reproduction steps to demonstrate the problem](url)

    **OS and version:** [Enter OS name and version here]

    **Installed packages:**

    [List of installed packages here]

    **Additional information:**

    * Problem can be reliably reproduced, doesn't happen randomly: [Yes/No]
    * Problem happens with all files and projects, not only some files or projects: [Yes/No]



### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). If you'd like, you can use [this template](#template-for-submitting-enhancement-suggestions) to structure the information.

#### Before Submitting An Enhancement Suggestion

* Perform a [cursory search](https://github.com/opencredo/opencredo-react-boilerplate/labels/enhancement) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). [Create an issue](https://github.com/opencredo/opencredo-react-boilerplate/issues/new) and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behaviour** and **explain which behaviour you expected to see instead** and why.
* **Explain why this enhancement would be useful** to other React developers.
* **Specify the name and version of the OS you're using.**

#### Template For Submitting Enhancement Suggestions

    [Short description of suggestion]

    **Steps which explain the enhancement**

    1. [First Step]
    2. [Second Step]
    3. [Other Steps...]

    **Current and suggested behaviour**

    [Describe current and suggested behaviour here]

    **Why would the enhancement be useful to most other developers**

    [Explain why the enhancement would be useful to most users]

    **Screenshots and GIFs**

    ![Screenshots and GIFs which demonstrate the steps or part of the enhancement suggestion is related to](url)

    **OS and Version:** [Enter OS name and version here]

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through [the open issues on github](https://github.com/opencredo/opencredo-react-boilerplate/issues).

## Before you commit

Please make sure you do the following before committing code:

* do a quick smoke-test to ensure the app appears to be functioning as expected
* run `npm run lint` &ndash; ensure no errors
* it's also preferable to run the `flow` checker &ndash; see [FLOWTYPE.md](./FLOWTYPE.md) for details.

## Pull Requests

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally ("Fix #17")


## Styleguides

Please refer to [STYLE_GUIDES.md](./STYLE_GUIDES.md).

