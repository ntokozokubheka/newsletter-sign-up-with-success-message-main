document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailValue = emailInput.value;

        if (validateEmail(emailValue)) {
            errorMessage.style.display = 'none';
            
            alert('Form submitted successfully!'); 
        } else {
            errorMessage.style.display = 'block';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
