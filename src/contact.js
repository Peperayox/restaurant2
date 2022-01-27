const contactPage = (() => {
  const contentContainer = document.querySelector('#content');

  const contactContainer = document.createElement('div');
  contactContainer.setAttribute('class', 'contact-container');
  contactContainer.innerHTML = `
  <div class="socials-container">
      <div class="instagram">
        <a href="https://www.instagram.com/giga.chad_/?hl=en" target="_blank"
          ><img class="logo" src="./images/insta.png"
        /></a>
        <p class="number">@giga.chad_</p>
      </div>
      <div class="whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=5493515193933&text=Da%20fuq,%20you%20really%20clicked%20this,%20go%20to%20this%20random%20Mercado%20Libre%20link"
          target="_blank"
          ><img class="logo" src="./images/whatsapp.png"
        /></a>
        <p class="number">+ 1-420-1356-6969</p>
      </div>
      <div class="phone">
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page"
          target="_blank"
          ><img class="logo" src="./images/phone.png"
        /></a>
        <p class="number">+ 1-800-1350-0000</p>
      </div>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15765842.6181562!2d9.696042633250071!3d15.263286847296774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10e73978bd677361%3A0x3b60835bcec0809c!2sChad!5e0!3m2!1sen!2sar!4v1643141970449!5m2!1sen!2sar"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
    `;

  contentContainer.appendChild(contactContainer);
})();

export { contactPage };
