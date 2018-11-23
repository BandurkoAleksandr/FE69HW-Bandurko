var Controller = (function () {

    var getItem = function () {
        Model.getItem(function (catalog) {
            View.render('products', catalog);
        });
    }

    var getOrdered = function () {
        Model.getOrdered(function (ordered) {
            View.render('ordereds', ordered);
        });
    }

    var listeners = function () {
        View.listen('addingItem', function (index) {
            Model.addItem(index, function(ordered) {
                View.render('ordereds', ordered);
            });
        })
    }

    return {
        init: function () {
            getItem();
            getOrdered();
            listeners();
        }
    }
}())