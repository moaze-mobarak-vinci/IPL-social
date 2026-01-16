import { validateEmail } from '../emailValidator';

test('doit rejeter une adresse sans @', () => {
    expect(validateEmail('testatdomain.com')).toBe(false);
});

test('doit rejeter une adresse sans point dans le domaine ou avec un point à la fin', () => {
    expect(validateEmail('test@domain')).toBe(false);
    expect(validateEmail('test@domain.')).toBe(false);
});

test('doit rejeter une adresse contenant des espaces', () => {
    expect(validateEmail('test @domain.com')).toBe(false);
    expect(validateEmail('test@dom ain.com')).toBe(false);
});
