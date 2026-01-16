export function validateEmail(email: string): boolean {
  // Règle c : Aucun espace
  if (email.includes(' ')) return false;

  // Règle a : Présence du @
  if (!email.includes('@')) return false;

  const parts = email.split('@');
  const localPart = parts[0];
  const domainPart = parts[parts.length - 1];

  // Règle d : Texte avant et après le @
  if (localPart.length === 0 || domainPart.length === 0) return false;

  // Règle b : Point dans le domaine, pas à la fin, et pas juste après le @
  // (Le cas "test@.com" est géré ici car domainPart commence par un point)
  if (
    !domainPart.includes('.') ||
    domainPart.endsWith('.') ||
    domainPart.startsWith('.')
  ) {
    return false;
  }

  return true;

  //Final check
}
