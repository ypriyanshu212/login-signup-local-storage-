function signup(){
    alert("working");

    let Name = document.getElementById('Sname').value;
    let Email = document.getElementById('Semail').value;
    let Pass = document.getElementById('Spass').value;

    localStorage.setItem('userName', Name);
    localStorage.setItem('userEmail', Email);
    localStorage.setItem('userPass', Pass);
}