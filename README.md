# Portfólio Daniel Oliveira 2026

Portfólio profissional de Daniel Oliveira, desenvolvedor full-stack. Site estático com design moderno, animações fluidas e sistema de internacionalização.

---

## Visão Geral

Este é um portfólio digital profissional desenvolvido para apresentar as competências técnicas de Daniel Oliveira como desenvolvedor full-stack, exibir projetos realizados e estabelecer canal direto para oportunidades de negócio.

**Slogan**: "Arquitetando o amanhã"

---

## Estrutura do Projeto

```
Daniel-Oliveira-Portifolio/
├── index.html              # Página principal (Hero)
├── sobre.html              # Página sobre/biografia
├── projetos.html           # Galeria de projetos (carrossel)
├── projeto-fotografia.html # Detalhe: Blog de Fotografia
├── projeto-brecho.html     # Detalhe: Brechó Online
├── schedule.html           # Formulário de agendamento
├── styles.css              # Estilos globais (63KB)
├── script.js               # Lógica JavaScript (18KB)
├── assets/                 # Imagens e recursos estáticos
│   ├── danielpng.png       # Foto profissional
│   └── *.png               # Screenshots de projetos
├── docs/                   # Documentação adicional
├── PRD.md                  # Product Requirements Document
├── RD.md                   # Requirements Document Detalhado
└── .vscode/                # Configurações do VS Code
```

---

## Funcionalidades Principais

### 1. Página Inicial (Hero)
- **Splash screen animado** com transições suaves
- Apresentação profissional com foto e badge "PORTFOLIO 2026"
- Navegação intuitiva para seções principais
- CTA primário para agendamento de chamada
- Barra de progresso visual animada

### 2. Sistema de Temas
- **Dark/Light mode** com persistência via localStorage
- Transições suaves entre temas (0.3s)
- Cores consistentes em ambos os modos
- Toggle com ícones SVG de lua e sol

### 3. Internacionalização (i18n)
- **Bilíngue PT/EN** com troca instantânea
- Persistência da preferência de idioma
- 50+ chaves de tradução organizadas
- Suporte a futuras expansões de idiomas

### 4. Carrossel de Projetos
- **Slider horizontal** navegável (touch/mouse/drag)
- Cards com imagens de capa e efeitos hover
- Scroll snap para navegação precisa
- Botões de navegação prev/next
- Design responsivo com `clamp()`

### 5. Sistema de Agendamento
- Formulário de contato validado
- Integração com **EmailJS** para notificações
- Preferência de contato (email/whatsapp)
- Feedback visual de status (sucesso/erro/validação)
- Campos obrigatórios: nome, telefone, email

---

## Stack Tecnológico

| Camada | Tecnologia |
|--------|------------|
| **Frontend** | HTML5, CSS3, JavaScript Vanilla |
| **Estilização** | CSS Custom Properties, Flexbox, Grid |
| **Animações** | CSS Transitions, requestAnimationFrame |
| **Integração** | EmailJS (formulários) |
| **Hospedagem** | Static hosting (GitHub Pages/Vercel) |

---

## Arquitetura de Cores

```css
/* Tema Escuro (Default) */
--bg-primary: #040509
--text-primary: #f4f6ff
--accent: #ff335c

/* Tema Claro */
--bg-primary: #f0f2f8
--text-primary: #0d0f1a
--accent: #ff335c
```

**Cor de destaque**: `#ff335c` (rosa/vermelho vibrante)

---

## Páginas do Site

| Página | Descrição | Arquivo |
|--------|-----------|---------|
| **Home** | Hero com apresentação principal | `index.html` |
| **Sobre** | Biografia, skills e diferenciais | `sobre.html` |
| **Projetos** | Galeria carrossel de projetos | `projetos.html` |
| **Projeto Fotografia** | Detalhes do blog de fotografia | `projeto-fotografia.html` |
| **Projeto Brechó** | Detalhes do e-commerce | `projeto-brecho.html` |
| **Contato** | Formulário de agendamento | `schedule.html` |

---

## Sistema de Internacionalização

### Como Funciona

```javascript
// Objeto de traduções em script.js
const translations = {
  pt: { 'hero.badge': 'PORTFOLIO 2026', ... },
  en: { 'hero.badge': 'PORTFOLIO 2026', ... }
};

// Atributo data-i18n nos elementos HTML
<span data-i18n="hero.badge">PORTFOLIO 2026</span>
```

### Adicionar Novas Traduções

1. Adicione `data-i18n="chave.subchave"` no elemento HTML
2. Inclua a chave em `translations.pt` e `translations.en`
3. Chame `applyTranslations(currentLang)` se necessário

---

## Performance

### Métricas Alvo
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Otimizações Implementadas
- CSS minificado (63KB)
- JavaScript modular (18KB)
- Imagens otimizadas
- Critical CSS inline para splash
- Font display com fallback

---

## Acessibilidade (WCAG 2.1 AA)

- Navegação por teclado completa
- ARIA labels em elementos interativos
- Contraste adequado (> 4.5:1)
- Screen reader friendly
- Tamanhos de fonte responsivos (clamp)

---

## Roadmap

### Versão 1.0 (Atual)
- ✅ Estrutura base e navegação
- ✅ Sistema de temas e i18n
- ✅ Galeria de projetos funcional
- ✅ Formulário de contato

### Versão 1.1 (Próximo)
- 📝 Blog técnico integrado
- 📝 Filtros para projetos
- 📝 Animações GSAP avançadas
- 📝 Google Analytics

### Versão 2.0 (Futuro)
- 📝 CMS headless (Strapi/Contentful)
- 📝 Sistema de testemunhos
- 📝 Dashboard analytics
- 📝 PWA (Progressive Web App)

---

## Desenvolvimento

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- VS Code (recomendado)
- Live Server (extensão VS Code)

### Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/DanielOliveira-work/Daniel-Oliveira-Portifolio.git

# Acesse a pasta
cd Daniel-Oliveira-Portifolio

# Abra no VS Code
code .

# Inicie com Live Server
# Clique em "Go Live" na barra de status
```

---

## Configuração EmailJS

Para ativar o formulário de contato:

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email (Gmail/SMTP)
3. Crie um template com as variáveis:
   - `{{firstName}}`, `{{lastName}}`
   - `{{phone}}`, `{{email}}`
   - `{{contactPreference}}`
4. Obtenha suas credenciais (Service ID, Template ID, Public Key)
5. Atualize no `script.js`:

```javascript
const EMAILJS_SERVICE_ID = 'seu_service_id';
const EMAILJS_TEMPLATE_ID = 'seu_template_id';
const EMAILJS_PUBLIC_KEY = 'sua_public_key';
```

---

## Contato

- **GitHub**: [github.com/DanielOliveira-work](https://github.com/DanielOliveira-work)
- **Instagram**: [@daniel.oliveira.tdh](https://www.instagram.com/daniel.oliveira.tdh/)
- **Instagram Fotografia**: [@refex.street](https://www.instagram.com/refex.street/)

---

## Licença

© 2026 Daniel Oliveira. Todos os direitos reservados.

---

*Documentação atualizada em Abril 2026*
