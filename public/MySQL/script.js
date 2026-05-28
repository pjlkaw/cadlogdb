//  CREATE  
const inputLogin = document.getElementById('inputLogin')
const inputPassword = document.getElementById('inputPassword')
const btnSend = document.getElementById('btnSend')

btnSend.addEventListener('click', async ()=>{
    
    const res = await fetch('/api', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user: inputLogin.value, password: inputPassword.value 
        })
    })

    const data = await res.json()
    console.log(data);    
    
    // const res = await fetch('/api')
    // const data = await res.json()
    
    // apenas fortalecendo conceito:
    // let login = [inputLogin, inputPassword]
    // array.forEach(async (i)=>{
    //     alert(i.value)
    // })
})
