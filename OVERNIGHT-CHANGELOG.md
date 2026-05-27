# 🌙 Polish autônomo overnight

Tudo que mudei enquanto você dormia. Em ordem de commits, do mais antigo
pro mais recente.

---

## ✅ Wave 1 · Busca, lugares, comércios, drawer, notif (commit a9ccdc3)

**Busca global funcional**
- Novo `src/lib/search.ts` — indexa **8 datasets** (eventos, circuitos, lugares,
  comércios, feira, posts do feed, interações, programação)
- `/busca` retorna live results conforme digita (min 2 chars)
- Cards mostram thumb + categoria colorida + título + snippet
- Empty state com personalidade
- **10 pesquisas populares + 8 categorias** alinhadas ao mídia kit
- _Teste: busque "brahma" → 12 resultados em todas as fontes_

**Comércios ganharam detail page**
- Nova rota `/comercios/[id]` com SSG (8 detalhes)
- Hero + descrição + horário + endereço + cupom Boulevard
- Seção **acessibilidade** com badges esmeralda dos recursos
- Tags de keywords #estilo + links sociais + CTAs
- Lista de comércios: badge "Aceita cupom" no card + contador de acessibilidade

**Lugares-âncora ganhou lista**
- Nova rota `/lugares` com manifesto + grid dos 5 marcos
  (Espaço Cauby, Igreja Rosário, Estátua Mãe Preta, Relógio Nichile, Ponto-Zero)

**Apadrinhar Drawer**
- Click em "Apadrinhar" nas vantagens solidárias abre **bottom drawer**
- Escolha de valor (R$25/45/80/120) com cards visuais
- Estado de sucesso com checkmark animado
- Aviso de 100% repassado ao SP Invisível

**Notificações melhoradas**
- Agrupamento por **"Hoje"** e **"Anteriores"** baseado no timeAgo
- Botão **"Marcar lidas"** no header (some quando sem novas)
- **Dispensar individual** com X no hover de cada card
- Empty state com BellOff e mensagem amigável

**Live ticker polido**
- Pausa ao tocar/hover
- Fade gradient nas bordas (entrada/saída suave)
- Dot vermelho pulsante (live indicator)
- aria-live="polite" pra acessibilidade

**Home Hero auto-advance**
- Auto-advance a cada 6s
- Pausa ao hover/touch
- **Swipe horizontal** pra trocar slide (touch nativo)

**PWA Install Prompt**
- Banner sutil aparece após 15s na primeira visita
- Esconde se já está instalado (standalone)
- Usa `beforeinstallprompt` nativo do Chrome/Edge
- localStorage pra lembrar dispensa

**Página /sobre**
- 4 cards de link rápido (Parceiros, Eventos, **Lugares**, **Circuitos**)

---

## ✅ Wave 2 · Toast, share, acessibilidade (commit 3db7c7f)

**Nova página /acessibilidade**
- Manifesto **"Acessibilidade não é custo. É experiência, receita e
  posicionamento ético de marca."** direto do mídia kit ESG
- 4 recursos visuais (Rampas, LIBRAS, Áudio-descrição, Hospitalidade)
- Lista filtrada dos **comércios com selo acessível**
- Stat **"14,4 milhões de brasileiros · R$ 400 bi"** do mídia kit
- Linkada do Perfil

**Toast system**
- `src/components/Toast.tsx` (ToastHost + showToast)
- Dispatch via eventos customizados — disponível em qualquer lugar
- Posicionado acima da BottomNav
- aria-live="polite"

**Web Share API + Lembrete**
- `EventActions` component: **"Lembrete"** → toast / **"Compartilhar"** →
  navigator.share nativo OU fallback pra clipboard
- Wirado em `/eventos/[slug]` e `/programacao/[id]`

**Interação Action Button**
- `InteracaoActionButton` client component com **ícone contextual + toast
  de confirmação** por tipo:
  - foto-opp → "Aponte a câmera no QR no telão"
  - super-quiz → "Resposta registrada · acompanhe o ranking no telão"
  - envio-tela → "Envio enviado pra curadoria"
  - roteiro-guiado → "Vaga reservada pro roteiro"
  - album-figurinhas → "Figurinha colada no álbum"
  - wishlist-endossa → "Item adicionado à sua wishlist"
  - curiosidade-sp → "Salvo nas suas curiosidades"

---

## ✅ Wave 3 · BoulevardStatus + filtros eventos (commit 5e9d7b2)

**BoulevardStatus no header da home**
- Indicador live no centro do header
- **"Aberto · ao vivo"** (dot pulsante esmeralda) quando hoje é sáb 18h+ ou
  dom até 23h
- **"Volta sábado 18h"** caso contrário
- Refresh a cada minuto

**Filtros em /eventos**
- 3 chips: **Todos · 12** / **Este mês · MAI** / **Datas-âncora · 3**
- Hero "acontecendo agora" só aparece com filtro=todos
- Badge **"Âncora"** com sparkles nos 3 eventos especiais
- Empty state quando filtro vazio

---

## ✅ Wave 4 · 404 + share lugares (commit a7cb084)

**404 page customizada**
- `app/not-found.tsx` brandable com logo, número grande,
  mensagem amigável e 2 CTAs (Home + Buscar)

**Share nos lugares-âncora**
- `/lugares/[slug]` ganha EventActions (lembrete + compartilhar)

---

## 📊 Status final do app

**Rotas SSG novas**: `/comercios/[id]` (8) + `/lugares` (1) + `/acessibilidade` +
404 + interações reescritas (7) + eventos com filtros = **~50 rotas estáticas**

**Componentes novos reusáveis**:
- `BottomDrawer` (genérico)
- `Toast / showToast` (sistema global)
- `EventActions` (lembrete + share)
- `InteracaoActionButton` (CTA com toast contextual)
- `BoulevardStatus` (live indicator)
- `PWAInstallPrompt` (banner sutil)
- `HighlightsList` (cards + drawer)
- `ApadrinharDrawer` (form de doação mock)

**Telas com polish significativo**: Home, Busca, Eventos, Programação, Mapa,
Comércios, Lugares, Notificações, Vantagens, Central de Interação, Sobre,
**Acessibilidade** (nova).

**Deploy**: auto-deploy Vercel rodou após cada push do main. Última URL
provavelmente em `app-boulevard-sao-joao-*.vercel.app`.

---

## 💡 Próximos passos sugeridos (não executei)

1. **View Transitions API** entre páginas (Next 15 suporta com setup)
2. **Onboarding** de 3-4 cards na primeira visita
3. **Skeleton loaders** pra imagens enquanto carregam
4. **Loading.tsx** route-level pra cada pasta
5. **Service worker** pré-cache estratégico (já tem básico)
6. **Mais comércios reais** da rede ABRASEL do Centro
7. **Mock de reviews/avaliações** no detail dos comércios
8. **Programação tem agrupamento por turno** (manhã/tarde/noite)
9. **Mapa com filtro por query param** (`/mapa?filter=palcos`)
10. **Compartilhar evento** com OG image gerada dinamicamente

---

🤖 _Co-Authored-By: Claude Sonnet 4.6_
