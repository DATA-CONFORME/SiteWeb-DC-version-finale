# Déploiement

> **Note importante** : le formulaire de contact nécessite désormais un serveur Node pour envoyer les emails via Brevo SMTP. Le site ne peut donc plus être déployé sur GitHub Pages seul si vous souhaitez que le formulaire fonctionne en production. Consultez la section [Hébergement avec le formulaire actif](#hébergement-avec-le-formulaire-actif) ci-dessous.

## Développement local

### 1. Configurer l'environnement

```bash
cp .env.exemple .env
# Remplir les valeurs SMTP dans .env
```

### 2. Lancer le serveur Node (API contact) dans un terminal

```bash
npm run server:dev
# Écoute sur http://localhost:3001 par défaut
# Redémarre automatiquement à chaque changement grâce à --watch
```

### 3. Lancer le front Vite dans un autre terminal

```bash
npm run dev
# Les appels /api/* sont automatiquement proxifiés vers le serveur Node
```

---

## Déploiement Docker sur VPS (recommandé)

L'application est entièrement dockerisée avec deux conteneurs :

| Conteneur | Rôle | Réseaux |
|---|---|---|
| `dataconforme-front` | nginx — sert le SPA React et proxyfie `/api/*` vers l'API | `testapp` (Caddy) + `internal` |
| `dataconforme-api` | Node.js — `POST /api/contact`, envoi SMTP Brevo | `internal` uniquement |

### Architecture réseau

```
Internet → Caddy (réseau testapp) → dataconforme-front (nginx)
                                              ↓ réseau internal
                                    dataconforme-api (Node)
                                              ↓ SMTP
                                       Brevo (externe)
```

### 1. Prérequis sur le VPS

```bash
# Le réseau testapp doit exister (créé une seule fois, partagé avec Caddy)
docker network create testapp
```

### 2. Copier les fichiers sur le VPS

Cloner ou copier le repo sur le VPS, puis :

```bash
cp .env.exemple .env
# Remplir SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL dans .env
```

### 3. Lancer l'application

```bash
docker compose up -d --build
```

### 4. Configurer Caddy

Dans votre `Caddyfile`, pointer vers le conteneur `dataconforme-front` :

```caddy
dataconforme.com {
    reverse_proxy dataconforme-front:80
}
```

> Caddy et `dataconforme-front` doivent être sur le même réseau Docker `testapp`.

### 5. Mettre à jour

```bash
git pull
docker compose up -d --build
```

---

## Hébergement sans Docker

Pour que le formulaire de contact envoie les emails sans Docker, il faut un hébergeur capable d'exécuter Node.js (pas GitHub Pages) :

- **Railway / Render / Fly.io** : déployer le repo entier, démarrer avec `node server/index.js` (API) + serveur de fichiers statiques pour le front.
- **VPS sans Docker** : copier `dist/` + `server/` + `node_modules/`, démarrer le serveur avec `npm run server` ou un process manager (pm2, systemd).

Les variables d'environnement SMTP doivent être renseignées dans les secrets/variables de l'hébergeur (jamais dans le code).

---

## Déploiement GitHub Pages (site statique uniquement)

Le workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) construit le site avec Vite et le publie automatiquement à chaque push sur `preprod`, `main` ou `master`.

## Configuration du dépôt GitHub (une fois)

1. **Settings → Pages**
   - **Build and deployment** : source **GitHub Actions** (pas « Deploy from a branch »).

2. **Settings → Actions → General**
   - **Workflow permissions** : cocher **Read and write permissions** si besoin, ou laisser les permissions par défaut du workflow (le fichier YAML définit déjà `pages: write` et `id-token: write` au niveau du workflow).

3. Après le premier déploiement réussi, l’URL du site apparaît dans l’onglet **Environments** (`github-pages`) et dans l’exécution du workflow.

## URL du site

- Dépôt **projet** : `https://<utilisateur>.github.io/<nom-du-repo>/`
- Dépôt **site utilisateur** (`<utilisateur>.github.io`) : `https://<utilisateur>.github.io/` (le workflow fixe automatiquement `VITE_BASE=/`).

## Fichiers PDF

Placez les PDF référencés par la maquette à la racine du dossier [`public/`](public/) (ex. `public/programme_formation_ia.pdf`). Ils sont copiés tels quels dans `dist` au build.

## Branche de déploiement

Le déploiement se déclenche sur les branches `preprod`, `main` et `master`. Pour ne déployer que depuis `preprod`, retirez les autres noms dans `.github/workflows/deploy-pages.yml` sous `on.push.branches`.
