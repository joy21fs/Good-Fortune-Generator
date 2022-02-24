const num = Math.floor(Math.random() * 6) + 1;

const images = document.querySelectorAll(".holder-with-poems");

const scrolls = document.querySelectorAll(".scroll");

document
  .querySelector(".poem")
  .setAttribute("src", "images/poems/fortune-poem-" + num + ".svg");

// ////////shake functionality//////////////////

document.querySelector(".shake-btn").addEventListener("click", function () {
  document.querySelector("main").classList.add("shake");
  setTimeout(function () {
    document.querySelector("main").classList.remove("shake");
  }, 1000);
});

// ////////pick scroll functionality ////////////

scrolls.forEach((scroll) => {
  const picked = () => {
    scroll.setAttribute("src", "images/scrolls/picked/scroll" + scroll.id + "_picked.svg");

    scroll.classList.add("picked");
    scroll.style.willChange = "transform top";
  };

  const notPicked = () => {
    scroll.setAttribute("src", "images/scrolls/scroll_" + scroll.id + ".svg");
    scroll.classList.remove("picked");
  };

  scroll.addEventListener("mouseover", picked);

  scroll.addEventListener("mouseout", notPicked);

  let isClicked = false;

  scroll.addEventListener("click", function () {
    isClicked = !isClicked;

    isClicked === true ? picked() : notPicked();

    scroll.removeEventListener("mouseout", notPicked);

    document.querySelector(".show-poem").classList.toggle("show");
  });
});

//////// show poem functionality ////////////////////

document.querySelector(".show-poem").addEventListener("click", function () {
  document.querySelector(".poem").classList.add("show");

  document.querySelector(".poem").classList.add("entry");

  images.forEach(function (image) {
    image.classList.add("hidden");
  });

  /////// restart functionality ////////////////////

  setTimeout(function () {
    document.querySelector(".show-poem").classList.remove("show");
  }, 1500);
  setTimeout(function () {
    document.querySelector(".reset").classList.add("show");
  }, 1500);
});

document.querySelector(".reset").addEventListener("click", function () {
  document.location.reload();
});
