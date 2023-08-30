player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Turno de pergunta " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno de respota " + player2_name;

function send() {

    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    resposta = parseInt(n1) + parseInt(n2);
    console.log(resposta);

    question_n1 = "<h4>" + n1 + "+" + n2 + "</h4>";
    input_box = "<br> Resposta: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question_n1 + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {

    answer = document.getElementById("input_check_box").value;
    console.log("resposta em NUMEROS NAO LETRAS CARAMBA" + answer);

    if (answer == resposta) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;

        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "turno de perguntas " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "turno de perguntas " + player1_name;

    }


    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "respostas " + player2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "turno de respostas " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}