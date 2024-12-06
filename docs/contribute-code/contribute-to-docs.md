---
sidebar_position: 1
sidebar_label: Contribute to the Docs
---

# Contribute to the Docs

If you see errors with these docs or want to create new articles, here are the instructions for contributing to this documentation. This is also a great way to learn basic development skills and get started making open-source contributions.

## 2 Ways to Get Started

### **1. Join the DAO and Claim Tasks** (No coding required)

- Once you're set up in the DAO, you can find open issues on the [DAO Docs](https://dao.kublockchain.com/tasks/?projectId=DAO%20Docs-0xf4efc952759fa6b4bc5aafe8150f373feb9df208) project. There are sometimes also easy docs bounties on the [Getting Started](https://dao.kublockchain.com/tasks/?projectId=Getting%20Started-0xf4efc952759fa6b4bc5aafe8150f373feb9df208) project.
- Claim the task or move it into the In Progress column. Remember that every action is an on-chain transaction, so you'll have to sign a transaction for claiming it.
- Follow the instructions in the task to write the article, section, or page requested. Write the content yourself, but you can use AI to convert it into markdown, if you'd prefer.
- Submit a link to the markdown file in the DAO task submission field.
- Once an exec verifies the submission as valid, you will receive the bounty.

### 2. Contribute Directly to the KUBI Repo

- Email ku.blockchain.institute@gmail.com to request access to be added to the KUBI Github Organization.
  -- Alternatively, you can fork the repo into your own Github account. [Here is an article](https://daily.dev/blog/how-to-contribute-to-open-source-github-repositories#:~:text=The%20first%20step%20is%20to,to%20your%20own%20GitHub%20account.) on how to contribute this way.
- Once you're a part of the KUBI Organization, you can clone the repo, make a new branch, and start developing directly. The instructions for this are below.

# Getting Started with Direct Development

### 1. Check that you have all requirements

You will need Node.js version 18.0 or above, git, and npm installed on your machine. If you don't have these or aren't sure, read the [environment setup guide](/environment-setup.md).

### 2. Clone the repository

- Navigate to a local directory where you want to store the project locally (ex: `cd Desktop`)
- Run `git clone https://github.com/KU-Blockchain/DAO-Docs.git && cd DAO-Docs` to clone the repo and navigate into it.

### 3. Create a new branch and make changes

- After navigating into the project directory, create a new branch for your changes:
  `git checkout -b <your-name>-<what-youre-changing>` (ex: emma-nasseri-fixing-homepage-typo)
- Try to make your branch name brief but clear.

- Run `npm install` to install all project dependencies.
- Run `npm run start` to start running the site and navigate to http://localhost:3000/ if it doesn't automatically start.

### 4. Commit to Git

- Committing in Git captures a snapshot of the project's currently staged changes. This allows you to record the history of your project and revert back to this state if needed.
- **Steps**:
  1. After making your changes, use `git status` to see which files have been altered. This command will list both staged and unstaged changes.
  2. To add changes to your next commit, run `git add <file-name>` for specific files or `git add .` to add all current changes to the staging area.
  3. Once all desired changes are staged, run `git commit -m "Your descriptive commit message"` to create your commit. Make sure your message is clear and describes what changes were made and why.
  4. To push your commit to the remote repository, run `git push origin <your-branch-name>`. This updates the repository with your changes and prepares it for integration with the main project.

### 5. Create a Pull Request

- A pull request lets you tell others about changes you've pushed to a branch in a GitHub repository. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before the changes are merged into the base branch.

- **Steps**:
  1. Navigate to the repository on GitHub where your project is hosted.
  2. You'll typically see a "Compare & pull request" button appear on GitHub shortly after you push changes to your repo. Click this button.
  3. On the "Open a pull request" page, ensure that the base branch (the one you want your changes pulled into) and compare branch (the one where your changes are) are correct.
  4. Enter a title and description for your pull request. Explain what your changes do and why they should be merged.
  5. If necessary, you can choose who to review your pull request by selecting reviewers on the right-hand side.
  6. Click the "Create pull request" button to submit the pull request.

By following these steps, you can effectively manage changes and collaborate using Git and GitHub, ensuring that your contributions are carefully reviewed and added to the project.

## Technologies Used

These docs are built with [Docusaurus](https://docusaurus.io/), which means we are building with Javascript, React, and Markdown.

## Project Structure

Here is the general project structure and an explanation of key files.

```
KUBI-DAO-docs
├── blog
│ ├── 2024-12-5-example-blog.md
├── docs
│ ├── doc1.md
│ ├── doc2.md
│ ├── doc3.md
│ └── mdx.md
├── src
│ ├── css
│ │ └── custom.css
│ └── pages
│ ├── styles.module.css
│ └── index.js
├── static
│ └── img
├── .gitignore
├── docusaurus.config.js
├── package-lock.json
├── package.json
├── README.md
└── sidebars.js
```

- **`/blog/`**

  - Contains the blog Markdown files. You can delete the directory if you've disabled the blog plugin, or you can change its name after setting the path option. More details can be found in the blog guide.

- **`/docs/`**

  - Contains the Markdown files for the docs. Customize the order of the docs sidebar in `sidebars.js`. You can delete the directory if you've disabled the docs plugin, or you can change its name after setting the path option. More details can be found in the docs guide.

- **`/src/`**

  - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files here, but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing.

- **`/src/pages`**

  - Any JSX/TSX/MDX file within this directory will be converted into a website page.

- **`/static/`**

  - Static directory. Any contents inside here will be copied into the root of the final build directory.

- **`/docusaurus.config.js`**

  - A config file containing the site configuration. This is the equivalent of `siteConfig.js` in Docusaurus v1.

- **`/package.json`**

  - holds metadata relevant to the project and it lists the packages that the project depends on. It specifies the versions of a package that the project can use using semantic versioning rules.

- **`/package-lock.json`**

  - Automatically generated for any operations where npm modifies either the node_modules tree or package.json. It captures the exact version of each installed package that should be used, along with the version of its dependencies, ensuring consistency across installations.

- **`/sidebars.js`**
  - Used by the documentation to specify the order of documents in the

```

```
