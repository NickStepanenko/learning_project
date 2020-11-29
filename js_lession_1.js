// Честно украл из интернета и даже название не поменял
// Да, смогу так же на собеседовании
// Смогу так же загуглить имею ввиду
function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

console.log('Линейные алгоритмы');

console.log('1. Поменять местами значения двух переменных.');
let var1 = 4;
let var2 = 7;
console.log('Исходное значение var1: ' + var1);
console.log('Исходное значение var2: ' + var2);
let varSum = var1 + var2;
var1 = varSum - var1;
var2 = varSum - var2;
console.log('Конечное значение var1: ' + var1);
console.log('Конечное значение var2: ' + var2);
console.log('');

console.log('2. Найти длину гипотенузы прямоугольного треугольника (по двум введенным пользователем катетам вычислить длину гипотенузы.)');
let x = 5;
let y = 3;
console.log('Исходное значение x: ' + x);
console.log('Исходное значение y: ' + y);
console.log('Значение гипотенузы: ' + Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
console.log('');

console.log('3. Задаются координаты двух точек (x1, y1, x2, y2). Вывести уравнение прямой, проходящей через эти две точки в виде y = k*x + b');
let x1 = 0;
let y1 = 2;
let x2 = 12;
let y2 = 8;
console.log('x1: ' + x1 + '; ' + 'y1: ' + y1 + '; ' + 'x2: ' + x2 + '; ' + 'y2: ' + y2 + ';');
console.log('Уровнение прямой: ' + (y1 - y2) + '*x + ' + (x2 - x1) + '*y + ' + (x1*y2 - x2*y1) + ' = 0');
console.log('y = ' + (0-(y1 - y2)) + '*x + ' + (0-(x1*y2 - x2*y1)));
console.log('x = ' + (0-(x2 - x1)) + '*y + ' + (0-(x1*y2 - x2*y1)));
console.log('');

console.log('Условия');

console.log('1. Не прибегая к библиотеке Math, посчитать выражение (max(a*b*c, a+b+c) + 3). a, b и c - рандом от -10 до 10.');

let a = randomInt(-10, 10);
let b = randomInt(-10, 10);
let c = randomInt(-10, 10);

console.log('a: ' + a + '; ' + 'b: ' + b + '; ' + 'c: ' + c + ';');
console.log('Итоговое значение: ' + (((a*b*c) > (a+b+c) ? (a*b*c) : (a+b+c)) + 3));
console.log('');

console.log('2. Вводятся два целых числа. Проверить, делится ли первое на второе. Вывести на экран сообщение об этом, а также остаток (если он есть) и частное (в любом случае).');
let intDigit1 = randomInt(-100, 100);
let intDigit2 = randomInt(-100, 100);
console.log('Число 1: ' + intDigit1);
console.log('Число 2: ' + intDigit2);

let truth = '';
let part = 0;
let remainder = 0;

if(intDigit2 == 0)
{
    console.log('На ноль не делим.');
}
else
{
    part = parseInt(intDigit1 / intDigit2);
    remainder = intDigit1 % intDigit2;

    if(remainder == 0)
    {
        console.log(intDigit1 + ' делится на ' + intDigit2);
    }
    else
    {
        console.log(intDigit1 + ' не делится на ' + intDigit2);
    }

    console.log('Частное: ' + part);
    console.log('Остаток: ' + remainder);
}
console.log('');

console.log('3. Определить, какой четверти принадлежит точка с координатами (x, y). x и y - рандом от -10 до 10');
x = randomInt(-10, 10);
y = randomInt(-10, 10);
console.log('Точка x: ' + x);
console.log('Точка y: ' + y);

if(x > 0 && y > 0)
{
    console.log('Точка находится в I четверти.');
}
else if(x < 0 && y > 0)
{
    console.log('Точка находится в II четверти.');
}
else if(x < 0 && y < 0)
{
    console.log('Точка находится в III четверти.');
}
else if(x > 0 && y < 0)
{
    console.log('Точка находится в VI четверти.');
}
else
{
    console.log('Точка находится посередине координатной плоскости.');
}
console.log('');

console.log('4. Определение принадлежности точки кругу с центром в начале координат: вводятся координаты (x;y) точки и радиус круга (r), определить, принадлежит ли данная точка кругу, если его центр находится в начале координат.');
x = randomInt(-15, 15);
y = randomInt(-15, 15);
let r = randomInt(-10, 10);
console.log('Точка x: ' + x);
console.log('Точка y: ' + y);
console.log('Радиус: ' + r);

console.log((Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2) ? 'Точка входит в окружность' : 'Точка не входит в окружность'));
console.log('');

console.log('5. Вычислить корни квадратного уравнения.');
a = randomInt(-25, 25);
b = randomInt(-25, 25);
c = randomInt(-25, 25);
console.log('a: ' + a);
console.log('b: ' + b);
console.log('c: ' + c);

let d = Math.pow(b, 2) - 4*a*c;
console.log('Дискриминант: ' + d);

if(d > 0)
{
    let x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c)) / 2*a;
    let x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4*a*c)) / 2*a;

    console.log('Корня два: ');
    console.log('x1: ' + x1);
    console.log('x2: ' + x2);
}
else if(d == 0)
{
    console.log('Корень один: ');
    console.log('x: ' + (-b / 2*a));
}
else
{
    console.log('Что корней на множестве действительных чисел нет');
}
console.log('');

console.log('Циклы');
console.log('1. Вычислить факториал числа n. n - рандом от 1 до 15.');
let n = randomInt(1, 15);

function factorial(n)
{
    if(n == 1 || n == 0)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}

console.log('Факториал числа ' + n + ' равен ' + factorial(n));
console.log('');

