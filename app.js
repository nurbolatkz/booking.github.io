let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let form = document.getElementById('info');
let container = document.getElementById('test_form');
let show_btn = document.getElementById('show_btn');
let p = document.createElement('p');

show_btn.addEventListener('click', function() {
    let user_name = document.getElementById('user_name').value;
    let user_phone_number = document.getElementById('user_phone_number').value;

    p.innerText = 'User Name ---- ' + user_name + 'User phone number --- ' + user_phone_number;
    tg.MainButton.show();
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("upps i was clicked:)"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});

container.appendChild(p);

