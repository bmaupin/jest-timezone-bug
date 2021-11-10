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
