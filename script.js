document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Merci pour votre message ! L'équipe 18 EITHING SARL vous recontactera rapidement.");
            form.reset();
        });
    }
});
