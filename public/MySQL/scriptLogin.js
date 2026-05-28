// LOGIN
const inputLogin = document.getElementById('inputLogin')
const inputPassword = document.getElementById('inputPassword')
const btnSend = document.getElementById('btnSend')

btnSend.addEventListener('click', async ()=>{
    const res = await fetch('/api')
    const data = await res.json()

    data.forEach(e => {
        if (inputLogin.value === e.user && inputPassword.value === e.password) {
            console.log("Login Efetuado");
            window.location.href = '/MySQL/mysqlindex.html'
        }
    });
})