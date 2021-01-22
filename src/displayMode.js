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

  var elements = [
    document.body,
    document.getElementById("section"),
    document.getElementById("activity-form"),
  ];

  if (elements && Array.isArray(elements)) {
    if (mode === "Night")
      elements.forEach((element) => {
        element?.classList.add("dark-mode");
      });
    else if (mode === "Day")
      elements.forEach((element) => {
        element?.classList.remove("dark-mode");
      });
  } else throw Error("Elements parameter is not an array");
}

// Initialize display mode
setDarkClassList();