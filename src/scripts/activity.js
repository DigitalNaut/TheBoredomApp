var lastActivityIndex = -1;

var activities = [];
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
activities.push({
  title: "Suggest an activity",
  description: "Perhaps a great activity would be to create an activity!",
  url: "./activity_form.html",
});

if (isSotrageAvailable) {
  if (!window.localStorage.getItem("activities"))
    window.localStorage.setItem("activities", JSON.stringify(activities));
}

const activityTitleComposer = ({ url, title }) =>
  `${
    url ? "<a href='" + url + "' target='_blank' ref='noreferrer' '>" : ""
  } ${title} ${url ? " <i class='fa fa-external-link-alt'></i></a>" : ""}`;

const activityFactory = (title, { description }) => {
  activitySuggestionTitle.innerHTML = title;
  activitySuggestionDescription.innerHTML = description;
};

let activityIndex = -1;
let loadedActivities = null;
function suggestActivity() {
  if (!menuOpen) {
    if (activitySuggestionDescription && activitySuggestionTitle) {
      if (loadedActivities === null) loadedActivities = loadActivities();

      if (loadedActivities.length) {
        activityIndex =
          ++activityIndex >= loadedActivities.length ? 0 : activityIndex; // Increment & loop around value if next index reaches length of array

        let nextValue = activityIndex;
        let sugestedActivity = loadedActivities[nextValue];

        activityFactory(
          activityTitleComposer(sugestedActivity),
          sugestedActivity
        );
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
