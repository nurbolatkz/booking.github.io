let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";


let show_btn = document.getElementById('show_btn');


show_btn.addEventListener('click', function() {
    if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		tg.MainButton.show();
	}
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
	tg.sendData("upps i was clicked:)"); 
	//при клике на основную кнопку отправляем данные в строковом виде
});



