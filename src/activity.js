var activities = [];
var lastActivityIndex = -1;

activities.push({
  title: "Learn a new language",
  description:
    "Learning a new language can connect you with more people on a level that plain English can't provide. You'll be able to understand other cultures better. The link above shows you an amazing video to get started!",
  url: "https://www.youtube.com/watch?v=iGD7pF5iTd8",
});
activities.push({
  title: "Learn touch typing",
  description:
    "Ever wondered how people type lightning-speed fast? They're using a technique called 'touch typing'. Here's a link to get you started!",
  url: "https://www.youtube.com/watch?v=6E1AiZEtV5c",
});
activities.push({
  title: "Go for a walk and write about it",
  description:
    "It's inevitable that you'll have many thoughts while on a stroll. Write down these thoughts with pen & paper because, who knows, you might just have an epiphany or a breakthrough!",
});
activities.push({
  title: "Paint a landscape",
  description:
    "Ever wondered how people type lightning-speed fast? They're using a technique called 'touch typing'. Here's a link to get you started!",
  url: "https://www.youtube.com/watch?v=vrAMRxBB5KI",
});

if (isSotrageAvailable) {
  if (!window.localStorage.getItem("activities"))
    window.localStorage.setItem("activities", JSON.stringify(activities));
}

function suggestActivity() {
  if (!menuOpen) {
    if (activitySuggestionDescription && activitySuggestionTitle) {
      let loadedActivities = loadActivities();

      if (loadedActivities.length) {
        let randomValue = Math.floor(Math.random() * loadedActivities.length);
        let randomActivity = loadedActivities[randomValue];

        activitySuggestionTitle.innerHTML = `${
          randomActivity.url
            ? "<a href='" +
              randomActivity.url +
              "' target='_blank' ref='noreferrer' '>"
            : ""
        } ${randomActivity.title} ${
          randomActivity.url
            ? " <i class='fa fa-external-link-alt'></i></a>"
            : ""
        }`;
        activitySuggestionDescription.innerHTML = randomActivity.description;
      } else {
        activitySuggestionTitle.innerHTML =
          "No activities found, not even the hard-coded ones &#128542";
        activitySuggestionDescription.innerHTML =
          "Perhaps a great activity would be to suggest an activity!";
      }
    }
  }
}

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    suggestActivity();
  }
};