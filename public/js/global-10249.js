(function () {
  const init = () => {
    const checkboxes = document.querySelectorAll(".custom-checkbox-1");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const svg = this.nextElementSibling.querySelector("svg");
        if (this.checked) {
          svg.classList.remove("hidden");
        } else {
          svg.classList.add("hidden");
        }
      });
    });

    const radios = document.querySelectorAll(
      ".custom-radio-1, .custom-inline-radio-1",
    );
    radios.forEach((radio) => {
      radio.addEventListener("change", function () {
        const name = this.name;
        const allRadios = document.querySelectorAll(
          `input[name="${name}"]`,
        );
        allRadios.forEach((r) => {
          const svg = r.nextElementSibling.querySelector("svg");
          if (r.checked) {
            svg.classList.remove("hidden");
          } else {
            svg.classList.add("hidden");
          }
        });
      });
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
