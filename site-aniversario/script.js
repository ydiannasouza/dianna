$(document).ready(function() {
    $('#cadastroForm').submit(function(event) {
      event.preventDefault(); // Previne o comportamento padrão de envio do formulário
  
      // Obtém os valores dos campos do formulário
      var nome = $('#nome').val();
      var idade = $('#idade').val();
      var mensagem = $('#mensagem').val();
  
      // Verifica se o localStorage é suportado pelo navegador
      if (typeof(Storage) !== "undefined") {
        // Cria um objeto com os dados do formulário
        var dados = {
          nome: nome,
          idade: idade,
          mensagem: mensagem
        };
  
        // Converte o objeto para JSON e salva no localStorage
        localStorage.setItem('aniversariante', JSON.stringify(dados));
  
        // Limpa os campos do formulário
        $('#nome').val('');
        $('#idade').val('');
        $('#mensagem').val('');
  
        alert('Cadastro realizado com sucesso!');
        location.href="aniversariante.html"
      } else {
        alert('Desculpe, seu navegador não suporta localStorage.');
      }
    });
  });
  