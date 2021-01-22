// Toggle night mode settings
function toggleDisplayMode() {
  if (localStorageAavailable) {
    let mode = window.localStorage.getItem("displayMode");

    window.localStorage.setItem(
      "displayMode",
      mode === "Day" ? "Night" : "Day"
    );

    setDarkClassList();
  }
}

// Toggle classes based on settings
function setDarkClassList() {
  let mode = window.localStorage.getItem("displayMode");

  var elements = [...document.getElementsByClassName("dark")];

  if (elements.length > 0) {
    if (mode === "Night")
      elements.forEach((element) => {
        element?.classList.add("dark-mode");
      });
    else if (mode === "Day")
      elements.forEach((element) => {
        element?.classList.remove("dark-mode");
      });
  }
}

// Initialize display mode
setDarkClassList();
