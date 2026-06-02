export default function loadContact() {
  const content = document.querySelector("#content");

  const contactPage = document.createElement("section");
  contactPage.classList.add("contact-page");

  contactPage.innerHTML = `
    <h1>Contact Us</h1>

    <div class="contact-card">

      <div class="contact-item">
        <h3>📍 Location</h3>
        <p>123 Connaught Place, New Delhi</p>
      </div>

      <div class="contact-item">
        <h3>📞 Phone</h3>
        <p>+91 98765 43210</p>
      </div>

      <div class="contact-item">
        <h3>✉ Email</h3>
        <p>hello@fusionrestaurant.com</p>
      </div>

    </div>
  `;

  content.appendChild(contactPage);
}