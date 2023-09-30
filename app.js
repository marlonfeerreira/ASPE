document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que o formulário seja enviado

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Enviar dados de login para o servidor
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
            if (data.success) {
                // Autenticação bem-sucedida
                window.location.href = 'pages/telaHome.html'; // Redirecionar para a página de perfil
            } else {
                // Autenticação falhou
                document.getElementById('loginMessage').textContent = 'Login falhou. Verifique suas credenciais.';
            }
        });
    });