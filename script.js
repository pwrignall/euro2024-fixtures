const fixtures = [
  {
    date: "2024-06-14",
    fixtures: [
      {
        team1: "Turkey",
        team2: "Croatia",
        stage: "Group A",
        venue: "Stadio Olimpico",
        time: "21:00",
        score: "0-0",
        extraInfo: "Turkey win 3-2 on pens",
      },
      {
        team1: "Poland",
        team2: "Sweden",
        stage: "Group B",
        venue: "Aviva Stadium",
        time: "18:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-06-15",
    fixtures: [
      {
        team1: "France",
        team2: "Portugal",
        stage: "Group C",
        venue: "Allianz Arena",
        time: "21:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "Belgium",
        team2: "Netherlands",
        stage: "Group D",
        venue: "Wembley Stadium",
        time: "18:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
];

const checkbox = document.getElementById("swap-checkbox");
const timeOrScoreSpans = document.getElementsByClassName("time-score");
const extraInfoSpans = document.getElementsByClassName("extra-info");

function swapMatchTimeWithScore() {
  for (let i = 0; i < timeOrScoreSpans.length; i++) {
    const span = timeOrScoreSpans[i];
    const match = fixtures[(i / 2) | 0].fixtures[i % 2];
    const extraInfoSpan = extraInfoSpans[i];
    if (checkbox.checked) {
      span.textContent = match.score;
      extraInfoSpan.textContent = match.extraInfo;
    } else {
      span.textContent = match.time;
      extraInfoSpan.textContent = "";
    }
  }
}

const fixturesList = document.getElementById("fixtures-list");

fixtures.forEach((dateItem) => {
  const date = document.createElement("h2");
  date.textContent = new Date(dateItem.date).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  fixturesList.appendChild(date);
  const ul = document.createElement("ul");
  fixturesList.appendChild(ul);

  dateItem.fixtures.forEach((match) => {
    const listItem = document.createElement("li");
    const stageSpan = document.createElement("span");
    stageSpan.className = "stage";
    stageSpan.textContent = match.stage;
    listItem.appendChild(stageSpan);

    listItem.innerHTML += ` <span class="team team1" data-country="${match.team1.toLowerCase()}">${
      match.team1
    }</span> `;
    const timeOrScoreSpan = document.createElement("span");
    timeOrScoreSpan.className = "time-score";
    const dateTime = new Date(`${dateItem.date}T${match.time}Z`);
    timeOrScoreSpan.textContent = dateTime
      .toLocaleTimeString("en-GB")
      .slice(0, -3);
    listItem.appendChild(timeOrScoreSpan);

    listItem.innerHTML += ` <span class="team team2" data-country="${match.team2.toLowerCase()}">${
      match.team2
    }</span>`;

    const venueSpan = document.createElement("span");
    venueSpan.className = "venue";
    venueSpan.textContent = match.venue;
    listItem.appendChild(venueSpan);
    const extraInfoSpan = document.createElement("span");
    extraInfoSpan.className = "extra-info";
    listItem.appendChild(extraInfoSpan);

    ul.appendChild(listItem);
  });
});
