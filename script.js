const toggles = document.querySelectorAll('.toggle');

const translations = {
  pt: {
    'hero.badge': 'PORTFÓLIO 2025',
    'hero.step': '01<span class="divider"></span>03',
    'lang.pt': 'PT',
    'lang.en': 'EN',
    'hero.nav.about': 'SOBRE',
    'hero.nav.gallery': 'PROJETOS',
    'hero.nav.contacts': 'CONTATO',
    'hero.eyebrow': 'Experiência Front-end — lapidada',
    'hero.name': 'Daniel Oliveira,',
    'hero.role': 'desenvolvedor fullstack',
    'hero.description': 'Daniel Oliveira é um desenvolvedor full stack focado em experiências digitais sofisticadas, combinando UI minimalista com performance e acessibilidade.',
    'hero.cta.primary': 'Agendar projeto',
    'hero.cta.secondary': 'Ver projetos',
    'about.title': 'Sobre mim',
    'about.tagline': '🚀 O Arquiteto Digital — Full Stack Developer | Visão Estratégica & Execução Ágil',
    'about.intro': 'Sou um desenvolvedor full stack de 27 anos com a versatilidade necessária para construir o futuro digital, do conceito à entrega. Atualmente curso Análise e Desenvolvimento de Sistemas (ADS), unindo o rigor acadêmico com a prática intensa do mercado.',
    'about.frontend.title': 'Front-end',
    'about.frontend.desc': 'Interfaces modernas, intuitivas e responsivas. Foco em UX de alto nível que encanta e engaja, com atenção a microinterações e performance.',
    'about.backend.title': 'Back-end',
    'about.backend.desc': 'Lógica de negócio com código limpo, seguro e escalável. Construo APIs e integrações pensando em performance e manutenção.',
    'about.closing': 'Minha marca registrada é a precisão e a agilidade. Entrego projetos otimizados, alinhados aos objetivos do negócio e prontos para gerar impacto real.',
    'about.cta': 'Se você busca um parceiro que domina a stack completa e entrega valor com velocidade, vamos construir algo notável.',
    'projects.title': 'Projetos',
    'projects.card1.title': 'Landing Page de Portfólio',
    'projects.card1.desc': 'Homepage moderna para apresentar serviços e CTA de contato.',
    'projects.card1.details': 'Stack prevista: HTML, CSS, animações suaves. Próximo passo: wireframe.',
    'projects.card2.title': 'Dashboard Interativo',
    'projects.card2.desc': 'Visualização de dados fictícios com gráficos responsivos.',
    'projects.card2.details': 'Stack prevista: React, Tailwind. Próximo passo: definir componentes.',
    'projects.card3.title': 'Biblioteca de Componentes UI',
    'projects.card3.desc': 'Biblioteca de componentes reutilizáveis com design neon.',
    'projects.card3.details': 'Stack prevista: Web Components. Próximo passo: catalogar padrões.',
    'projects.toggle.show': 'Ver detalhes',
    'projects.toggle.hide': 'Ocultar detalhes',
    'projects.prev': 'Projeto anterior',
    'projects.next': 'Próximo projeto',
    'contact.title': 'Contato',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.email': 'Email',
    'footer.copy': '2025 Daniel Oliveira',
    'schedule.breadcrumb': '← Voltar para o portfólio',
    'schedule.title': 'Agende uma reunião',
    'schedule.subtitle': 'Reserve um horário para conversarmos sobre seu próximo projeto.',
    'schedule.text.title': 'Marque uma consulta gratuita',
    'schedule.text.body': 'Marque uma consulta gratuita para combinarmos um projeto demo. Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para divulgar ao mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença.',
    'schedule.form.title': 'Dados para contato',
    'schedule.form.firstName': 'Nome*',
    'schedule.form.lastName': 'Sobrenome',
    'schedule.form.phone': 'Telefone*',
    'schedule.form.email': 'Email*',
    'schedule.form.preference': 'Como prefere ser contatado?',
    'schedule.form.prefEmail': 'Email',
    'schedule.form.prefWhatsapp': 'WhatsApp',
    'schedule.form.submit': 'Enviar pedido'
  },
  en: {
    'hero.badge': 'PORTFOLIO 2025',
    'hero.step': '01<span class="divider"></span>03',
    'lang.pt': 'PT',
    'lang.en': 'EN',
    'hero.nav.about': 'ABOUT',
    'hero.nav.gallery': 'GALLERY',
    'hero.nav.contacts': 'CONTACTS',
    'hero.eyebrow': 'Front-end experience — crafted',
    'hero.name': 'Daniel Oliveira,',
    'hero.role': 'fullstack developer',
    'hero.description': 'Daniel Oliveira is a full stack developer focused on sophisticated digital experiences, blending minimalist UI with performance and accessibility.',
    'hero.cta.primary': 'Book a project call',
    'hero.cta.secondary': 'See more',
    'about.title': 'About me',
    'about.tagline': '🚀 The Digital Architect — Full Stack Developer | Strategic Vision & Agile Delivery',
    'about.intro': 'I am a 27-year-old full stack developer with the versatility to build the digital future from concept to delivery. I am currently pursuing Systems Analysis and Development, combining academic rigor with intense market practice.',
    'about.frontend.title': 'Front-end',
    'about.frontend.desc': 'Modern, intuitive and responsive interfaces. High-end UX that delights and engages, with attention to micro-interactions and performance.',
    'about.backend.title': 'Back-end',
    'about.backend.desc': 'Business logic with clean, secure and scalable code. I build APIs and integrations with performance and maintainability in mind.',
    'about.closing': 'My signature is precision and agility. I deliver optimized projects aligned with business goals and ready to drive real impact.',
    'about.cta': "If you need a partner who masters the full stack and delivers fast value, let's build something remarkable.",
    'projects.title': 'Projects',
    'projects.card1.title': 'Portfolio Landing Page',
    'projects.card1.desc': 'Modern homepage to showcase services and a contact CTA.',
    'projects.card1.details': 'Planned stack: HTML, CSS, smooth animations. Next step: wireframe.',
    'projects.card2.title': 'Interactive Dashboard',
    'projects.card2.desc': 'Data visualization concept with responsive charts.',
    'projects.card2.details': 'Planned stack: React, Tailwind. Next step: define components.',
    'projects.card3.title': 'UI Component Library',
    'projects.card3.desc': 'Reusable component library with a neon-inspired design.',
    'projects.card3.details': 'Planned stack: Web Components. Next step: catalogue patterns.',
    'projects.toggle.show': 'View details',
    'projects.toggle.hide': 'Hide details',
    'projects.prev': 'Previous project',
    'projects.next': 'Next project',
    'contact.title': 'Contact',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.email': 'Email',
    'footer.copy': '2025 Daniel Oliveira',
    'schedule.breadcrumb': '← Back to portfolio',
    'schedule.title': 'Book a meeting',
    'schedule.subtitle': "Choose a time so we can discuss your next project.",
    'schedule.text.title': 'Schedule a free consultation',
    'schedule.text.body': 'Book a complimentary session to plan a demo project. Everything starts with an idea—launch a business, scale a hobby, or present a creative concept to the world. However you tell your story online makes all the difference.',
    'schedule.form.title': 'Contact details',
    'schedule.form.firstName': 'First name*',
    'schedule.form.lastName': 'Last name',
    'schedule.form.phone': 'Phone*',
    'schedule.form.email': 'Email*',
    'schedule.form.preference': 'How do you prefer to be contacted?',
    'schedule.form.prefEmail': 'Email',
    'schedule.form.prefWhatsapp': 'WhatsApp',
    'schedule.form.submit': 'Send request'
  }
};

