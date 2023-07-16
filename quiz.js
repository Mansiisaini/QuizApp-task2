// Questions that will be asked
const Questions = [{
	q: "1.What is the color of Apple?",
	a: [{ text: "Blue", isCorrect: false },
	{ text: "Yellow", isCorrect: false },
	{ text: "Red", isCorrect: true },
	{ text: "Green", isCorrect: false }
	]

},
{
	q: "2.What is the color of Sky?",
	a: [{ text: "Orange", isCorrect: false },
	{ text: "Pink", isCorrect: false },
	{ text: "Black", isCorrect: false },
	{ text: "Blue", isCorrect: true }
	]

},
{
	q: "3.What is the color of Wood?",
	a: [{ text: "Yellow", isCorrect: false },
	{ text: "Purple", isCorrect: false },
	{ text: "Brown", isCorrect: true },
	{ text: "Red", isCorrect: false }
	]

},
{
	q: "4.What is the color of Milk?",
	a: [{ text: "Black", isCorrect: false },
	{ text: "Red", isCorrect: false },
	{ text: "White", isCorrect: true },
	{ text: "Pink", isCorrect: false }
	]

},
{
	q: "5.What is the color of Leaf?",
	a: [{ text: "Red", isCorrect: false },
	{ text: "Green", isCorrect: true },
	{ text: "Blue", isCorrect: false },
	{ text: "White", isCorrect: false }
	]

},
]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}

function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
