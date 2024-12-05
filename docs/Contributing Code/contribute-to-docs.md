---
sidebar_position: 1
sidebar_label: Contribute to the Docs
---

# Contribute to the Docs

# Project Structure

Assuming you chose the classic template and named your site `my-website`, you will see the following files generated under a new directory `my-website/`:

KUBI-DAO-docs
├── blog
│ ├── 2019-05-28-hola.md
│ ├── 2019-05-29-hello-world.md
│ └── 2020-05-30-welcome.md
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

## Project Structure Rundown

- **`/blog/`**

  - Contains the blog Markdown files. You can delete the directory if you've disabled the blog plugin, or you can change its name after setting the path option. More details can be found in the blog guide.

- **`/docs/`**

  - Contains the Markdown files for the docs. Customize the order of the docs sidebar in `sidebars.js`. You can delete the directory if you've disabled the docs plugin, or you can change its name after setting the path option. More details can be found in the docs guide.

- **`/src/`**

  - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files here, but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing.

- **`/src/pages`**

  - Any JSX/TSX/MDX file within this directory will be converted into a website page. More details can be found in the pages guide.

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
