const fixtures = [
  {
    date: "2024-06-14",
    fixtures: [
      {
        team1: "Germany",
        team2: "Scotland",
        stage: "Group A",
        venue: "Munich",
        time: "19:00",
        score: "",
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
        venue: "Cologne",
        time: "13:00",
        score: "",
      },
      {
        team1: "Spain",
        team2: "Croatia",
        stage: "Group B",
        venue: "Berlin",
        time: "16:00",
        score: "",
      },
      {
        team1: "Italy",
        team2: "Albania",
        stage: "Group B",
        venue: "Dortmund",
        time: "19:00",
        score: "",
      },
    ],
  },
  {
    date: "2024-06-16",
    fixtures: [
      {
        team1: "Poland",
        team2: "Holland",
        stage: "Group D",
        venue: "Hamburg",
        time: "13:00",
        score: "",
      },
      {
        team1: "Slovenia",
        team2: "Denmark",
        stage: "Group C",
        venue: "Stuttgart",
        time: "16:00",
        score: "",
      },
      {
        team1: "Serbia",
        team2: "England",
        stage: "Group C",
        venue: "Gelsenkirchen",
        time: "19:00",
        score: "",
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
        venue: "Munich",
        time: "13:00",
        score: "",
      },
      {
        team1: "Belgium",
        team2: "Slovakia",
        stage: "Group E",
        venue: "Frankfurt",
        time: "16:00",
        score: "",
      },
      {
        team1: "Austria",
        team2: "France",
        stage: "Group D",
        venue: "Düsseldorf",
        time: "19:00",
        score: "",
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
        score: "",
      },
      {
        team1: "Portugal",
        team2: "Czechia",
        stage: "Group F",
        venue: "Leipzig",
        time: "19:00",
        score: "",
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
        score: "",
      },
      {
        team1: "Germany",
        team2: "Hungary",
        stage: "Group A",
        venue: "Stuttgart",
        time: "16:00",
        score: "",
      },
      {
        team1: "Scotland",
        team2: "Switzerland",
        stage: "Group A",
        venue: "Cologne",
        time: "19:00",
        score: "",
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
        venue: "Munich",
        time: "13:00",
        score: "",
      },
      {
        team1: "Denmark",
        team2: "England",
        stage: "Group C",
        venue: "Frankfurt",
        time: "16:00",
        score: "",
      },
      {
        team1: "Spain",
        team2: "Italy",
        stage: "Group B",
        venue: "Gelsenkirchen",
        time: "19:00",
        score: "",
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
        score: "",
      },
      {
        team1: "Poland",
        team2: "Austria",
        stage: "Group D",
        venue: "Berlin",
        time: "16:00",
        score: "",
      },
      {
        team1: "Holland",
        team2: "France",
        stage: "Group D",
        venue: "Leipzig",
        time: "19:00",
        score: "",
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
        score: "",
      },
      {
        team1: "Turkey",
        team2: "Portugal",
        stage: "Group F",
        venue: "Dortmund",
        time: "16:00",
        score: "",
      },
      {
        team1: "Belgium",
        team2: "Romania",
        stage: "Group E",
        venue: "Cologne",
        time: "19:00",
        score: "",
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
        score: "",
      },
      {
        team1: "Scotland",
        team2: "Hungary",
        stage: "Group A",
        venue: "Stuttgart",
        time: "19:00",
        score: "",
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
        score: "",
      },
      {
        team1: "Albania",
        team2: "Spain",
        stage: "Group B",
        venue: "Düsseldorf",
        time: "19:00",
        score: "",
      },
    ],
  },
  {
    date: "2024-06-25",
    fixtures: [
      {
        team1: "Holland",
        team2: "Austria",
        stage: "Group D",
        venue: "Berlin",
        time: "16:00",
        score: "",
      },
      {
        team1: "France",
        team2: "Poland",
        stage: "Group D",
        venue: "Dortmund",
        time: "16:00",
        score: "",
      },
      {
        team1: "England",
        team2: "Slovenia",
        stage: "Group C",
        venue: "Cologne",
        time: "19:00",
        score: "",
      },
      {
        team1: "Denmark",
        team2: "Serbia",
        stage: "Group C",
        venue: "Munich",
        time: "19:00",
        score: "",
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
        score: "",
      },
      {
        team1: "Ukraine",
        team2: "Belgium",
        stage: "Group E",
        venue: "Stuttgart",
        time: "16:00",
        score: "",
      },
      {
        team1: "Czechia",
        team2: "Turkey",
        stage: "Group F",
        venue: "Hamburg",
        time: "19:00",
        score: "",
      },
      {
        team1: "Georgia",
        team2: "Portugal",
        stage: "Group F",
        venue: "Gelsenkirchen",
        time: "19:00",
        score: "",
      },
    ],
  },
  {
    date: "2024-06-29",
    fixtures: [
      {
        team1: "2<sup>nd</sup> A",
        team2: "2<sup>nd</sup> B",
        stage: "R16 #1",
        venue: "Berlin",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "1<sup>st</sup> A",
        team2: "2<sup>nd</sup> C",
        stage: "R16 #2",
        venue: "Dortmund",
        time: "19:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-06-30",
    fixtures: [
      {
        team1: "1<sup>st</sup> C",
        team2: "3<sup>rd</sup> D/E/F",
        stage: "R16 #3",
        venue: "Gelsenkirchen",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "1<sup>st</sup> B",
        team2: "3<sup>rd</sup> A/D/E/F",
        stage: "R16 #4",
        venue: "Cologne",
        time: "19:00",
        score: "",
        extraInfo: "",
      },
    ],
  },
  {
    date: "2024-07-01",
    fixtures: [
      {
        team1: "2<sup>nd</sup> D",
        team2: "2<sup>nd</sup> E",
        stage: "R16 #5",
        venue: "Düsseldorf",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "1<sup>st</sup> F",
        team2: "3<sup>rd</sup> A/B/C",
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
        team1: "1<sup>st</sup> E",
        team2: "3<sup>rd</sup> A/B/C/D",
        stage: "R16 #7",
        venue: "Munich",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "1<sup>st</sup> D",
        team2: "2<sup>nd</sup> F",
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
        team1: "Winner R16 #4",
        team2: "Winner R16 #2",
        stage: "QF1",
        venue: "Stuttgart",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "Winner R16 #6",
        team2: "Winner R16 #5",
        stage: "QF2",
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
        team1: "Winner R16 #1",
        team2: "Winner R16 #3",
        stage: "QF3",
        venue: "Düsseldorf",
        time: "16:00",
        score: "",
        extraInfo: "",
      },
      {
        team1: "Winner R16 #7",
        team2: "Winner R16 #8",
        stage: "QF4",
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
        stage: "Semi-final",
        venue: "Munich",
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
        stage: "Semi-final",
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
      const dateTime = new Date(`${matches[i].date}T${matches[i].time}Z`);
      timeOrScoreSpans[i].textContent = dateTime
        .toLocaleTimeString("en-GB")
        .slice(0, -3)
        .replace(",", "");
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

    matchText.innerHTML += ` <span class="team team1" data-country="${match.team1.toLowerCase()}">${
      match.team1
    }</span> `;
    const timeOrScoreSpan = document.createElement("span");
    timeOrScoreSpan.className = "time-score";
    const dateTime = new Date(`${dateItem.date}T${match.time}Z`);
    timeOrScoreSpan.textContent = dateTime
      .toLocaleTimeString("en-GB")
      .slice(0, -3);
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
