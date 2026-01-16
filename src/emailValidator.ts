export function validateEmail(email: string): boolean {
    // Règle a : Il doit contenir au moins un @
    if (!email.includes('@')) return false;

    const parts = email.split('@');
    // On récupère la partie après le dernier @ (au cas où il y en aurait plusieurs)
    const domain = parts[parts.length - 1];

    // Règle b : au moins un point dans le domaine et pas à la fin
    if (!domain.includes('.') || domain.endsWith('.')) {
        return false;
    }

    return true;
}