const panel = $("#quiz-area");

// Question set
const questions = [{
  question: "Which of the following colours does NOT appear on the South African flag?",
  answers: ["Green", "Black", "Orange", "Gold","Blue","Red"],
  correctAnswer: "Orange"
}, {
  question: "What is the capital of Australia?",
  answers: ["Sydney", "Canberra", "Melbourne", "Adelaide"],
  correctAnswer: "Canberra"
}, {
  question: "By area, what is the smallest country on the planet?",
  answers: ["Vatican City", "Monaco", "Nauru"],
  correctAnswer: "Vatican City"
}, {
  question: "Which of the following countries does NOT share a border with Brazil?",
  answers: ["Argentina", "Bolivia", "Chile", "Colombia", "Peru", "Uruguay"],
  correctAnswer: "Argentina"
}, {
  question: "What is the name of the tallest uninterrupted waterfall in the world?",
  answers: ["Niagara Falls", "Angel Falls", "Victoria Falls"],
  correctAnswer: "Angel Falls"
}, {
  question: "Which is the largest US state by area?",
  answers: ["Texas", "Montana", "Alaska"],
  correctAnswer: "Alaska"
}, {
  question: "Which country's flag is NOT made up of red, white and blue stripes?",
  answers: ["Netherlands", "Russia", "Romania"],
  correctAnswer: "Romania"
}, {
  question: "Which of the following capital cities is the most northerly?",
  answers: ["Dublin, Ireland", "Ottawa, Canada", "Tokyo, Japan"],
  correctAnswer: "Dublin, Ireland"
}];

let timer;
let game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME IS UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (let i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (let j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },
  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});