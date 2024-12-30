async function getVisitorInfo() {
  try {
    // Fetch visitor info using IPInfo API
    const response = await fetch('https://ipinfo.io/json?token=694f5d50ded447');
    const data = await response.json();

    // Display information
    const infoList = document.getElementById('visitor-info');
    infoList.innerHTML = `
      <li><strong>IP Address:</strong> ${data.ip}</li>
      <li><strong>City:</strong> ${data.city}</li>
      <li><strong>Region:</strong> ${data.region}</li>
      <li><strong>Country:</strong> ${data.country}</li>
      <li><strong>Organization:</strong> ${data.org}</li>
    `;

    // Add browser information
    infoList.innerHTML += `
      <li><strong>Browser:</strong> ${navigator.userAgent}</li>
    `;

    // Show message
    const message = document.getElementById('message');
    message.textContent = "This information is accessible to any website you visit. Stay safe online!";
  } catch (error) {
    console.error('Error fetching visitor information:', error);
  }
}

// Call the function on page load
getVisitorInfo();
