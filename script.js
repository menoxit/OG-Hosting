document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-btn');
    const ownerWhatsAppNumber = '5512981962660'; // Brazilian number format with country code

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const planName = button.getAttribute('data-plan');
            const message = `Olá! Tenho interesse no plano *${planName}* da OG Hosting e gostaria de saber como comprar.`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${ownerWhatsAppNumber}?text=${encodedMessage}`;
            
            window.open(whatsappURL, '_blank');
        });
    });
});

