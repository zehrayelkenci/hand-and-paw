/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { updateUser } from "../../data-access/user-access/update-user.js";
import {
  checkEmail,
  checkEmailMatch,
} from "../../business-logic/form-validation.js";
import state from "../../data-access/state/state.js";
import { navbar } from "../components/layout/navbar.js";

export const editEmailFormHandler = async () => {
  const form = document.querySelector("#edit-email-form");

  const isValidated = validatePassword();

  if (isValidated) {
    const formData = new FormData(form);
    const userId = window.localStorage.getItem("userId");
    formData.append("id", window.localStorage.getItem("userId"));

    const post = await updateUser(userId, formData);
    if (post[0]?._id) {
      form.innerHTML = "<h2>Email updated successfully</h2>";
      state.token = undefined;
      state.userId = undefined;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("isLoggedIn");
      const header = document.getElementById("menu");
      const navbarEl = document.getElementById("top-navbar");
      header.removeChild(navbarEl);
      header.appendChild(navbar());
      return;
    }

    const span = document.createElement("span");
    const br = document.createElement("br");
    span.innerHTML = `${post.message}`;
    span.style.color = "red";
    form.appendChild(br);
    form.appendChild(span);
  }
};

function validatePassword() {
  const form = document.querySelector("#edit-email-form");
  const email = form.querySelector("#email-input");
  const confirmEmail = form.querySelector("#repeatEmail-input");

  let isValid = true;

  if (!checkEmail(email)) {
    isValid = false;
  }

  if (!checkEmail(confirmEmail)) {
    isValid = false;
  }

  if (!checkEmailMatch(email, confirmEmail)) {
    isValid = false;
  }
  return isValid;
}
