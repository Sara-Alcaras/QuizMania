
	function check(e) {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;

// snape 

	if (question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste" ||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste" ||
        question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste" ||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil" ||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
        question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil" ||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste" ||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil" ||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil" ||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil" ||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
        question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil" ||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste" ||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil" ||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Crucio" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
        question1 == "Crucio" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"
	)  
	{
		correct = 1;
	}
	
// bellatrix
	
	if (question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil" ||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
        question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil" ||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste" ||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil" ||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil" ||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil" ||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
        question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil" ||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste" ||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil" ||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno" ||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno" ||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno" ||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
        question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno" ||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno" ||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno" ||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno" ||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Avada Kedavra" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste"
		
    ) 
	{
		correct = 2;
	} 
	
// pedro 
	
	if (question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil" ||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
		question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
        question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil"||
		question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
		question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil" ||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste" ||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Triste"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Inutil" ||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Triste" ||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Triste"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Triste"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil" ||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno" ||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno" ||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno" ||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Inutil"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Impérioa" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Lealdade" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
        question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Inutil"||
		question1 == "Império" && question2 == "Família" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Família" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Família" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno" ||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno" ||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Perder" && question4 == "Dinheiro" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno" ||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Sangue-ruins" && question4 == "Dinheiro" && question5 == "Eterno" ||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Poder" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
	    question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Inteligência" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Eterno"||
		question1 == "Império" && question2 == "Defender meus princípios" && question3 == "Estúpidos, que se acham corajosos" && question4 == "Dinheiro" && question5 == "Triste"
    ) 
	{
		correct = 3;
	}	


	var messages = ["","\r\n <br/>Pedro Pedigree:\r\n <br/> Você é uma pessoa ousada e de sangue-frio, gosta de estar junto dos mais fortes e que não mede esforços para se livrar daqueles que impedem seus objetivos.", "\r\n <br/>Bellatrix Lestrange:\r\n <br/> Você é louca e cruel, objetiva, audaciosa e o principal: É a Comensal mais leal do Lorde das Trevas." ,"\r\n <br/> Severus Snape:\r\n <br/> Frio e misterioso. Dono de uma grande inteligência e astúcia, um legilimmens que consegue enganar até o maior bruxo das trevas do mundo. Ninguém imagina, mas sua motivação é o amor, e é á ele que você é fiel."];
	var pictures = ["","gifs/pedro.gif", "gifs/bellatrix.gif", "gifs/snape.gif"];
	var score;


	if (correct == 1) {
		score = 3;
	}

	if (correct == 2) {
		score = 2;
	}
	
	if (correct == 3) {
		score = 1;
	}
	



	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src = pictures[score];
}

	function pergunta3(e) {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;

// Draco Malfoy

	if (question1 == "Não, sou igual a todo mundo" && question2 == "Não tenho medo de insetos" && question3 == "Depende da coisa" && question4 == "Talvez" && question5 == "Sonserina"||
        question1 == "Não, sou igual a todo mundo" && question2 == "Não tenho medo de insetos" && question3 == "Depende da coisa" && question4 == "Talvez" && question5 == "Convinal"
    )

{
		correct = 1;
	}
	
// Harry Potter
	
	if (question1 == "Não, sou igual a todo mundo" && question2 == "Não tenho medo de insetos" && question3 == "Depende da coisa" && question4 == "Talvez" && question5 == "Grifinória"||
	    question1 == "Não, sou igual a todo mundo" && question2 == "Não tenho medo de insetos" && question3 == "Depende da coisa" && question4 == "Talvez" && question5 == "Lufa-Lufa"||
	    question1 == "Não, sou igual a todo mundo" && question2 == "Não tenho medo de insetos" && question3 == "Depende da coisa" && question4 == "Talvez" && question5 == "Lufa-Lufa"

)

{
		correct = 2;
	} 
	
// Rony
	
	if (question1 == "Sim, sou muito peculiar" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Grifinória"||
	    question1 == "Sim, sou muito peculiar" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Sonserina"||
	    question1 == "Sim, sou muito peculiar" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Lufa-Lufa"||
        question1 == "Sim, sou muito peculiar" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Corvinal"||
		question1 == "Sim, sou muito peculiar" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Grifinória"||
	    question1 == "Sim, sou muito peculiar" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Sonserina"||
	    question1 == "Sim, sou muito peculiar" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Lufa-Lufa"||
		question1 == "Sim, sou muito peculiar" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Corvinal"||
		question1 == "Não sei" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Grifinória"||
		question1 == "Não sei" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Sonserina"||
		question1 == "Não sei" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Lufa-Lufa"||
		question1 == "Não sei" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Corvinal"||
		question1 == "Não sei" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Grifinória"||
		question1 == "Não sei" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Sonserina"||
		question1 == "Não sei" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Lufa-Lufa"||
		question1 == "Não sei" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Corvinal"||
		question1 == "Não, sou igual a todo mundo" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Grifinória"||
		question1 == "Não, sou igual a todo mundo" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Sonserina"||
		question1 == "Não, sou igual a todo mundo" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Lufa-Lufa"||
		question1 == "Não, sou igual a todo mundo" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Nunca" && question5 == "Corvinal"||
		question1 == "Não, sou igual a todo mundo" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Grifinória"||
		question1 == "Não, sou igual a todo mundo" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Sonserina"||
		question1 == "Não, sou igual a todo mundo" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Lufa-Lufa"||
		question1 == "Não, sou igual a todo mundo" && question2 == "Sim, muito medo" && question3 == "Sim, medo de quase tudo" && question4 == "Talvez" && question5 == "Corvinal"
        )




{
		correct = 3;
	}	

/*
	var messages = ["","\r\n <br/>Rony Wesley:\r\n <br/>Você é uma pessoa divertido e leal, é um pouco insegura em relação às suas capacidades e tem pouca auto-confiança.", "\r\n <br/>Harry Potter:\r\n <br/>Assim como Harry você é muito corajoso(a) e sempre coloca os amigos na frente" ,"\r\n <br/> Draco Malfoy:\r\n <br/>Você é uma pessoa ambiciosa e faria tudo para alcançar seus objetivos."];
	var pictures = ["","gifs/Rony.gif", "gifs/Harry.gif", "gifs/draco.gif"];
	var score;


	if (correct == 1) {
		score = 3;
	}

	if (correct == 2) {
		score = 2;
	}
	
	if (correct == 3) {
		score = 1;
	}
	
*/


	var messages = ["sassas","\r\n <br/>Pedro Pedigree:\r\n <br/> Você é uma pessoa ousada e de sangue-frio, gosta de estar junto dos mais fortes e que não mede esforços para se livrar daqueles que impedem seus objetivos.", "\r\n <br/>Bellatrix Lestrange:\r\n <br/> Você é louca e cruel, objetiva, audaciosa e o principal: É a Comensal mais leal do Lorde das Trevas." ,"\r\n <br/> Severus Snape:\r\n <br/> Frio e misterioso. Dono de uma grande inteligência e astúcia, um legilimmens que consegue enganar até o maior bruxo das trevas do mundo. Ninguém imagina, mas sua motivação é o amor, e é á ele que você é fiel."];
	var pictures = ["","gifs/pedro.gif", "gifs/bellatrix.gif", "gifs/snape.gif"];
	var score;


	if (correct == 1) {
		score = 3;
	}

	if (correct == 2) {
		score = 2;
	}
	
	if (correct == 3) {
		score = 1;
	}
	


	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src = pictures[score];
}
