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

<TooltipComponent content="Some useful content" hoverOpenDelay={1000}>
  Hover here
</TooltipComponent>
```

## Links

- [Home page](https://www.appsmith.com)
