import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const HomeBtn=document.querySelector("#Home");
const MenuBtn=document.querySelector("#Menu");
const AboutBtn=document.querySelector("#About");

const content=document.querySelector("#content");

HomeBtn.addEventListener("click",()=>{
  content.replaceChildren();
  loadHome();
});

MenuBtn.addEventListener("click",()=>{
  ccontent.replaceChildren();
  loadMenu();
});

AboutBtn.addEventListener("click",()=>{
  content.replaceChildren();
  loadContact();
});

loadHome();