console.log('2. Вывести таблицу значений функции y = -0.23x2 + x. Значения аргумента (x) задаются минимумом, максимумом и шагом.');
let valMin = randomInt(1, 15);
let valMax = valMin * randomInt(1, 15);
console.log('Минимальное: ' + valMin);
console.log('Максимальное: ' + valMax);

function DoFunction(x)
{
    return (-0.23 * Math.pow(x, 2) + x);
}

for(let i = valMin; i <= valMax; i+=valMin)
{
    console.log('Переменная: ' + i);
    console.log('Значение функции: ' + DoFunction(i));
}
console.log('');

console.log('3. Найти сумму и произведение цифр введенного натурального числа. число - рандом от 10000 до 100000000.');
let value = String(randomInt(10000, 100000000));
console.log('Число: ' + value);

let summ = 0;
let increase = 1;

for(let v in value)
{
    summ += parseInt(value[v]);
    increase *= parseInt(value[v]);
}
console.log('Сумма всех цифр: ' + summ);
console.log('Произведение всех цифр: ' + increase);
console.log('');

console.log('4. Докажите, что для множества натуральных чисел верно 1+2+...+n = n(n+1)/2.');
var nValue = randomInt(1, 15);
console.log('Число: ' + nValue);

var leftPart = 0
var rightPart = 0

for(let i = 0; i <= nValue; i++)
{
    leftPart += i;
}

rightPart = nValue * (nValue + 1) / 2;

console.log('Равенство левой и правой части: ' + (leftPart == rightPart));
console.log('');

console.log('5. Вывести на экран столько элементов ряда Фибоначчи, сколько указал пользователь.');
let fibNum = randomInt(1, 15);
let fibArr = [];

for(let i = 0; i < fibNum; i++)
{
    if(i <= 1)
    {
        fibArr.push(1);
    }
    else
    {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
}

console.log(fibArr);
console.log('');

console.log('Одномерные массивы');

console.log('1. Задан массив из 20 элементов (рандом от -100 до 100). Найти наибольший элемент массива и его индекс.');
let randomArr = [];
let minVal = 0;
let minValIndex = 0;

for(let i = 0; i < 20; i++)
{
    randomArr.push(randomInt(-100, 100));

    if(i == 0 || minVal > randomArr[i])
    {
        minVal = randomArr[i];
        minValIndex = i;
    }
}

console.log('Массив: ' + randomArr);
console.log('Минимальное значение: ' + minVal);
console.log('Индекс мин. значения: ' + minValIndex);
console.log('');

console.log('2. Сделать реверс массива.');
let randomArr2 = [];

for(let i = 0; i < 10; i++)
{
    randomArr2.push(randomInt(1, 100));
}

console.log('Массив до изменений: ' + randomArr2);
let temp = 0;

for(let i = 0; i <= (randomArr2.length / 2); i++)
{
    let temp = randomArr2[i];
    randomArr2[i] = randomArr2[randomArr2.length - i - 1];
    randomArr2[randomArr2.length - i - 1] = temp;
}

console.log('Массив после изменений: ' + randomArr2);
console.log('');

console.log('3. Поменять местами первую и вторую половину массива.');
let randomArr3 = [];

for(let i = 0; i < 9; i++)
{
    randomArr3.push(randomInt(1, 20));
}
console.log('Старый массив: ' + randomArr3);

let firstHalf = [];
let secondHalf = [];
let midValue = null;

for(let i = 0; i < randomArr3.length; i++)
{
    if(i < Math.floor(randomArr3.length / 2))
    {
        firstHalf.push(randomArr3[i]);
    }
    else if(i > Math.floor(randomArr3.length / 2))
    {
        secondHalf.push(randomArr3[i]);
    }
    else
    {
        midValue = randomArr3[i];
    }
}

console.log('Новый массив: ' + [...secondHalf, midValue, ...firstHalf]);
console.log('');

console.log('4. Найти в массиве те элементы, значение которых меньше среднего арифметического, взятого от всех элементов массива.');
let randomArr4 = [];
var elem = 0;
summ = 0;

for(let i = 0; i < 10; i++)
{
    elem = randomInt(1, 25);
    randomArr4.push(elem);
    summ += elem;
}

midValue = summ / randomArr4.length;
let resArr = [];

for(let i = 0; i < randomArr4.length; i++)
{
    if(randomArr4[i] < midValue)
    {
        resArr.push(randomArr4[i]);
    }
}

console.log('Массив: ' + randomArr4);
console.log('Среднее: ' + midValue);
console.log('Значения меньше среднего: ' + resArr);
console.log('');

console.log('5. В массиве найти сумму элементов, находящихся между минимальным и максимальным элементами. Сами минимальный и максимальный элементы в сумму не включать.');
let randomArr5 = [];
elem = 0;
minIndex = 0;
maxIndex = 0;
summ = 0;

for(let i = 0; i < 10; i++)
{
    elem = randomInt(1, 25);
    randomArr5.push(elem);
    
    if(elem > randomArr5[maxIndex])
    {
        maxIndex = i;
    }
    if(elem < randomArr5[minIndex])
    {
        minIndex = i;
    }
}

if(minIndex <= maxIndex)
{
    for(let i = minIndex; i < maxIndex; i++)
    {
        summ += randomArr5[i];
    }
}
else if(minIndex > maxIndex)
{
    for(let i = maxIndex; i > minIndex; i--)
    {
        summ += randomArr5[i];
    }
}

console.log('Массив: ' + randomArr5);
console.log('Минимальное: ' + randomArr5[minIndex]);
console.log('Максимальное: ' + randomArr5[maxIndex]);
console.log('Сумма значений между мин и макс: ' + summ);