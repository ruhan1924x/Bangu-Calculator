
"use strict";


function checkProtectedName(name) {
  // Ignore capitalization, spaces, and common separators.
  const normalized = name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  // Protected name + common spelling variations.
  const protectedNames = [
    "ruhan",
    "rohan",
    "rehan",
    "rahan",
    "ruhaan",
    "rohaan",
    "rayhan",
    "raihan",
    "rihan",
    "ruhanx",
    "sheikhruhan",
    "DUET",
    "diploma",
    "gai",
    "graphic arts"
  ];

  return protectedNames.includes(normalized);
}


// ================================================
// BANGU.EXE — THE CERTIFIED BANGU DETECTOR
// 20 questions | 3 options each | 0–100% score
// ================================================


const questions = [
  {
    category: "GEOPOLITICAL FACEBOOK PROFESSOR",
    question: "Duniya te duita desher moddhe war cholche. Tumi ekta 37-second Reel dekhecho. Ekhon tomar move?",
    answers: [
      { text: "Multiple sources check kore context bujhbo.", points: 0 },
      { text: "Duita president-ke boshiye 5 minute-e war shesh kore dibo.", points: 5 },
      { text: "Comment section-e experts-der opinion dekhbo.", points: 2.5 }
    ]
  },
  {
    category: "GEOPOLITICAL FACEBOOK PROFESSOR",
    question: "Keu bollo, 'War-er history onek complex.' Tumi reply dile...",
    answers: [
      { text: "Specific issue-ta niye discuss kori.", points: 2.5 },
      { text: "Haan, history ar politics consider kora dorkar.", points: 0 },
      { text: "Bhai ami 3 ta YouTube video dekhechi. Amake geopolitics shikhao na. 💀", points: 5 }
    ]
  },
  {
    category: "GEOPOLITICAL FACEBOOK PROFESSOR",
    question: "Tumi world-er shob war-er solution jano. UN tomake hire koreni keno?",
    answers: [
      { text: "Ora jane ami gele oder job thakbe na. 🗿", points: 5 },
      { text: "Maybe amar expertise oi level-e na.", points: 2.5 },
      { text: "Ami shob solution jani na, issue-gulo complex.", points: 0 }
    ]
  },
  {
    category: "GEOPOLITICAL FACEBOOK PROFESSOR",
    question: "Tomar war analysis-e keu ekta factual mistake dhoriye dilo. Tumi...",
    answers: [
      { text: "Source check kore vul hole correction dibo.", points: 0 },
      { text: "HAHAHA BRO THINKS HE DEBUNKED ME. YOU ARE RAGE BAITED. 💀", points: 5 },
      { text: "Dujone source compare kore dekhi.", points: 2.5 }
    ]
  },
  {
    category: "GEOPOLITICAL FACEBOOK PROFESSOR",
    question: "Tumi bolle, 'Ami president hole 24 ghontay shob war bondho.' Keu jiggesh korlo kivabe. Tumi...",
    answers: [
      { text: "Diplomacy, security ar limitations explain korbo.", points: 0 },
      { text: "Age amar plan-ta properly bhabi.", points: 2.5 },
      { text: "First-e shobai-ke block kortam. Problem solved. 😎", points: 5 }
    ]
  },
  {
    category: "MIDNIGHT PHILOSOPHER",
    question: "Raat 3tay Google korle: 'Do fish know they are wet?' Sokale tomar bio...",
    answers: [
      { text: "THE AWARENESS OF WATER IS A SOCIAL CONSTRUCT. — Me, 3:17 AM", points: 5 },
      { text: "Still the same bio.", points: 0 },
      { text: "Friend-der sathe funny fact share korbo.", points: 2.5 }
    ]
  },
  {
    category: "MIDNIGHT PHILOSOPHER",
    question: "Ekta video bollo, 'Everything is energy.' Ekhon tumi...",
    answers: [
      { text: "Science-er actual meaning bujhar chesta korbo.", points: 0 },
      { text: "Quantum physics diye explain korbo keno amar ex amake chere geche.", points: 5 },
      { text: "Interesting claim, aro research kori.", points: 2.5 }
    ]
  },
  {
    category: "MIDNIGHT PHILOSOPHER",
    question: "Keu jiggesh korlo, 'Bhai, tumi ki bolte chaccho?' Tumi...",
    answers: [
      { text: "If you understood me, you wouldn't need me to explain. 🗿", points: 5 },
      { text: "Simple kore abar boli.", points: 0 },
      { text: "Example diye explain korbo.", points: 2.5 }
    ]
  },
  {
    category: "MIDNIGHT PHILOSOPHER",
    question: "Ekta quote porle: 'The universe is a mirror.' Ekhon tomar reaction...",
    answers: [
      { text: "Quote-ta niye bhabi, context dekhi.", points: 0 },
      { text: "Story-te share kori, vibe-ta bhalo.", points: 2.5 },
      { text: "Ma cha banate bolse. I have transcended domestic expectations.", points: 5 }
    ]
  },
  {
    category: "MIDNIGHT PHILOSOPHER",
    question: "Tomar argument-er meaning keu bujhte parlo na. Tumi conclude korle...",
    answers: [
      { text: "They are not intellectually equipped for my frequency. 🗿", points: 5 },
      { text: "Maybe ami clear chilam na.", points: 0 },
      { text: "Aro specific example dei.", points: 2.5 }
    ]
  },
  {
    category: "PROFESSIONAL RAGE-BAITER",
    question: "Tumi puro argument-e bhul chile. Kintu last-e likhle...",
    answers: [
      { text: "Okay, amar mistake chilo.", points: 0 },
      { text: "LMAOOOO BRO WROTE A PARAGRAPH. RENT FREE. 😭", points: 5 },
      { text: "Let's agree to disagree.", points: 2.5 }
    ]
  },
  {
    category: "PROFESSIONAL RAGE-BAITER",
    question: "Keu tomar claim-er against-e 4 ta source dilo. Tumi...",
    answers: [
      { text: "Protita point niye discuss kori.", points: 2.5 },
      { text: "BRO BROUGHT SOURCES TO A VIBE FIGHT. 💀", points: 5 },
      { text: "Source-gulo review kori.", points: 0 }
    ]
  },
  {
    category: "PROFESSIONAL RAGE-BAITER",
    question: "Tumi nijer comment delete kore dile, tarpor bolle...",
    answers: [
      { text: "I WON. BRO HAD TO MAKE ME DELETE IT. 😭", points: 5 },
      { text: "Vul comment chilo, tai delete korechi.", points: 0 },
      { text: "Unnecessary argument avoid korlam.", points: 2.5 }
    ]
  },
  {
    category: "PROFESSIONAL RAGE-BAITER",
    question: "Tumi 17 ta reply diye sheshe bolle...",
    answers: [
      { text: "Thanks for the discussion.", points: 0 },
      { text: "Amader disagreement roye gelo.", points: 2.5 },
      { text: "Bro is obsessed with me. Anyway, here's my 18th reply.", points: 5 }
    ]
  },
  {
    category: "CERTIFIED EGO DEPARTMENT",
    question: "Tomake keu bollo, 'Bhai, tumi shob kichu jano na.' Tumi...",
    answers: [
      { text: "I know that I know nothing. Except that you're wrong.", points: 5 },
      { text: "Obviously, keu shob kichu jane na.", points: 0 },
      { text: "Kon topic-e bolcho?", points: 2.5 }
    ]
  },
  {
    category: "CERTIFIED EGO DEPARTMENT",
    question: "Tumi ekta English word shikhle: 'Existential.' Ekhon tomar kotha...",
    answers: [
      { text: "Meaning-ta bujhe normal conversation-e use kori.", points: 0 },
      { text: "Majhe majhe word-ta use kori.", points: 2.5 },
      { text: "My existential framework rejects your low-vibration argument.", points: 5 }
    ]
  },
  {
    category: "CERTIFIED EGO DEPARTMENT",
    question: "Group chat-e keu tomar vul dhoriye dilo. Tumi...",
    answers: [
      { text: "Voice note 7:43 minutes — Chapter 1: Why You Are Wrong.", points: 5 },
      { text: "Meme diye situation halka kori.", points: 2.5 },
      { text: "Oops, amar vul.", points: 0 }
    ]
  },
  {
    category: "CERTIFIED EGO DEPARTMENT",
    question: "Tumi ekta random fact shunle. Ekhon tumi nijeke ki bhabo?",
    answers: [
      { text: "Ekjon curious learner.", points: 0 },
      { text: "The last surviving intellectual in a civilization of NPCs.", points: 5 },
      { text: "Fact-ta verify kore dekhbo.", points: 2.5 }
    ]
  },
  {
    category: "FINAL BOSS",
    question: "Keu tomar kache source chailo. Tumi...",
    answers: [
      { text: "Abar khuje ber korar chesta kori.", points: 2.5 },
      { text: "SOURCE? SOURCE IS THE MATRIX TRYING TO SILENCE ME.", points: 5 },
      { text: "Source share kori, na thakle seta boli.", points: 0 }
    ]
  },
  {
    category: "FINAL BOSS",
    question: "FINAL BOSS: tumi 19 ta question-er answer diye nijeke 200 IQ bhabcho. Ekhon?",
    answers: [
      { text: "Result dekhi. Ami-o bhul korte pari.", points: 0 },
      { text: "THE CALCULATOR CANNOT MEASURE ME. I AM THE CALCULATOR.", points: 5 },
      { text: "Test-ta funny chilo. Score dekhi.", points: 2.5 }
    ]
  }
];


