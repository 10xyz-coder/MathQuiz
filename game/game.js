var p1NAME;
var p2NAME;

function bodyLoad()
{

  p1NAME = localStorage.getItem("p1");
  document.getElementById('p1_name').innerHTML = p1NAME + ": ";

  p2NAME = localStorage.getItem("p2");
  document.getElementById('p2_name').innerHTML = p2NAME + ": ";

  document.getElementById('p1_score').innerHTML = 0;
  document.getElementById('p2_score').innerHTML = 0;

  document.getElementById('p_question').innerHTML = "Question Turn - " + p1NAME;
  document.getElementById('p_answer').innerHTML = "Answer Turn - " + p2NAME;

  p1score = 0;
  p2score = 0;

}

function send() 
{

  n1 = document.getElementById('n1').value;
  n2 = document.getElementById('n2').value;
  localStorage.setItem( "chosen_word", n1*n2);

  q_word = "<h4 id='word_display'> Q. " + n1 + " X " + n2 + "</h4>";
  input_box = "Answer : <input type='text' id='input_check_box'>";
  check_button = "<button class= 'btn btn-info' onclick='check();'>Check</button>";

  row = q_word + "<br>" + input_box + "<br><br>" + check_button;

  document.getElementById('output').innerHTML = row;
  document.getElementById('n1').value = "";
  document.getElementById('n2').value = "";

  document.getElementById('word_control').style.visibility = "hidden";
}



function check() 
{
  if (document.getElementById('input_check_box').value ==  localStorage.getItem("chosen_word").toString())
  {

    if (document.getElementById('p_question').innerHTML == "Question Turn - " + p1NAME)
    {
      document.getElementById('p_question').innerHTML = "Question Turn - " + p2NAME;
      document.getElementById('p_answer').innerHTML = "Answer Turn - " + p1NAME;
      p2score += 1;
    }
    else
    {
      document.getElementById('p_question').innerHTML = "Question Turn - " + p1NAME;
      document.getElementById('p_answer').innerHTML = "Answer Turn - " + p2NAME;
      p1score += 1;
    }
  }

    document.getElementById('p1_score').innerHTML = p1score;
    document.getElementById('p2_score').innerHTML = p2score;

    document.getElementById('output').innerHTML = "";
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";

    document.getElementById('word_control').style.visibility = "visible";


}
