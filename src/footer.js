const footer = (() => {
  const contentContainer = document.querySelector('#content');

  const footerContainer = document.createElement('footer');
  footerContainer.innerHTML = `
  Created by:
  <a href="https://github.com/Peperayox" target="_blank">Tomas Samitier</a>
  <p>
    Source code:
    <a href="https://github.com/Peperayox/Tic-Tac-Toe" target="_blank">
      <img id="footer-logo" src="./images/gitHubLogo.png"
    /></a>
  </p>
`;

  contentContainer.appendChild(footerContainer);
})();

export { footer };
