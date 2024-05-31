 <div id="popup" class="popup">
    <div class="popup-content">
      <span class="close" onclick="closePopup()">&times;</span>
      <h2>IPL Player Registration</h2>
      <form id="registrationForm">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br>
        <label for="team">Team:</label><br>
        <input type="text" id="team" name="team" required><br><br>
        <input type="submit" value="Submit" onclick="submitForm();">
      </form>
    </div>
  </div>
  
  <script>
  // Open popup when the page is loaded
  window.onload = function() {
    openPopup();
  };
  
  // Function to open the popup
  function openPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // Function to submit the registration form
  function submitForm() {
    var name = document.getElementById('name').value;
    var team = document.getElementById('team').value;
    console.log(name);
    // Create a Firebase reference
    var firebaseRef = new Firebase("https://codeservir-default-rtdb.firebaseio.com/registration");
  
    // Push registration data to Firebase
    firebaseRef.push({
      this.name: name,
      this.team: team
    });
  
    // Close the popup after submission
    openPopup();
  }
  </script>