// ================================================
// GAME STATE
// ================================================

const $ = (id) => document.getElementById(id);

const startScreen = $("start-screen");
const quizScreen = $("quiz-screen");
const resultScreen = $("result-screen");

let playerName = "";
let currentQuestion = 0;
let totalPoints = 0;
let selectedAnswers = [];
let gameLocked = false;


// ================================================
// START GAME
// ================================================

$("player-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredName = $("player-name").value.trim();

  if (!enteredName) {
    $("player-name").focus();
    return;
  }
  
if (checkProtectedName(enteredName)) {
  alert("💀 YOU NEED AURA TO HAVE THIS NAME.");
  $("player-name").focus();
  return;
}


  playerName = enteredName.slice(0, 30);
  currentQuestion = 0;
  totalPoints = 0;
  selectedAnswers = [];
  gameLocked = false;

  showScreen(quizScreen);
  renderQuestion();
});

// ================================================
// SCREEN MANAGEMENT
// ================================================

function showScreen(screenToShow) {
  [startScreen, quizScreen, resultScreen].forEach((screen) => {
    const isActive = screen === screenToShow;

    screen.hidden = !isActive;
    screen.classList.toggle("active", isActive);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ================================================
// RENDER QUESTION
// ================================================

function renderQuestion() {
  gameLocked = false;

  const item = questions[currentQuestion];

  $("question-category").textContent = item.category;
  $("question-counter").textContent =
    `${String(currentQuestion + 1).padStart(2, "0")} / 20`;

  $("progress-bar").style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  $("question-text").textContent = item.question;
  $("quiz-feedback").textContent = "";

  const optionsContainer = $("answer-options");
  optionsContainer.replaceChildren();

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-button";

    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = answer.text;

    button.append(letter, text);

    button.addEventListener("click", () => {
      selectAnswer(index);
    });

    optionsContainer.appendChild(button);
  });
}

// ================================================
// ANSWER SELECTION
// ================================================

function selectAnswer(answerIndex) {
  if (gameLocked) return;

  gameLocked = true;

  const item = questions[currentQuestion];
  const chosenAnswer = item.answers[answerIndex];

  selectedAnswers.push(answerIndex);
  totalPoints += chosenAnswer.points;

  const buttons = $("answer-options").querySelectorAll("button");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === answerIndex) {
      button.classList.add("selected");
    }
  });

  const feedback = $("quiz-feedback");

  if (chosenAnswer.points === 5) {
    feedback.textContent = "⚠️ PROFESSOR ENERGY DETECTED.";
  } else if (chosenAnswer.points === 2.5) {
    feedback.textContent = "👀 THE COMMITTEE IS TAKING NOTES...";
  } else {
    feedback.textContent = "✓ REASONABLE HUMAN BEHAVIOUR DETECTED.";
  }

  window.setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }, 650);
}

