# RD - Requirements Document Detalhado
## Portfólio Daniel Oliveira 2026

---

## Visão Geral

Este documento detalha os requisitos técnicos e funcionais do portfólio de Daniel Oliveira, servindo como guia de implementação e referência para manutenção futura.

---

## 1. Arquitetura e Estrutura de Arquivos

### 1.1 Estrutura de Diretórios
```
portifolio-daniel/
├── index.html              # Página principal (hero)
├── sobre.html              # Página sobre/biografia
├── projetos.html           # Galeria de projetos (carrossel)
├── projeto-fotografia.html # Detalhe do projeto fotografia
├── projeto-brecho.html     # Detalhe do projeto brechó
├── schedule.html           # Formulário de agendamento
├── styles.css              # Estilos globais (49KB)
├── script.js               # Lógica JavaScript (45KB)
├── assets/                 # Imagens e recursos
│   ├── danielpng.png       # Foto profissional
│   ├── Captura de tela 2025-12-14 125703.png
│   └── Captura de Tela 2026-04-02 às 09.19.25.png
├── docs/                   # Documentação
└── .vscode/                # Configurações VS Code
```

### 1.2 Padrão de Nomenclatura
- **HTML**: kebab-case (ex: `projeto-fotografia.html`)
- **CSS**: BEM methodology (ex: `.hero-photo-wrap`)
- **JavaScript**: camelCase (ex: `setupLangSwitch`)
- **Assets**: descritivo com data/hora para capturas

---

## 2. Sistema de Internacionalização (i18n)

### 2.1 Implementação Técnica

**Arquivos envolvidos**
- `index.html`, `sobre.html`, `projetos.html`, `schedule.html`
- `script.js` (objeto `translations`)

### 2.2 Estrutura de Dados

**Objeto translations (script.js)**:
```javascript
const translations = {
  pt: {
    'hero.badge': 'PORTFOLIO 2026',
    'hero.nav.about': 'Sobre',
    'hero.nav.gallery': 'Projetos',
    'hero.nav.contacts': 'Contato',
    // ... 50+ chaves de tradução
  },
  en: {
    'hero.badge': 'PORTFOLIO 2026',
    'hero.nav.about': 'About',
    'hero.nav.gallery': 'Projects',
    'hero.nav.contacts': 'Contact',
    // ... traduções correspondentes
  }
};
```

### 2.3 Mecanismo de Funcionamento
- **Atributos HTML**: `data-i18n="chave.subchave"` nos elementos traduzíveis
- **Botões de idioma**: `.lang-option[data-lang="pt|en"]` com toggle de classe `is-active`
- **Função principal**: `applyTranslations(lang)` percorre DOM e substitui conteúdo
- **Persistência**: `localStorage.getItem('lang')` mantém preferência do usuário
- **Inicialização**: Aplica idioma salvo no `DOMContentLoaded`

### 2.4 Padrão para Novas Traduções
1. Adicionar `data-i18n="nova.chave"` no elemento HTML
2. Incluir chave em `translations.pt` e `translations.en`
3. Chamar `applyTranslations(currentLang)` se necessário dinamicamente

---

## 3. Sistema de Temas (Dark/Light Mode)

### 3.1 Implementação Técnica

**Arquivos envolvidos**
- Todas as páginas HTML
- `styles.css` (CSS custom properties)
- `script.js` (toggle logic)

### 3.2 Estrutura CSS

**CSS Custom Properties**:
```css
:root[data-theme="dark"] {
  --bg-primary: #040509;
  --text-primary: #f4f6ff;
  --accent: #ff335c;
}

:root[data-theme="light"] {
  --bg-primary: #f0f2f8;
  --text-primary: #0d0f1a;
  --accent: #ff335c;
}
```

### 3.3 Funcionalidade JavaScript
- **Botão toggle**: `.theme-toggle` com ícones SVG
- **Storage**: `localStorage.getItem('theme')` para persistência
- **Inicialização**: Aplica tema salvo antes do render
- **Splash screen**: Sempre escuro independentemente do tema

### 3.4 Estados Visuais
- **Dark mode**: Fundo #040509, texto claro, alto contraste
- **Light mode**: Fundo claro #f0f2f8, texto escuro, mesma cor de destaque
- **Transição**: Suave 0.3s entre mudanças

---

## 4. Carrossel de Projetos (Slider)

### 4.1 Implementação Técnica

**Arquivos envolvidos**
- `projetos.html` (estrutura principal)
- `styles.css` (estilos visuais)
- `script.js` (lógica de interação)

