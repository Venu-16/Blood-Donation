// Handle form submission
document.getElementById("donor-registration-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const bloodGroup = document.getElementById("blood-group").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const dob = document.getElementById("dob").value;
  
    // Simple validation (optional, more advanced validation can be added)
    if (name && email && bloodGroup && phone && location && dob) {
      // Simulate a successful registration
      document.getElementById("success-message").classList.remove("hidden");
  
      // Clear form inputs
      document.getElementById("donor-registration-form").reset();
    } else {
      alert("Please fill in all fields correctly.");
    }
  });
  