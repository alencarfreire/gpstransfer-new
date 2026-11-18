# AGENTS.md

Instruções para sessões neste repositório (`gpstransfer-new`), site estático em Astro 6 + React 19 + Tailwind CSS v4.

## Stack e build

- **Framework**: Astro (`^6.2.2`, com `overrides` em `package.json`) sem adaptador SSR em `astro.config.mjs` — o build gera saída estática em `dist/`.
- **UI e estilos**: React 19 (`@astrojs/react`), Tailwind CSS v4 via `@tailwindcss/vite` e `astro-icon`.
- **TypeScript**: `tsconfig.json` estende `astro/tsconfigs/strict`, inclui `.astro/types.d.ts` e usa `jsxImportSource: "react"`.
- **Gerenciador de pacotes**: `npm` (`package-lock.json`).

## Comandos

Execute na raiz do projeto:

- `npm ci` (ou `npm install`): necessário antes de rodar os scripts se `node_modules/` não existir no workspace.
- `npm run dev`: inicia o servidor local do Astro.
- `npm run build`: gera o build de produção em `dist/`. É a única verificação automatizada configurada no projeto.
- `npm run preview`: serve o build de `dist/` localmente.
- `npm run astro -- <comando>`: executa comandos da CLI do Astro (ex.: `astro sync` para gerar `.astro/types.d.ts`).

### Lacunas de verificação e docs

- Não há suíte de testes, linter, formatter ou workflow de CI configurados no repositório.
- `README.md` ainda traz o boilerplate padrão do Astro (cita `Welcome.astro` e `astro check`), mas `@astrojs/check` e `typescript` não estão instalados em `package.json`; evite rodar `npx astro check` sem `--no-install` se não quiser instalação implícita.

## Arquitetura e convenções

- **Entrypoint único**: `src/pages/index.astro` compõe a landing page dentro de `src/layouts/Layout.astro` (`lang="pt-BR"`, fonte `Manrope` via Google Fonts e Google Tag Manager `GTM-5ZL5QX3` via `@digi4care/astro-google-tagmanager`).
- **Astro vs. ilhas React**: seções estáticas são `.astro` em `src/components/`; apenas `Header.tsx`, `Reviews.tsx` e `FAQ.tsx` são componentes React hidratados com `client:load` em `src/pages/index.astro`.
- **Imagens em ilhas React**: componentes `.astro` usam `<Image>` de `astro:assets`. Para componentes React (`Reviews.tsx`, `FAQ.tsx`), imagens raster são pré-otimizadas com `getImage()` em `src/pages/index.astro` e passadas via props (`{ src, width, height }`), enquanto SVGs de `src/assets/` são importados e lidos via `.src`.
- **Tokens e animações**: definidos em `src/styles/global.css` (`@import "tailwindcss";` + `@theme`), incluindo `--color-black`, `--color-gray-dark`, `--color-cream-lite`, escalas `--text-title-*`, `--text-subtitle-*`, `--text-button-1`, `--text-text-*`, `--text-caption`, `--text-mobile-*` e as classes `.animate-pulse-colors`, `.animate-slide-from-right` e `.animate-slide-from-left`. A regra `* { font-family: "Manrope", sans-serif; }` aplica a fonte globalmente.
- **Âncoras e CTAs**: os menus em `src/components/Header.tsx` e `src/components/ui/MenuMobile.tsx` dependem dos IDs `#servicos` (`src/components/OurServicesDetails.astro`), `#avaliacoes` (`src/components/Reviews.tsx`) e `#faq` (`src/components/FAQ.tsx`). Botões de orçamento usam `src/components/ui/ButtonCTA.tsx` apontando para o WhatsApp (`5573998344769`).
- **Ícones**: `astro-icon` está ativo em `astro.config.mjs` (com `src/icons/guidance_right-arrow.svg` no diretório padrão), mas os componentes atuais usam SVGs inline ou assets em `src/assets/`.
