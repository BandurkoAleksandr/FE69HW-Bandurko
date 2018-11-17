var NotesView = (function () {

    // var moduleName = 'notes';
    
    var S = {
        //;;
        divLength: document.querySelector('.length'),
        target: document.querySelector('.notes'),
        empty: document.querySelector('.emptyalert'),
        full: document.querySelector('.fullalert'),
        //;;
        list: document.querySelector('[data-module="notes"] .notes__list'),
        addBtn: document.querySelector('[data-module="notes"] .new-note__btn'),
        newNote: document.querySelector('[data-module="notes"] .new-note__input'),
    }
    var template = {
        item: '<div class="notes__item"><b>{{id}}</b> {{text}} <button class="delete">X</button></div>',
        //;;
        count: '<div class="notes__count"><b>Количество заметок: {{text}}</b>'
        //;;
    }

    return {
        render: function (rendererName, data) {
            var renderers = {
                notes: function () {
                    var view = '';
                    for (var i = 0; i < data.length; i++) {
                        var t = template.item;
                        t = t.replace('{{text}}', data[i].text);
                        t = t.replace('{{id}}', data[i].id);
                        view += t;
                    }
                    S.list.innerHTML = view;
                },

                //;;
                length: function () {
                    var view = '';
                    var t = template.count;
                    t = t.replace('{{text}}', data[0].text);
                    view += t;
                    S.divLength.innerHTML = view;
                }
                //;;
            }
            if (!renderers[rendererName]) {
                console.warn('Такого метода нет ' + rendererName);
                return;
            }
            renderers[rendererName]();
        },
        listen: function (eventName, cb) {
            var events = {
                addingNote: function () {
                    S.addBtn.addEventListener('click', function () {
                        var noteText = S.newNote.value;
                        if (!noteText) {
                            S.addBtn.disabled = true;
                            S.empty.style.display = 'block';
                            S.newNote.addEventListener('keydown', function () {
                                if (S.newNote.textLength > 0) {
                                    S.addBtn.disabled = false;
                                    S.empty.style.display = 'none';
                                }
                            });
                            return;
                        } else if (S.newNote.textLength > 160) {
                            S.addBtn.disabled = true;
                            S.full.style.display = 'block';
                            S.newNote.addEventListener('keyup', function () {
                                if (S.newNote.textLength < 160) {
                                    S.addBtn.disabled = false;
                                    S.full.style.display = 'none';
                                }
                            });
                            return;
                        }
                        cb(noteText);
                        S.newNote.value = ''; 
                    })
                },

                //;;;
                deletingNote: function () {
                    S.list.addEventListener('click', function (e) {
                        if(e.target.parentNode.parentNode !== S.list) {
                            return false;
                        }
                        var btnDelete = e.target;
                        var arrItem = [];
                        for (i = 0; i < S.list.childNodes.length; i++) {
                            arrItem.push(S.list.childNodes[i]);
                        }
                        var target = arrItem.indexOf(btnDelete.parentNode);
                        cb(target);
                        return;
                    });

                },

                addingNewLength: function () {
                    S.target.addEventListener('click', function () {
                            var lengthText = S.list.childNodes.length;
                            cb(lengthText);
                    }); 
                    
                }
                //;;;

            }
            if (!events[eventName]) {
                console.warn('Такого события нет ' + eventName);
                return;
            }
            events[eventName]();
        }
    }
}());
















