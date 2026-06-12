# Design System — INCI Brasil
> Versão 1.0 | Web (Next.js) | Moderno, profissional, educacional, confiável

---

## 1. FUNDAÇÃO DA MARCA

### 1.1 Personalidade Visual
- **Confiável** — tons de azul como âncora, tipografia limpa, spacing generoso
- **Educacional** — legibilidade em primeiro lugar, hierarquia clara, contraste alto
- **Moderno** — bordas arredondadas (`1.5rem`), animações sutis com GSAP, dark sections
- **Acolhedor** — laranja como accent quente, depoimentos em destaque, tom formal porém acessível

### 1.2 Princípios de Design
1. **Clareza antes de estética** — toda escolha visual serve à legibilidade e à hierarquia da informação
2. **Consistência sistemática** — nenhum valor isolado; padding, radius e cores obedecem a tokens
3. **Hierarquia explícita** — tipografia e cor guiam o olhar: headings grandes, badges de seção, CTAs destacados
4. **Movimento com propósito** — animações GSAP revelam conteúdo, não distraem; respeitam `prefers-reduced-motion`
5. **Contraste como regra** — fundos escuros (`neutral-900`) com texto branco, fundos claros com texto `neutral-900`/`zinc-600`

---

## 2. COLOR TOKENS

### Paleta Primária

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary-500` | `#3B82F6` | CTA primary fundo, ícone de depoimento, card de número destaque |
| `--color-primary-400` | `#60A5FA` | Hover de elementos primários |
| `--color-primary-600` | `#2563EB` | Pressed state |

### Paleta de Marca (Brand)

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-brand-orange-400` | `#FB923C` | Texto hero, estrelas, ícones sociais footer |
| `--color-brand-orange-500` | `#F59F23` | Logo INCI (SVG fill) |

### Paleta Neutra

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-neutral-900` | `#171717` | Fundo header, footer, dark cards, overlay CTA, mobile menu |
| `--color-neutral-800` | `#262626` | Superfície escura secundária |
| `--color-zinc-600` | `#52525B` | Texto descritivo, body secundário |
| `--color-zinc-500` | `#71717A` | Subtítulos, texto de apoio |
| `--color-zinc-100` | `#F4F4F5` | Wrapper de card, pills de valores, superfície muted |
| `--color-gray-200` | `#E5E7EB` | Barra de filtros, cards de número, bordas |
| `--color-white` | `#FFFFFF` | Superfície de card, texto em fundo escuro |
| `--color-black` | `#000000` | Título de seção, texto principal |

### Paleta Semântica

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-success` | `#22C55E` | Confirmações, status OK |
| `--color-warning` | `#EAB308` | Alertas, atenção |
| `--color-error` | `#EF4444` | Erros, ações destrutivas |
| `--color-info` | `#3B82F6` | Informações neutras |

> ⚠ **Gap:** `success`/`warning`/`error` não são usados no projeto atual — definidos para uso futuro.

### Backgrounds & Surface

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-bg-base` | `#FFFFFF` | Fundo da página |
| `--color-bg-surface` | `#FFFFFF` | Cards, modais |
| `--color-bg-muted` | `#F4F4F5` | Wrappers de card, áreas secundárias |
| `--color-bg-dark` | `#171717` | Seções escuras, header mobile, footer |
| `--color-bg-overlay` | `rgba(0,0,0,0.6)` | Overlay do hero |

---

## 3. TIPOGRAFIA

### Font Stack

| Papel | Fonte | Fallback | Import |
|-------|-------|----------|--------|
| Display / Heading / Body | `Rethink_Sans` | `sans-serif` | `next/font/google` |

- **Família:** Rethink Sans (Google Fonts)
- **Variável CSS:** `--font-rethink-sans`
- **Token de acesso:** `font-rethink` (mapeado via `@theme inline`)

### Escala Tipográfica

| Token | rem | px | Uso |
|-------|-----|----|-----|
| `--text-2xs` | 0.625rem | 10px | Copyright footer |
| `--text-xs` | 0.75rem | 12px | Tags, captions |
| `--text-sm` | 0.875rem | 14px | Descrições, body secundário |
| `--text-base` | 1rem | 16px | Corpo padrão, nav, CTA |
| `--text-lg` | 1.125rem | 18px | Destaque em parágrafos |
| `--text-xl` | 1.25rem | 20px | Subtítulos, títulos de card |
| `--text-2xl` | 1.5rem | 24px | H3, headings de seção mobile |
| `--text-3xl` | 1.875rem | 30px | H2, headings de seção mobile grandes |
| `--text-4xl` | 2.25rem | 36px | H1, headings de seção desktop |
| `--text-5xl` | 3rem | 48px | Display, hero desktop |
| `--text-6xl` | 3.75rem | 60px | Hero headline desktop grande |

