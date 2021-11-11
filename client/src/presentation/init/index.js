import { navbar } from "../components/layout/navbar.js";
import footer from "../components/layout/footer.js";
import { burgerHandler } from "../handlers/burger.js";

const buildPage = () => {
  document.getElementById("menu").appendChild(navbar());
  document.querySelector("footer").appendChild(footer());
};
buildPage();
