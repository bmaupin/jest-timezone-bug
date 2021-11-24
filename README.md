Jest does not seem to properly handle `process.env.TZ`: [Setting process.env.TZ does not affect Dates](https://github.com/facebook/jest/issues/9856)

To reproduce:

1. Install dependencies

   ```
   npm ci
   ```

1. Run the tests; this demonstrates the bug

   ```
   npm test
   ```

1. Run the tests with `TZ=UTC`; the `TZ=EST` test will fail

   ```
   TZ=UTC npm test
   ```

1. Run the tests with `TZ=EST`; the `TZ=UTC` test will fail

   ```
   TZ=EST npm test
   ```

#### Workarounds

- The `TZ` environment variable can be overridden directly in `jest.config.js` ([https://stackoverflow.com/a/58238786/399105](https://stackoverflow.com/a/58238786/399105))
- Use Jest's [`setupFiles`](https://jestjs.io/docs/tutorial-react-native#setupfiles) configuration option to point to a setup file that sets `TZ` ([https://stackoverflow.com/a/58953365/399105](https://stackoverflow.com/a/58953365/399105))
- Hardcode `TZ` in any scripts in `package.json` that call Jest, e.g.

  ```json
  "scripts": {
    "test": "TZ=UTC jest",
  ```
