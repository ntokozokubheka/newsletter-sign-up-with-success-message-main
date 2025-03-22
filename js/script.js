document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');
    const newsletterCard = document.querySelector('.newsletter-card');
    const successContainer = document.querySelector('.success-container');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailValue = emailInput.value;

        if (validateEmail(emailValue)) {
            errorMessage.style.display = 'none';
            newsletterCard.style.display = 'none';  
            successContainer.style.display = 'flex';  
        } else {
            errorMessage.style.display = 'block';  
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});


function dismissMessage() {
    document.querySelector('.success-container').style.display = 'none';
    document.querySelector('.newsletter-card').style.display = 'block';
    document.querySelector('.newsletter-card').style.display = 'flex';   
}
