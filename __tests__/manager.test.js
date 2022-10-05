import Manager from "../lib/manager";


test('get manager test', () => {
    const testing = 10;
    const testrun = new Manager ('john', 1, 'smith@gmail.com', testing)

    expect(testrun.officeNumber).toBe(testing)
});

test('get role test', () => {
    const testing = 'manager';
    const testrun = new Manager ('john', 1, 'smith@gmail.com', testing)

    expect(testrun.getRole()).toBe(testing)
});