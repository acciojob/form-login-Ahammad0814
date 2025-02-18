function getFormvalue(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Retrieve values from the First Name and Last Name fields
  const firstName = document.querySelector('[name="fname"]').value.trim();
  const lastName = document.querySelector('[name="lname"]').value.trim();

  // Check if the fields are empty
  if (firstName === '' || lastName === '') {
    alert('Please enter both first name and last name.');
    return;
  }

  // Display the full name
  alert(`${firstName} ${lastName}`);
}
