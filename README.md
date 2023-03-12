# usdtweak-docs

This repo is used for generating static files for usdtweak website

### Installation

#### Requirements

- Node JS : docusaurus requires at least v16

#### Steps

```
git clone https://github.com/cpichard/usdtweak-docs.git
cd usdtweak-docs
npm install
```

### Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Changes are reflected live without having to restart the server.

### Local Build

You can use this command to test a build locally

```
npm run serve -- --build --port 80 --host 0.0.0.0
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### More

You can learn more about how to edit, add doc, blog pages at
https://docusaurus.io/docs/category/guides
