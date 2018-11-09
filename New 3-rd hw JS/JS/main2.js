// Home work number three (second part)... Bandurko

// 1) написать функцию pluck, которая берет массив объектов 
// и возвращает массив значений определенного поля:

(function () {

    var characters = [
        { 'name': 'barney', 'age': 36 },
        { 'name': 'fred', 'age': 40 }
        ];

    var pluck = function(arr, key) {
        var result = [];

        for (var i = 0; i < arr.length; i++) {
            result.push(arr[i][key]);
        }

        return result;
    }


    console.log(pluck(characters, 'name'));
    console.log(pluck(characters, 'age'));
}());