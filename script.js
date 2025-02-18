
function getFormValue(event) {
  // Prevent the form from actually submitting and refreshing the page
  event.preventDefault();

  // Retrieve values from the First Name and Last Name fields
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();

  // Concatenate the First Name and Last Name
  const fullName = `${fname} ${lname}`;

  // Display the full name in an alert
  alert(fullName);
}

