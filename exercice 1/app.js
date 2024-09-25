const email = document.getElementById("email"); 
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const messageDiv = document.getElementById("message");
const spinner = document.querySelector("#loading-spinner");
const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", function() {

    form.addEventListener("submit", async function(event) {

        
        if (password.value.length < 8) {
            messageDiv.innerText = "Le mot de passe doit contenir plus de 8 caractères.";
            messageDiv.style.color = "red";
            event.preventDefault(); 
            return;
        }
        if (password.value !== confirmPassword.value) {
            messageDiv.innerText = "Les mots de passe ne sont pas identiques.";
            messageDiv.style.color = "red";
            event.preventDefault();
            return;
        }
        messageDiv.style.color = "green";
        messageDiv.innerText = "Identifiants corrects";
        event.preventDefault();
        spinner.classList.remove("visually-hidden");

        try {
            
            const response = await fetch("http://localhost:8000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                messageDiv.innerText = "Utilisateur créé avec succès !";
                messageDiv.style.color = "green";
            } else {
                messageDiv.innerText = "Erreur création de l'utilisateur.";
                messageDiv.style.color = "red";
            }

        } catch (error) {
            messageDiv.innerText = "Erreur serveur.";
            messageDiv.style.color = "red";
            console.error("Erreur:", error);

        } finally {
            
            setTimeout(() => {
                spinner.classList.add("visually-hidden");
            }, 1000); 
        }
    });
});
