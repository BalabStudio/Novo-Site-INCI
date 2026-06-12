# Animações — Documentação do Demo

Documento técnico do `demo-animacoes.html`: todas as bibliotecas de animação, tipos, CDNs, fixes conhecidos.

---

## Bibliotecas e CDNs

| Biblioteca | CDN | Versão | Global |
|-----------|-----|--------|--------|
| GSAP Core | `gsap@3.12.5/dist/gsap.min.js` | 3.12.5 | `gsap` |
| ScrollTrigger | `gsap@3.12.5/dist/ScrollTrigger.min.js` | 3.12.5 | `ScrollTrigger` |
| ScrollToPlugin | `gsap@3.12.5/dist/ScrollToPlugin.min.js` | 3.12.5 | `ScrollToPlugin` |
| MotionPathPlugin | `gsap@3.12.5/dist/MotionPathPlugin.min.js` | 3.12.5 | `MotionPathPlugin` |
| Draggable | `gsap@3.12.5/dist/Draggable.min.js` | 3.12.5 | `Draggable` |
| Flip | `gsap@3.12.5/dist/Flip.min.js` | 3.12.5 | `Flip` |
| Anime.js | `animejs@3.2.2/lib/anime.min.js` | 3.2.2 | `anime()` |
| AOS | `aos@2.3.4/dist/aos.js` | 2.3.4 | `AOS` |
| ScrollReveal | `scrollreveal@4.0.9/dist/scrollreveal.min.js` | 4.0.9 | `ScrollReveal` |
| Swiper | `swiper@11/swiper-bundle.min.js` | 11 | `Swiper` |

**Não incluídos** (premium/indisponíveis via CDN pública):
- SplitText (Club GreenSock)
- ScrambleText (Club GreenSock)
- Motion (sem CDN global estável — fallback GSAP cobre)

---

## Correções Conhecidas

### 1. anime.js v4 não expõe `anime()` global
**Problema:** `animejs@4.0.2` mudou a API pra ESM. `typeof anime === 'function'` sempre retorna `false`.
**Fix:** Usar `animejs@3.2.2` que mantém `anime()` global.

### 2. `prefers-reduced-motion: true` esconde elementos
**Problema:** Elementos com `opacity:0`, `scale:0`, `transform:translateY()` no CSS ficam invisíveis quando animações não rodam.
**Fix:** CSS media query força `opacity:1; transform:none` em todos os elementos afetados.

### 3. `$.from()` não funciona com `opacity:0` no CSS
**Problema:** `gsap.from()` lê o estado atual (opacity:0) e anima de 0→0. Nada acontece.
**Fix:** Trocar `$.from()` por `$.fromTo()` em 3 locais:
- Anime grid fallback GSAP
- CSS Scroll section fallback
- (Os `.from()` restantes funcionam porque os elementos começam visíveis no CSS)

### 4. Um CDN quebrado derruba todo o JS
**Problema:** Se qualquer `<script src>` falha, o bloco inline seguinte throws e nada funciona.
**Fix:** `try/catch` em todas as seções de animação.

### 5. Anime grid cells com `opacity:0` inline
**Problema:** `d.style.cssText='opacity:0;transform:scale(0)'` impede o fallback GSAP de funcionar.
**Fix:** Usar classe CSS `.ac` ao invés de inline styles.

### 6. Selector `.st .w` não batia com HTML
**Problema:** CSS referenciava `.st .w` mas o HTML usa `[data-anim="st2"] .w`.
**Fix:** Atualizar selector CSS.

### 7. Tag HTML quebrada
**Problema:** `<h3>Blur</span>` — tag de fechamento errada.
**Fix:** `<h3>Blur</h3>`

---

## Seções e Animações

### 01 — GSAP Core (`#s1`)
**Tipos:** `to`, `from`, `fromTo`, `set`, duração, atraso, yoyo

| Card | ID | Animação |
|------|-----|----------|
| To | `#c-to` | `fromTo` x:0→35, rotation:0→360 |
| From | `#c-fr` | `from` x:-50, opacity:0, rotation:-180, scale:.3 |
| FromTo | `#c-ft` | `fromTo` y:30→0, scale:.5→1, elastic |
| Set | `#c-st` | `set` scale:1.3, rotation:45 → `to` scale:1, rotation:0 |
| Duração | `#du1` `#du2` `#du3` | `fromTo` x:0→25 com 0.5s/1s/2s |
| Atraso | `#dl1` `#dl2` `#dl3` | `fromTo` x:0→25 com delay 0/0.5/1 |
| Yoyo | `#c-rp` | `fromTo` scale:1→1.25, repeat:3, yoyo |

**Replay:** `playCore()` via botão

---

### 02 — Easing (`#s2`)
**Tipos:** 14 funções de easing

