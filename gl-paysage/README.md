# GL Paysage — site vitrine

Site vitrine pour GL Paysage, entreprise de paysagisme (entreprise individuelle)
intervenant en Aube (10), Yonne (89) et Seine-et-Marne (77).

Le cahier des charges complet et sa version simplifiée sont dans `docs/`.

## État d'avancement — Couche 1 (terminée)

Structure & contenu statique, design, responsive :

- Accueil, Services, À propos, Contact — contenu complet
- Réalisations, Avis clients, Devis — pages stub ("bientôt disponible"),
  en attendant les Couches 2 à 4
- Mentions légales, Confidentialité — trame avec champs `à compléter`
- Header/nav responsive (menu mobile), footer, CTA "Demander un devis" partout
- Métadonnées SEO de base + JSON-LD `LocalBusiness` dans `src/app/layout.tsx`

**Non fait volontairement** (couches suivantes du cahier des charges, à valider
avant de démarrer) :

- Couche 2 — formulaire de devis multi-étapes, upload photos, emails Brevo
- Couche 3 — Supabase (DB, auth admin, storage), espace admin de suivi des devis
- Couche 4 — galerie réalisations filtrable, blog, contenu SEO local avancé
- Couche 5 — prise de RDV en ligne, avis clients automatisés

## À compléter avant mise en ligne

Toutes les valeurs ci-dessous sont centralisées dans `src/lib/site-config.ts` —
c'est le seul fichier à modifier pour les mettre à jour partout sur le site :

- `phone` / `phoneHref` — vrai numéro de téléphone
- `email` — vraie adresse email
- `url` — nom de domaine définitif (à reporter aussi dans `metadataBase`)

Et directement dans les pages légales (`src/app/mentions-legales`,
`src/app/confidentialite`) :

- SIRET, adresse du siège, directeur de publication
- Détails assurance RC pro / garantie décennale (`src/app/a-propos`)

## Stack

Next.js 16 (App Router) + Tailwind CSS v4, TypeScript. Conforme à la stack
recommandée dans `docs/specs-site-paysagisme.md` (§5) pour les couches suivantes :
Supabase (DB/Auth/Storage), Brevo (emails), Vercel (déploiement), Google Places
(autocomplétion d'adresse).

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```
