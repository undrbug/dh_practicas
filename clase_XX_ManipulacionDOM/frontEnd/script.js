window.addEventListener("load", () => {
  const btn = document.querySelectorAll(".navbar-link");
  const texto = document.querySelector("input[type='text']");

  btn.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const current = document.querySelector(".active");
      current.classList.remove("active");
      link.classList.add("active");
    });
  });

  texto.addEventListener('blur', (e) => {
    if(e.target.value === ''){
      e.target.style.border = '2px solid red';
  }
    });

  texto.addEventListener("input", (e) => {
    console.log(e.target.value);
  });

});
