/* =========================================
   OPENING HEART + TEXT SEQUENCE
   ========================================= */

window.addEventListener("load", () => {

  const loveIntro = document.getElementById("loveIntro");
  const introText = document.getElementById("introText");

  if (!loveIntro || !introText) return;

  const introTexts = [
    "Your special day is about to begin... ❤️",
    "A little surprise made just for you...",
    "Something beautiful is waiting for you...",
    "Made with lots of love... ✨"
  ];

  let current = 0;

  function showNextText() {

    introText.classList.remove("show");
    introText.classList.add("hide");

    setTimeout(() => {

      introText.textContent = introTexts[current];

      introText.classList.remove("hide");
      introText.classList.add("show");

      current++;

      if (current >= introTexts.length) {

        setTimeout(() => {

          introText.classList.remove("show");
          introText.classList.add("hide");

          setTimeout(() => {

            loveIntro.classList.add("hide");

            setTimeout(() => {
              loveIntro.remove();
            }, 900);

          }, 2500);

        }, 1200);

        return;
      }

      setTimeout(showNextText, 1200);

    }, 500);
  }

  setTimeout(showNextText, 400);

});


/* =========================================
   HELPERS
   ========================================= */

const $ = (selector) =>
  document.querySelector(selector);

const $$ = (selector) =>
  [...document.querySelectorAll(selector)];


const screens = $$(".screen");


function show(id) {

  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const target = $("#" + id);

  if (target) {
    target.classList.add("active");
  }

}


/* =========================================
   SPECIAL NUMBER — REVEAL
   ========================================= */

const revealNumber =
  document.getElementById("revealNumber");

const specialNumber =
  document.getElementById("specialNumber");

const digitTwo =
  document.getElementById("digitTwo");

const digitZero =
  document.getElementById("digitZero");

const specialMessage =
  document.getElementById("specialMessage");

const continueNumber =
  document.getElementById("continueNumber");


if (revealNumber) {

  revealNumber.addEventListener("click", () => {

    revealNumber.disabled = true;

    revealNumber.classList.add("hide");

    specialNumber.classList.remove("hidden-number");

    specialNumber.classList.add("reveal-number");


    setTimeout(() => {

      if (digitTwo) {
        digitTwo.classList.add("show-digit");
      }

    }, 150);


    setTimeout(() => {

      if (digitZero) {
        digitZero.classList.add("show-digit");
      }

    }, 400);


    setTimeout(() => {

      if (specialMessage) {
        specialMessage.classList.add("show-message");
      }

    }, 1100);


    setTimeout(() => {

      if (continueNumber) {
        continueNumber.classList.add("show-continue");
      }

    }, 1500);

  });

}


/* =========================================
   LOADING
   ========================================= */

setTimeout(() => {

  show("welcome");

}, 1400);


/* =========================================
   WELCOME + DECORATION
   ========================================= */

const decorate =
  $("#decorate");

const welcomeText =
  $("#welcomeText");


let decorationStarted = false;


if (decorate) {

  decorate.onclick = () => {

    /*
       FIRST CLICK
       Start all decorations together
    */

    if (!decorationStarted) {

      decorationStarted = true;


      const app =
        document.getElementById("app");


      if (app) {
        app.classList.add("decorating");
      }


      welcomeText.textContent =
        "Perfect! A special little place, made just for you.";


      decorate.textContent =
        "Let's Begin ♥";


      return;
    }


    /*
       SECOND CLICK
       Continue to Special Number
    */

    show("number");

  };

}


/* =========================================
   NORMAL NEXT BUTTONS
   ========================================= */

$$("[data-next]").forEach(button => {

  button.onclick = () => {

    show(button.dataset.next);

  };

});


/* =========================================
   12 THINGS
   ========================================= */

const love = [

  "Your beautiful smile that can brighten anyone's day.",

  "The kindness and warmth you show to everyone around you.",

  "The way your laugh always brings joy and happiness.",

  "Your caring heart and the love you share with others.",

  "Those little things that make you uniquely you.",

  "How you always make people feel comfortable and appreciated.",

  "Your positive energy and the happiness you bring wherever you go.",

  "How you make ordinary moments feel a little more special.",

  "The memories we make and the little moments I never want to forget.",

  "Your wonderful sense of humor and those silly moments we share.",

  "And Likhitha,I know I made a mistake and hurt you,and I'm genuinely sorry",

  "I'm really sorry.❤️ And Thank you Once again Happy Birthday Potti dana"

];


let loveIndex = 0;


const loveCard =
  $("#loveCard");

const loveNumber =
  $("#loveNumber");

const loveText =
  $("#loveText");

