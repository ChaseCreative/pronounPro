
//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "Relatively Speaking!";
    var game2Title = get("answerTwo").innerHTML = "";
    var game3Title = get("answerThree").innerHTML = "";
    var game4Title = get("answerFour").innerHTML = "";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "pronounPro";}

function gameTitle() {get("startButton").innerHTML = "Be a Pronoun Pro!";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();







var answers = ["answerOne", "answerTwo", "answerThree", "answerFour"];

var masculineSubject = [["Mercator", "The merchant"],["Pater","The father"],["Agricola", "The farmer"],["Filius", "The son"],["Nauta","The sailor"],["Senex", "The old man"], ["Servus","The servant"]];

var feminineSubject = [["Mater", "The mother"],["soror","The sister"],["Femina", "The woman"],["Ancilla", "The maid servant"],["Puella","The girl"],["Regina", "The queen"]];

var neuterSubject = [["Agmen", "The procession"],["Donum","The gift"],["Vinum", "The wine"],["Cubiculum", "The bedroom"],["Atrium","The main hall"],["Tablinum", "The study"]];

var masculineSubjectPlural = [["Mercatorēs", "The merchants"],["patrēs","The fathers"],["Agricolae", "The farmers"],["Filiī", "The sons"],["Nautae","The sailors"],["Senēs", "The old men"]];

var feminineSubjectPlural = [["Matrēs", "The mothers"],["Sororēs","The sisters"],["Feminae", "The women"],["Ancillae", "The maid servants"],["Puellae","The girls"],["Reginae", "The queens"]];

var neuterSubjectPlural = [["Agmina", "The processions"],["Dona","The gifts"],["Vina", "The wines"],["Cubicula", "The bedrooms"],["Triclinia","The dinging rooms"],["Tablina", "The studies"]];

var relativeSubject = [["QUI", "WHO"], ["QUAE", "WHO"], ["QUOD", "WHICH"],["QUEM", "WHOM"], ["QUAM", "WHOM"], ["QUOD", "WHICH"]];


var relativePronounsPlural = [["QUI", "WHO"], ["QUAE", "WHO"], ["QUAE", "WHICH"],["QUOS", "WHOM"], ["QUAS", "WHOM"], ["QUAE", "WHICH"]];

var moreTransitiveVerbs = [["ego video", "I see"], ["tu vidēs", "you see"], ["nos vidēmus", "we see"], ["vidētis", "ya'll see"], ["ego amo", "I like"], ["tu amas", "you like"], ["vidēre nolo","I do not want to see"],["amābamus","we used to like"]];

var thirdPersonTransitiveVerbs = [["inspicit", "inspects"], ["inspiciebat", "was inspecting"], ["inspexit", "inspected"], ["tenet", "holds"], ["tenēbat", "was holding"], ["tenuit", "held"], ["tangēbat","was touching"],["spectavit","watched"]];

var thirdPersonIntransitiveVerbs = [["stat", "is standing"], ["navigabat", "was sailing"], ["ambulat", "is walking"], ["cantat", "is singing"], ["currit", "is running"], ["scribit", "is writing"], ["legebat","was reading"],["dormit","is sleeping"]];

var thirdPersonTransitiveVerbsPlural = [["inspiciunt", "inspect"], ["inspiciebant", "were inspecting"], ["inspexērunt", "inspected"], ["tenent", "hold"], ["tenēbant", "were holding"], ["tenuērunt", "held"], ["tangēbant","were touching"],["spectavērunt","watched"]];

var thirdPersonIntransitiveVerbsPlural = [["stant", "are standing"], ["navigabant", "were sailing"], ["ambulant", "are walking"], ["cantant", "are singing"], ["currunt", "are running"], ["scribunt", "are writing"], ["legebant","were reading"],["dormiunt","are sleeping"]];

var linkingVerbs = [["est", "is"], ["erat", "was"], ["erit", "will be"]];

var linkingVerbsPlural = [["sunt", "are"], ["erant", "were"], ["erunt", "will be"]];

var directObjects = [["flammas", "the flames"],["vinum","the wine"],["Mensam", "the table"],["equos", "the horses"],["cenam","the dinner"],["pecuniam", "The money"]];

var predicateSizeAdjectives = [["magnus", "magna", "magnum", "big"], ["parvus", "parva", "parvum", "small"], ["maximus", "maxima", "maximum", "the biggest"]];

var predicateSizeAdjectivesPlural = [["magni", "magnae", "magna", "big"], ["parvi", "parvae", "parva", "small"], ["maximi", "maximae", "maxima", "the biggest"]];

var predicateAdjectives = [["laetus", "laeta", "laetum", "happy"], ["fortis", "fortis", "forte", "brave"], ["optimus", "optima", "optimum", "the best"], ["malus", "mala", "malum", "evil"], ["miser", "misera", "miserum", "miserable"]];

var predicateAdjectivesPlural = [["laeti", "laetae", "laeta", "happy"], ["fortēs", "fortēs", "fortia", "brave"], ["optimi", "optimae", "optima", "the best"], ["mali", "malae", "mala", "evil"], ["miseri", "miserae", "misera", "miserable"]];







//Random index for Shuffle
	 var randomIndex = 0;



function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;

    //var gameOneChosen = false;


    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions

var num_questions = 5;
var count = 11;

function decrementCount(){
	count--;
}


//Timer variables
var timeleft = 15;
var countdown = setInterval(x,1000);


function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}





