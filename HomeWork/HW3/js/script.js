let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
var arr2 = [46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47, 16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37];
console.log(arr);
let sum = 0;
let count = 0;
let min = Infinity;
let max = -Infinity;
let negative = 0;
let positive = 0;
let odd = 0;
let even = 0;
let sumOdd = 0;
let sumEven = 0;
let comp = 1;
let num = 0;
let posMax;
let newArr = [];

for (i = 0; i < arr.length; i++) {
	if (arr[i] >= 0) {
		sum += arr[i];
		count++;
	}
}
console.log('Задание 1: Сумма = ' + sum + ' ' + 'Количество элементов: ' + count);

for (i = 0; i < arr.length; i++) {
	if (arr[i] < min) {
		min = arr[i];
		id = i + 1;
	}
}
console.log('Задание 2: Минимальный элемент: ' + min + ' ' + 'Порядковый номер: ' + id);

for (i = 0; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
		id = i + 1;
	}
}
console.log('Задание 3: Максимальный элемент: ' + max + ' ' + 'Порядковый номер: ' + id);

for (i = 0; i < arr.length; i++) {
	if (arr[i] < 0) {
		arr[i] = 1;
		negative += 1;
	}
}
console.log('Задание 4: Количество отрицательных элементов: ' + negative);

for (i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		if ((arr[i] % 2) === 1) {
			odd += 1;
		}
	}
}

console.log('Задание 5: Количество нечетных положительных элементов: ' + odd);

for (i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		if ((arr[i] % 2) === 0) {
			even += 1;
		}
	}
}

console.log('Задание 6: Количество четных положительных элементов: ' + even);

for (i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && ((arr[i] % 2) === 0)) {
		sumOdd += arr[i];
	}
}
console.log('Задание 7: Сумма четных положительных элементов: ' + sumOdd);

for (i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && ((arr[i] % 2) === 1)) {
		sumEven += arr[i];
	}
}

console.log('Задание 8: Сумма нечетных положительных элементов: ' + sumEven);

for (i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		comp = comp * arr[i];
	}
}

console.log('Задание 9: Произведение положительных элементов: ' + comp);


for (i = 0; i < arr.length; i++) {
	if (arr[i] === 4) {
		num += 1;
	}
}
console.log('Задание 10: Количество элементов равных 4: ' + num);


for (i = 0; i < arr.length; i++) {
	newArr.push(arr[i] - arr2[i]);
}

console.log('Задание 12: Разность массивов: ' + newArr);




for (i = 0; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
		if (posMax !== undefined) {
			arr[posMax] = 0;
		}
		posMax = i;
	} else {
		arr[i] = 0;
	}
}

console.log('Задание 11: Найден элемент массива, остальные обнулены: ' + arr);