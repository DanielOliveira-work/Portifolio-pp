# RD - Portfólio Daniel Oliveira

## 1. Troca de idioma (PT / EN)

**Arquivos envolvidos**
- `index.html`
- `schedule.html`
- `script.js`

### Como funciona
- Todos os textos traduzíveis usam o atributo `data-i18n` no HTML.
- Os botões de idioma são:
  - `.lang-option[data-lang="pt"]`
  - `.lang-option[data-lang="en"]`
- No `script.js` há:
  - Objeto `translations` com os textos em `pt` e `en`.
  - Função `applyTranslations(lang)` que percorre os elementos com `data-i18n`.
  - Função `setupLangSwitch()` que escuta os cliques nos botões de idioma e chama `applyTranslations`.

### Pontos importantes
- Traduções da página inicial (`index.html`) e de agendamento (`schedule.html`) já estão mapeadas no objeto `translations`.
- Se adicionar novos textos traduzíveis:
  1. Colocar `data-i18n="chave.nova"` no HTML.
  2. Adicionar a chave correspondente em `translations.pt` e `translations.en` no `script.js`.

---

## 2. Carrossel de projetos (slider)

**Arquivos envolvidos**
- `index.html`
- `styles.css` (estilos visuais)
- `script.js`

### Estrutura HTML (já pronta em `index.html`)
- Container: elemento com `data-slider`.
- Trilho: `.slider-track`.
- Slides: elementos com `data-slide`.
- Setas:
  - Botão anterior: `[data-slider-prev]`.
  - Botão próximo: `[data-slider-next]`.
- Dots: container `[data-slider-dots]`.

### Lógica JS (em `script.js`)
- Função `setupSlider()`:
  - Localiza o container `data-slider` e os slides `data-slide`.
  - Cria dots dentro de `[data-slider-dots]` com a classe `slider-dot`.
  - Controla o índice atual `currentIndex`.
  - Função interna `goToSlide(index)`:
    - Normaliza o índice (loop infinito: fim volta para o começo e vice-versa).
    - Calcula `offsetLeft` do slide atual.
    - Aplica `track.style.transform = translateX(-offset)`.
    - Atualiza o estado visual dos dots (classe `is-active`).
  - Eventos:
    - Clique em `[data-slider-prev]` → slide anterior.
    - Clique em `[data-slider-next]` → próximo slide.
    - Clique em cada dot → vai direto para o slide.
    - `resize` da janela → reposiciona o slide atual.

### O que conferir amanhã
- Garantir que o CSS tenha estilos para:
  - `.slider-track` com `display: flex;` e transição de `transform`.
  - `.slider-dot` e `.slider-dot.is-active` para o visual dos pontinhos.
- Se quiser ajustar o comportamento (ex: autoplay), fazer isso dentro de `setupSlider()`.

---

## 3. Formulário de agendamento + EmailJS

**Arquivos envolvidos**
- `schedule.html`
- `script.js`
- Painel do EmailJS (web)

### Estrutura do formulário (`schedule.html`)
- Formulário principal: `<form class="form-grid">`.
- Campos:
  - `input[name="firstName"]` (obrigatório)
  - `input[name="lastName"]` (opcional)
  - `input[name="phone"]` (obrigatório)
  - `input[name="email"]` (obrigatório)
  - `input[type="radio"][name="contactPreference"]` com valores `email` e `whatsapp`.
- Botão de envio:
  - `button.schedule-submit` com texto traduzível `data-i18n="schedule.form.submit"`.
- Mensagem de status (já adicionada):
  ```html
  <p class="form-status" data-form-status></p>
  ```
- Scripts no final do `body`:
  ```html
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
  <script src="script.js"></script>
  ```

### Integração com EmailJS (`script.js`)

No topo do arquivo, após `let currentLang = 'pt';`, existem três constantes para configurar:

