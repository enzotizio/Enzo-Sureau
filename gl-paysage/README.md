# GL Paysage — site vitrine

Site vitrine pour GL Paysage, entreprise de paysagisme (entreprise individuelle)
intervenant en Aube (10), Yonne (89) et Seine-et-Marne (77).

Le cahier des charges complet et sa version simplifiée sont dans `docs/`.

## État d'avancement

### Couche 1 (terminée) — Structure & contenu statique, design, responsive

- Accueil, Services, À propos, Contact — contenu complet
- Réalisations, Avis clients — pages stub ("bientôt disponible"), en attendant
  la Couche 4
- Mentions légales, Confidentialité — trame avec champs `à compléter`
- Header/nav responsive (menu mobile), footer, CTA "Demander un devis" partout
- Métadonnées SEO de base + JSON-LD `LocalBusiness` dans `src/app/layout.tsx`

### Couche 2 (terminée) — Formulaire de devis

- Formulaire en 5 étapes (`src/components/devis/`) : prestations, chantier
  (surface, adresse avec autocomplétion Google Places optionnelle, état du
  terrain, description), photos, budget/délai, coordonnées + case RGPD
- Validation par étape et globale avec Zod (`src/lib/devis-schema.ts`)
- Compression des photos côté client avant envoi (`src/lib/compress-image.ts`)
- Honeypot anti-spam (champ caché, faux succès silencieux si rempli)
- Route API `POST /api/devis` (`src/app/api/devis/route.ts`) : revalide les
  données côté serveur, puis envoie un email de confirmation au client et un
  email de notification (avec photos en pièces jointes) à l'entreprise, via
  l'API Brevo (`src/lib/send-devis-emails.ts`)
- En cas d'échec d'envoi (ex : `BREVO_API_KEY` non configurée), le formulaire
  affiche un message clair avec le téléphone de secours plutôt que d'échouer
  silencieusement

**Non fait volontairement** (couches suivantes, à valider avant de démarrer) :

- Couche 3 — Supabase (DB, auth admin, storage), espace admin de suivi des
  devis ; pour l'instant, les demandes ne sont **pas** enregistrées en base,
  seulement transmises par email
- Couche 4 — galerie réalisations filtrable, blog, contenu SEO local avancé
- Couche 5 — prise de RDV en ligne, avis clients automatisés

## Configuration requise pour le formulaire de devis

Voir `.env.example`. Sans ces variables, le formulaire reste pleinement
utilisable (validation, compression photo) mais l'envoi final échoue avec un
message invitant à appeler directement :

- `BREVO_API_KEY`, `BREVO_SENDER_EMAIL`, `BREVO_SENDER_NAME` — envoi des
  emails de confirmation/notification
- `DEVIS_NOTIFICATION_EMAIL` — adresse qui reçoit les nouvelles demandes
  (par défaut `siteConfig.email`)
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — autocomplétion d'adresse (optionnel,
  champ texte simple sinon)

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
