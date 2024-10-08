$(document).ready(function() {
    $("#open").click(function() {
      $("#envelope").removeClass("close").addClass("open");
      $("#message").fadeIn(600); // Exibe a mensagem após abrir o envelope
    });
  
    $("#reset").click(function() {
      $("#envelope").removeClass("open").addClass("close");
      $("#message").fadeOut(600); // Oculta a mensagem ao resetar
    });
  });
  