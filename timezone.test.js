test('Test explicit UTC dates', () => {
  // This will always be 2028-11-05T00:00:00.000Z regardless of the timezone
  expect(new Date('2028-11-05T00:00:00.000Z').toISOString()).toEqual(
    '2028-11-05T00:00:00.000Z'
  );

  // Another way of doing the same thing
  expect(
    new Date(new Date(2028, 10, 5).setUTCHours(0, 0, 0, 0)).toISOString()
  ).toEqual('2028-11-05T00:00:00.000Z');
});

test('Test TZ=EST', () => {
  // This is always be UTC - 5, regardless of daylight saving time
  process.env.TZ = 'EST';
  expect(process.env.TZ).toBe('EST');

  // This _should_ create a date with his day and a time of midnight EST (as set in process.env.TZ above)
  // Instead, it appears to use the value of TZ that's set before node is run, so it fails unless TZ is set to EST before node is run, e.g. `TZ=EST npm test`
  expect(new Date(2028, 10, 5).toISOString()).toEqual(
    '2028-11-05T05:00:00.000Z'
  );
});

test('Test TZ=UTC', () => {
  process.env.TZ = 'UTC';
  expect(process.env.TZ).toBe('UTC');

  // This _should_ create a date with his day and a time of midnight UTC (as set in process.env.TZ above)
  // Instead, it appears to use the value of TZ that's set before node is run, so it fails unless TZ is set to UTC before node is run, e.g. `TZ=UTC npm test`
  expect(new Date(2028, 10, 5).toISOString()).toEqual(
    '2028-11-05T00:00:00.000Z'
  );
});