const loveCounter =
  $("#loveCounter");

const loveNext =
  $("#loveNext");


function renderLove() {

  loveNumber.textContent =
    "#" + (loveIndex + 1);

  loveCounter.textContent =
    (loveIndex + 1) + " / 12";

  loveText.textContent =
    love[loveIndex];


  loveCard.classList.remove(
    "flipped"
  );

  loveNext.classList.add(
    "hidden"
  );

}


loveCard.onclick = () => {

  if (
    !loveCard.classList.contains("flipped")
  ) {

    loveCard.classList.add(
      "flipped"
    );

    loveNext.classList.remove(
      "hidden"
    );

  }

};


loveNext.onclick = () => {

  if (loveIndex < 11) {

    loveIndex++;

    renderLove();

  } else {

    show("balloons");

    setupBalloons();

  }

};


renderLove();


/* =========================================
   BALLOONS — POP TO REVEAL ATTRIBUTES
   ========================================= */

let popped = 0;

function setupBalloons() {

  const area = $("#popArea");

  area.innerHTML = "";

  popped = 0;

  const traits = [
    {
      text: "Beautiful",
      emoji: "💖",
      className: "trait-beautiful"
    },
    {
      text: "Smart",
      emoji: "✨",
      className: "trait-smart"
    },
    {
      text: "Kind",
      emoji: "🌸",
      className: "trait-kind"
    },
    {
      text: "Mine",
      emoji: "🫶",
      className: "trait-mine"
    },
    {
      text: "Cute",
      emoji: "🥰",
      className: "trait-cute"
    }
  ];

  /*
    Create the hidden attribute labels first.
    They become visible only after their balloon is popped.
  */

  traits.forEach(trait => {

    const label = document.createElement("div");

    label.className =
      "trait-label " + trait.className;

    label.innerHTML = `
      <span class="trait-emoji">${trait.emoji}</span>
      <span class="trait-name">${trait.text}</span>
    `;

    area.appendChild(label);

  });


  /*
    Create the balloons
  */

  traits.forEach((trait, index) => {

    const balloon =
      document.createElement("button");

    balloon.className =
      "pop-balloon balloon-" + (index + 1);

    balloon.setAttribute(
      "aria-label",
      "Pop balloon"
    );

    balloon.innerHTML = `
      <span></span>
    `;

    balloon.onclick = () => {

      if (
        balloon.classList.contains("popped")
      ) {
        return;
      }

      /*
        Balloon popping animation
      */

      balloon.classList.add("popped");

      /*
        Show the matching attribute
      */

      const label =
        area.querySelector(
          "." + trait.className
        );

      if (label) {

        setTimeout(() => {

          label.classList.add("revealed");

        }, 120);

      }

      popped++;


      /*
        When all balloons are popped,
        show Cute Memories button.
      */

      if (popped === traits.length) {

        setTimeout(() => {

          $("#memoryStart")
            .classList.remove("hidden");

          $("#memoryStart")
            .classList.add("memory-ready");

        }, 700);

      }

    };

    area.appendChild(balloon);

  });

}


$("#memoryStart").onclick = () => {

  show("memories");

  memoryIndex = 0;

  renderMemory();

};


/* =========================
   MEMORIES
========================= */

let memoryIndex = 0;

const memoryImages = [
  "photos/memory1.jpeg",
  "photos/memory2.jpeg",
  "photos/memory3.jpeg",
  "photos/memory4.jpeg",
  "photos/memory5.jpeg"
];

const captions = [
  "A little moment to treasure ✨",
  "A memory that still makes me smile 💛",
  "One of those beautiful little moments 🌸",
  "A memory I'll always keep close ❤️",
  "A beautiful memory worth keeping forever ✨"
];


function renderMemory() {

  const image =
    $("#memoryImage");

  image.src =
    memoryImages[memoryIndex];


  $("#memoryCaption")
    .textContent =
    captions[memoryIndex];


  $("#memoryCounter")
    .textContent =
    (memoryIndex + 1) + " / 5";


  $("#memoryNext")
    .textContent =
    memoryIndex === 4
      ? "Continue →"
      : "Next Memory →";

}


$("#memoryNext").onclick = () => {

  if (memoryIndex < 4) {

    memoryIndex++;

    renderMemory();

  } else {

    // Go to the animated hug
    show("hug");

    // Wait for the hug animation to finish
    const hugGif = document.querySelector(".hug-gif");

    if (hugGif) {

      // Restart GIF from the beginning
      const gifSrc = hugGif.src;

      hugGif.src = "";

      hugGif.src = gifSrc;

    }

    // Give the GIF time to complete
    setTimeout(() => {

      show("wish");

      setupCandles();

    }, 4000);

  }

};


