// Home work number one... Bandurko

while (true) {

    var telefonColor = prompt('Выберете цвет смартфона из доступных: black, blue, gold, pink, gray', 'Enter some color');
    var price = 0;
    var photo = '';
    var flag = false;

    
    if(telefonColor == null) {
        flag = true;
        break;
    } else if(telefonColor === 'black') {
        price += 200;
        photo = '../IMG/black.png';
        break;
    } else if(telefonColor === 'blue') {
        price += 210;
        photo = '../IMG/blue.png';
        break;
    } else if(telefonColor === 'gold') {
        price += 250;
        photo = '../IMG/gold.png';
        break;
    } else if(telefonColor === 'pink') {
        price += 220;
        photo = '../IMG/pink.png';
        break;
    } else if(telefonColor === 'gray') {
        price += 215;
        photo = '../IMG/gray.png';
        break;
    } 
}

if(!flag) {
    
    while (true) {

        var telefonMemory = prompt('Выберете объем памяти смартфона из доступных: 128 / 256 / 512', 'Enter some memory');

        if(telefonMemory == null) {
            break;
        } else if(telefonMemory === '128') {
            price += 50;
            break;
        } else if(telefonMemory === '256') {
            price += 100;
            break;
        } else if(telefonMemory === '512') {
            price += 170;
            break;
        }
    }
}
    
    

document.write("<img src=" + photo + " width='200'/>");
document.write("<p>Цена телефона: " + price + "$</p>")

