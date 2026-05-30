const currentUrl = new URL(window.location.href);
const formData = currentUrl.searchParams;

document.querySelector("#firstName").textContent = formData.get("firstName");
document.querySelector("#lastName").textContent = formData.get("lastName");
document.querySelector("#email").textContent = formData.get("email");
document.querySelector("#phone").textContent = formData.get("phone");
document.querySelector("#organization").textContent = formData.get("organization");

const timestamp = formData.get("timestamp");
document.querySelector("#timestamp").textContent = timestamp;