if (storageAvailable) {
  submitFormButton.disabled = false;
  formEmail.disabled = false;
  formTitle.disabled = false;
  formDescription.disabled = false;
}

function validateForm(event) {
  event.preventDefault();

  if (submitFormButton.disabled) {
    alert("Uh oh, this feature is not available on this device.");
    return;
  }

  if (
    formEmail.checkValidity() &&
    formTitle.checkValidity() &&
    formDescription.checkValidity()
  ) {
    let isActivitySaved = saveActivity(formTitle.value, formDescription.value);
    if (isActivitySaved) {
      alert("Your activity was saved!");
      activityForm?.reset();
    } else alert("Your activity couldn't be saved! :(");
  } else {
    alert("Please fill out the form correctly. All fields are required.");
  }
}

if (submitFormButton && storageAvailable) {
  submitFormButton.addEventListener("click", validateForm, false);
}
