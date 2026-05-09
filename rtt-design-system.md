# RTT — Design System do Site

> **Marca:** Rio Todo Terreno Driving School  
> **Essência:** domínio técnico em terreno extremo  
> **Posicionamento:** premium, operacional, assertivo e confiável  
> **Tom de interface:** controle, robustez, precisão e presença

---

## 1. Fundamento da marca

A RTT não deve parecer uma empresa de lazer, turismo ou “aventura recreativa”.  
O site precisa comunicar que a marca atua em contextos de **alta exigência**, com foco em:

- **segurança operacional**
- **controle em campo**
- **capacidade técnica**
- **performance sob condições adversas**
- **execução com método**

A experiência visual deve traduzir a seguinte sensação:

> **“Nós operamos onde o erro custa caro.”**

Isso significa um design com:
- contraste alto
- ritmo visual firme
- tipografia forte
- superfícies sólidas
- destaque contido
- motion preciso, nunca excessivo

---

## 2. Direção estética

### Conceito central
**Comando + Terreno + Engenharia + Performance**

### Impressão desejada
O usuário deve sentir que está diante de uma empresa que combina:
- experiência prática de campo
- rigor técnico
- sofisticação de marca
- confiança operacional

### O que o visual deve evitar
- estética de trilha recreativa
- excesso de elementos “radicais”
- efeitos exagerados
- visual esportivo juvenil
- aspecto de agência promocional genérica

### Vocabulário visual
- escuro, profundo e sólido
- acento laranja como energia e decisão
- linhas limpas
- blocos amplos
- imagens com poeira, metal, pneu, terreno, briefing, equipe e operação
- texturas discretas, inspiradas em carbono, aço escovado e solo compactado

---

## 3. Paleta de cores

A logo apresenta uma combinação muito forte de **preto** e **laranja intenso**.  
No site, essa paleta deve ser sofisticada com neutros escuros mais ricos para evitar dureza excessiva do preto puro em todas as superfícies.

## 3.1 Cores principais

```css
--rtt-orange-500: #FF6A00; /* assinatura principal */
--rtt-orange-400: #FF7E1F; /* hover e destaque */
--rtt-orange-300: #FFA04D; /* brilho sutil e detalhes */

--rtt-coal-950:   #070707; /* fundo mais profundo */
--rtt-coal-900:   #0E0E0E; /* fundo principal */
--rtt-coal-850:   #141414; /* seções alternadas */
--rtt-coal-800:   #1B1B1B; /* cards */

--rtt-steel-700:  #2E2E2E; /* divisórias e bordas */
--rtt-steel-600:  #454545; /* linhas auxiliares */
--rtt-steel-500:  #6A6A6A; /* texto secundário escuro */

--rtt-sand-100:   #F5F1EB; /* texto claro principal */
--rtt-sand-200:   #E8DED0; /* texto secundário claro */
--rtt-white:      #FFFFFF; /* contraste máximo */
```

## 3.2 Cores semânticas

```css
--rtt-success: #26B36E;
--rtt-warning: #FFB020;
--rtt-danger:  #D9534F;
--rtt-info:    #3B82F6;
```

## 3.3 Proporção de uso
- **70%** tons escuros de base
- **20%** neutros claros para leitura
- **10%** laranja de marca para ação e hierarquia

## 3.4 Regras de aplicação
- O laranja nunca deve dominar a página inteira
- O laranja é cor de **comando**, não de decoração
- Títulos principais devem ser claros sobre fundo escuro
- Evitar grandes áreas em branco puro; o branco entra como respiro e contraste pontual
- Cards e formulários devem usar superfícies escuras levemente separadas do fundo

## 3.5 Gradientes
Gradientes devem ser discretos e usados apenas para criar profundidade controlada.

```css
--rtt-gradient-accent: linear-gradient(135deg, #FF7E1F 0%, #FF6A00 60%, #D95200 100%);
--rtt-gradient-overlay: linear-gradient(180deg, rgba(7,7,7,0.08) 0%, rgba(7,7,7,0.70) 100%);
```

---

## 4. Tipografia

A tipografia precisa sustentar dois mundos ao mesmo tempo:
- **presença e autoridade** nos títulos
- **legibilidade e fluidez** no conteúdo

## 4.1 Família tipográfica recomendada

