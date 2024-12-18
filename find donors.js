// Simulate donor data
const donors = [
    { name: "Ravi Shankar", bloodGroup: "A+", location: "vijayawada", contact: "22101A010465@mbu.asia" },
    { name: "Manoz", bloodGroup: "O-", location: "Tirupati", contact: "22101A010391@mbu.asia" },
    { name: "Madhav", bloodGroup: "B+", location: "Anantapur", contact: "22101A010491@mbu.asia" },
    { name: "Yaswant", bloodGroup: "AB-", location: "Ongole", contact: "22101A010473@mbu.asia" },
  ];
  
  // Handle form submission
  document.getElementById("donor-search-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const bloodGroup = document.getElementById("blood-group").value;
    const location = document.getElementById("location").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
  
    // Clear previous results
    resultsContainer.innerHTML = "";
  
    // Filter donors
    const filteredDonors = donors.filter(
      (donor) =>
        donor.bloodGroup === bloodGroup &&
        donor.location.toLowerCase().includes(location)
    );
  
    if (filteredDonors.length > 0) {
      filteredDonors.forEach((donor) => {
        const donorElement = document.createElement("div");
        donorElement.className = "donor-result";
        donorElement.innerHTML = `
          <h3>${donor.name}</h3>
          <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
          <p><strong>Location:</strong> ${donor.location}</p>
          <p><strong>Contact:</strong> ${donor.contact}</p>
        `;
        resultsContainer.appendChild(donorElement);
      });
    } else {
      resultsContainer.innerHTML = "<p>No donors found matching the criteria.</p>";
    }
  });
  