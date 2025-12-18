document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const whatsappNumber = '5521972802652';
    const baseMessage = 'Tenho interesse em um Seguro Funerário';

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('nome');
            const phoneInput = document.getElementById('telefone');

            const name = nameInput.value.trim();
            // We encourage valid phone input but for WhatsApp link purposes, we rely on the user visiting the link.

            // Construct the message
            // "Tenho interesse em um Seguro Funerário"
            // Adding user details to it for the agent's convenience
            let finalMessage = baseMessage;
            if (name) {
                finalMessage += `. Meu nome é ${name}`;
            }

            const encodedMessage = encodeURIComponent(finalMessage);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Redirect to WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    }

    // Input Mask for Phone (Simple version)
    const phoneInput = document.getElementById('telefone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }

    // Scroll Animations (Simple Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translate3d(0, 0, 0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in-up').forEach(el => {
        // observer.observe(el); // Already handled by CSS animation for Hero, but useful for scroll elements
    });
});
