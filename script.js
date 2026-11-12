const formulario = document.querySelector('form');
formulario.addEventListener('submit', function(evento) {
evento.preventDefault();

const nome = document.getElementById('nome').value;
alert('Obrigado, ' + nome + '! Seus dados foram enviados.');
formulario.reset();
});