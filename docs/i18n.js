// Soft Landing - Internationalization
const translations = {
    en: {
        "hero.title": "A quiet space to process separation",
        "hero.subtitle": "60 seconds every evening. No analysis. No judgment.",
        "hero.cta": "Download on the App Store",
        "hero.trial": "14-day free trial included",
        "preview.question": "What do you need most right now?",
        "features.title": "Built for emotional exhaustion",
        "features.simple.title": "60 seconds",
        "features.simple.desc": "5 emojis. 1 question. That's it. No pressure, no performance.",
        "features.private.title": "100% private",
        "features.private.desc": "All data stays on your phone. Nothing uploaded, tracked, or analyzed.",
        "features.price.title": "One-time purchase",
        "features.price.desc": "$24.99. Once. Forever yours. No subscriptions, no recurring fees.",
        "features.design.title": "Calm design",
        "features.design.desc": "Dark mode only. Generous spacing. Built for when you're feeling vulnerable.",
        "how.title": "How it works",
        "how.step1.title": "Choose your mood",
        "how.step1.desc": "Tap the emoji that matches how you're feeling right now.",
        "how.step2.title": "Reflect",
        "how.step2.desc": "Answer a simple question. Write as much or as little as you want.",
        "how.step3.title": "Done",
        "how.step3.desc": "That's it. Close the app. Come back tomorrow if you want.",
        "nottherapy.title": "This is not therapy",
        "nottherapy.desc": "Soft Landing is a place to write for yourself. We don't give advice, analyze your feelings, or track your progress. If you need professional support, we include crisis resources in the app.",
        "download.title": "Ready to start?",
        "download.subtitle": "Available on iPhone and iPad. iOS 17.0 or later.",
        "download.price": "Free 14-day trial, then $24.99 one-time purchase",
        "footer.privacy": "Privacy Policy",
        "footer.support": "Support"
    },
    sv: {
        "hero.title": "Ett lugnt utrymme att bearbeta separation",
        "hero.subtitle": "60 sekunder varje kväll. Ingen analys. Ingen bedömning.",
        "hero.cta": "Ladda ner på App Store",
        "hero.trial": "14 dagars gratis provperiod",
        "preview.question": "Vad behöver du mest just nu?",
        "features.title": "Byggt för emotionell utmattning",
        "features.simple.title": "60 sekunder",
        "features.simple.desc": "5 emojis. 1 fråga. Det är allt. Ingen press, ingen prestation.",
        "features.private.title": "100% privat",
        "features.private.desc": "All data stannar på din telefon. Inget laddas upp, spåras eller analyseras.",
        "features.price.title": "Engångsköp",
        "features.price.desc": "249 kr. En gång. Din för alltid. Inga prenumerationer, inga återkommande avgifter.",
        "features.design.title": "Lugn design",
        "features.design.desc": "Endast mörkt läge. Generösa mellanrum. Byggt för när du känner dig sårbar.",
        "how.title": "Så fungerar det",
        "how.step1.title": "Välj ditt humör",
        "how.step1.desc": "Tryck på den emoji som matchar hur du känner dig just nu.",
        "how.step2.title": "Reflektera",
        "how.step2.desc": "Svara på en enkel fråga. Skriv så mycket eller lite du vill.",
        "how.step3.title": "Klart",
        "how.step3.desc": "Det var allt. Stäng appen. Kom tillbaka imorgon om du vill.",
        "nottherapy.title": "Det här är inte terapi",
        "nottherapy.desc": "Soft Landing är en plats att skriva för dig själv. Vi ger inga råd, analyserar inte dina känslor eller följer dina framsteg. Om du behöver professionellt stöd finns krisresurser i appen.",
        "download.title": "Redo att börja?",
        "download.subtitle": "Tillgänglig för iPhone och iPad. iOS 17.0 eller senare.",
        "download.price": "14 dagars gratis provperiod, sedan 249 kr engångsköp",
        "footer.privacy": "Integritetspolicy",
        "footer.support": "Support"
    },
    es: {
        "hero.title": "Un espacio tranquilo para procesar la separación",
        "hero.subtitle": "60 segundos cada noche. Sin análisis. Sin juicios.",
        "hero.cta": "Descargar en App Store",
        "hero.trial": "Prueba gratuita de 14 días incluida",
        "preview.question": "¿Qué es lo que más necesitas ahora mismo?",
        "features.title": "Diseñado para el agotamiento emocional",
        "features.simple.title": "60 segundos",
        "features.simple.desc": "5 emojis. 1 pregunta. Eso es todo. Sin presión, sin exigencias.",
        "features.private.title": "100% privado",
        "features.private.desc": "Todos los datos permanecen en tu teléfono. Nada se sube, rastrea o analiza.",
        "features.price.title": "Compra única",
        "features.price.desc": "$24.99. Una vez. Tuyo para siempre. Sin suscripciones, sin pagos recurrentes.",
        "features.design.title": "Diseño tranquilo",
        "features.design.desc": "Solo modo oscuro. Espacios generosos. Creado para cuando te sientes vulnerable.",
        "how.title": "Cómo funciona",
        "how.step1.title": "Elige tu estado de ánimo",
        "how.step1.desc": "Toca el emoji que coincida con cómo te sientes ahora mismo.",
        "how.step2.title": "Reflexiona",
        "how.step2.desc": "Responde una pregunta simple. Escribe tanto o tan poco como quieras.",
        "how.step3.title": "Listo",
        "how.step3.desc": "Eso es todo. Cierra la app. Vuelve mañana si quieres.",
        "nottherapy.title": "Esto no es terapia",
        "nottherapy.desc": "Soft Landing es un lugar para escribir para ti mismo. No damos consejos, no analizamos tus sentimientos ni seguimos tu progreso. Si necesitas apoyo profesional, incluimos recursos de crisis en la app.",
        "download.title": "¿Listo para empezar?",
        "download.subtitle": "Disponible para iPhone y iPad. iOS 17.0 o posterior.",
        "download.price": "Prueba gratuita de 14 días, luego $24.99 compra única",
        "footer.privacy": "Política de privacidad",
        "footer.support": "Soporte"
    }
};

// Get browser language or stored preference
function getPreferredLanguage() {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && translations[urlLang]) {
        return urlLang;
    }

    // Check stored preference
    const stored = localStorage.getItem('soft-landing-lang');
    if (stored && translations[stored]) {
        return stored;
    }

    // Check browser language
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    if (translations[browserLang]) {
        return browserLang;
    }

    // Default to English
    return 'en';
}

// Apply translations to the page
function applyTranslations(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Store preference
    localStorage.setItem('soft-landing-lang', lang);

    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const lang = getPreferredLanguage();
    applyTranslations(lang);

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.getAttribute('data-lang');
            applyTranslations(newLang);
        });
    });
});