// ================================================
// RESULTS AND RANKS
// ================================================

function getRank(score) {
  if (score < 20) {
    return {
      title: "INNOCENT NPC",
      roast: "Congratulations. You can admit mistakes and understand that the universe does not revolve around your comment section. Suspiciously normal behaviour."
    };
  }

  if (score < 40) {
    return {
      title: "AMATEUR GYANI",
      roast: "You've got a few opinions and a Wi-Fi connection. There's still hope, but one late-night documentary could change everything."
    };
  }

  if (score < 60) {
    return {
      title: "FACEBOOK PHILOSOPHER",
      roast: "Your profile picture has sunglasses, your bio has a mysterious quote, and your confidence has absolutely no loading screen."
    };
  }

  if (score < 80) {
    return {
      title: "PROFESSIONAL YAPPER",
      roast: "You can turn a yes-or-no question into a 40-minute lecture. Your opponent has left the chat, but you are still winning the imaginary debate."
    };
  }

  if (score < 90) {
    return {
      title: "SIGMA PROFESSOR OF NONSENSE",
      roast: "The evidence is against you. The facts are against you. Reality itself has submitted a complaint. You have responded: 'Nice rage bait bro.'"
    };
  }

  if (score < 100) {
    return {
      title: "CERTIFIED BANGU",
      roast: "You have transcended the comment section. Every correction is jealousy. Every source is propaganda. Every disagreement is proof of your superiority."
    };
  }

  return {
    title: "THE CALCULATOR FEARS YOU",
    roast: "You didn't take the test. You challenged its existence. Somewhere, a philosopher just woke up in a cold sweat. Reality has officially blocked you."
  };
}