### Peso (Font Weight)

| Token | Valor | Uso |
|-------|-------|-----|
| `--font-regular` | 400 | Corpo, descrições |
| `--font-medium` | 500 | Labels, badges, títulos de card, nav |
| `--font-semibold` | 600 | Headings principais |
| `--font-bold` | 700 | Números, endereços, destaque máximo |

### Line Height

| Contexto | Line Height | Uso |
|----------|-------------|-----|
| Display / Hero | 1.1 | `leading-[1.1]` |
| Heading grande | 1.2 | `leading-[1.2]` |
| Heading médio | 1.25–1.3 | `leading-7`, `leading-8` |
| Body padrão | 1.5–1.6 | `leading-5`, `leading-6` |
| Caption / Tag | 1.4 | `leading-4`, `leading-5` |

### Letter Spacing

| Contexto | Tracking | Uso |
|----------|----------|-----|
| Uppercase label | `0.1em` | Badges de seção, nav, filtros (`tracking-widest`) |
| Body | `normal` | Texto corrido |
| Heading | `normal` | Títulos |

---

## 4. ESPAÇAMENTO

Baseado em múltiplos de **4px** (base-4 grid).

| Token | px | rem | Uso |
|-------|----|-----|-----|
| `--space-0.5` | 2px | 0.125rem | Micro ajustes |
| `--space-1` | 4px | 0.25rem | Micro gap, dot de badge |
| `--space-1.5` | 6px | 0.375rem | Gap interno pequeno |
| `--space-2` | 8px | 0.5rem | Gap entre elementos pequenos |
| `--space-2.5` | 10px | 0.625rem | Grid gaps finos |
| `--space-3` | 12px | 0.75rem | Padding pequeno, gaps de filtro |
| `--space-4` | 16px | 1rem | Padding padrão de card, gap de grid |
| `--space-5` | 20px | 1.25rem | Padding de card médio |
| `--space-6` | 24px | 1.5rem | Gap entre seções internas |
| `--space-8` | 32px | 2rem | Padding de card grande, gap de hero |
| `--space-10` | 40px | 2.5rem | Padding de seção vertical |
| `--space-12` | 48px | 3rem | Gap de hero content |
| `--space-14` | 56px | 3.5rem | Padding horizontal de seção |
| `--space-16` | 64px | 4rem | Separação de seções grandes |
| `--space-20` | 80px | 5rem | Padding de hero |

### Padding de Seção (Padrão)

```css
/* Todas as seções seguem este padrão: */
self-stretch mx-2 md:mx-0 px-4 md:px-14
```

---

## 5. BORDER RADIUS

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 4px | Tags, badges, dropdown items |
| `--radius-md` | 8px | Inputs, botões pequenos |
| `--radius-lg` | 12px | Cards padrão, imagens |
| `--radius-xl` | 16px | Cards grandes, inner cards |
| `--radius-2xl` | 24px | Elementos hero, wrappers |
| `--radius-3xl` | 24px (1.5rem) | Seções inteiras, cards externos (card token) |
| `--radius-pill` | 80px | CTA button |
| `--radius-full` | 9999px | Pills, avatares |

---

## 6. SOMBRAS (Elevation)

| Token | Valor CSS | Uso |
|-------|-----------|-----|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Cards flat |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | Cards padrão |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | Dropdowns, popovers |
| `--shadow-none` | `none` | Reset |

> ⚠ **Gap:** Nenhum componente do projeto atual usa `shadow-*`. Definido para referência futura.

---

## 7. GRID & LAYOUT

| Propriedade | Valor |
|-------------|-------|
| Abordagem | Flexbox + CSS Grid (Tailwind) |
| Gutter padrão | `gap-4` (16px) mobile / `gap-6` (24px) desktop |
| Margin lateral | `px-4` (16px) mobile / `px-14` (56px) desktop |
| Breakpoints | `sm: 640px` / `md: 768px` / `lg: 1024px` / `xl: 1280px` |

