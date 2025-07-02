// Simple language switcher
const translations = {
  es: {
    about: "Acerca de",
    benefits: "Beneficios",
    how: "Cómo funciona",
    gallery: "Galería",
    contact: "Contacto",
    slogan: "Con amor por dentro",
    intro: "Cajas de regalo profesionales para agentes inmobiliarios. Sorprende a tus clientes, crea momentos inolvidables.",
    cta: "Contáctanos",
    aboutText: "Creamos cajas de regalo exclusivas, artísticas y elegantes para que agentes inmobiliarios impresionen y deleiten a sus clientes en cada cierre.",
    benefit1: "<strong>Memorable:</strong> Destaca con un obsequio único.",
    benefit2: "<strong>Profesionalismo:</strong> Eleva la experiencia de tu cliente.",
    benefit3: "<strong>Personalización:</strong> Adaptado para cada ocasión.",
    step1: "Selecciona tu caja",
    step2: "Personaliza con tu marca",
    step3: "Entregamos en tu oficina o cliente",
    send: "Enviar"
  },
  en: {
    about: "About",
    benefits: "Benefits",
    how: "How it works",
    gallery: "Gallery",
    contact: "Contact",
    slogan: "With love inside",
    intro: "Professional gift boxes for real estate agents. Impress your clients, create unforgettable moments.",
    cta: "Get in touch",
    aboutText: "We create exclusive, artistic, and elegant gift boxes for real estate agents to impress and delight clients at every closing.",
    benefit1: "<strong>Memorability:</strong> Stand out with a unique gift.",
    benefit2: "<strong>Professionalism:</strong> Elevate your client experience.",
    benefit3: "<strong>Customization:</strong> Tailored for each occasion.",
    step1: "Select your box",
    step2: "Personalize with your brand",
    step3: "We deliver to your office or client",
    send: "Send"
  }
};

function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = translations[lang][key] || el.innerHTML;
  });
}

document.getElementById('lang-switcher').addEventListener('change', (e) => {
  setLang(e.target.value);
});

// On page load, set default language
setLang('en');
