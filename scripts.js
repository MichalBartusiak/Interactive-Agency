const buttonsClick = () => {
  const buttons = document.querySelectorAll('.button').forEach(function (button) {
    button.addEventListener('click', function () {
      alert('Maybe it will work someday...')
    });
  });
};
buttonsClick()


const burgerMenuClick = () => {
  const burger = document.querySelector(".fa-bars").addEventListener("click", function () {
    const menu = document.querySelector(".menu ul").classList.toggle("active");
  });
};
burgerMenuClick();