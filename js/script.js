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

function updateImage() {
    const image = document.getElementById('newsletter-image');
    if (window.innerWidth <= 768) { 
      image.src = 'assets/images/illustration-sign-up-desktop.svg'; 
    } else {
      image.src = 'assets/images/illustration-sign-up-desktop.svg'; 
    }
  }

  window.onload = updateImage;

  window.onresize = updateImage;