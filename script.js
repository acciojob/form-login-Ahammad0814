
function getFormValue() {
  // Prevent the form from actually submitting and refreshing the page

  // Retrieve values from the First Name and Last Name fields
  const fname = document.querySelector('[name="fname"]').value.trim();
  const lname = document.querySelector('[name="lname"]').value.trim();

  // Concatenate the First Name and Last Name
  const fullName = `${fname} ${lname}`;

  // Display the full name in an alert
  alert(fullName);

}