```javascript
const EMAILJS_SERVICE_ID = '';
const EMAILJS_TEMPLATE_ID = '';
const EMAILJS_PUBLIC_KEY = '';
```

Esses valores devem ser preenchidos amanhã com:
- `EMAILJS_SERVICE_ID` → Service ID criado no painel do EmailJS.
- `EMAILJS_TEMPLATE_ID` → Template ID do email que será enviado.
- `EMAILJS_PUBLIC_KEY` → Public Key (antigo `user_id`) da sua conta.

### Envio do formulário

- Função `setupScheduleForm()`:
  - Localiza o formulário `.form-grid` (se não existir, retorna).
  - Localiza o elemento de status `[data-form-status]` e o botão `.schedule-submit`.
  - Adiciona listener de `submit`:
    1. Dá `event.preventDefault()`.
    2. Lê os campos `firstName`, `lastName`, `phone`, `email`, `contactPreference`.
    3. Se **nome, telefone ou email** estiverem vazios:
       - Mostra mensagem de validação em `[data-form-status]` usando:
         - `translations[currentLang]['schedule.form.status.validation']`.
    4. Se EmailJS não estiver configurado (faltar SDK ou IDs):
       - Mostra mensagem de erro genérica em `[data-form-status]`.
    5. Se estiver tudo certo:
       - Desabilita o botão de envio.
       - Limpa o status.
       - Inicializa o EmailJS com `emailjs.init(EMAILJS_PUBLIC_KEY);`.
       - Envia os dados com `emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)`.
       - `templateParams` contém:
         ```javascript
         {
           firstName,
           lastName,
           phone,
           email,
           contactPreference,
         }
         ```
       - Em caso de sucesso:
         - Reseta o formulário.
         - Mostra mensagem de sucesso (`schedule.form.status.success`).
       - Em caso de erro:
         - Mostra mensagem de erro (`schedule.form.status.error`).
       - No `finally`:
         - Reabilita o botão de envio.

- `setupScheduleForm()` é chamada dentro do `DOMContentLoaded`:
  ```javascript
  window.addEventListener('DOMContentLoaded', () => {
    setupLangSwitch();
    setupSmoothScroll();
    setupScheduleForm();
    setupSlider();
    applyTranslations(currentLang);
  });
  ```

### O que fazer amanhã no EmailJS

1. **Criar/confirmar o Service**
   - Criar um serviço (SMTP, Gmail, etc.) no EmailJS.
   - Copiar o `Service ID` → preencher `EMAILJS_SERVICE_ID` no `script.js`.

2. **Criar Template**
   - Criar um template no EmailJS com as variáveis:
     - `firstName`
     - `lastName`
     - `phone`
     - `email`
     - `contactPreference`
   - Exemplo de uso no corpo do email:
     - Nome: `{{firstName}} {{lastName}}`
     - Telefone: `{{phone}}`
     - Email: `{{email}}`
     - Preferência de contato: `{{contactPreference}}`
   - Copiar o `Template ID` → preencher `EMAILJS_TEMPLATE_ID` no `script.js`.

3. **Pegar a Public Key**
   - No painel do EmailJS, pegar a chave pública (`Public Key`).
   - Preencher `EMAILJS_PUBLIC_KEY` no `script.js`.

4. **Testar o fluxo**
   - Abrir `schedule.html` no navegador.
   - Preencher Nome, Telefone, Email e selecionar preferência.
   - Clicar em "Enviar pedido".
   - Conferir se o status mostra sucesso e se o email chega na caixa de entrada configurada.

---

## 4. Próximos passos sugeridos

- Ajustar estilização dos dots do slider (`.slider-dot` e `.slider-dot.is-active`) no `styles.css`.
- Revisar textos PT/EN nas traduções do `script.js` para linguagem de marca/portfólio.
- Se necessário, adicionar mais campos no formulário (ex: mensagem do projeto) seguindo o mesmo padrão `data-i18n` + EmailJS.
