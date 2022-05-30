
{/* <div class="quizQuestion">
            <h3>Question 1 ?</h3>
            <div class="options">
              <label > 
                <input type="radio" name="q1">
                <span>option 1</span>
              </label>
            </div> */} 

var quiz = document.getElementById("quiz")

var correctAnswers = [];

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function(response){
    for (var i = 0 ; i < response.length; i++ ) {
        console.log(response)
            correctAnswers.push(response[i].answer);
            var quizQuestionDiv = document.createElement("div");
            quizQuestionDiv.className = "quizQuestion"
            var questionElement = document.createElement("h3");
            questionElement.innerText = response[i].question;
            quizQuestionDiv.append(questionElement)
            var options = response[i].options;
            for (var j = 0; j < options.length ; j++ ){
                quizQuestionDiv.innerHTML += `
                
                <div class="options">
                <label> 
                  <input type="radio" name="q${response[i].id}"   value = "${j + 1}" />
                  <span> ${options[j]} </span>
                </label>
              </div>`
            }
            quiz.append(quizQuestionDiv);
            if(i == response.length-1){
                quiz.innerHTML += `
                <div id="btn-wrapper">
                <button id="btn" onclick="checkResult()">Submit Quiz</button>
         
              </div>
                `
            }
        }
    })
           
                
            
    
//     console.log(correctAnswers)
// })

function checkResult(){
    var answer = []
    var checkInputs = $("input[type=radio]:checked");
    for ( var i = 0; i < checkInputs.length; i++ ){
        answer.push(checkInputs[i].value)
    }

    var score = 0;
    for ( var j = 0; j<correctAnswers.length; j++){
        if (answer[j] == correctAnswers[j] ){
            score++;
        }
    }

    $("#score").text(score)
    console.log(score)

}
        
