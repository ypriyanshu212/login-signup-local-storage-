function login(){
    let Email = document.getElementById('Lemail').value;
    let Pass = document.getElementById('Lpass').value;
    let REmail =localStorage.getItem('userEmail');  
    let RPass =localStorage.getItem('userPass') ;  
    if(REmail === Email && RPass === Pass){
        alert("login, successfully")
    }
    else{
        alert("invalid creds")
    }
}