| Easing | Descrição |
|--------|-----------|
| `none` | Linear |
| `power1.out` | Suave |
| `power2.out` | Moderado |
| `power3.out` | Forte |
| `power4.out` | Muito forte |
| `back.out(1.7)` | Retrocesso |
| `back.inOut` | Retrocesso ida/volta |
| `bounce.out` | Quique |
| `elastic.out(1,0.3)` | Elástico |
| `circ.out` | Circular |
| `expo.out` | Exponencial |
| `sine.out` | Senoidal |
| `steps(8)` | Discreto |
| `elastic.out(1,0.2)` | Elástico forte |

**Como funciona:** Cada easing move um dot `data-e` de `left:0` até `left:calc(100% - 10px)` em 1.6s.
**Replay:** `playE()` via botão

---

### 03 — Stagger (`#s3`)
**Tipos:** amount, grid, random, edges, from center, each

| Card | ID | Stagger Config |
|------|-----|----------------|
| Amount | `#st-am` | `{amount:.3}` |
| Grid center | `#st-gr` | `{grid:[2,4],from:'center'}` |
| Random | `#st-ra` | `{each:.04,from:'random'}` |
| Edges | `#st-ed` | `{each:.05,from:'edges'}` |
| From center | `#st-ce` | `{each:.04,from:'center'}` com y+opacity |
| Sequential | `#st-ea` | `{each:.07}` com rotation |

**Cada card tem:** grid 4×2 com 8 `.sb` squares
**Replay:** `playS()` via botão

---

### 04 — Keyframes & Timeline (`#s4`)

| Card | ID | Animação |
|------|-----|----------|
| Keyframes | `#kf-b` | Multi-passos: x:60 → rotation:360 → scale:1.3 → reset |
| Timeline | `#tl-b` | 4 boxes com `.from()` stagger: `+=.06` entre cada |

**Keyframes** usa ScrollTrigger (`trigger:#s4, start:'top 70%'`).
**Timeline** roda imediatamente.
**Replay:** `playK()` via botão

---

### 05 — ScrollTrigger (`#s5`)

| Card | Tipo | Config |
|------|------|--------|
| Scrub | `#scrub-b` | `width:0→100%` vinculado ao scroll (`scrub:true`) |
| Pin | `#pin-b` | Fixo + `x:140, rotation:360, scale:1.3` durante scroll |
| Batch | `.bi` (8 cards) | `onEnter` faz `$.to({opacity:1,y:0})` com stagger |

---

### 06 — SVG (`#s6`)

| Card | ID | Animação |
|------|-----|----------|
| DrawSVG | `#draw-s` paths | `strokeDashoffset:全长→0` em 1.2s |
| MotionPath | `#mp-d` dot | Segue `#mp-p` path com `autoRotate:true`, repeat:-1 |

**Nota:** Usa `MotionPathPlugin` — sem ele, o dot não segue o path.

---

### 07 — UI (`#s7`)

| Card | ID | Animação |
|------|-----|----------|
| Flip | `#flip-c` | Click reordena `.fi` items com `Flip.from()` |
| Draggable | `#drag-b` | `Draggable.create()` type:'x,y', inertia:true |

**Flip:** Clique em qualquer `.fi` reorganiza aleatoriamente.
**Draggable:** Arrastar com inércia, limitado a `#s7`.

---

### 08 — AOS (`#s8`)

| Card | Animação | Delay |
|------|----------|-------|
| fade-up | Sobe + fade | 0 |
| fade-right | Da esquerda | 60ms |
| zoom-in | Amplia | 120ms |
| flip-up | Flip 3D | 180ms |
| fade-down | De cima | 0 |
| fade-left | Da direita | 60ms |

**Config:** `AOS.init({duration:600, once:true, offset:50})`

---

### 09 — ScrollReveal (`#s9`)

| Card | ID | Config |
|------|-----|--------|
| Bottom | `#sr-b` | `origin:'bottom'` |
| Left | `#sr-l` | `origin:'left'` |
| Scale | `#sr-sc` | `scale:.8, distance:'0px'` |
| Rotate | `#sr-r` | `rotate:{x:12,z:-18}` |
| Blur | `#sr-bl` | `blur:6, distance:'0px'` |
| Longe | `#sr-f` | `distance:'60px'` |

**Config global:** `ScrollReveal({distance:'28px', duration:600, easing:'ease-out', once:true})`

---

### 10 — Anime.js (`#s10`)

| Card | Tipo | Config |
|------|------|--------|
| Stagger grid | 48 `.ac` cells | `anime({targets, scale:[0,1], opacity:[0,1], stagger:grid[6,8] from:center})` |
| SVG draw | `.ap` paths | `strokeDashoffset:全长→0` com IntersectionObserver |

**Grid:** 8 colunas, 6 linhas. Anima do centro com `easeOutElastic(1,.5)`.
**SVG:** Observa viewport com `threshold:.2`, desconecta após disparar.
**Fallback GSAP:** Se `anime()` não existe, usa `$.fromTo()` com ScrollTrigger.

---

### 11 — Motion (`#s11`)

| Card | ID | Config |
|------|-----|--------|
| Spring | `#m-sp` | `M.animate({x:[0,50,0]}, {type:'spring'})` |
| Stagger | `#m-st` | `M.animate(bx, {opacity:[0,1], y:[12,0]}, {delay:M.stagger(.06)})` |
| InView | `#m-iv` | `M.inView(iv, M.animate({scale:[.5,1.1,1]}))` |