### Títulos e headlines
**Barlow Condensed**
- aparência técnica e automotiva
- ótima presença para headlines curtas e fortes
- transmite força sem parecer antiquada

**Pesos recomendados:** 600, 700, 800

### Texto corrido, UI e formulários
**Inter**
- excelente legibilidade
- moderna, neutra e confiável
- ótima para interfaces de conversão

**Pesos recomendados:** 400, 500, 600

### Detalhes técnicos, números e labels opcionais
**IBM Plex Mono**
- usar com moderação
- ideal para microdetalhes, numerações, pequenos indicadores e labels operacionais

**Pesos recomendados:** 500, 600

## 4.2 Escala tipográfica

```css
--text-display-2xl: 5rem;      /* 80px */
--text-display-xl:  4rem;      /* 64px */
--text-display-lg:  3rem;      /* 48px */

--text-h1: 2.5rem;             /* 40px */
--text-h2: 2rem;               /* 32px */
--text-h3: 1.5rem;             /* 24px */
--text-h4: 1.25rem;            /* 20px */

--text-body-lg: 1.125rem;      /* 18px */
--text-body:    1rem;          /* 16px */
--text-sm:      0.875rem;      /* 14px */
--text-xs:      0.75rem;       /* 12px */
```

## 4.3 Regras de composição
- Headlines em **Barlow Condensed 700 ou 800**
- Texto corrido em **Inter 400 ou 500**
- Evitar parágrafos excessivamente longos
- Usar caixa alta apenas em:
  - labels
  - menu
  - microcopy curta
  - marcadores de categoria
- Letter spacing:
  - headings: `-0.02em` a `-0.04em`
  - labels uppercase: `0.08em` a `0.12em`

## 4.4 Hierarquia recomendada
- **Eyebrow:** IBM Plex Mono ou Inter 600 / uppercase / laranja
- **Headline:** Barlow Condensed 800 / branco
- **Subheadline:** Inter 400 ou 500 / sand-100
- **Body:** Inter 400 / sand-200
- **CTA:** Inter 600 / alto contraste

---

## 5. Grid, layout e espaçamento

O site deve parecer respirado, sólido e premium.  
Ticket alto pede composição com espaço, cadência e hierarquia.

## 5.1 Sistema base
Usar **escala de 8px**.

```css
--space-1: 0.25rem;  /* 4 */
--space-2: 0.5rem;   /* 8 */
--space-3: 0.75rem;  /* 12 */
--space-4: 1rem;     /* 16 */
--space-5: 1.25rem;  /* 20 */
--space-6: 1.5rem;   /* 24 */
--space-8: 2rem;     /* 32 */
--space-10: 2.5rem;  /* 40 */
--space-12: 3rem;    /* 48 */
--space-16: 4rem;    /* 64 */
--space-20: 5rem;    /* 80 */
--space-24: 6rem;    /* 96 */
--space-32: 8rem;    /* 128 */
```

## 5.2 Containers
```css
--container-max: 1280px;
--container-reading: 760px;
```

## 5.3 Estrutura por breakpoint
- **Mobile:** 4 colunas
- **Tablet:** 8 colunas
- **Desktop:** 12 colunas

## 5.4 Padding das seções
- **Mobile:** 64px 20px
- **Tablet:** 80px 32px
- **Desktop:** 112px 40px

## 5.5 Ritmo vertical
- Hero com respiro mais amplo
- Distância generosa entre blocos
- Cards nunca devem parecer apertados
- O layout deve sugerir “controle”, não “pressa”

### Referência prática
- distância entre título e subtítulo: `16px` a `24px`
- distância entre subtítulo e CTA: `24px` a `32px`
- distância entre seções: `80px` a `128px`

---

## 6. Bordas, raios e profundidade

A linguagem da RTT pede solidez.  
Os componentes podem ser refinados, mas não excessivamente arredondados.

## 6.1 Radius
```css
--radius-sm: 0.5rem;   /* 8px */
--radius-md: 0.75rem;  /* 12px */
--radius-lg: 1rem;     /* 16px */
--radius-xl: 1.25rem;  /* 20px */
```

## 6.2 Aplicação sugerida
- botões: `12px`
- inputs: `12px`
- cards: `16px`
- grandes painéis e blocos especiais: `20px`

