# Examen IPL Social - Email Validator (TDD)

**Étudiant :**
* **Nom :** MOBARAK
* **Prénom :** MOAZE
* **Email :** moaze.mobarak@student.vinci.be

**Dépôt GitHub :** https://github.com/moaze-mobarak-vinci/IPL-social

---

## Description du projet
Ce projet consiste en l'implémentation d'un validateur d'adresse email en suivant une méthodologie de **Test-Driven Development (TDD)**.

### Fonctionnalités implémentées :
Le validateur vérifie les critères suivants :
1. Présence obligatoire du caractère `@`.
2. Interdiction des espaces.
3. Présence de texte avant et après le symbole `@`.
4. Présence d'au moins un point dans le nom de domaine.
5. Le point ne peut pas être le dernier caractère de l'email.

### Stack technique :
* **Langage :** TypeScript
* **Tests :** Jest
* **CI/CD :** GitHub Actions (Vérification automatisée des tests à chaque push)

## Comment lancer les tests
1. Installer les dépendances : `npm install`
2. Lancer les tests : `npm test`