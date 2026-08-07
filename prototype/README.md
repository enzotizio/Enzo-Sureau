# Prototype — boucle de base

Prototype web (HTML/CSS/JS, sans dépendance) qui valide la boucle de jeu minimale décrite
dans `docs/spec.md` (section 10) : un personnage qui grossit visuellement par paliers,
alimenté par un mini-jeu tap/rythme.

## Lancer le prototype

Aucune installation nécessaire, un simple serveur statique suffit :

```bash
cd prototype
python3 -m http.server 8080
```

Puis ouvrir `http://localhost:8080` (idéalement dans les devtools en mode mobile,
le jeu est pensé en format vertical).

## Ce que le prototype démontre

- **Mini-jeu tap/rythme** : un anneau pulse en boucle, taper au bon moment ("PARFAIT" / "Bien" / "Raté")
  donne plus ou moins d'XP.
- **Croissance par paliers** : le personnage grandit visuellement à chaque niveau (croissance continue)
  et change nettement d'apparence (carrure, définition musculaire, aura, effets) à chaque changement
  de palier/salle — pas juste un chiffre qui monte.
- **Déblocage de salles** : les seuils de niveau (20 / 40 / 70 / 100) reprennent le tableau de la
  section 4 du spec et déclenchent un toast "Salle débloquée".
- **Persistance locale** : la progression est sauvegardée dans `localStorage` pour retrouver son
  personnage à la prochaine ouverture (comme décrit en section 3, étape 1).

## Ce qui n'est volontairement pas dans ce prototype

Conformément à la section 10 du spec ("premier prototype minimal à valider : boucle de base
avant d'ajouter salles/cosmétiques/pass"), ce prototype ne couvre pas :

- Les décors de salle réels, la personnalisation par zones, les défis quotidiens/hebdo,
  le pass de progression, ni l'intégration Zokau.
- Le partage natif (clip/GIF automatique).

L'art du personnage est généré proceduralement en SVG (formes simples) — un vrai travail
de direction artistique reste à faire une fois la boucle validée.

## Courbe d'XP

`xpToNext(level) = 70 + level * 13` — volontairement linéaire plutôt qu'exponentielle
pour rester atteignable sur plusieurs paliers en session de test ; à retravailler avec
l'équipe pour l'équilibrage final (rythme de progression cible, poids des défis/pass dans l'XP).
