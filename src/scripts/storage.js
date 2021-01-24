// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

var isSotrageAvailable = storageAvailable("localStorage");

// Initialize night mode
var localStorageAavailable;
if (isSotrageAvailable) {
  if (window.localStorage.getItem("displayMode") === null)
    window.localStorage.setItem("displayMode", "Day");

  let mode = window.localStorage.getItem("displayMode");
  console.log(`Stored mode is ${mode}`);

  localStorageAavailable = true;
} else {
  localStorageAavailable = false;
  console.log("Local storage is not available");
}

function loadActivities() {
  try {
    if (isSotrageAvailable) {
      let activitiesLoaded = JSON.parse(
        window.localStorage.getItem("activities")
      );

      if (activitiesLoaded) return activitiesLoaded;
      else return activities;
    }
  } catch (e) {
    console.log(e);
    return activities;
  }
}

function saveActivity(title, description) {
  try {
    let loadedActivities = loadActivities();

    window.localStorage.setItem(
      "activities",
      JSON.stringify([{ title, description }, ...loadedActivities])
    );

    return true;
  } catch (e) {
    return false;
  }
}

function deleteStoredActivities(andReload = false) {
  let confirmed = confirm(
    `Delete stored activities${andReload ? " and reload?" : "?"}`
  );

  if (confirmed) window.localStorage.removeItem("activities");
  if (andReload) location.reload();
}
