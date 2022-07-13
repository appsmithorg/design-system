<p align="center">
  <a href="http://appsmith.com">
    <img width="110px" style="margin-right: 20px" src="https://global-uploads.webflow.com/61531b23c347e4fbd4a84209/61531b23c347e41e24a8423e_Logo.svg">
  </a>
</p>

<h1 align="center">Appsmith Design System</h1>

<div align="center">

UI Design system of Appsmith

[![npm package](https://img.shields.io/npm/v/@appsmithorg/design-system.svg?style=flat-square)](https://www.npmjs.org/package/@appsmithorg/design-system)

</div>

[![](https://github.com/appsmithorg/appsmith/raw/release/static/git-banner-new.png)](https://appsmith.com)




## Install

```bash
npm install @appsmith/design-system
```
or
```bash
yarn add @appsmithorg/design-system
```

## Including CSS

Add css import in the root index css file
```bash
@import "~@appsmithorg/design-system/build/css/design-system.css";
```

## Usage

```jsx
import { TooltipComponent } from "@appsmithorg/design-system";

<TooltipComponent content="Some useful content 🤷🏽‍♂️">
  Hover here 😁
</TooltipComponent>
```

## Contribute

```bash
git clone https://github.com/appsmithorg/design-system.git
```
Get all dependencies with
```bash 
cd design-system/packages/design-system
yarn install
```

Then run storybook in development and watch mode with
```bash
yarn design-system:storybook
```

Any stories you write within `design-system/packages/design-system/src/**` will show up here. 

To use your local version of the package, run 
```bash
yarn link
```
in this repository, then copy instruction it outputs into the root directory of the repository you want to use this package in. 
Run
```bash
yarn install 
```
again to be able to import the components using 

```jsx
import { TooltipComponent } from "@appsmithorg/design-system";
```

Happy playground testing!


## Links

- [Home page](https://www.appsmith.com)
