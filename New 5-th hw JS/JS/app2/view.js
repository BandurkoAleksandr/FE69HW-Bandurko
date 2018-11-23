var View = (function () {
    var selectors = {
        table: document.querySelector('.products'),
        ordered: document.querySelector('.ordered')
    }

    var template = {
        itemProduct: '<tr class="itemProduct"><th class="name"> {{name}} </th><th class="price"> {{price}} </th><th><button class="addBtn">+</button></th></tr>',
        itemOrdered: '<tr class="itemProduct"><th class="name"> {{name}} </th><th class="price"> {{price}} </th></tr>',
        itemCaption: '<caption><strong>Выбранные товары</strong></caption>',
        itemHead: '<tr><th class="catalogName">Name</th><th class="catalogPrice">$</th></tr>',
        itemTotal: '<tr><th class="totalName"><strong>TOTAL</strong></th><th class="totalPrice"> {{price}} </th></tr>'
    }

    return {
        render: function(rendererName, data) {
            var renderers = {
                products: function () {
                    var view = '';
                    for (var i = 0; i < data.length; i++) {
                        var t = template.itemProduct;
                        t = t.replace('{{name}}', data[i].name);
                        t = t.replace('{{price}}', data[i].price);
                        view += t;
                    }
                    selectors.table.innerHTML += view;
                },

                ordereds: function () {
                    var view = '';
                    var c = template.itemCaption;
                    var h = template.itemHead;
                    var sum = 0;

                    for (var i = 0; i < data.length; i++) {
                        var t = template.itemOrdered;
                        var p = template.itemTotal;

                        t = t.replace('{{name}}', data[i].name);
                        t = t.replace('{{price}}', data[i].price);
                        view += t;
                        sum += data[i].price;
                        p = p.replace('{{price}}', sum);

                    }
                    selectors.ordered.innerHTML = c + h;
                    selectors.ordered.innerHTML += view + p;
                }
            }
            if(!renderers[rendererName]) {
                console.warn('Такого метода нет ' + rendererName);
                return;
            }
            renderers[rendererName]();
        }, 

        listen: function (eventName, cb) {
            var events = {
                addingItem: function () {
                    var addBtn = document.querySelectorAll('.addBtn');
                    var arr = [];
                    for (var i = 0; i < addBtn.length; i++) {
                        arr.push(addBtn[i]);
                    }
                    
                    for (var i = 0; i < arr.length; i++) {
                        arr[i].addEventListener('click', function () {
                            var index = arr.indexOf(this);
                            if (index >= 0) {
                                cb(index);
                                selectors.ordered.style.visibility = 'visible';
                                return;
                        }
                        })
                    }
                }
            }
            if (!events[eventName]) {
                console.warn('Такого события нет ' + eventName);
                return;
            }
            events[eventName]();
        }
    }
}());