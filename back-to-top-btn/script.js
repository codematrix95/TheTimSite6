const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import "/back-to-top-btn/style.css";
  </style>
  <div class="cntr">
    <div class="btn">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div> 
`;

export default class BackToTopBtn extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.onclick = () => {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }
}

window.onscroll = () => {
  document.documentElement.scrollHeight - window.innerHeight + 1;

  const scrolled = Math.ceil(window.scrollY);

  const cntr = document
    .querySelector("back-to-top-btn")
    .shadowRoot.querySelector(".cntr");

  const btn = document
    .querySelector("back-to-top-btn")
    .shadowRoot.querySelector(".btn");

  if (scrolled > 50) {
    cntr.setAttribute("style", "transform: translateY(0px) rotate(90deg);");
    btn.className = "btn anim-start";
  }

  if (scrolled < 50) {
    cntr.setAttribute(
      "style",
      "transform: translateY(65px) rotate(90deg);" +
        "transition: transform 125ms 250ms ease-in-out;"
    );
    btn.className = "btn anim-start anim-end";
  }
};

window.customElements.define("back-to-top-btn", BackToTopBtn);
