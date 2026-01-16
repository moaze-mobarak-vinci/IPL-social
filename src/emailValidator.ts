export function validateEmail(email: string): boolean {
    // Règle c : Il ne peut contenir aucun espace
    if (email.includes(' ')) return false;

    // Règle a : Il doit contenir au moins un @
    if (!email.includes('@')) return false;

    const parts = email.split('@');
    const domain = parts[parts.length - 1];

    // Règle b : au moins un point dans le domaine et pas à la fin
    if (!domain.includes('.') || domain.endsWith('.')) {
        return false;
    }

    return true;
}