---

## 8. ICONOGRAFIA

| Propriedade | Valor |
|-------------|-------|
| Biblioteca | SVG inline (sem lib externa) |
| Tamanhos padrão | `size-3.5` (14px), `size-4` (16px), `size-5` (20px), `size-6` (24px), `size-8` (32px), `size-10` (40px) |
| Stroke / Fill | Misturado — chevrons usam `stroke`, setas usam `fill` |
| Cor | `currentColor` ou `text-white` / `text-orange-400` |

---

## 9. ANIMAÇÃO & MOTION

### GSAP (GreenSock Animation Platform)

| Propriedade | Valor |
|-------------|-------|
| Core | `gsap@^3.15.0` |
| Plugin | `ScrollTrigger` |
| Registro | `gsap.registerPlugin(ScrollTrigger)` em cada componente |

### Padrão ScrollReveal

```tsx
gsap.set("[data-reveal]", { opacity: 0, y: 24 });
gsap.to("[data-reveal]", {
  opacity: 1, y: 0,
  duration: 0.5, delay: 0.6,
  ease: "power3.out",
  stagger: 0.1,
  scrollTrigger: { trigger: sectionRef.current, start: "top bottom", once: true },
});
```

### Easing Curves

| Token | Valor | Uso |
|-------|-------|-----|
| `power3.out` | `cubic-bezier(0.22,1,0.36,1)` | ScrollReveal, transições de card |
| `power2.out` | `cubic-bezier(0.25,0.46,0.45,0.94)` | CTA hover, fade de texto |
| `back.out(1.7)` | — | Entrada de ícones com bounce |
| `expo.out` | — | Animação de linha |
| `heroZoom` | `cubic-bezier(0.19,1,0.22,1)` | Zoom de entrada do hero |

### CSS Transitions

```css
transition-transform duration-300     /* Nav items */
transition-all duration-300 ease-out  /* Underline nav */
```

---

## 10. COMPONENTES CORE

### 10.1 CTA Button

| Propriedade | Pill | Default (com seta) |
|-------------|------|--------------------|
| Container | `min-h-12 px-8 py-2.5 rounded-[80px]` | `p-1 rounded-[80px]` |
| Inner | — | `pl-6 pr-2 py-1.5 rounded-[80px]` |
| Arrow | — | `size-10 bg-neutral-900 rounded-[40px]` |
| Variantes | `blue` (`bg-blue-500`) / `gray` (`bg-gray-200`) | mesmo |
| Hover | GSAP overlay `scale: 0 → 2.5` + arrow `rotation: 45` | mesmo |
| Texto | `text-base leading-4` | `text-sm md:text-base leading-5 md:leading-4` |

### 10.2 Card

| Tipo | Container | Inner | Radius |
|------|-----------|-------|--------|
| Brand detail | `bg-zinc-100 p-3 rounded-3xl` | `bg-white p-4 md:p-8 rounded-xl` | 3xl → xl |
| Purpose | `bg-white border border-zinc-100 rounded-3xl` | `p-6 md:p-8` | 3xl |
| Mission/Vision | `bg-white rounded-2xl p-6 md:p-8` | direto | 2xl |
| Service | `bg-white border border-zinc-100 rounded-2xl p-3 md:p-4` | direto | 2xl |
| Number | `bg-{gray-200/blue-500/neutral-900} rounded-3xl p-5` | direto | 3xl |
| Testimonial | `bg-zinc-100 p-2 md:p-3 rounded-3xl` | `bg-white p-5 md:p-6 rounded-xl` | 3xl → xl |
| Values pill | `bg-zinc-100 rounded-full px-5 py-2.5` | direto | full |

### 10.3 Badge / Tag de Seção

```html
<div class="inline-flex justify-start items-center gap-3">
  <div class="size-1 bg-neutral-900" />
  <div class="text-black text-base font-medium font-rethink uppercase leading-6 tracking-widest">
    Nome da Seção
  </div>
</div>
```

### 10.4 Navigation (Header)

