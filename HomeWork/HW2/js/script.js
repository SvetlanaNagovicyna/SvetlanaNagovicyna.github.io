let name = prompt('Как тебя зовут?');
let age = prompt('Сколько тебе лет?');
let isSmoke = confirm('Ты куришь?');

if (isSmoke) {
	if (age < 18) {
		alert(name + ' маме расскажу!');
	} else {
		alert(name + ' ну и зря!');
	}
} else {
	if (age >= 18) {
		alert(name + ' молодец, и не надо!');
	} else {
		alert(name + ' так держать!');
	}
}