function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}



function answerSetup(){
		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";
		responseButton.innerHTML = "";
		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};
}



 function selectGame1(){

 	startButton.disabled = false;
 	startButton.onclick = function(){relativelySpeakingQui()};
  //responseButton.onclick = function(){hint()};
	startButton.innerHTML = "Click to Start " + game1Title;
    answerSetup();
    gameOverAudio();
 	return true;


}


function selectGame2(){

	startButton.disabled = false;
 	startButton.onclick = function(){imperfectTenseVerbShuffle()};
 	startButton.innerHTML = "Click to Start " + game2Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame3(){

	startButton.disabled = false;
 	startButton.onclick = function(){perfectTenseVerbShuffle()};
 	startButton.innerHTML = "Click to Start " + game3Title;
    answerSetup();
    gameOverAudio();
    return true;
}

function selectGame4(){

	startButton.disabled = false;
 	startButton.onclick = function(){threeVerbTenseShuffle()};
 	startButton.innerHTML = "Click to Start " + game4Title;
    answerSetup();
    gameOverAudio();
 }


function hint(){

    responseButton.disabled = true;

    responseButton.innerHTML = masculineSubject[0][1] + ", " + relativeSubject[0][1] + " " + thirdPersonIntransitiveVerbs[0][1] + ", " + linkingVerbs[0][1] + " " + predicateAdjectives[0][3] + ".";
    
  }


  function hint2(){

    responseButton.disabled = true;

    responseButton.innerHTML = feminineSubject[0][1] + ", " + relativeSubject[1][1] + " " + thirdPersonIntransitiveVerbs[0][1] + ", " + linkingVerbs[0][1] + " " + predicateAdjectives[0][3] + ".";
    
  }

function hint3(){

    responseButton.disabled = true;

    responseButton.innerHTML = neuterSubject[0][1] + ", " + relativeSubject[2][1] + " " + moreTransitiveVerbs[0][1] + ", " + linkingVerbs[0][1] + " " + predicateSizeAdjectives[0][3] + ".";
    
  }


  function hint4(){

    responseButton.disabled = true;

    responseButton.innerHTML = masculineSubject[0][1] + ", " + relativeSubject[3][1] + " " + moreTransitiveVerbs[0][1] + ", " + linkingVerbs[0][1] + " " + predicateAdjectives[0][3] + ".";
    
  }

  function hint5(){

    responseButton.disabled = true;

    responseButton.innerHTML = feminineSubject[0][1] + ", " + relativeSubject[4][1] + " " + moreTransitiveVerbs[0][1] + ", " + thirdPersonIntransitiveVerbs[0][1] + ".";
  }

function hint6(){

    responseButton.disabled = true;

    responseButton.innerHTML = masculineSubjectPlural[0][1] + ", " + relativePronounsPlural[0][1] + " " + thirdPersonIntransitiveVerbsPlural[0][1] + ", " + linkingVerbsPlural[0][1] + " " + predicateAdjectivesPlural[0][3] + ".";
  }


  function hint7(){

    responseButton.disabled = true;

    responseButton.innerHTML = feminineSubjectPlural[0][1] + ", " + relativePronounsPlural[1][1] + " " + thirdPersonIntransitiveVerbsPlural[0][1] + ", " + linkingVerbsPlural[0][1] + " " + predicateAdjectivesPlural[0][3] + ".";

  }

function hint8(){

    responseButton.disabled = true;

    responseButton.innerHTML = masculineSubjectPlural[0][1] + ", " + relativePronounsPlural[3][1] + " " + moreTransitiveVerbs[0][1] + ", " + linkingVerbsPlural[0][1] + " " + predicateAdjectivesPlural[0][3] + ".";

  }


  function hint9(){

    responseButton.disabled = true;

    responseButton.innerHTML = feminineSubjectPlural[0][1] + ", " + relativePronounsPlural[4][1] + " " + moreTransitiveVerbs[0][1] + ", " + thirdPersonIntransitiveVerbsPlural[0][1] + ".";

  }




function relativelySpeakingQui(){

 countDownTimer();
 	timeleft = 15;
 	countdown = setInterval(countDownTimer,1000);


 startButton.disabled = true;

  

 shuffle(masculineSubject);
 shuffle(feminineSubject);
 shuffle(neuterSubject);
 shuffle(thirdPersonIntransitiveVerbs);
 shuffle(linkingVerbs);
 shuffle(predicateAdjectives);
 shuffle(moreTransitiveVerbs);
 shuffle(thirdPersonIntransitiveVerbs);
 shuffle(masculineSubjectPlural);
 shuffle(feminineSubjectPlural);
 shuffle(thirdPersonIntransitiveVerbsPlural);
 shuffle(linkingVerbsPlural);
 shuffle(predicateAdjectivesPlural);
  


 shuffle(answers);


 function masculineSingularQui(){
 startButton.innerHTML = masculineSubject[0][0] + ", " + relativeSubject[0][1] + " " + thirdPersonIntransitiveVerbs[0][0] + ", " + linkingVerbs[0][0] + " " + predicateAdjectives[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[0][0];

 document.getElementById(answers[1]).innerHTML = relativeSubject[1][0];

 document.getElementById(answers[2]).innerHTML = relativeSubject[2][0];

 document.getElementById(answers[3]).innerHTML = relativeSubject[3][0];

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint()};
 }




function feminineSingularQuae(){
 startButton.innerHTML = feminineSubject[0][0] + ", " + relativeSubject[1][1] + " " + thirdPersonIntransitiveVerbs[0][0] + ", " + linkingVerbs[0][0] + " " + predicateAdjectives[0][1] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[1][0] + " ";

 document.getElementById(answers[1]).innerHTML = relativeSubject[0][0] + " ";

 document.getElementById(answers[2]).innerHTML = relativeSubject[2][0] + " ";

 document.getElementById(answers[3]).innerHTML = relativeSubject[4][0] + " ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint2()};
 }


 function neuterSingularQuod(){
 startButton.innerHTML = neuterSubject[0][0] + ", " + relativeSubject[2][1] + " " + moreTransitiveVerbs[0][0] + ", " + linkingVerbs[0][0] + " " + predicateSizeAdjectives[0][2] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[2][0] + "  ";

 document.getElementById(answers[1]).innerHTML = relativeSubject[0][0] + "  ";

 document.getElementById(answers[2]).innerHTML = relativeSubject[1][0] + "  ";

 document.getElementById(answers[3]).innerHTML = relativeSubject[3][0] + "  ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint3()};
 }


function masculineSingularQuem(){
 startButton.innerHTML = masculineSubject[0][0] + ", " + relativeSubject[3][1] + " " + moreTransitiveVerbs[0][0] + ", " + linkingVerbs[0][0] + " " + predicateAdjectives[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[3][0] + "   ";

 document.getElementById(answers[1]).innerHTML = relativeSubject[4][0] + "   ";

 document.getElementById(answers[2]).innerHTML = relativeSubject[0][0] + "   ";

 document.getElementById(answers[3]).innerHTML = relativeSubject[5][0] + "   ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint4()};
 }


function feminineSingularQuam(){
 startButton.innerHTML = feminineSubject[0][0] + ", " + relativeSubject[4][1] + " " + moreTransitiveVerbs[0][0] + ", " + thirdPersonIntransitiveVerbs[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativeSubject[4][0] + "    ";

 document.getElementById(answers[1]).innerHTML = relativeSubject[1][0] + "    ";

 document.getElementById(answers[2]).innerHTML = relativeSubject[2][0] + "    ";

 document.getElementById(answers[3]).innerHTML = relativeSubject[3][0] + "    ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint5()};
 }


function masculinePluralQui(){
 startButton.innerHTML = masculineSubjectPlural[0][0] + ", " + relativePronounsPlural[0][1] + " " + thirdPersonIntransitiveVerbsPlural[0][0] + ", " + linkingVerbsPlural[0][0] + " " + predicateAdjectivesPlural[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativePronounsPlural[0][0] + "     ";

 document.getElementById(answers[1]).innerHTML = relativePronounsPlural[1][0] + "     ";

 document.getElementById(answers[2]).innerHTML = relativePronounsPlural[3][0] + "     ";

 document.getElementById(answers[3]).innerHTML = relativePronounsPlural[4][0] + "     ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint6()};
 }


 function femininePluralQuae(){
 startButton.innerHTML = feminineSubjectPlural[0][0] + ", " + relativePronounsPlural[1][1] + " " + thirdPersonIntransitiveVerbsPlural[0][0] + ", " + linkingVerbsPlural[0][0] + " " + predicateAdjectivesPlural[0][1] + ".";

 document.getElementById(answers[0]).innerHTML = relativePronounsPlural[1][0] + "      ";

 document.getElementById(answers[1]).innerHTML = relativePronounsPlural[0][0] + "      ";

 document.getElementById(answers[2]).innerHTML = relativePronounsPlural[3][0] + "      ";

 document.getElementById(answers[3]).innerHTML = relativePronounsPlural[4][0] + "      ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint7()};
 }


function masculinePluralQuos(){
 startButton.innerHTML = masculineSubjectPlural[0][0] + ", " + relativePronounsPlural[3][1] + " " + moreTransitiveVerbs[0][0] + ", " + linkingVerbsPlural[0][0] + " " + predicateAdjectivesPlural[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativePronounsPlural[3][0] + "       ";

 document.getElementById(answers[1]).innerHTML = relativePronounsPlural[0][0] + "       ";

 document.getElementById(answers[2]).innerHTML = relativePronounsPlural[1][0] + "       ";

 document.getElementById(answers[3]).innerHTML = relativePronounsPlural[4][0] + "       ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint8()};
 }


 function femininePluralQuas(){
 startButton.innerHTML = feminineSubjectPlural[0][0] + ", " + relativePronounsPlural[4][1] + " " + moreTransitiveVerbs[0][0] + ", " + thirdPersonIntransitiveVerbsPlural[0][0] + ".";

 document.getElementById(answers[0]).innerHTML = relativePronounsPlural[4][0] + "        ";

 document.getElementById(answers[1]).innerHTML = relativePronounsPlural[0][0] + "        ";

 document.getElementById(answers[2]).innerHTML = relativePronounsPlural[1][0] + "        ";

 document.getElementById(answers[3]).innerHTML = relativePronounsPlural[3][0] + "        ";

 responseButton.innerHTML = "Hint";

 responseButton.onclick = function(){hint9()};
 }


var randomImperativeIndex = Math.floor(Math.random() * 9);
 var mixUp = [masculineSingularQui,feminineSingularQuae, neuterSingularQuod, masculineSingularQuem, feminineSingularQuam,masculinePluralQui,femininePluralQuae,masculinePluralQuos,femininePluralQuas]

 mixUp[randomImperativeIndex]();

















responseButton.disabled = false;



     

    

 


 	resetAnswerColors();

  enableButtons();




  	decrementCount();






 	if (count == 0){

 		gameOverAudio();

 		startButton.innerHTML = "Select a New Game!";




 		answerOne.innerHTML = game1Title;
 		answerTwo.innerHTML = game2Title;
 		answerThree.innerHTML = game3Title;
 		answerFour.innerHTML = game4Title;

 		document.getElementById("boxThree").innerHTML = "Score";
 		responseButton.innerHTML = "You earned " + points + " points!";
 		points = 0;

 		stopTimer();
 		document.getElementById("boxOne").innerHTML = "Timer";

 		answerOne.onclick = function(){selectGame1()};
 		answerTwo.onclick = function(){selectGame2()};
 		answerThree.onclick = function(){selectGame3()};
 		answerFour.onclick = function(){selectGame4()};

 		count = 11;


     }



 }







   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}







function clickedAnswerOne(){




	if (document.getElementById("answerOne").innerHTML == relativeSubject[0][0] ||
    document.getElementById("answerOne").innerHTML == relativeSubject[1][0] + " " ||
    document.getElementById("answerOne").innerHTML == relativeSubject[2][0] + "  " ||
    document.getElementById("answerOne").innerHTML == relativeSubject[3][0] + "   " ||
    document.getElementById("answerOne").innerHTML == relativeSubject[4][0] + "    " ||
    document.getElementById("answerOne").innerHTML == relativePronounsPlural[0][0] + "     " ||
    document.getElementById("answerOne").innerHTML == relativePronounsPlural[1][0] + "      " ||
    document.getElementById("answerOne").innerHTML == relativePronounsPlural[3][0] + "       " ||
    document.getElementById("answerOne").innerHTML == relativePronounsPlural[4][0] + "        "){

		correctAnswerAudio();
		//clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (document.getElementById("answerTwo").innerHTML == relativeSubject[0][0] ||
    document.getElementById("answerTwo").innerHTML == relativeSubject[1][0] + " " ||
    document.getElementById("answerTwo").innerHTML == relativeSubject[2][0] + "  " ||
    document.getElementById("answerTwo").innerHTML == relativeSubject[3][0] + "   " ||
    document.getElementById("answerTwo").innerHTML == relativeSubject[4][0] + "    " ||
    document.getElementById("answerTwo").innerHTML == relativePronounsPlural[0][0] + "     " ||
    document.getElementById("answerTwo").innerHTML == relativePronounsPlural[1][0] + "      " ||
    document.getElementById("answerTwo").innerHTML == relativePronounsPlural[3][0] + "       " ||
    document.getElementById("answerTwo").innerHTML == relativePronounsPlural[4][0] + "        "){

		correctAnswerAudio();
		//clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (document.getElementById("answerThree").innerHTML == relativeSubject[0][0] ||
    document.getElementById("answerThree").innerHTML == relativeSubject[1][0] + " " ||
    document.getElementById("answerThree").innerHTML == relativeSubject[2][0] + "  " ||
    document.getElementById("answerThree").innerHTML == relativeSubject[3][0] + "   " ||
    document.getElementById("answerThree").innerHTML == relativeSubject[4][0] + "    " ||
    document.getElementById("answerThree").innerHTML == relativePronounsPlural[0][0] + "     " ||
    document.getElementById("answerThree").innerHTML == relativePronounsPlural[1][0] + "      " ||
    document.getElementById("answerThree").innerHTML == relativePronounsPlural[3][0] + "       " ||
    document.getElementById("answerThree").innerHTML == relativePronounsPlural[4][0] + "        "){

		correctAnswerAudio();
		//clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}

function clickedAnswerFour(){



	if (
    document.getElementById("answerFour").innerHTML == relativeSubject[0][0] ||
    document.getElementById("answerFour").innerHTML == relativeSubject[1][0] + " " ||
    document.getElementById("answerFour").innerHTML == relativeSubject[2][0] + "  " ||
    document.getElementById("answerFour").innerHTML == relativeSubject[3][0] + "   " ||
    document.getElementById("answerFour").innerHTML == relativeSubject[4][0] + "    " ||
    document.getElementById("answerFour").innerHTML == relativePronounsPlural[0][0] + "     " ||
    document.getElementById("answerFour").innerHTML == relativePronounsPlural[1][0] + "      " ||
    document.getElementById("answerFour").innerHTML == relativePronounsPlural[3][0] + "       " ||
    document.getElementById("answerFour").innerHTML == relativePronounsPlural[4][0] + "        "){

		correctAnswerAudio();
		//clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		wrongAnswerAudio();
		//clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}