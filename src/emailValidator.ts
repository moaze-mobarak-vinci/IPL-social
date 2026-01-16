export function validateEmail(email: string): boolean {
    // Règle a : Il doit contenir au moins un @
    if (!email.includes('@')) {
        return false;
    }
    return true;
}