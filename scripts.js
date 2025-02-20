<script>

    
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'en';

    const translations = {
        en: {
            heroTitle: "Koroboza Career Development Initiatives",
            heroDescription: "Empowering lives for holistic transformation in Rwanda.",
            exploreBtn: "Explore Our Work"
        },
        fr: {
            heroTitle: "Initiatives de Développement de Carrière Koroboza",
            heroDescription: "Transformer des vies pour une meilleure intégration au Rwanda.",
            exploreBtn: "Explorez Nos Projets"
        }
    };

    document.querySelector('.hero-content h1').textContent = translations[lang].heroTitle;
    document.querySelector('.hero-content p').textContent = translations[lang].heroDescription;
    document.querySelector('.btn').textContent = translations[lang].exploreBtn;
</script>

