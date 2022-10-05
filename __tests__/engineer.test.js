import Engineer from "../lib/engineer";

test('get name test', () => {
    const testing = 'john';
    const testrun = new Engineer (testing, 1, 'smith@gmail.com', 'userName1')

    expect(testrun.name).toBe(testing)
});


test('get id test', () => {
    const testing = 1;
    const testrun = new Engineer ('john', testing, 'smith@gmail.com','userName1')

    expect(testrun.id).toBe(testing)
});

test('get email test', () => {
    const testing = 'smith@gmail.com';
    const testrun = new Engineer ('john', 1, testing, 'userName1')

    expect(testrun.email).toBe(testing)
});

test('get username test', () => {
    const testing = 'username';
    const testrun = new Engineer ('john', 1, 'smith@gmail.com', testing)

    expect(testrun.gitusername).toBe(testing)
});
