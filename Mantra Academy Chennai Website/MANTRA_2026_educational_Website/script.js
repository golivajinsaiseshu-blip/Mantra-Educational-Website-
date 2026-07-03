// ===============================
// MANTRA Academy JavaScript
// ===============================

// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// ===============================
// Admission Form Validation
// ===============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const course = document.getElementById("destination");
        const formMessage = document.getElementById("formMessage");

        if (
            !name.value.trim() ||
            !email.value.trim() ||
            !phone.value.trim() ||
            course.value === ""
        ) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill all required fields.";
            return;
        }

        if (!email.value.includes("@") || !email.value.includes(".")) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        if (phone.value.length !== 10 || isNaN(phone.value)) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please enter a valid 10-digit mobile number.";
            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent = "🎉 Admission application submitted successfully!";

        bookingForm.reset();

    });

}

// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("✅ Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}

// ===============================
// Gallery Filter
// ===============================

function filterGallery(category) {

    const items = document.querySelectorAll(".gallery-item");

    items.forEach(function (item) {

        if (category === "all" || item.classList.contains(category)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

}