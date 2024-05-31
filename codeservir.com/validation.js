
// const db = firebase.firestore();

function submit(event) {
  const firebaseConfig = {
    apiKey: "AIzaSyDT70iAk7U7ugDbFxhrCs9db8E8QlmyINM",
    authDomain: "codeservir.firebaseapp.com",
    databaseURL: "https://codeservir-default-rtdb.firebaseio.com",
    projectId: "codeservir",
    storageBucket: "codeservir.appspot.com",
    messagingSenderId: "499927561307",
    appId: "1:499927561307:web:1fab4785f0caf7ac9f3b7e",
    measurementId: "G-T3DV0N8RLT"
  };
  

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();


  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const zip = document.getElementById("zip");
  const country = document.getElementById("country");
  const state = document.getElementById("state");
  const city = document.getElementById("city");
  const address = document.getElementById("address");
  let isValid = true;

  if (firstName.value === "" || firstName.value.length <= 3) {
    firstName.classList.add("error-border");
    isValid = false;
  } else {
    firstName.classList.remove("error-border");
  }

  if (lastName.value === "" || lastName.value.length <= 3) {
    lastName.classList.add("error-border");
    isValid = false;
  } else {
    lastName.classList.remove("error-border");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value) || email.value === "") {
    email.classList.add("error-border");
    isValid = false;
  } else {
    email.classList.remove("error-border");
  }

  if (zip.value === "" || zip.value.length !== 6 || isNaN(zip.value)) {
    zip.classList.add("error-border");
    isValid = false;
  } else {
    zip.classList.remove("error-border");
  }

  if (country.value === "") {
    country.classList.add("error-border");
    isValid = false;
  } else {
    country.classList.remove("error-border");
  }

  if (state.value === "") {
    state.classList.add("error-border");
    isValid = false;
  } else {
    state.classList.remove("error-border");
  }

  if (city.value === "") {
    city.classList.add("error-border");
    isValid = false;
  } else {
    city.classList.remove("error-border");
  }

  if (address.value === "" || address.value.length < 5) {
    address.classList.add("error-border");
    isValid = false;
  } else {
    address.classList.remove("error-border");
  }

  const favoriteCourses = [];
  document.querySelectorAll("#favoriteCourse input[type='checkbox']").forEach((checkbox) => {
    if (checkbox.checked) {
      favoriteCourses.push(checkbox.value);
    }
  });

  if (isValid) {
    db.collection("registrations").add({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      zipCode: zip.value,
      country: country.value,
      state: state.value,
      city: city.value,
      address: address.value,
      favoriteCourses: favoriteCourses
    })
    .then(() => {
      alert("Registration successful!");
      window.location.href='index.html';
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Error submitting registration");
    });
  }
}

// Attach submit event to the form

  // Attach submit event to the form
  document.getElementById("registrationForm").addEventListener("submit", submit);
