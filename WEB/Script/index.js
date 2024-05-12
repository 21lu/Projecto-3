function validateFields(){
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !passwordValid;

 }

 //function login() {
        //firebase.auth().signInWithEmailAndPassword(
           // form.email().value, form.password().value
        //).then(Response => {
          //  window.location.href = "../Main/home.html";
        //}).catch(error => {
           // console.log('Error', error)
       // });
//}
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    showloading();
    // Verificar as credenciais no Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        
        .then((userCredential) => {
            // Login bem-sucedido
            hideloading();
            var user = userCredential.user;
            
            window.location.href = "./Main/Template_atual/matrix-admin-bt5-master/html/index.html"
            // Redirecionar ou executar ações após o login
        })
        .catch((error) => {
            // Tratar erros de login
            hideloading();
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(getErrorMessage(error));
            // Exibir mensagem de erro ao usuário, se necessário
        });
}

function getErrorMessage(error){
    if (error.code == "auth/invalid-credential"){
        return "Usuário não encontrado";
    }
    return error.message;
}

function isEmailValid(){
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid(){
    const password = document.getElementById("password").value;
    if (!password){
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function register(){
    //showloading();
}