const DEFAULT_LANG = 'pt';
let currentLang = DEFAULT_LANG;

const langButtons = document.querySelectorAll('.lang-option');

const updateToggleLabel = (button, lang = currentLang) => {
  const state = button.dataset.toggleState || 'hidden';
  const showKey = button.dataset.i18n;
  const hideKey = button.dataset.i18nAlt;
  const key = state === 'hidden' ? showKey : hideKey;
  const label = translations[lang]?.[key];
  if (label) {
    button.textContent = label;
  }
};

const applyTranslations = (lang) => {
  currentLang = translations[lang] ? lang : DEFAULT_LANG;
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const translation = translations[currentLang]?.[key];
    if (!translation) {
      return;
    }

    if (el.dataset.i18nAttr) {
      el.setAttribute(el.dataset.i18nAttr, translation);
      if (!el.dataset.i18nHtml) {
        return;
      }
    }

    if (el.dataset.i18nHtml === 'true') {
      el.innerHTML = translation;
    } else if (!el.dataset.i18nAttr) {
      el.textContent = translation;
    }
  });

  toggles.forEach((button) => updateToggleLabel(button, currentLang));

  langButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === currentLang);
  });

  localStorage.setItem('preferredLanguage', currentLang);
};

const setLanguage = (lang) => {
  applyTranslations(lang);
};

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang || DEFAULT_LANG);
  });
});

const togglesArray = Array.from(toggles);

togglesArray.forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const hidden = details.classList.toggle('hidden');
    button.dataset.toggleState = hidden ? 'hidden' : 'visible';
    updateToggleLabel(button);
  });
});

const preferred = localStorage.getItem('preferredLanguage') || DEFAULT_LANG;
applyTranslations(preferred);

const carousel = document.querySelector('[data-carousel]');

document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.getAttribute('data-scroll'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

if (carousel) {
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.querySelectorAll('[data-slide]'));
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  const dotsContainer = carousel.querySelector('[data-carousel-dots]');
  let currentIndex = 0;

  const updateControls = () => {
    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === currentIndex);
    });

    dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
      dot.classList.toggle('is-active', index === currentIndex);
    });

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;

    const offset = slides[currentIndex].offsetLeft;
    track.style.transform = `translateX(-${offset}px)`;
  };

  const createDots = () => {
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Ir para o slide ${index + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateControls();
      });
      dotsContainer.appendChild(dot);
    });
  };

  const handleResize = () => {
    requestAnimationFrame(updateControls);
  };

  createDots();
  updateControls();

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateControls();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex += 1;
      updateControls();
    }
  });

  window.addEventListener('resize', handleResize);
}