| Estado | Desktop | Mobile |
|--------|---------|--------|
| Display | `hidden md:flex` | `md:hidden fixed inset-0 bg-neutral-900 z-50` |
| Item | `group relative px-3 pt-2.5 pb-3` | Link direto `flex flex-col gap-6` |
| Hover text | `group-hover:-translate-y-0.5 transition-transform duration-300` | — |
| Hover underline | `w-0 group-hover:w-3/4 h-0.5 bg-white rounded-full` | — |
| Dropdown | `absolute top-full bg-neutral-900 rounded-2xl border border-white/10` | — |

### 10.5 Typography (Componentes de Texto)

| Componente | Token size | Weight | Cor |
|------------|-----------|--------|-----|
| Hero headline | `text-3xl md:text-5xl lg:text-6xl` | `font-medium` | `text-white` + `text-orange-400` |
| Section heading | `text-3xl md:text-5xl` | `font-semibold` | `text-black` |
| Section subtitle | `text-2xl md:text-4xl` | `font-medium` | `text-zinc-500` |
| Card title | `text-xl md:text-3xl` | `font-medium` | `text-black` |
| Body | `text-sm md:text-base` | `font-normal` | `text-zinc-600` |
| Section badge | `text-base` | `font-medium` | `text-black` `uppercase tracking-widest` |
| Nav link | `text-base` | `font-normal` | `text-white` `uppercase tracking-widest` |

---

## 11. DARK MODE

Não implementado. O projeto usa seções escuras manuais (`bg-neutral-900`) para hero e footer, não um tema global.

> ⚠ **Gap:** Se dark mode for necessário no futuro, usar `@media (prefers-color-scheme: dark)` ou `data-theme="dark"`.

---

## 12. EXPORT DE TOKENS (CSS Variables)

```css
@import "tailwindcss";

@theme inline {
  /* Colors — Primary */
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;

  /* Colors — Brand */
  --color-brand-orange-400: #FB923C;
  --color-brand-orange-500: #F59F23;

  /* Colors — Neutral */
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-zinc-500: #71717A;
  --color-zinc-600: #52525B;
  --color-zinc-100: #F4F4F5;
  --color-gray-200: #E5E7EB;

  /* Colors — Semantic */
  --color-success: #22C55E;
  --color-warning: #EAB308;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* Colors — Surface */
  --color-bg-base: #FFFFFF;
  --color-bg-surface: #FFFFFF;
  --color-bg-muted: #F4F4F5;
  --color-bg-dark: #171717;
  --color-bg-overlay: rgba(0, 0, 0, 0.6);

  /* Typography */
  --font-sans: var(--font-rethink-sans);
  --font-rethink: var(--font-rethink-sans);
  --text-2xs: 0.625rem;
  --tracking-widest: 0.1em;

  /* Spacing (já nativo do Tailwind, documentado para referência) */
  --space-0-5: 0.125rem;
  --space-1-5: 0.375rem;
  --space-2-5: 0.625rem;
  --space-14: 3.5rem;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-3xl: 1.5rem;
  --radius-card: 1.5rem;
  --radius-pill: 80px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-none: none;

  /* Animation */
  --ease-expo-out: cubic-bezier(0.19, 1, 0.22, 1);
  --duration-fast: 100ms;
  --duration-base: 150ms;
  --duration-slow: 300ms;
  --duration-slower: 500ms;
}
```

---

## 13. GAPS & RECOMENDAÇÕES

| Gap | Impacto | Recomendação |
|-----|---------|--------------|
| **Sem sombras** | Cards parecem planos demais | Adicionar `shadow-md` em cards padrão, `shadow-lg` em dropdowns |
| **Sem paleta semântica implementada** | Erro/sucesso usam cores soltas | Mapear `--color-success/warning/error` nos componentes de formulário |
| **SVG inline sem padronização** | Ícones inconsistentes | Adotar Lucide ou Heroicons como biblioteca única |
| **Sem dark mode** | Acessibilidade limitada | Implementar `data-theme="dark"` com overrides de token |
| **Sem container/max-width** | Layout não centralizado em telas grandes | Adicionar `max-w-7xl mx-auto` nas seções |
| **Sem loading/skeleton** | UX de carregamento inexistente | Criar componente Skeleton com os tokens de card |
| **Valores hard-coded** | `bg-orange-600`, `bg-rose-600` nas brands | Mover para tokens semânticos de brand |

---

## 14. CHANGELOG

| Versão | Data | Mudanças |
|--------|------|----------|
| 1.0 | 10/06/2026 | Documento inicial — extração do código-fonte do projeto INCI Brasil |
