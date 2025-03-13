// Function to update time
function updateTime() {
  let timeElement = document.getElementById("time");
  let now = new Date();
  timeElement.textContent = now.toLocaleTimeString();
}

// Select menu button and navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

// Toggle navigation menu on click
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");
});

// Function to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let category = document.getElementById("category").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
      let displayMessage = `From ${name} (${email}) - ${category}: ${message}`;
      document.getElementById("lastMessage").textContent = displayMessage;
      alert("Your message has been submitted!");
      
      // Reset form
      this.reset();
  }
});

// Update time every second
setInterval(updateTime, 1000);
updateTime();
