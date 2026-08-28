const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});
const contactForm = document.getElementById("contact-form");
const formResult = document.getElementById("form-result");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const formData = new FormData(contactForm);

    formResult.textContent = "Sending...";

    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (data.success) {

            formResult.textContent =
                "Message sent successfully! ✓";

            contactForm.reset();

        } else {

            formResult.textContent =
                data.message || "Form submission failed.";

        }

    } catch (error) {

        console.error(error);

        formResult.textContent =
            "Something went wrong. Please try again.";

    }

});