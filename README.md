# PersonalDevModel

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.23.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### GitHub Pages

The site is built for the repository path **`/personal-dev-model/`** (project Pages). GitHub Actions (`.github/workflows/deploy-github-pages.yml`) publishes the **`browser`** output on every push to **`main`**.

1. In the GitHub repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to **`main`**; when the workflow finishes, open:

   **`https://<tu-usuario>.github.io/personal-dev-model/`**

   Las rutas usan **hash** (`#/core`, `#/frontend`, …) para que funcionen en Pages sin servidor.

Local build for Pages:

```bash
npm run build:github-pages
```

Si renombrás el repositorio, actualizá **`baseHref`** en `angular.json` → `projects.personal-dev-model.architect.build.configurations.github-pages.baseHref` (debe ser `/<nombre-del-repo>/`).

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
