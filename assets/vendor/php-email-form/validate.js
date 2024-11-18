<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form with EmailJS</title>
    <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script type="text/javascript">
        (function() {
            emailjs.init("JZuAC-fLdslgkwcEN"); // Replace with your EmailJS user ID
        })();
    </script>
</head>
<body>

    <form class="php-email-form" id="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <div class="loading" style="display:none;">Loading...</div>
        <div class="error-message" style="display:none; color:red;"></div>
        <div class="sent-message" style="display:none; color:green;">Your message has been sent. Thank you!</div>

        <button type="submit">Send Message</button>
    </form>

    <script>
        document.getElementById("contact-form").addEventListener('submit', function(event) {
            event.preventDefault();

            let thisForm = this;
            thisForm.querySelector('.loading').style.display = 'block';
            thisForm.querySelector('.error-message').style.display = 'none';
            thisForm.querySelector('.sent-message').style.display = 'none';

            emailjs.sendForm('surya_pm', 'template_6brzkia', thisForm)
                .then(() => {
                    thisForm.querySelector('.loading').style.display = 'none';
                    thisForm.querySelector('.sent-message').style.display = 'block';
                    thisForm.reset();
                }, (error) => {
                    thisForm.querySelector('.loading').style.display = 'none';
                    thisForm.querySelector('.error-message').innerHTML = error.text;
                    thisForm.querySelector('.error-message').style.display = 'block';
                });
        });
    </script>

</body>
</html>