**Motion não está carregado via CDN** — sempre usa fallback GSAP:
- `$.from()` com ScrollTrigger para os 3 cards

---

### 12 — CSS Scroll-Driven (`#s12`)

**API nativa:** `animation-timeline: view()` — zero JS.

```css
@keyframes cssR {
  from { opacity:0; transform:translateY(24px) }
  to { opacity:1; transform:translateY(0) }
}
.scss {
  animation: cssR linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
```

**Fallback GSAP:** Se browser não suporta, `$.fromTo()` com ScrollTrigger.

---

### 13 — Swiper (`#s13`)

```javascript
new Swiper('.mySwiper', {
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: { 640:{slidesPerView:2}, 900:{slidesPerView:3} }
})
```

**5 slides:** Rápido, Responsivo, Toque, Config, Plugins
**Setas:** `#sw-p` (prev), `#sw-n` (next)

---

### 14 — Card Reveal (`#s14`)

Cards compostos com sub-animações internas:

| Card | Sub-animações |
|------|---------------|
| progress (Finanças) | `data-anim="fu"` fade-up, `data-anim="pr"` progress bars |
| bar-grow (Receita) | `data-anim="bg"` scaleY:0→1 com stagger |
| stagger-rows (Transações) | `data-anim="sr2"` rows com opacity+x stagger |
| stagger-text (Expertise) | `data-anim="st2"` palavras com opacity+y stagger |

**Cada card:** `$.timeline({paused:true})` com `autoAlpha:0,scale:.94` → `power3.out`
**Trigger:** Se `top < 85% viewport` roda imediatamente, senão ScrollTrigger.

---

### 15 — Orbit (`#s15`)

| Elemento | Animação |
|----------|----------|
| Anéis `.or` | `scale:0→1` com `back.out(2)` |
| Centro `.oc` | `scale:0→1` com `back.out(2)` |
| Pills `.op` | `autoAlpha:0,scale:.5→1` |
| Rotação | `$.ticker.add()` contínuo — pills orbitam o centro |

**Cálculo orbital:** `Math.atan2`, raio constante, velocidades [45,55,40]s por pill.

---

### 16 — Marquee Tags (`#s16`)

| Direção | Selector | Velocidade |
|---------|----------|------------|
| Direita→esquerda | `[data-anim="mr"]` | 28px/s |
| Esquerda→direita | `[data-anim="ml"]` | 28px/s |

**Implementação:** `$.to()` com `repeat:-1` e `modifiers.x` usando `parseFloat(x)%tw`.

---

### 17 — FAQ (`#s17`)

**Accordion:** Click em `.fqt` alterna `.open` no `.fq` pai.
**CSS:** `.fqb` usa `max-height:0→160px` com `transition:.3s`.
**AOS:** Cards usam `data-aos="fade-up"` com delays escalonados (0/30/60/90ms).

---

## CSS Keys

| Classe | Uso |
|--------|-----|
| `.cd` | Card base (background:#f7f7f7, border:1px solid #eee, border-radius:12px) |
| `.bx` | Box quadrada (44×44, bg:#1a1a1a, color:#fff) |
| `.sb` | Stagger block (aspect-ratio:1, bg:#1a1a1a) |
| `.ac` | Anime cell (aspect-ratio:1, bg:#1a1a1a, opacity:0, scale:0) |
| `.bi` | Batch item (opacity:0, translateY:30px) |
| `.tg` | Tag label (font-size:.55rem, bg:#e8e8e8) |
| `.er` | Easing row (flex, align:center) |
| `.et` | Easing track (height:3px, bg:#eee) |
| `.ed` | Easing dot (10×10, absolute, bg:#1a1a1a) |
| `.scss` | CSS Scroll card (animation:cssR) |

---

## Grid Layout

| Grid | Colunas | Gap | Uso |
|------|---------|-----|-----|
| `.g2` | 2 | 12px | Seções 2, 4, 6, 7, 12, 14 |
| `.g3` | 3 | 12px | Seções 3, 8, 9, 11 |
| `.g4` | 4 | 10px | Seções 1, 5 (batch) |
| `.g6` | 6→8 (inline) | 8px | Seção 10 (anime grid) |

**Mobile (≤768px):** Todos os grids viram 1 coluna.

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .bi, .scss, [data-anim="st2"] .w, .sb, .pf,
  .sr span, .br div, .ac, #m-st .bx {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

Garante que todos os elementos ficam visíveis mesmo com redução de movimento ativada.

---

## Ordem dos Scripts

```
1. gsap.min.js
2. ScrollTrigger.min.js
3. ScrollToPlugin.min.js
4. MotionPathPlugin.min.js
5. Draggable.min.js
6. Flip.min.js
7. anime.min.js (v3.2.2)
8. aos.js
9. scrollreveal.min.js
10. swiper-bundle.min.js
11. Inline <script> (todo wrapped em try/catch)
```