function showResults() {
  // Maximum possible points = 20 questions × 5 points = 100.
  const score = Math.round(totalPoints);

  const rank = getRank(score);

  $("result-heading").textContent =
    score >= 90 ? "THE COMMITTEE HAS REACHED A VERDICT." :
    score >= 60 ? "WE NEED TO TALK." :
    "THE RESULTS ARE IN.";

  $("meter-value").textContent = `${score}%`;
  $("meter-fill").style.width = `${score}%`;
  $("result-rank").textContent = rank.title;
  $("result-roast").textContent = rank.roast;

  const certificateArea = $("certificate-area");
  const qualifies = score >= 90;

  certificateArea.hidden = !qualifies;

  if (qualifies) {
    $("certificate-name").textContent = playerName;
    $("certificate-score").textContent = `${score}% BANGU`;
  }

  showScreen(resultScreen);

  // Animate the meter after the result screen becomes visible.
  requestAnimationFrame(() => {
    $("meter-fill").style.width = `${score}%`;
  });
}

// ================================================
// CERTIFICATE — PRINT / SAVE AS PDF
// ================================================

$("download-certificate").addEventListener("click", () => {
  const certificate = $("certificate-area").querySelector(".certificate");

  if (!certificate || $("certificate-area").hidden) return;

  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    alert("Your browser blocked the certificate window. Allow pop-ups and try again.");
    return;
  }

  const safeCertificate = certificate.cloneNode(true);

  printWindow.document.open();
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>BANGU Certificate - ${escapeHTML(playerName)}</title>
      <style>
        @page {
          size: landscape;
          margin: 12mm;
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          min-height: 90vh;
          display: grid;
          place-items: center;
          font-family: Arial, sans-serif;
          background: #fff;
        }

        .certificate {
          width: 100%;
          max-width: 950px;
          padding: 48px;
          text-align: center;
          color: #30250d;
          background: #fff4cf;
          border: 8px double #96762e;
          outline: 2px solid #c7a64b;
          outline-offset: -17px;
        }

        .certificate-overline,
        .certificate-stamp {
          font: bold 12px/1.8 monospace;
          letter-spacing: 2px;
        }

        h2 { font-size: 34px; margin: 28px 0; }
        h3 { font-size: 40px; overflow-wrap: anywhere; }
        p { font-size: 16px; line-height: 1.8; }
        strong { display: block; font-size: 27px; margin: 24px 0; }
        .certificate-stamp { border-top: 1px solid #96762e; padding-top: 18px; }

        @media print {
          body { min-height: auto; }
          .certificate { max-width: none; }
        }
      </style>
    </head>
    <body>
      ${safeCertificate.outerHTML}
      <script>
        window.onload = () => window.print();
      <\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
});

// Escape text inserted into the generated document title.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

// ================================================
// RESTART
// ================================================

$("restart-button").addEventListener("click", () => {
  playerName = "";
  currentQuestion = 0;
  totalPoints = 0;
  selectedAnswers = [];
  gameLocked = false;

  $("player-form").reset();
  $("progress-bar").style.width = "0%";
  $("meter-fill").style.width = "0%";

  showScreen(startScreen);
  $("player-name").focus();
});
