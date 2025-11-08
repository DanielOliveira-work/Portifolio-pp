---
title: "Site Portfólio – Documentação do Projeto"
version: "1.0"
date: "2025-11-08"
author: "Cascade Assistant"
status: "draft"
summary: "Documentação sintetizada do site portfólio Daniel Oliveira, cobrindo escopo, arquitetura e fluxo de usuário."
---

# 1. Visão Geral
- **Objetivo**: Apresentar o portfólio de Daniel Oliveira com foco em experiências front-end e permitir agendamento rápido de reuniões.
- **Páginas**: `index.html` (landing principal) e `schedule.html` (agendamento).
- **Principais features**:
  - Hero em dark mode com seletor de idioma (PT/EN).
  - Carrossel de projetos com detalhes expansíveis.
  - CTA "Book a project call" levando ao formulário de agendamento.
  - Formulário com validação básica (`required`) e preferência de contato.

# 2. Stack & Ferramentas
- **Frontend**: HTML5, CSS3 (Grid & Flexbox), JavaScript ES6.
- **Assets**: SVG inline, imagem do autor (`assets/daniel oliveira.jpg`).
- **Internacionalização**: script customizado (`script.js`) com dicionário `translations` e atributos `data-i18n`.
- **Documentação & Diagramas**: Markdown + Mermaid (conforme `GLOBAL_RULES.md`).

# 3. Estrutura de Pastas (trecho relevante)
```
Site portifolio/
├── index.html
├── schedule.html
├── styles.css
├── script.js
└── docs/
    └── project-doc.md   ← (este arquivo)
```

# 4. Arquitetura da Interface
- **Header (index)**: `hero-frame` com meta progress bar, navegação minimalista e seletor de idioma.
- **Hero Copy**: destaca "Daniel Oliveira, desenvolvedor fullstack" com CTAs.
- **Hero Visual**: composição estilizada simulando estátua rubra (divs CSS).
- **Seção Sobre**: blocos `bio-block` para front/back-end.
- **Projetos**: carrossel com botões, dots e detalhes colapsáveis.
- **Contato**: links (GitHub, LinkedIn, Email) com ícones SVG.
- **Schedule Page**: replica header com seletor de idioma; formulário dividido em texto + inputs.

# 5. Fluxo de Tradução
1. Usuário alterna idioma via `.lang-option` → evento dispara `setLanguage` em `script.js`.
2. Função `applyTranslations` atualiza o atributo `lang` no `html` e percorre elementos `data-i18n`.
3. Textos dinâmicos (botões "Ver detalhes"/"Ver projetos") usam `data-i18n-alt` para sincronizar estados.
4. Idioma persistido em `localStorage` (`preferredLanguage`).

# 6. Testes & Qualidade (Atuais)
- Testes manuais de navegação, responsividade e troca de idioma.
- Acessibilidade básica: contraste ajustado, `aria-label` nos controles do carrossel.
- Próximos incrementos recomendados: testes automatizados de UI (Playwright) e validação de i18n.

# 7. Fluxograma – Jornada do Usuário
```mermaid
flowchart LR
    Start([Visitante acessa index.html]) --> Hero[Explora hero + nav]
    Hero -->|Clica "See more"| Projetos[Carrossel de projetos]
    Hero -->|Clica "Book a project call"| Schedule[/schedule.html/]
    Projetos -->|Seleciona detalhe| Detalhes{Deseja agendar?}
    Detalhes -->|Não| Fim1([Continua navegando])
    Detalhes -->|Sim| Schedule
    Schedule --> Form[Preenche formulário]
    Form --> Preferencia{Prefere Email ou WhatsApp?}
    Preferencia -->|Email| Confirma([Envia pedido])
    Preferencia -->|WhatsApp| Confirma
    Confirma --> Sucesso([Contato em andamento])
```

# 8. Referências
- `GLOBAL_RULES.md` – regras globais versão 12.0 (produção-first, documentação viva, diagramas como código).
- Repositório atual do site (estrutura descrita acima).

> **Manutenção**: atualizar este documento a cada mudança relevante (novas páginas, integrações externas, ajustes no fluxo de agendamento ou evolução de i18n).
