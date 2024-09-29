

const submit = document.querySelector('.submit')


submit.addEventListener('click', () =>{ 
    const email = document.getElementById('Email').value
    const pass = document.getElementById('pass').value
const account = [{email:"Seoyeon", pass:"Krystal Eyes"}, {email:"Yooyeon", pass:"Ewha Goddess"}, {email:"Nakyoung", pass:"Babyko"}]

let loggedIn = false;
for(let i = 0; i<account.length; i++){
    
        if(account[i].email === email && account[i].pass=== pass){
          document.getElementById('Email').value = ''
      document.getElementById('pass').value= ''
          window.location.href = 'main.html'
        loggedIn = true
        }
    
}
if(!email && !pass){
    alert("Enter fields!")
}

else if (!loggedIn) {
 alert('Incorrect username and password')
 document.getElementById('username').value = ''
 document.getElementById('password').value= ''
}


})