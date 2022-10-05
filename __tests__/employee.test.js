import Employee from "../lib/employee";

test('get name test', () => {
    const testing = 'john';
    const testrun = new Employee (testing, 1, 'smith@gmail.com')

    expect(testrun.name).toBe(testing)
});


test('get id test', () => {
    const testing = 1;
    const testrun = new Employee ('john', testing, 'smith@gmail.com')

    expect(testrun.id).toBe(testing)
});

test('get email test', () => {
    const testing = 'smith@gmail.com';
    const testrun = new Employee ('john', 1, testing)

    expect(testrun.email).toBe(testing)
});
