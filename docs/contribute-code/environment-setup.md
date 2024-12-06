---
sidebar_label: Environment Setup Guide
---

# Setting Up Your Development Environment

For contributing to the KUBI DAO or DAO Docs projects, you'll need to install several tools and understand the role of package managers used in our projects.

## Required Tools

### Node.js, version 18.0 or above

- A JavaScript runtime built on Chrome's V8 JavaScript engine. It is used to run JavaScript on the server side.
- **Check Installation**: Run `node -v` in your terminal. If it returns a version number, Node.js is installed.
- **Installation**:
  - **Windows**:
    1. Download the Windows installer from the [Node.js website](https://nodejs.org/).
    2. Run the installer; this will install both Node.js and npm.
    3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and ensure that "npm package manager" is included as a package to install).
  - **Mac**:
    1. Install Homebrew by running `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"` in the terminal.
    2. After installing Homebrew, install Node.js by running `brew install node`.

### Git

- Distributed version control system to handle everything from small to very large projects with speed and efficiency.
- **Check Installation**: Run `git --version` in your terminal. If it returns a version number, Git is installed.
- **Installation**:
  - **Windows**:
    1. Download and install from [Git's website](https://git-scm.com/download/win).
    2. Follow the installation instructions to complete the setup.
  - **Mac**:
    1. Install via Homebrew by running `brew install git` in the terminal.

## Package Managers

A package manager is a tool that automates the process of installing, upgrading, configuring, and managing dependencies (libraries or packages) in a consistent manner.

For `dao-docs`, ensure to use npm as specified in the project's README. For `KUBI-DAO`, Yarn is preferred. Always ensure you follow the project's guidelines on which package manager to use.

- **Why Use Different Package Managers?**: Different projects may use different package managers based on specific features, such as speed, reliability, or compatibility with certain ecosystems.
- **Why Not Mix Them?**: Mixing package managers in a single project can lead to dependency conflicts and unpredictable behavior, as each manager has its own way of installing and managing the packages and their versions. For example, using both npm and Yarn in the same project can result in discrepancies in the dependency tree, leading to errors and inconsistencies.

### npm

- A package manager for JavaScript, used to install and manage project dependencies.
- **Check Installation**: Run `npm -v` in your terminal. If it returns a version number, npm is installed.
- **Note**: npm is typically installed with Node.js.

### Yarn

- Fast, reliable, and secure dependency management.
- **Check Installation**: Run `yarn --version` in your terminal. If it returns a version number, Yarn is installed.
- **Installation**:
  - **Windows & Mac**:
    1. After installing npm, run `npm install --global yarn` to install Yarn globally.
