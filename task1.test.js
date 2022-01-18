const stringLength = require('./task1');

test('hello length', () => {
    expect(stringLength('hello')).toBe(5);
});

test('expression length', () => {
    expect(stringLength('expression')).toBe(10);
});

test('Empty string', () => {
    expect(stringLength('')).toBe('String is empty or the length is greater than 10 characters');
});

test('GoodMorning length', () => {
    expect(stringLength('GoodMorning')).toBe('String is empty or the length is greater than 10 characters');
});