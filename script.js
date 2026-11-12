// JohnLC OSS landing page — lightweight menu interactions.
document.getElementById("year").textContent = new Date().getFullYear();

// Allow keyboard users to navigate the main menu with arrow keys and Enter.
const menuItems = [...document.querySelectorAll(".menu-item")];
menuItems.forEach((item, index) => {
  item.addEventListener("keydown", (event) => {
    let next = null;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % menuItems.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + menuItems.length) % menuItems.length;
    if (next !== null) {
      event.preventDefault();
      menuItems[next].focus();
    }
  });
});
