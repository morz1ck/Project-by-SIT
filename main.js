function checkData(){
    var login = document.getElementById('exlogin').value;
    var password = document.getElementById('expassword').value;
    
    if ((login === 'morz1ck' && password === '12345') || (login === 'пацан' && password === '228') || (login === 'чувачок' && password === 'beremennav16') || (login === 'skyrim' && password === 'password') || (login === '4u4uk' && password === 'bichik')) {
        alert('Вошли'); 
        window.location.replace("index.html");
    }

    else
        alert('Не вошли');
}
function registrData(){
    var email = document.getElementById('remail').value;
    var login = document.getElementById('rlogin').value;
    var password = document.getElementById('rpassword').value;
    var againpassword = document.getElementById('ragainpassword').value;


    if (email === '' || login === '' || password === '' || againpassword === '') {
        alert('Заполните все поля!');
        return;
    } else {
        if (password != againpassword) {
            alert('Пароли не совпадают');}
        else{
            alert('Зарегистрировался');
        }
    }
}

function showp(fieldId, buttonId){
    var input = document.getElementById(fieldId);
    var buttonId = document.getElementById(buttonId)

    if (input.type === 'password'){
        input.type = 'text';
        buttonId.value = 'Скрыть';}
    else {
        input.type = 'password';
        buttonId.value = 'Показать'}
}






// function regisrtation(){window.location.replace("registr.html");}
