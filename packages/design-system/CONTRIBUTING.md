
Refer to [the README](https://github.com/appsmithorg/design-system/blob/main/packages/design-system/README.md#contribute) for a guide on how to get started with contributing.

## Using yalc

When you make a change in the design system, you will want to ensure that the component works as expected in the app you are using it for. To emulate working with published packages locally, we use [yalc](https://www.npmjs.com/package/yalc).

### Installation

Run 
```shell
yarn global add yalc
```

### In this repository 

We need to "publish" our package.
1. Make sure the package builds by running `yarn build`
2. Make sure the functionality works as expected in the playground by running `yarn storybook` and then testing your component out in the relevant story
3. If you are writing a new component, write a story for it taking another story from this repository as reference. You could also refer to [the official docs](https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories).
4. When you've done all of this, run `yalc publish`. It will output the package name and number.

### In the other repository

1. Run `yalc add design-system` in the appsmith repository.
2. This will create changes in your `package.lock` file. Run `yarn` to get the new package version from `yalc`.
3. This will create changes in your `yarn.lock` file, which is what we want.

Now you can test your app while including the changes made in this package. Go ahead and run your local development environment, or some cypress tests. 


## Contribution Guidelines: Code Style

1. Destructure props where possible: https://github.com/appsmithorg/design-system/pull/109
2. 

