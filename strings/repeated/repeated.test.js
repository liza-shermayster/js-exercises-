const repeated = require('./repeated');

test('', () => {
    const data = [{}]
    const expected = [{ startTime: 0, endTime: 3 }];
    expect(repeated(data)).
    (expected)
})