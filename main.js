const form = document.getElementById('form');
const input1 = document.getElementById('campoA');
const input2 = document.getElementById('campoB');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const containerMensagemSucesso = document.getElementById ('sucesso');
    const containerMensagemFalha = document.getElementById ('falha');
    const containerMensagemIguais = document.getElementById ('iguais');
    containerMensagemSucesso.innerHTML = '';
    containerMensagemFalha.innerHTML = '';
    containerMensagemIguais.innerHTML = '';

    const numA = parseInt(input1.value);
    const numB = parseInt(input2.value);

    const mensagemSucesso = `O número B: <b>${numB}</b> é maior que o número A: <b>${numA}</b>`;
    const mensagemFalha = `O número B: <b>${numB}</b> não é maior que o número A: <b>${numA}</b>`;
    const mensagemIguais = `O número B: <b>${numB}</b> é igual ao número A: <b>${numA}</b>, não é possível fazer a comparação`;

    if (numB > numA) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.classList.add('sucesso');
        containerMensagemFalha.classList.remove('falha');
        containerMensagemFalha.classList.remove('iguais');
    } else if (numB < numA) {
        containerMensagemFalha.innerHTML = mensagemFalha;
        containerMensagemSucesso.classList.add('falha');
        containerMensagemFalha.classList.remove('sucesso');
        containerMensagemFalha.classList.remove('iguais');
    } else {
        containerMensagemIguais.innerHTML = mensagemIguais;
        containerMensagemSucesso.classList.add('iguais');
        containerMensagemFalha.classList.remove('sucesso');
        containerMensagemFalha.classList.remove('falha');
    }

});

