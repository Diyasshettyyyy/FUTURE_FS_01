document.addEventListener("DOMContentLoaded", () => {

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

if (!cursor || !ring) return;

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

ring.style.left = e.clientX + "px";
ring.style.top = e.clientY + "px";

});

});