let questionSection = document.getElementById("questionSection");
let i = 0; // i for manupolate  below Question Array
let Score = 0;

////////////////QUESTIONS ANSWER DATA Set///////////////////////////
var allQuestions = [{
    question: "The tree sends downroots from its branches to the soil is know as:",
    options: ["Oak", "Pine", "Banyan", "Palm"],
    answer: 2
}, {
    question: "Electric bulb filament is made of",
    options: ["Copper", "Aluminum", "lead", "Tungsten"],
    answer: 3
}, {
    question: "Non Metal that remains liquid at room temprature is",
    options: ["Phophorous", "Bromine", "Clorine", "Helium"],
    answer: 1
}, {
    question: "Which of the following is used in Pencils ?",
    options: ["Graphite", "Silicon", "Charcoal", "Phosphorous"],
    answer: 0
}, {
    question: "Chemical formula of water ?",
    options: ["NaA1O2", "H2O", "Al2O3", "CaSiO3"],
    answer: 1
}, {
    question: "The gas filled in electric bulb is ?",
    options: ["Nitrogen", "Hydrogen", "Carbon Dioxide", "Oxygen"],
    answer: 0
}, {
    question: "Whashing soda is the comman name for",
    options: ["Sodium Carbonate", "Calcium Bicarbonate", "Sodium Bicarbonate", "Calcium Carbonate"],
    answer: 0
}, {
    question: "Which gas is not known as green house gas ?",
    options: ["Methane", "Nitrous oxide", "Carbon Dioxide", "Hydrogen"],
    answer: 3
}, {
    question: "The hardest substance availabe on earth is",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answer: 2
}, {
    question: "Used as a lubricant",
    options: ["Graphite", "Silica", "Iron Oxide", "Diamond"],
    answer: 0
}];

//4./////////////////////////Grading//////////////////////////////////////////////
function Grade(score) {
    var grade = document.createElement("h1");
    grade.setAttribute("class", "result");

    var font = document.createElement("i");
    font.setAttribute("id", "font")

    if (score <= 10 && score >= 8) {

        font.setAttribute("class", "fas fa-trophy");
        questionSection.appendChild(font);

        var gradeText = document.createTextNode("Your Grade A+ ");
        grade.append(gradeText);
        questionSection.append(grade);

    } else
        if (score <= 7 && score >= 5) {
            font.setAttribute("class", "fas fa-heart");
            questionSection.appendChild(font);

            var gradeText = document.createTextNode("Your Grade B ");
            grade.append(gradeText);
            questionSection.append(grade);
        } else
            if (score <= 4 && score >= 0) {  //Fail Condition

                font.setAttribute("class", "fas fa-sad-tear");
                questionSection.appendChild(font);

                console.log("Fail");


                var gradeText = document.createTextNode("Sorry You Fail ");
                grade.append(gradeText);
                questionSection.append(grade);
                console.log(questionSection);
            }

}

//3./////////////////////////Question Generator//////////////////////////////////

function Questions() {
    if (i >= 0 && i < 10) {
        let question = document.createElement("p");
        let listbox = document.createElement("ul");

        let questionText = document.createTextNode(allQuestions[i].question);
        question.append(questionText);
        questionSection.append(question);
        question.setAttribute("class", "questionPara");

        for (j = 0; j < 4; j++) {
            var option = document.createElement("li");
            var checkbox = document.createElement("INPUT");
            var optionText = document.createTextNode(allQuestions[i].options[j]);

            checkbox.setAttribute("type", "radio");

            let mmm = "radio" + j;

            checkbox.setAttribute("class", mmm);
            checkbox.setAttribute("name", "ans");

            option.append(checkbox);
            option.append(optionText);

            listbox.append(option);
            listbox.setAttribute("class", "list");

            questionSection.append(listbox);
            option.setAttribute("class", "option");

        }
    } else {
        let nextbtn = document.querySelector(".nexBtn");
        nextbtn.remove();
        // Result PAGE 
        ////////////////////////////////////////////////
        var result = document.createElement("h1");
        var resultText = document.createTextNode("Score = ");
        result.append(resultText);
        questionSection.append(result);
        result.setAttribute("class", "result");
        //Score
        /////////////////////////////////////////////
        var scoreText = document.createTextNode(Score);
        result.append(scoreText);
        Grade(Score);
    }

    i++;
}


//2./////////chech Answer And Give Marks Then Generate New Question/////////////////////////////////////////////////////////////////

function NextQuestion(btn) {
    let Radio0 = document.querySelector(".radio0");
    let Radio1 = document.querySelector(".radio1");
    let Radio2 = document.querySelector(".radio2");
    let Radio3 = document.querySelector(".radio3");


    if (i <= 10) {

        if (Radio0.checked === true || Radio1.checked === true || Radio2.checked === true || Radio3.checked === true) {
            let MatchResult = [Radio0, Radio1, Radio2, Radio3];
            let testOption = document.querySelector(".option");
            testOption.parentNode.remove();
            questionSection.childNodes[2].remove();
            for (k = 0; k < 4; k++) {
                if (MatchResult[k].checked === true) {
                    if (allQuestions[i - 1].answer === k) {
                        Score++;
                    }
                }
            }
            Questions();

        }
        else {
            if (Radio0.checked === false && Radio1.checked === false && Radio2.checked === false && Radio3.checked === false)
                alert("Select One Answer !");
        }


    }

}
////////////////////1.Start Here ////////////////////////////////////////////////////////////
function startQuestions() {
    //detail hide
    let Rule = document.getElementById("QuizRule");
    Rule.style.display = "none";
    // hide start BTN
    let startbtn = document.getElementById("startbtn");
    startbtn.style.display = "none";
    //My Next BTN
    var nextbtn = document.createElement("button");
    var nextText = document.createTextNode("NEXT");
    nextbtn.append(nextText);
    questionSection.append(nextbtn);
    nextbtn.setAttribute("class", "nexBtn");
    nextbtn.setAttribute("onclick", "NextQuestion(this);");
    Questions();
}
