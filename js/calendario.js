function showContent(contentId, element) {
    // Esconde todos os conteúdos
    document.getElementById('contentFirst').style.display = 'none';
    document.getElementById('contentSecond').style.display = 'none';
    document.getElementById('contentThree').style.display = 'none';
  
    // Mostra o conteúdo correspondente ao botão clicado
    document.getElementById(contentId).style.display = 'flex';
  
    // Remove a classe bg-active de todos os botões e aplica bg-color
    var allButtons = document.querySelectorAll('#areaMid div');
    allButtons.forEach(function(btn) {
        btn.classList.remove('bg-active');
        btn.classList.add('bg-color');
    });
  
    // Adiciona a classe bg-active ao botão clicado
    element.classList.remove('bg-color');
    element.classList.add('bg-active');
  }
  