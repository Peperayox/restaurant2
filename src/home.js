const homePage = (() => {
  const contentContainer = document.querySelector('#content');

  const homeContainer = document.createElement('div');
  homeContainer.setAttribute('class', 'home-container');
  homeContainer.innerHTML = `
  <div class="home">
      <details open>
        <summary>GIGA Chef</summary>
        <ul>
          <li>Huge 600 gram + Steaks</li>
          <li>All steaks and meats come Rare.</li>
          <li>No vegan options</li>
        </ul>
      </details>
      <img src="./images/gigachad.png" alt="giga chef" class="gigachef" />
  </div>
    `;

  contentContainer.appendChild(homeContainer);
})();

export { homePage };
