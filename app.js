function goSignUp(){
    var registerForm = document.getElementById('registerPage')
    registerForm.style.display = 'none'
    var signIn = document.getElementById('signInPage')
    signIn.style.display = 'none'  
    var signUp = document.getElementById('signUpPage')
    signUp.style.display = 'block'
   
}
function goSignIn(){
    var registerForm = document.getElementById('registerPage')
    registerForm.style.display = 'none'
    var signUp = document.getElementById('signUpPage')
    signUp.style.display = 'none'
    var signIn = document.getElementById('signInPage')
    signIn.style.display = 'block'
}


var signUpUsers = JSON.parse(localStorage.getItem('user1') || '[]')
function registered(){
debugger
function User(name,url,eml,pass){
    this.name = name
    this.url = url
    this.eml = eml
    this.pass = pass
}

var fullName = document.getElementById('inputfullName').value
var profileUrl = document.getElementById('inputProfile').value
var email = document.getElementById('inputEmail').value
var password = document.getElementById('inputPass').value

var userA = new User(fullName,profileUrl,email,password)
signUpUsers.push(userA)

    localStorage.setItem('user1',JSON.stringify(signUpUsers))
    alert('Successfully Added!')

  

    var inputName = document.getElementById('inputfullName')
    inputName.value = ''
    var inputProfile = document.getElementById('inputProfile')
    inputProfile.value = ''
    var inputEmail = document.getElementById('inputEmail')
    inputEmail.value = ''
    var inputPass = document.getElementById('inputPass')
    inputPass.value = ''


}
var flag = 0
function loginUser(){
    var email = document.getElementById('signInName').value
    var password = document.getElementById('signInPass').value
    for (var i=0;i<signUpUsers.length;i++){
        if(signUpUsers[i].eml == email && signUpUsers[i].pass == password){ 
            flag +=1
            window.location.href= 'loginuser.html'
            var userenter = document.getElementById('userNameMain')
            var heading = document.createElement('p')
            heading.innerHTML = 'Welcome to ' + signUpUsers[i].name
            userenter.appendChild(heading)
        }
    }if(flag==0){
        alert('you entered wrong email or password')
    }
}
 
function goAllUsers(){
    window.location.href = 'suggestion.html'

    var unorderlist = document.getElementById('unorderL')
    
    var email = document.getElementById('signInName').value
    for(var i=0 ; i<signUpUsers.length;i++){
        if(signUpUsers[i].eml!==email){
            var friends = document.createElement('li')
            friends.innerHTML = signUpUsers[i].name
            friends.setAttribute('class','listspacing')
            var addBtn = document.createElement('button')
            addBtn.innerHTML = 'ADD'
            addBtn.setAttribute('onclick','addInLoginUser(event)')
            addBtn.setAttribute('class','loginUserBtn')

            friends.appendChild(addBtn)
            unorderlist.appendChild(friends)

        }
    }
}
function addInLoginUser(event){
    window.location.href = 'loginuser.html'

    var addFriends = document.getElementById('userName')

    var click = event.target.parentElement
    var friendName = click.childNodes[0].nodeValue
    var list = document.createElement('li')
    list.innerHTML = friendName
    list.setAttribute('class','listspacing')
     
    var removeBtn = document.createElement('button')
    removeBtn.innerHTML = 'Unfriend'
    removeBtn.setAttribute('onclick','removeInLoginUser(event)')
    removeBtn.setAttribute('class','loginUserBtn')

   list.appendChild(removeBtn)
   addFriends.appendChild(list)

   var li = event.target.parentElement
   var ul = li.parentElement
   ul.removeChild(li)
}

function removeInLoginUser(event){
    var li = event.target.parentElement
    var ul = li.parentElement
    ul.removeChild(li)
}

function post(){
    var postPage = document.getElementById('post')
    postPage.style.display = 'block'

}
function sharePost(){
    var textarea = document.getElementById('posting')
    var value = textarea.value

    var shareArea = document.getElementById('sharePost')
    var createpara = document.createElement('p')
    createpara.innerHTML = value
    createpara.setAttribute('class','backgrond')

    shareArea.appendChild(createpara)

    var postPage = document.getElementById('post')
    postPage.style.display = 'none'
    var sharePage = document.getElementById('share')
    sharePage.style.display = 'block'
}