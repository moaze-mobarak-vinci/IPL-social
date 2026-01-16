import { validateEmail } from '../emailValidator';

test('doit rejeter une adresse sans @', () => {
    expect(validateEmail('testatdomain.com')).toBe(false);
});