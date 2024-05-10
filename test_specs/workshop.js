// before you type any other code
// npm i jest

function logIn(username, password){

    // if the user does not input a username or password, the function should return false, otherwise should return true if both values have some information inside

    if(username.length===0||password.length===0){
        return false
    }else if(username==="luke"&&password==="pass"){
        return true
    } else{
        return false
    }
}

function createAccount(){

}

module.exports = {logIn}
