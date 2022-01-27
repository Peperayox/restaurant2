const pageLoad = (() => {
  //container
  const contentContainer = document.querySelector('#content');

  const header = document.createElement('header');
  header.innerHTML = `
  <h1>GIGA Steak</h1>
  <nav>
    <ul>
      <li><button id='homeB'>Home</button></li>
      <li><button id='menuB'>Menu</button></li>
      <li><button id='contactB'>Contact Us</button></li>
    </ul>
  </nav>`;

  contentContainer.appendChild(header);
})();
