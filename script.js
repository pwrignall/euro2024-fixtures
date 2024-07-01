const fixtures = [
  {
    date: "2024-06-14",
    fixtures: [
      {
        team1: "Germany",
        team2: "Scotland",
        stage: "Group A",
        venue: "München",
        time: "19:00",
        score: "5 - 1",
      },
    ],
  },
  {
    date: "2024-06-15",
    fixtures: [
      {
        team1: "Hungary",
        team2: "Switzerland",
        stage: "Group A",
        venue: "Köln",
        time: "13:00",
        score: "1 - 3",
      },
      {
        team1: "Spain",
        team2: "Croatia",
        stage: "Group B",
        venue: "Berlin",
        time: "16:00",
        score: "3 - 0",
      },
      {
        team1: "Italy",
        team2: "Albania",
        stage: "Group B",
        venue: "Dortmund",
        time: "19:00",
        score: "2 - 1",
      },
    ],
  },
  {
    date: "2024-06-16",
    fixtures: [
      {
        team1: "Poland",
        team2: "Netherlands",
        stage: "Group D",
        venue: "Hamburg",
        time: "13:00",
        score: "1 - 2",
      },
      {
        team1: "Slovenia",
        team2: "Denmark",
        stage: "Group C",
        venue: "Stuttgart",
        time: "16:00",
        score: "1 - 1",
      },
      {
        team1: "Serbia",
        team2: "England",
        stage: "Group C",
        venue: "Gelsenkirchen",
        time: "19:00",
        score: "0 - 1",
      },
    ],
  },
  {
    date: "2024-06-17",
    fixtures: [
      {
        team1: "Romania",
        team2: "Ukraine",
        stage: "Group E",
        venue: "München",
        time: "13:00",
        score: "3 - 0",
      },
      {
        team1: "Belgium",
        team2: "Slovakia",
        stage: "Group E",
        venue: "Frankfurt",
        time: "16:00",
        score: "0 - 1",
      },
      {
        team1: "Austria",
        team2: "France",
        stage: "Group D",
        venue: "Düsseldorf",
        time: "19:00",
        score: "0 - 1",
      },
    ],
  },
  {
    date: "2024-06-18",
    fixtures: [
      {
        team1: "Turkey",
        team2: "Georgia",
        stage: "Group F",
        venue: "Dortmund",
        time: "16:00",
        score: "3 - 1",
      },
      {
        team1: "Portugal",
        team2: "Czechia",
        stage: "Group F",
        venue: "Leipzig",
        time: "19:00",
        score: "2 - 1",
      },
    ],
  },
  {
    date: "2024-06-19",
    fixtures: [
      {
        team1: "Croatia",
        team2: "Albania",
        stage: "Group B",
        venue: "Hamburg",
        time: "13:00",
        score: "2 - 2",
      },
      {
        team1: "Germany",
        team2: "Hungary",
        stage: "Group A",
        venue: "Stuttgart",
        time: "16:00",
        score: "2 - 0",
      },
      {
        team1: "Scotland",
        team2: "Switzerland",
        stage: "Group A",
        venue: "Köln",
        time: "19:00",
        score: "1 - 1",
      },
    ],
  },
  {
    date: "2024-06-20",
    fixtures: [
      {
        team1: "Slovenia",
        team2: "Serbia",
        stage: "Group C",
        venue: "München",
        time: "13:00",
        score: "1 - 1",
      },
      {
        team1: "Denmark",
        team2: "England",
        stage: "Group C",
        venue: "Frankfurt",
        time: "16:00",
        score: "1 - 1",
      },
      {
        team1: "Spain",
        team2: "Italy",
        stage: "Group B",
        venue: "Gelsenkirchen",
        time: "19:00",
        score: "1 - 0",
      },
    ],
  },
  {
    date: "2024-06-21",
    fixtures: [
      {
        team1: "Slovakia",
        team2: "Ukraine",
        stage: "Group E",
        venue: "Düsseldorf",
        time: "13:00",
        score: "1 - 2",
      },
      {
        team1: "Poland",
        team2: "Austria",
        stage: "Group D",
        venue: "Berlin",
        time: "16:00",
        score: "1 - 3",
      },
      {
        team1: "Netherlands",
        team2: "France",
        stage: "Group D",
        venue: "Leipzig",
        time: "19:00",
        score: "0 - 0",
      },
    ],
  },
  {
    date: "2024-06-22",
    fixtures: [
      {
        team1: "Georgia",
        team2: "Czechia",
        stage: "Group F",
        venue: "Hamburg",
        time: "13:00",
        score: "1 - 1",
      },
      {
        team1: "Turkey",
        team2: "Portugal",
        stage: "Group F",
        venue: "Dortmund",
        time: "16:00",
        score: "0 - 3",
      },
      {
        team1: "Belgium",
        team2: "Romania",
        stage: "Group E",
        venue: "Köln",
        time: "19:00",
        score: "2 - 0",
      },
    ],
  },
  {
    date: "2024-06-23",
    fixtures: [
      {
        team1: "Switzerland",
        team2: "Germany",
        stage: "Group A",
        venue: "Frankfurt",
        time: "19:00",
        score: "1 - 1",
      },
      {
        team1: "Scotland",
        team2: "Hungary",
        stage: "Group A",
        venue: "Stuttgart",
        time: "19:00",
        score: "0 - 1",
      },
    ],
  },
  {
    date: "2024-06-24",
    fixtures: [
      {
        team1: "Croatia",
        team2: "Italy",
        stage: "Group B",
        venue: "Leipzig",
        time: "19:00",
        score: "1 - 1",
      },
      {
        team1: "Albania",
        team2: "Spain",
        stage: "Group B",
        venue: "Düsseldorf",
        time: "19:00",
        score: "0 - 1",
      },
    ],
  },
  {
    date: "2024-06-25",
    fixtures: [
      {
        team1: "Netherlands",
        team2: "Austria",
        stage: "Group D",
        venue: "Berlin",
        time: "16:00",
        score: "2 - 3",
      },
      {
        team1: "France",
        team2: "Poland",
        stage: "Group D",
        venue: "Dortmund",
        time: "16:00",
        score: "1 - 1",
      },
      {
        team1: "England",
        team2: "Slovenia",
        stage: "Group C",
        venue: "Köln",
        time: "19:00",
        score: "0 - 0",
      },
      {
        team1: "Denmark",
        team2: "Serbia",
        stage: "Group C",
        venue: "München",
        time: "19:00",
        score: "0 - 0",
      },
    ],
  },
  {
    date: "2024-06-26",
    fixtures: [
      {
        team1: "Slovakia",
        team2: "Romania",
        stage: "Group E",
        venue: "Frankfurt",
        time: "16:00",
        score: "1 - 1",
      },
      {
        team1: "Ukraine",
        team2: "Belgium",
        stage: "Group E",
        venue: "Stuttgart",
        time: "16:00",
        score: "0 - 0",
      },
      {
        team1: "Czechia",
        team2: "Turkey",
        stage: "Group F",
        venue: "Hamburg",
        time: "19:00",
        score: "1 - 2",
      },
      {
        team1: "Georgia",
        team2: "Portugal",
        stage: "Group F",
        venue: "Gelsenkirchen",
        time: "19:00",
        score: "2 - 0",
      },
    ],
  },
  {
    date: "2024-06-29",
    fixtures: [
      {
        team1: "Switzerland",
        team2: "Italy",
        stage: "R16 #1",
        venue: "Berlin",
        time: "16:00",
        score: "2 - 0",
        extraInfo: "",
      },
      {
        team1: "Germany",
        team2: "Denmark",
        stage: "R16 #2",
        venue: "Dortmund",
        time: "19:00",
        score: "2 - 0",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-06-30",
    fixtures: [
      {
        team1: "England",
        team2: "Slovakia",
        stage: "R16 #3",
        venue: "Gelsenkirchen",
        time: "16:00",
        score: "1 - 1",
        extraInfo: "England win 2 - 1 a.e.t.",
      },
      {
        team1: "Spain",
        team2: "Georgia",
        stage: "R16 #4",
        venue: "Köln",
        time: "19:00",
        score: "4 - 1",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-07-01",
    fixtures: [
      {
        team1: "France",
        team2: "Belgium",
        stage: "R16 #5",
        venue: "Düsseldorf",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "Portugal",
        team2: "Slovenia",
        stage: "R16 #6",
        venue: "Frankfurt",
        time: "19:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-07-02",
    fixtures: [
      {
        team1: "Romania",
        team2: "Netherlands",
        stage: "R16 #7",
        venue: "München",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "Austria",
        team2: "Turkey",
        stage: "R16 #8",
        venue: "Leipzig",
        time: "19:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-07-05",
    fixtures: [
      {
        team1: "Spain",
        team2: "Germany",
        stage: "Quarters",
        venue: "Stuttgart",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "Winner R16 #6",
        team2: "Winner R16 #5",
        stage: "Quarters",
        venue: "Hamburg",
        time: "19:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-07-06",
    fixtures: [
      {
        team1: "Switzerland",
        team2: "England",
        stage: "Quarters",
        venue: "Düsseldorf",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "Winner R16 #7",
        team2: "Winner R16 #8",
        stage: "Quarters",
        venue: "Berlin",
        time: "19:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-07-09",
    fixtures: [
      {
        team1: "Winner QF1",
        team2: "Winner QF2",
        stage: "Semis",
        venue: "München",
        time: "19:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-07-10",
    fixtures: [
      {
        team1: "Winner QF3",
        team2: "Winner QF4",
        stage: "Semis",
        venue: "Dortmund",
        time: "19:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-07-14",
    fixtures: [
      {
        team1: "Winner SF1",
        team2: "Winner SF2",
        stage: "Final",
        venue: "Berlin",
        time: "19:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
];

const checkbox = document.getElementById("swap-checkbox");
const timeOrScoreSpans = document.getElementsByClassName("time-score");
const matchElements = document.getElementsByClassName("match");

const matches = fixtures.flatMap((dateItem) =>
  dateItem.fixtures.map((match) => ({ ...match, date: dateItem.date }))
);

function displayScoresAndExtraInfo() {
  for (let i = 0; i < matches.length; i++) {
    if (checkbox.checked) {
      if (matches[i].score !== "") {
        timeOrScoreSpans[i].textContent = matches[i].score;
      }
      if (matches[i].extraInfo) {
        matchElements[i].lastElementChild.textContent = matches[i].extraInfo;
      }
    } else {
      if (matches[i].score === "") {
        const dateTime = new Date(`${matches[i].date}T${matches[i].time}Z`);
        timeOrScoreSpans[i].textContent = dateTime
          .toLocaleTimeString("en-GB")
          .slice(0, -3)
          .replace(",", "");
      } else {
        timeOrScoreSpans[i].textContent = "f.t.";
      }
      if (matches[i].extraInfo) {
        matchElements[i].lastElementChild.textContent = "";
      }
    }
  }
}

const fixturesList = document.getElementById("fixtures-list");

fixtures.forEach((dateItem) => {
  const date = document.createElement("p");
  date.className = "date";
  date.textContent = new Date(`${dateItem.date}T14:00Z`)
    .toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, -5)
    .replace(",", "");
  fixturesList.appendChild(date);

  dateItem.fixtures.forEach((match) => {
    const matchDiv = document.createElement("div");
    matchDiv.className = "match";
    fixturesList.appendChild(matchDiv);
    const matchInfoDiv = document.createElement("div");
    matchInfoDiv.className = "match-info";
    const matchText = document.createElement("p");
    const stageSpan = document.createElement("span");
    stageSpan.className = "stage";
    stageSpan.textContent = match.stage;
    matchText.appendChild(stageSpan);

    matchText.innerHTML += ` <span class="team team1">${match.team1}</span> `;
    const timeOrScoreSpan = document.createElement("span");
    timeOrScoreSpan.className = "time-score";
    matchText.appendChild(timeOrScoreSpan);

    matchText.innerHTML += ` <span class="team team2" data-country="${match.team2.toLowerCase()}">${
      match.team2
    }</span>`;

    const venueSpan = document.createElement("span");
    venueSpan.className = "venue";
    venueSpan.textContent = match.venue;
    matchText.appendChild(venueSpan);
    matchInfoDiv.appendChild(matchText);
    matchDiv.appendChild(matchInfoDiv);
    if (match.extraInfo) {
      const extraInfo = document.createElement("p");
      extraInfo.className = "extra-info";
      matchDiv.appendChild(extraInfo);
    }
  });
});

displayScoresAndExtraInfo();
