// MODAL login-cadastro
    // Obtém os elementos necessários
    const openLoginButton = document.getElementById('open-modal');
    const modal = document.getElementById('modal');
    const closeEntrar = document.getElementById('close-modal-entrar');
    const closeRegistrar = document.getElementById('close-modal-registrar');


    // Abre o modal quando o botão de login for clicado
    openLoginButton.addEventListener('click', () => {
        modal.style.display = 'flex'; // Exibe o modal
    });

    // Fecha o modal ENTRAR quando o botão de fechar for clicado
    closeEntrar.addEventListener('click', () => {
        modal.style.display = 'none'; // Esconde o modal
    });

    // Fecha o modal REGISTRAR quando o botão de fechar for clicado
    closeRegistrar.addEventListener('click', () => {
        modal.style.display = 'none'; // Esconde o modal
    });

    // Fecha o modal se o usuário clicar fora da caixa do modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });


// Rolamento scroll da container__sounds


