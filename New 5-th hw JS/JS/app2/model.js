var Model = (function () {
    var CATALOG = [{
        name: 'iPhone XS Max',
        price: 37174
    }, 
    {
        name: 'Samsung Galaxy Note 9',
        price: 21103
    }, 
    {
        name: 'Xiaomi Redmi Note 5',
        price: 4193
    }, 
    {
        name: 'Samsung Galaxy S8',
        price: 12718
    }, 
    {
        name: 'OnePlus 6',
        price: 15093
    }, 
    {
        name: 'Xiaomi Mi 8',
        price: 10761
    }];

    var ORDERED = [];

    return {
        getItem: function (cb) {
            cb(CATALOG);
            return CATALOG;
        },

        getOrdered: function (cb) {
            cb(ORDERED);
            return ORDERED;
        },

        addItem: function (index, cb) {
            var newItem = CATALOG.slice(index, index + 1);
            ORDERED.push(newItem[0]);
            cb(ORDERED);
        }
    }

}());