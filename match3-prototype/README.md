# Prototype — moteur Match-3

Prototype web (HTML/CSS/JS + Canvas, sans dépendance) qui isole le **moteur de puzzle Match-3**
d'un futur jeu de rénovation de salle de sport (type Homescapes). L'objectif est de valider que
le gameplay de base est fun avant tout habillage (rénovation, salle, clients, réputation...).

Ce prototype est volontairement séparé de `prototype/` (boucle tap/rythme de progression du
personnage) : c'est un concept différent, testé isolément.

## Lancer le prototype

Aucune installation nécessaire, un simple serveur statique suffit :

```bash
cd match3-prototype
python3 -m http.server 8081
```

Puis ouvrir `http://localhost:8081`.

## Ce que le prototype démontre

- **Grille 8x8** (`GRID_SIZE`, ajustable en tête de script) remplie aléatoirement au départ,
  sans alignement de 3+ déjà formé.
- **6 symboles** en emojis (🏋️ haltère, 🥤 gourde, 👟 chaussure, 🧤 gant, 🪢 corde à sauter,
  🎽 débardeur) — pas d'assets graphiques poussés à ce stade.
- **Échange de deux cases adjacentes** au clic (sélectionner une case puis une case adjacente)
  ou au swipe (glisser dans une direction).
- **Détection d'alignement** (3+ horizontal ou vertical), **élimination**, **gravité** (chute des
  cases restantes) et **remplissage** par le haut.
- **Cascades** : une chute qui recrée un alignement est détectée et résolue automatiquement,
  en boucle, jusqu'à stabilisation du plateau.
- **Annulation** de l'échange si aucun alignement n'est créé.
- **Anti-blocage** : si le plateau n'a plus aucun coup jouable, il est rebrassé automatiquement
  (le rebrassage garantit aussi l'absence d'alignement déjà formé).
- **Contrainte de niveau** : 20 mouvements (`MAX_MOVES`), objectif "collecter 15 🏋️"
  (`TARGET_SYMBOL_INDEX` / `TARGET_COUNT`), affichage des mouvements restants, du score et
  de la progression vers l'objectif.
- **Écrans de victoire/défaite** selon que l'objectif est atteint avant épuisement des
  mouvements, avec bouton "Rejouer".

## Ce qui n'est volontairement pas dans ce prototype

Conformément au scope strict de la Phase 1 :

- Pas de rénovation, pas de salle, pas de clients, pas de réputation.
- Pas de système de vies.
- Pas de boosters spéciaux (explosion, éclair, etc.) — juste le Match-3 basique.
- Pas de monétisation.
- Pas d'assets graphiques poussés — les emojis suffisent pour valider le gameplay.

## Pistes pour la suite (hors scope Phase 1)

- Boosters (case spéciale sur alignement de 4/5, combinaisons de boosters).
- Réglages de difficulté (nombre de symboles, taille de grille, nombre de mouvements) exposés
  en UI plutôt qu'en constantes.
- Sons/retours haptiques sur les matches et cascades.
- Habillage visuel (thème salle de sport) une fois la boucle de puzzle validée comme fun.
