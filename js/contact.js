document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // Disable submit button and show loading state
      const submitButton = document.getElementById('submit-button');
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      // Prepare data for submission
      const formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
      };
      
      // API URL
      const apiUrl = 'https://maltoso-0a69f2f17fa4.herokuapp.com/webhook/contact-form';
      
      // Send data to API
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error sending form');
        }
        return response.json();
      })
      .then(data => {
        // Show success message
        const formContainer = document.getElementById('form-container');
        const successMessage = document.getElementById('success-message');
        
        formContainer.classList.add('hidden');
        successMessage.classList.remove('hidden');
        
        // Clear form
        contactForm.reset();
      })
      .catch(error => {
        // Show error message
        alert('An error occurred while sending your message. Please try again or contact us via email.');
        console.error('Error:', error);
      })
      .finally(() => {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      });
    });
  }
});
