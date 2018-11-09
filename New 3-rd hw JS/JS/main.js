// Home work number three... Bandurko

(function () {

    var figInputs = document.querySelector('.animTarget');
    var figureInput = document.querySelectorAll('[name="figure"]');

    for (var i = 0; i < figureInput.length; i++) {
        figureInput[i].addEventListener('click', function() {
            for (var i = 0; i < figureInput.length; i++) {
                if (figureInput[2].checked || figureInput[3].checked) {
                    figInputs.style.display = 'block';
                }
            }
        });
    }

    for (var i = 0; i < figureInput.length; i++) {
        figureInput[i].addEventListener('click', function() {
            for (var i = 0; i < figureInput.length; i++) {
                if (figureInput[0].checked || figureInput[1].checked) {
                    figInputs.style.display = 'none';
                }
            }
        });
    }

    area.addEventListener('click', function (e) {
        var el = document.createElement('div');
        var target = e.target;
        var color = newColor.value;
        var width = 25;
        var height = 25;

        if(typeof(+newWidth.value) !== 'number' || +newWidth.value === NaN || +newWidth.value >= area.offsetWidth) {
            return false;
        } else {
            width = +newWidth.value;
        }
        if(typeof(+newHeight.value) !== 'number' || +newHeight.value === NaN || +newHeight.value >= area.offsetHeight) {
            return false;
        } else {
            height = +newHeight.value;
        }

        el.classList.add('figure');
        el.style.top = e.offsetY + 'px';
        el.style.left = e.offsetX + 'px';
        el.style.backgroundColor = color;
        
        
        for (var i = 0; i < figureInput.length; i++) {
            if (figureInput[0].checked) {
                el.classList.add('circle');
            }else if (figureInput[1].checked) {
                el.classList.add('square');
            }else if (figureInput[2].checked) {
                el.style.width = width + 'px';
                el.style.height = height + 'px';
                el.classList.add('square');
            }else if (figureInput[3].checked) {
                el.style.width = width + 'px';
                el.style.height = height + 'px';
                el.classList.add('circle');
            }
        }

        if (color === '#ffffff') {
            el.classList.add('white');
        }
        if (color !== '#ffffff') {
            el.classList.remove('white');
        }
        if(e.target !== area) {
            return false;
        }
        
        target.appendChild(el);   

    })

}());






