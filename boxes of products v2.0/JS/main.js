(function() {

var btnBasket = document.querySelector('.button-basket');
var ul = document.querySelector('.basket .target');
var prod = "";
var btnOrder = document.querySelector('.button-order');
var divRes = document.querySelector('.basket .result');

btnBasket.addEventListener('click', function(){
    var li = document.createElement('li');

    var productInput = document.querySelectorAll('[name="product"]');
    for (var i = 0; i < productInput.length; i++) {
        if (productInput[i].checked) {
            prod = productInput[i].value;
        }
    }

    var quantity = newNumber.value;
    li.innerHTML = prod + " " + quantity + " кг";
    ul.appendChild(li);

    var handler = function(){
            li.classList.remove('fade-enter-active');
            li.removeEventListener('animationend', handler);
        };

        li.style.display = 'block';
        li.classList.add('fade-enter');

        raf(function(){
            li.classList.add('fade-enter-active');
            li.classList.remove('fade-enter');
        });

        li.addEventListener('animationend', handler);

});

var delLi = function(e){
    if(e.target.parentNode !== ul) {
        return false;
    }

    var li = e.target;
    var handler = function(){
            ul.removeChild(li);
    };

        raf(function(){
            li.classList.add('fade-leave-active');
        });
        
        li.addEventListener('animationend', handler);

}
ul.addEventListener('dblclick', delLi); 


btnOrder.addEventListener('click', function(){
    var div = document.createElement('div');
    var button = document.createElement('button');

    var liArrRes = [];
    var liArr = document.querySelectorAll('li');
    for (var i = 0; i < liArr.length; i++) {
       liArrRes.push(parseInt(liArr[i].innerText.replace(/\D+/g,"")));
    }
    
    var sumOrder = liArrRes.reduce(function(total, item){
        return total + item;
    }, 0);

    div.innerHTML = "Общий вес вашего заказа " + sumOrder + " кг";
    btnBasket.disabled = true; //заглушка1
    ul.removeEventListener('dblclick', delLi);
    btnOrder.disabled = true; //заглушка2
    button.innerHTML = "Оформить доставку";
    button.classList.add('btn');
    button.classList.add('delivery');

    divRes.appendChild(div);

    var handler = function(){
            div.classList.remove('fade-enter-active');
            div.removeEventListener('animationend', handler);
        };

        div.style.display = 'block';
        div.classList.add('fade-enter');

        raf(function(){
            div.classList.add('fade-enter-active');
            div.classList.remove('fade-enter');
        });

        div.addEventListener('animationend', handler);

    divRes.appendChild(button);
    
    var btnDelivery = document.querySelector('.delivery');

    btnDelivery.addEventListener('click', function(){
        var divBox = document.createElement('div');

        var first = function (weight) {
            while (true) {
                var kg = weight;
                var y = 20;
                if (kg == 0 || kg === null) {
                    break;
                }else if (kg <= 3) {
                    return divBox.innerHTML = "Маленькая коробка";
                }else if (kg <= 7) {
                    return divBox.innerHTML = "Средняя коробка";
                }else if (kg <= 20) {
                    return divBox.innerHTML = "Большая коробка";
                } else {
                    var z = kg / y;
                    var m = kg % y;
                    if (m === 0) {
                        return divBox.innerHTML = z + " Большие коробки";
                    } else if (m <= 3) {
                        return divBox.innerHTML = Math.floor(z) + " Большие коробки" + " 1 Маленькая коробка";
                    } else if (m <= 7) {
                        return divBox.innerHTML = Math.floor(z) + " Большие коробки" + " 1 Средняя коробка";
                    } else {
                        return divBox.innerHTML = Math.floor(z + 1) + " Больших коробок";
                    }
                }
            }
            
        }
        
        first(sumOrder);
        divRes.appendChild(divBox);

        var handler = function(){
            divBox.classList.remove('fade-enter-active');
        divBox.removeEventListener('animationend', handler);
        };

        divBox.style.display = 'block';
        divBox.classList.add('fade-enter');

        raf(function(){
            divBox.classList.add('fade-enter-active');
            divBox.classList.remove('fade-enter');
        });

        divBox.addEventListener('animationend', handler);

        btnDelivery.disabled = true; //заглушка3
    });

});

function raf(fn){
    window.requestAnimationFrame(function(){
        window.requestAnimationFrame(function(){
            fn();
        });
    }); 
}
    
}());





