

export default function loadHome(){
  const content=document.querySelector("#content");

    const hero=document.createElement("section");
    hero.classList.add("hero");

      const hero_overlay=document.createElement("div");
      hero_overlay.classList.add("hero-overlay");
      
        const restaurantTitle=document.createElement("h1");
        restaurantTitle.textContent="FUSION";

        const titleSubtext=document.createElement("p");
        titleSubtext.textContent="Elevated Dining Experience";

        const ctaButton=document.createElement("button");
        ctaButton.classList.add("cta-btn");
        ctaButton.textContent="Reserve a Table";

        hero_overlay.appendChild(restaurantTitle);
        hero_overlay.appendChild(titleSubtext);
        hero_overlay.appendChild(ctaButton);

      hero.appendChild(hero_overlay);

    content.appendChild(hero);
  
    const aboutSection=document.createElement("section");
    aboutSection.classList.add("about","card");

      const welcomeHeading=document.createElement("h2");
      welcomeHeading.textContent="Welcome";

      const restDescription=document.createElement("p");
      restDescription.textContent=`Experience a carefully curated menu where modern culinary
        techniques meet timeless flavors. Every dish is crafted
        with premium ingredients and attention to detail.`

      aboutSection.appendChild(welcomeHeading);
      aboutSection.appendChild(restDescription);

    

    const featureSection=document.createElement("section");
    featureSection.classList.add("features");

      const featureCard1=document.createElement("div");
      featureCard1.classList.add("card","feature-card");

        const Dishes=document.createElement("h3");
        Dishes.textContent="🍽 Signature Dishes";

        const dishesDesc=document.createElement("p");
        dishesDesc.textContent="Chef-crafted creations inspired by cuisines around the world.";

        featureCard1.appendChild(Dishes);
        featureCard1.appendChild(dishesDesc);

      const featureCard2=document.createElement("div");
      featureCard2.classList.add("card","feature-card");

        const dining=document.createElement("h3");
        dining.textContent="🥂 Fine Dining";

        const diningDesc=document.createElement("p");
        diningDesc.textContent="Elegant atmosphere designed for memorable experiences";

        featureCard2.appendChild(dining);
        featureCard2.appendChild(diningDesc);

      const featureCard3=document.createElement("div");
      featureCard3.classList.add("card","feature-card");

        const rating=document.createElement("h3");
        rating.textContent="⭐ 4.9 Rating";

        const ratingDesc=document.createElement("p");
        ratingDesc.textContent="Trusted by thousands of satisfied guests.";

        featureCard3.appendChild(rating);
        featureCard3.appendChild(ratingDesc);

      featureSection.appendChild(featureCard1);
      featureSection.appendChild(featureCard2);
      featureSection.appendChild(featureCard3);
    
    const statsSection=document.createElement("section");
    statsSection.classList.add("stats");

      const stat1=document.createElement("div");

        const guestNo=document.createElement("h3");
        guestNo.textContent="5000+";

        const guestDesc=document.createElement("p");
        guestDesc.textContent="Guests Served";

        stat1.appendChild(guestNo);
        stat1.appendChild(guestDesc);
      
      const stat2=document.createElement("div");

        const dishNo=document.createElement("h3");
        dishNo.textContent="50+";

        const dishDesc=document.createElement("p");
        dishDesc.textContent="Signature Dishes";

        stat2.appendChild(dishNo);
        stat2.appendChild(dishDesc);
      
      const stat3=document.createElement("div");

        const expNo=document.createElement("h3");
        expNo.textContent="10+";

        const expDesc=document.createElement("p");
        expDesc.textContent="Years of Excellence";

        stat3.appendChild(expNo);
        stat3.appendChild(expDesc);
      
      statsSection.appendChild(stat1);
      statsSection.appendChild(stat2);
      statsSection.appendChild(stat3);



    content.appendChild(aboutSection);
    content.appendChild(featureSection);
    content.appendChild(statsSection);

    
    
      
      


}