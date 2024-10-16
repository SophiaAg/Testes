var filtrarData = document.getElementById('filtrarData');
var tableHistorico = document.getElementById('tableHistorico');
var tbody = tableHistorico.getElementsByTagName('tbody')[0];
var tr = tbody.getElementsByTagName('tr');

filtrarData.addEventListener('change', () => {
  // Obtém o valor do input como string, sem criar um objeto Date
  var dataInput = filtrarData.value;
  
  for (let i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName('td')[3]; // Supondo que a data esteja na quarta coluna
    if (td) {
      var txtValue = td.textContent || td.innerText;

      // Formata a data da célula para o formato yyyy-mm-dd
      var partesData = txtValue.split('/');
      var dataFormatada = `${partesData[2]}-${partesData[1].padStart(2, '0')}-${partesData[0].padStart(2, '0')}`;

      // Comparar a string da data do input com a data formatada da célula
      if (dataInput === dataFormatada) {
        tr[i].style.display = ''; // Mostra a linha se as datas forem iguais
      } else {
        tr[i].style.display = 'none'; // Oculta a linha se as datas forem diferentes
      }
    }
  }
});
