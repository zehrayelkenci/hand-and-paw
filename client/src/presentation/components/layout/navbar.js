import createProfileDropDownMenu from "./profile-dropdown-menu.js";
import createLogoutMenu from "./logout-menu.js";
import createLoginSignupMenu from "./login-signup-menu.js";
import mainMenuComponent from "./main-menu-component.js";
import createLogo from "./logo.js";
import burgerComponent from "./burger.js";

export const navbar = () => {
  // Is the user logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  /// ///////////////////////////////
  // Create the navbar
  /// ///////////////////////////////
  const navbarEl = document.createElement("navbar");
  navbarEl.id = "top-navbar";

  // Add the logo
  const logo = createLogo();
  navbarEl.appendChild(logo);

  // Add the main menu
  navbarEl.appendChild(mainMenuComponent());

  // Add additional login/logout/signup
  if (isLoggedIn) {
    const logoutMenu = createLogoutMenu();
    const profileDropDownMenu = createProfileDropDownMenu();
    logoutMenu.appendChild(profileDropDownMenu);
    navbarEl.appendChild(logoutMenu);
    navbarEl.appendChild(burgerComponent());
  } else {
    const loginSignupMenu = createLoginSignupMenu();
    navbarEl.appendChild(loginSignupMenu);
    navbarEl.appendChild(burgerComponent());
  }
  return navbarEl;
};
