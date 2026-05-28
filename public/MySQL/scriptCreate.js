//  CREATE  
const inputLogin = document.getElementById('inputLogin')
const inputPassword = document.getElementById('inputPassword')
const btnSend = document.getElementById('btnSend')

btnSend.addEventListener('click', async ()=>{
    const res = await fetch('/api')
    const data = await res.json()

    const exist = data.some(u=>{
        return u.user === inputLogin.value;
    })

    if (exist) {
        alert("Usuário ja existente")
        return
    }
    
    await fetch('/api', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user: inputLogin.value, password: inputPassword.value 
        })
        
    })
    alert('Cadastrado')

    
    // const res = await fetch('/api')
    // const data = await res.json()
    
    // apenas fortalecendo conceito:
    // let login = [inputLogin, inputPassword]
    // array.forEach(async (i)=>{
    //     alert(i.value)
    // })
})