renderMemory();


/* =========================================
   CANDLES
   ========================================= */

let blown = 0;


function setupCandles() {

  const container =
    $("#candles");


  container.innerHTML = "";

  blown = 0;


  $("#wishTip").textContent =
    "Make a wish... ✨";


  $("#wishTip")
    .classList.remove("done");


  for (
    let i = 0;
    i < 5;
    i++
  ) {

    const candle =
      document.createElement("button");


    candle.className =
      "candle";


    candle.onclick = () => {

      if (
        candle.classList.contains("out")
      ) {
        return;
      }


      candle.classList.add(
        "out"
      );


      blown++;


      if (blown === 5) {

        $("#wishTip")
          .textContent =
          "Wish made! ✨";


        $("#wishTip")
          .classList.add("done");


        launchFireworks();


        setTimeout(() => {

          show("birthday");

        }, 2800);

      }

    };


    container.appendChild(candle);

  }

}


setupCandles();


/* =========================================
   FIREWORKS
   ========================================= */

function launchFireworks() {

  const canvas =
    $("#fireworks");


  const ctx =
    canvas.getContext("2d");


  canvas.width =
    window.innerWidth;

  canvas.height =
    window.innerHeight;


  let particles = [];


  for (
    let k = 0;
    k < 5;
    k++
  ) {

    const x =
      Math.random() *
      canvas.width;


    const y =
      100 +
      Math.random() *
      canvas.height *
      0.45;


    for (
      let i = 0;
      i < 45;
      i++
    ) {

      const angle =
        Math.random() *
        Math.PI *
        2;


      const speed =
        2 +
        Math.random() * 4;


      particles.push({

        x: x,

        y: y,

        vx:
          Math.cos(angle) *
          speed,

        vy:
          Math.sin(angle) *
          speed,

        life:
          70 +
          Math.random() * 25

      });

    }

  }


  let frame = 0;


  function animate() {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );


    particles.forEach(p => {

      p.x += p.vx;

      p.y += p.vy;

      p.vy += 0.035;

      p.life--;


      ctx.globalAlpha =
        Math.max(
          0,
          p.life / 90
        );


      ctx.fillStyle =
        "#f7d36b";


      ctx.beginPath();

      ctx.arc(
        p.x,
        p.y,
        2.1,
        0,
        Math.PI * 2
      );

      ctx.fill();

    });


    ctx.globalAlpha = 1;


    frame++;


    if (frame < 100) {

      requestAnimationFrame(
        animate
      );

    } else {

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

    }

  }


  animate();

}


/* =========================================
   LETTER
   ========================================= */

$("#openLetter").onclick =
  () => {

    show("letter");

  };


/* =========================================
   GIFT
   ========================================= */

$("#lastThing").onclick =
  () => {

    show("gift");

  };


$("#giftBox").onclick =
  () => {

    const gift =
      $("#giftBox");


    gift.classList.add(
      "open"
    );


    setTimeout(() => {

      show("end");

    }, 1500);

  };


/* =========================================
   RESTART
   ========================================= */

$("#again").onclick =
  () => {

    loveIndex = 0;

    renderLove();


    $("#welcomeText")
      .textContent =
      "Today is your special day! But wait... this place is missing a little magic...";


    $("#decorate")
      .textContent =
      "✨ Let's Decorate";


    decorationStarted = false;


    const app =
      document.getElementById("app");


    if (app) {
      app.classList.remove("decorating");
    }


    $("#giftBox")
      .classList.remove("open");


    show("loading");


    setTimeout(() => {

      show("welcome");

    }, 1000);

  };


/* =========================================
   CLICK SPARKLES
   ========================================= */

document.addEventListener(
  "click",
  event => {

    if (
      event.target.closest(
        "button,.love-card,.gift-box"
      )
    ) {

      const sparkle =
        document.createElement("span");


      sparkle.textContent =
        "✦";


      sparkle.style.cssText = `
        position:fixed;
        left:${event.clientX}px;
        top:${event.clientY}px;
        color:#f5d36d;
        font-size:18px;
        pointer-events:none;
        z-index:99;
        animation:floatSpark .7s ease forwards;
      `;


      document.body.appendChild(
        sparkle
      );


      setTimeout(() => {

        sparkle.remove();

      }, 700);

    }

  }
);


/* =========================================
   SPARKLE ANIMATION
   ========================================= */

const style =
  document.createElement("style");


style.textContent = `

@keyframes floatSpark {

  to {

    transform:
      translateY(-35px)
      scale(.3);

    opacity:0;

  }

}
`;


document.head.appendChild(style);