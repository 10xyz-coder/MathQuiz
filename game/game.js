var p1NAME
var p2NAME

function bodyLoad()
{

  p1NAME = localStorage.getItem("p1");
  document.getElementById('p1_name').innerHTML = p1NAME + ": ";

  p2NAME = localStorage.getItem("p2");
  document.getElementById('p2_name').innerHTML = p2NAME + ": ";

  document.getElementById('p1_score').innerHTML = 0;
  document.getElementById('p2_score').innerHTML = 0;

}

function send() 
{
  
}
