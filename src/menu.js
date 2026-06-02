export default function loadMenu(){
  const content=document.querySelector("#content");

  const menu_page=document.createElement("section");
  menu_page.classList.add("menu-page");

  const menuHeading=document.createElement("h1");
  menuHeading.innerText="Our Menu";

  const menu_grid=document.createElement("div");
  menu_grid.classList.add("menu-grid");

  const items=[

    ["Truffle Arancini", "Crispy risotto balls with truffle aioli.", "₹450"],

    ["Burrata Toast", "Fresh burrata, basil and roasted tomatoes.", "₹550"],

    ["Wagyu Burger", "Premium wagyu beef with aged cheddar.", "₹1200"],

    ["Mushroom Risotto", "Slow-cooked arborio rice with wild mushrooms.", "₹850"],

    ["Grilled Salmon", "Fresh Atlantic salmon with lemon butter sauce.", "₹1400"],

    ["Tiramisu", "Classic Italian dessert.", "₹450"],

  ];

  for(const[title, desc, price] of items){
    const menu_card=document.createElement("div");
    menu_card.classList.add("menu-card");

      const head=document.createElement("h3");
      const p=document.createElement("p");
      const span=document.createElement("span");

      head.innerText=title;
      p.innerText=desc;
      span.innerText=price;
    
    menu_card.appendChild(head);
    menu_card.appendChild(p);
    menu_card.appendChild(span);

    menu_grid.appendChild(menu_card);
  }
  menu_page.appendChild(menuHeading);
  menu_page.appendChild(menu_grid);

  content.appendChild(menu_page);
  

}