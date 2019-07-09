const multiplyTable = require('../MultiplyTable');

it ('should return false when invoke isValid start is 3 end is 1', () => {
    //given
    const start=3;
    const end=2;
    //when
    //then
    expect(multiplyTable.isValid(start, end)).toBe(false);
});

it ('should return 3*3=9\r3*4=12\t4*4=16\r when invoke createReport start is 3 end is 4', () => {
    //given
    const start=3;
    const end=3;
    //when
    //then
    expect(multiplyTable.createReport(start, end)).toBe("3*3=9\r3*4=12\t4*4=16\r");
});