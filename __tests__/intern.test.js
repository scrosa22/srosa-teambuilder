import Intern from "../lib/intern";

test('get name test', () => {
    const testing = 'john';
    const testrun = new Intern (testing, 1, 'smith@gmail.com', 'userName1')

    expect(testrun.name).toBe(testing)
});


test('get id test', () => {
    const testing = 1;
    const testrun = new Intern ('john', testing, 'smith@gmail.com','userName1')

    expect(testrun.id).toBe(testing)
});

test('get email test', () => {
    const testing = 'smith@gmail.com';
    const testrun = new Intern ('john', 1, testing, 'userName1')

    expect(testrun.email).toBe(testing)
});

test('get school test', () => {
    const testing = 'school';
    const testrun = new Intern ('john', 1, 'smith@gmail.com', testing)

    expect(testrun.school).toBe(testing)
});
