/*

Задается последовательно два вопроса:

Сколько лет?

Куришь?

если человеку менее 18 и он не курит, выводится сообщение: Так держать!

если курит: Маме раскажу

если ему более 18 и он не курит, то: Молодец, и не надо

если курит: Ну и зря

* спросить вначале имя, и добавить его в сообщение

*/





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