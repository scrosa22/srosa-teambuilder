const Manager = require('../lib/Manager');

test('get manager test', () => {
    const testing = 10;
    const manager = new Manager ('john', 1, 'smith@gmail.com', testing)

    expect(manager.officeNumber).toBe(testing)
})

test('get role test', () => {
    const testing = 'manager';
    const manager = new Manager ('john', 1, 'smith@gmail.com', testing)

    expect(manager.getRole()).toBe(testing)
})