## 6.3 Bordas
```css
border-subtle: 1px solid rgba(255,255,255,0.08);
border-strong: 1px solid rgba(255,255,255,0.14);
border-accent: 1px solid rgba(255,106,0,0.35);
```

## 6.4 Sombras
Sombras devem ser profundas e secas.

```css
--shadow-sm: 0 4px 12px rgba(0,0,0,0.16);
--shadow-md: 0 12px 24px rgba(0,0,0,0.22);
--shadow-lg: 0 18px 40px rgba(0,0,0,0.30);
--shadow-accent: 0 0 0 1px rgba(255,106,0,0.25), 0 14px 30px rgba(255,106,0,0.10);
```

---

## 7. Motion

O motion da RTT precisa parecer **resposta mecânica precisa**, não entretenimento.

## 7.1 Princípios
- curto
- firme
- funcional
- contido
- sem elasticidade exagerada

## 7.2 Duração
```css
--motion-fast: 120ms;
--motion-base: 180ms;
--motion-slow: 280ms;
--motion-section: 420ms;
```

## 7.3 Curvas
```css
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-enter: cubic-bezier(0.16, 1, 0.3, 1);
--ease-exit: cubic-bezier(0.7, 0, 0.84, 0);
```

## 7.4 Comportamentos recomendados
- botão em hover: elevação mínima + brilho suave + `translateY(-1px)`
- cards: realce de borda e sombra, sem zoom exagerado
- seções: fade-in com leve deslocamento vertical
- hero: parallax muito sutil
- sticky header: leve blur e opacidade controlada
- ícones: animações simples, nunca caricatas

## 7.5 Acessibilidade de motion
Implementar `prefers-reduced-motion` para reduzir:
- parallax
- transições longas
- animações de entrada

---

## 8. Componentes principais

## 8.1 Botões

### Botão primário
Uso: CTA principal

**Características**
- fundo laranja
- texto escuro ou branco de alto contraste
- peso 600
- altura confortável
- sensação de comando

```css
background: var(--rtt-orange-500);
color: var(--rtt-coal-950);
border-radius: 12px;
padding: 14px 22px;
```

**Hover**
- fundo levemente mais claro
- leve elevação
- sombra de acento controlada

### Botão secundário
Uso: ações de apoio

```css
background: transparent;
color: var(--rtt-white);
border: 1px solid rgba(255,255,255,0.16);
```

### Botão ghost
Uso: links discretos ou contexto editorial

```css
background: transparent;
color: var(--rtt-sand-100);
```

### Microcopy recomendada
- **Solicitar proposta técnica**
- **Falar com um especialista**
- **Agendar uma conversa estratégica**

---

## 8.2 Cards

Os cards da RTT devem parecer placas técnicas premium.

**Características**
- fundo escuro separado do fundo base
- borda sutil
- raio médio
- padding generoso
- ícone ou label no topo
- destaque em laranja apenas para hierarquia

**Estrutura sugerida**
1. Eyebrow ou ícone
2. Título forte
3. Texto curto
4. Link ou ação

---

## 8.3 Header

### Comportamento
- fixo no topo
- fundo translúcido escuro com blur leve
- altura compacta
- CTA sempre visível em desktop

### Navegação
Itens curtos:
- Treinamento
- Demonstração Veicular
- Projetos
- Sobre
- Contato

### Logo
A marca deve aparecer preferencialmente em versão horizontal simplificada, para melhorar leitura no cabeçalho.

---

## 8.4 Hero section

O hero é o bloco de maior impacto emocional e deve traduzir autoridade instantânea.

### Estrutura ideal
- eyebrow técnico
- headline forte
- subheadline clara
- 1 CTA primário
- 1 CTA secundário opcional
- imagem ou vídeo de operação real
- overlay escuro para legibilidade

### Regras visuais
- headline em até 2 ou 3 linhas
- fundo com fotografia de alta qualidade
- evitar excesso de elementos flutuantes
- contraste muito forte entre texto e imagem

---

## 8.5 Formulários

Os formulários devem transmitir sofisticação e baixo atrito.

### Estilo
- fundos escuros
- bordas discretas
- labels claros
- foco em laranja
- campos espaçosos
- mensagens de erro objetivas

```css
input-bg: rgba(255,255,255,0.03);
input-border: rgba(255,255,255,0.10);
input-border-focus: rgba(255,106,0,0.60);
```