### 4.2 Estrutura HTML
```html
<div class="proj-stage">
  <div class="proj-track" id="projTrack">
    <a href="projeto-fotografia.html" class="proj-item">
      <div class="proj-item-bg" style="background-image:url(...)"></div>
      <div class="proj-item-top">
        <span class="proj-item-cat">Blog · Fotografia</span>
        <h2 class="proj-item-name">Blog de<br>Fotografia</h2>
      </div>
      <span class="proj-item-label">FOTOGRAFIA</span>
    </a>
    <!-- mais projetos... -->
  </div>
</div>
<div class="proj-bar">
  <button class="proj-btn" id="projPrev">← PREV</button>
  <button class="proj-btn" id="projNext">NEXT →</button>
</div>
```

### 4.3 Funcionalidades JavaScript
- **Navegação**: Botões prev/next com scroll suave
- **Drag support**: Mouse e touch para arrastar
- **Scroll snap**: `scroll-snap-type: x mandatory`
- **Responsivo**: Largura dinâmica `clamp(280px, 33vw, 460px)`
- **Threshold**: 50px de drag para avançar slide

### 4.4 Estilos e Interações
- **Hover effects**: Scale 1.06 e brightness 0.65
- **Smooth scrolling**: `scroll-behavior: smooth`
- **Touch friendly**: Cursor grab/grabbing
- **Barra de navegação**: Fixed bottom com botões

---

## 5. Sistema de Agendamento + EmailJS

### 5.1 Implementação Técnica

**Arquivos envolvidos**
- `schedule.html` (formulário e UI)
- `script.js` (validação e integração)
- EmailJS (serviço externo)

### 5.2 Estrutura do Formulário
```html
<form class="form-grid">
  <input name="firstName" required placeholder="Nome">
  <input name="lastName" placeholder="Sobrenome">
  <input name="phone" required placeholder="Telefone">
  <input name="email" required type="email" placeholder="Email">
  <div class="radio-group">
    <input type="radio" name="contactPreference" value="email" id="pref-email">
    <input type="radio" name="contactPreference" value="whatsapp" id="pref-whatsapp">
  </div>
  <button type="submit" class="schedule-submit">Enviar pedido</button>
  <p class="form-status" data-form-status></p>
</form>
```

### 5.3 Configuração EmailJS
```javascript
const EMAILJS_SERVICE_ID = 'service_id_aqui';
const EMAILJS_TEMPLATE_ID = 'template_id_aqui';
const EMAILJS_PUBLIC_KEY = 'public_key_aqui';
```

### 5.4 Fluxo de Funcionamento
1. **Validação cliente**: Nome, telefone, email obrigatórios
2. **Preparação dados**: `templateParams` com campos do formulário
3. **Envio EmailJS**: `emailjs.send(service, template, params)`
4. **Feedback usuário**: Status messages com traduções i18n
5. **Reset formulário**: Limpeza em caso de sucesso

### 5.5 Mensagens de Status
- **Validação**: `schedule.form.status.validation`
- **Sucesso**: `schedule.form.status.success`
- **Erro**: `schedule.form.status.error`
- **Carregando**: Estado visual no botão durante envio

### 5.6 Configuração Necessária
1. **Criar serviço EmailJS** (SMTP/Gmail)
2. **Criar template** com variáveis: `{{firstName}}`, `{{lastName}}`, `{{phone}}`, `{{email}}`, `{{contactPreference}}`
3. **Obter Public Key** do painel EmailJS
4. **Testar integração** completa

---

## 6. Splash Screen Animado

### 6.1 Implementação Técnica

**Arquivos envolvidos**
- `index.html` (estrutura e animação inline)
- `styles.css` (estilos base)

### 6.2 Estrutura HTML
```html
<div id="splash" style="position: fixed; inset: 0; z-index: 9999; ...">
  <p id="splash-phrase">Arquitetando o <span>amanhã</span></p>
  <div id="splash-line"></div>
  <p id="splash-name">Daniel Oliveira</p>
</div>
```

### 6.3 Timeline de Animação
- **0ms**: Opacity 0, transform translateY(16px)
- **400ms**: Fade in da frase principal
- **1200ms**: Linha horizontal expande para 180px
- **1500ms**: Nome aparece com fade in
- **4000ms**: Splash inteiro fade out e remove

### 6.4 Estilos Específicos
- **Background sempre escuro**: `#040509 !important`
- **Cor de destaque**: `#ff335c !important` para "amanhã"
- **Tipografia**: Inter, responsive com clamp()
- **Posicionamento**: Fixed, full viewport, centered

---

## 7. Performance e Otimização

### 7.1 Métricas Alvo
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **TTI**: < 3.5s (Time to Interactive)

### 7.2 Otimizações Implementadas
- **CSS Minificado**: 49KB otimizado
- **JavaScript modular**: 45KB com lazy loading
- **Imagens otimizadas**: Formatos modernos, lazy loading
- **Critical CSS inline**: Para splash screen
- **Font display**: Inter com fallback system-ui

### 7.3 Estratégias de Cache
- **Static assets**: Cache de 1 ano com versionamento
- **HTML**: Cache curto (1 hora)
- **Service Worker**: Considerar para PWA futuro

---

