const menuPage = (() => {
  //container
  const contentContainer = document.querySelector('#content');
  const menu = document.createElement('div');
  menu.setAttribute('class', 'menu-container');
  menu.innerHTML = `
  <div class="menu">
  <img src="./images/1.png" alt="giga chef" class="menu-photo" />
  <h5 class="dish-name">Thad's Lomo</h5>
  <p class="dish-description">
    Almost raw, 1 Kilogram, Argentine lomo, with fries
  </p>
  <p class="price">$39.99</p>
</div>
<div class="menu">
  <img src="./images/2.png" alt="giga chef" class="menu-photo" />
  <h5 class="dish-name">Matambre a la Pizza</h5>
  <p class="dish-description">
    Full Matambre topped with ham cheese, tomatoe and garlic
  </p>
  <p class="price">$25.99</p>
</div>
<div class="menu">
  <img src="./images/3.png" alt="giga chef" class="menu-photo" />
  <h5 class="dish-name">KOBE beef</h5>
  <p class="dish-description">
    769g of pure Helicopter cooked Kobe beef. RIP Kobe and your wallet
  </p>
  <p class="price">$1299.99</p>
</div>
<div class="menu">
  <img src="./images/4.png" alt="giga chef" class="menu-photo" />
  <h5 class="dish-name">Grow a pair</h5>
  <p class="dish-description">
    Bull testicles. If you can't grow em' eat em'
  </p>
  <p class="price">$20.99</p>
</div>
<div class="menu">
  <img src="./images/5.png" alt="giga chef" class="menu-photo" />
  <h5 class="dish-name">Wuhan Bat soup</h5>
  <p class="dish-description">
    Come on order it. I need online classes again
  </p>
  <p class="price">Free</p>
</div>
<div class="menu">
  <img src="./images/6.png" alt="giga chef" class="menu-photo" />
  <h5 class="dish-name">Tendies</h5>
  <p class="dish-description">Been doing your chores?</p>
  <p class="price">10 good boy points</p>
</div>`;

  contentContainer.appendChild(menu);
})();

export { menuPage };