### Campos ideais
- nome
- empresa
- e-mail
- telefone
- tipo de projeto
- mensagem

---

## 8.6 Blocos de prova

A RTT precisa sustentar sua autoridade com evidência visual e factual.

### Componentes recomendados
- logos de clientes
- indicadores numéricos
- mini cases
- depoimentos institucionais
- fotos reais de campo

### Estilo
- layout limpo
- números grandes
- sem excesso de texto
- uso de laranja apenas para destacar dado-chave

---

## 9. Iconografia e grafismos

## 9.1 Estilo de ícones
- traço limpo
- peso médio
- geométricos
- sem desenho infantil
- preferencialmente outline com preenchimento seletivo

## 9.2 Temas visuais aderentes
- terreno
- direção
- controle
- engenharia
- segurança
- precisão
- operação

## 9.3 Grafismos de apoio
Podem aparecer discretamente:
- linhas curvas inspiradas em pista
- grids técnicos
- marcas de coordenada
- pontos de navegação
- contornos inspirados em painel automotivo

Esses recursos devem ser sutis e não competir com o conteúdo.

---

## 10. Fotografia e imagem

A imagem é decisiva para o valor percebido da RTT.

## 10.1 Direção fotográfica
Priorizar cenas reais de:
- veículos em operação
- treinamento em terreno complexo
- equipes em briefing
- demonstração técnica
- close de detalhes mecânicos
- poeira, lama, pedra, inclinação, torque visual

## 10.2 Tratamento
- contraste médio-alto
- saturação controlada
- pretos profundos
- laranja da marca pode aparecer por correlação, nunca por filtro artificial exagerado

## 10.3 Evitar
- banco de imagem genérico
- sorriso publicitário excessivo
- estética de turismo de aventura
- imagens claras demais ou “ensolaradas demais”
- excesso de filtros cinematográficos

---

## 11. Storytelling visual por seção

## 11.1 Hero
Mensagem: **controle absoluto em qualquer terreno**

Visual: operação real, escala, tensão silenciosa, domínio

## 11.2 Posicionamento
Mensagem: **não operamos veículos. Desenvolvemos capacidade.**

Visual: blocos escuros, tipografia firme, dados curtos

## 11.3 Serviços
Mensagem: **treinamento e demonstração com rigor técnico**

Visual: cards estruturados, ícones limpos, imagens reais

## 11.4 Prova
Mensagem: **confiança construída em campo**

Visual: logos, números, clientes, indicadores e cases

## 11.5 CTA final
Mensagem: **seu projeto exige controle em terreno extremo?**

Visual: fundo mais limpo, alto contraste, foco total na ação

---

## 12. Responsividade

## Mobile
- hero mais compacto
- headline com melhor quebra
- CTAs empilhados
- cards em coluna única
- menu com navegação simples e CTA acessível

## Tablet
- grids em 2 colunas
- bom espaço para imagens e prova social

## Desktop
- hero em layout dividido ou overlay
- cards em 3 colunas
- provas numéricas em linha
- navegação com sensação institucional premium

---

## 13. Tokens resumidos

```css
:root {
  --background: #0E0E0E;
  --foreground: #F5F1EB;

  --card: #1B1B1B;
  --card-foreground: #F5F1EB;

  --popover: #141414;
  --popover-foreground: #F5F1EB;

  --primary: #FF6A00;
  --primary-foreground: #070707;

  --secondary: #1F1F1F;
  --secondary-foreground: #F5F1EB;

  --muted: #2E2E2E;
  --muted-foreground: #E8DED0;

  --accent: #FF7E1F;
  --accent-foreground: #070707;

  --border: rgba(255,255,255,0.10);
  --input: rgba(255,255,255,0.08);
  --ring: rgba(255,106,0,0.60);

  --radius: 1rem;
}
```

---

## 14. Resumo executivo

O design system da RTT deve comunicar uma marca que une:
- **presença premium**
- **rigor técnico**
- **estética robusta**
- **segurança operacional**
- **clareza comercial**

O site precisa parecer menos uma vitrine promocional e mais uma plataforma de autoridade.

A combinação correta para a RTT é:

> **escuro sofisticado + laranja de comando + tipografia forte + motion preciso + imagens reais de operação**

Esse conjunto sustenta o storytelling da marca e reforça a copy já construída:
**domínio, controle, segurança e performance em qualquer terreno.**