## 8. Acessibilidade (WCAG 2.1 AA)

### 8.1 Navegação por Teclado
- **Tab order**: Lógico e sequencial
- **Focus indicators**: Visíveis em ambos os temas
- **Skip links**: Para navegação rápida
- **ARIA labels**: Em todos os elementos interativos

### 8.2 Contraste e Legibilidade
- **Ratios**: > 4.5:1 para texto normal
- **Tamanhos**: Responsive com clamp()
- **Fontes**: Inter, legível em múltiplos dispositivos
- **Espaçamento**: Adequado para leitura

### 8.3 Suporte a Screen Readers
- **Semântica HTML5**: Proper heading structure
- **Alt text**: Descritivo para imagens
- **Roles**: ARIA onde necessário
- **Announcements**: Para mudanças de estado

---

## 9. SEO e Metadados

### 9.1 Meta Tags Implementadas
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Daniel Oliveira | Portfólio</title>
```

### 9.2 Estrutura Semântica
- **Heading hierarchy**: H1 → H2 → H3
- **Nav landmarks**: Menu principal e footer
- **Main content**: Devidamente marcado
- **Sections**: Conteúdo temático agrupado

### 9.3 Otimizações Futuras
- **Open Graph**: Para compartilhamento social
- **Structured data**: Schema.org para Person/Portfolio
- **Sitemap**: XML para search engines
- **Robots.txt**: Diretrizes de crawling

---

## 10. Deploy e Manutenção

### 10.1 Estratégia de Deploy
- **Hosting**: Static hosting (GitHub Pages/Vercel)
- **CDN**: Para assets globais
- **HTTPS**: Certificado SSL obrigatório
- **Custom domain**: danieloliveira.dev (sugestão)

### 10.2 Versionamento
- **Git flow**: Main/staging/feature branches
- **Semantic versioning**: v1.0.0, v1.1.0, etc.
- **Changelog**: Documentação de mudanças
- **Backup**: Regular e automatizado

### 10.3 Monitoramento
- **Analytics**: Google Analytics 4
- **Performance**: Core Web Vitals
- **Uptime**: Monitoramento de disponibilidade
- **Errors**: Captura automática de erros

---

## 11. Roadmap de Desenvolvimento

### 11.1 Versão 1.1 (Próximos 30 dias)
- [ ] Blog técnico integrado
- [ ] Sistema de filtros para projetos
- [ ] Animações avançadas (GSAP)
- [ ] Progressive Web App features

### 11.2 Versão 1.2 (60-90 dias)
- [ ] CMS headless (Strapi/Contentful)
- [ ] Sistema de testemunhos
- [ ] Dashboard analytics
- [ ] Otimização avançada de performance

### 11.3 Versão 2.0 (6+ meses)
- [ ] Reconstrução em React/Next.js
- [ ] E-commerce para produtos digitais
- [ ] Sistema de agendamento integrado
- [ ] API REST para projetos

---

## 12. Troubleshooting Comum

### 12.1 Problemas de Performance
- **Splash lento**: Verificar tamanho de assets
- **Carrossel travado**: Checar JavaScript errors
- **Tema não persiste**: Verificar localStorage

### 12.2 Problemas de Funcionalidade
- **EmailJS não envia**: Verificar configuração de chaves
- **Tradução não aplica**: Checar objeto translations
- **Formulário não valida**: Revisar required fields

### 12.3 Problemas de Estilo
- **Responsividade quebrada**: Testar breakpoints
- **Tema misturado**: Verificar CSS custom properties
- **Animações não funcionam**: Checar browser support

---

## 13. Referências e Recursos

### 13.1 Documentação
- **MDN Web Docs**: Referência HTML/CSS/JS
- **Can I Use**: Browser compatibility
- **Web.dev**: Performance e best practices
- **EmailJS Docs**: Integração de email

### 13.2 Ferramentas
- **Lighthouse**: Auditoria de performance
- **Wave**: Teste de acessibilidade
- **GTmetrix**: Análise de velocidade
- **Chrome DevTools**: Debugging

### 13.3 Comunidade
- **GitHub Issues**: Reportar problemas
- **Stack Overflow**: Suporte técnico
- **Dev.to**: Artigos e tutoriais
- **LinkedIn**: Networking profissional

---

## 14. Contato e Suporte

### 14.1 Informações de Contato
- **Email**: [seu-email@dominio.com]
- **GitHub**: github.com/DanielOliveira-work
- **Instagram**: @daniel.oliveira.tdh
- **LinkedIn**: [perfil-linkedin]

### 14.2 Suporte Técnico
- **Issues**: GitHub repository issues
- **Documentação**: Este arquivo RD.md
- **Wiki**: Repositório wiki (futuro)
- **FAQ**: Seção de perguntas frequentes

---

*Documento atualizado em Abril 2026*
*Versão: 2.0 - Revisão completa*
*Próxima revisão: Junho 2026*
