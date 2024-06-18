function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

function learnMore() {
  let button = document.querySelector(".learn-button");

  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  if (name && email) {
    alert(
      "Thank you, " + name + ", we will be in touch soon with more details"
    );
  } else {
    alert("Please provide both your name and email.");
  }
}

let learnButton = document.querySelector(".learn-button");
learnButton.addEventListener("click", learnMore);

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);
