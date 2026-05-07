# Code React Router Boilerplate

This is a React Router project using the latest version of React Router and React (and we like to keep it up to date as often as possible).

## At a glance

This boilerplate contains:

- [React](https://react.dev/) for building the UI
- [React Router](https://reactrouter.com/home) for routing
- [CSS Modules](https://github.com/css-modules/css-modules) for styling
- [Vitest](https://vitest.dev/) for testing
- [Storybook](https://storybook.js.org/) for component development and documentation
- [Hygen](https://github.com/jondot/hygen) for generating new components
- [TypeScript](https://www.typescriptlang.org/) by default. Everything is typed!

## Mocks

- Each component has a mock file for mocking data in Stories and tests.
- This is usually the mapped data from a CMS, but can also be used for any other data that the component needs to work.
- This means that we can easily test components in isolation without needing to worry about where the data is coming from, and we can also easily update the mock data to test different scenarios.

## Styling

- CSS modules
    - Each component has a designated CSS file
    - Stylelint & Prettier are both set up
    - We use logical properties by default. You will get errors if you don't, but these should be flagged in your editor
- Design tokens (optional - not currently setup in this project)
    - Easy to switch between themes

## Linting

- eslint
- Stylelint
    - We use logical properties (block-size instead of height, etc)
- pre-commit hook will sort out a lot of linting issues on commit
    - Can add editor plugins to check these as you go
- Prettier for all formatting on top of this
- Use commitlint for standardised commit messages
    - This also applies to PRs

## Testing

- Tests use Vitest and run every component through axe to test for accessibility issues.
- Tests should be behaviour-driven, not visual:
    - we don't test if something shows. We have eyes.
    - if a component requires a specific user behaviour to work, then test that that works
- Accessibility tests can also be run through Storybook, as we are using their new a11y plugin.
    - It is highly recommended to use this as you build your components to check for accessibility issues as you go, rather than waiting until the end and then having a long list of issues to fix.
    - The project also has axe devtools setup in the browser, which is a great way to check for accessibility issues as you go (by checking the browser console for any issues that are flagged by axe).

## Commit hooks

- We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages: `feat: H-123 - this is what you have done`
- The pre-commit hook will also run linting and testing of any new work (using `lint-staged`)
- You cannot commit code that won't pass either linting or unit testing
- You also cannot commit if your commit message isn't in the right format

## Creating a new component

- We use Hygen to generate templates for a new component.
- This can be run with `npm run new:c`.
- Templates can be tweaked (using the `generators` folder in the project) but the ones we have are really good for what we do now. Camel-case is used to name components and we don't use `index` naming inside components. Everything is a named file (based on the component) to make things simpler and easier to scan.

## Routing

- The [File Routing Conventions](https://reactrouter.com/how-to/file-route-conventions) are used for routing in this project.
- This means that the file structure of the `app/routes` folder determines the routing of the application.
- This is a great way to keep routing simple and easy to understand, as you can easily see the structure of the application just by looking at the file structure.

## PRs

- Be as descriptive as possible
    - There is a PR template in this project that prompts you to add certain information, but the more information you can add the better.
    - This is especially important if you're doing a large amount of work, as it can be difficult for someone else to understand what you've done without a detailed description.
- Use the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) structure for PR titles
    - E.g. `feat: R-123 - this is what you have done`
    - This makes it easier to understand what the PR is about at a glance, and also helps with generating release notes later on (if required).
- Add a video or screenshots if it makes sense to do so
