function addUsers() {
  localStorage.setItem('p1', document.getElementById('player1_i').value);
  localStorage.setItem('p2', document.getElementById('player2_i').value);
}

function loadBody() {
  document.getElementById('player1_i').value = localStorage.getItem('p1');
  document.getElementById('player2_i').value = localStorage.getItem('p2');
}