var NotesController = (function () {

    var getNotes = function () {
        NotesModel.getNotes(function (notes) { // cb функция в model.getNotes
            NotesView.render('notes', notes);
        });
    }

    //;;
    var getLength = function () {
        NotesModel.getLength(function (length) {
            NotesView.render('length', length);
        });
    }
    //;;

    var listeners = function () {
        NotesView.listen('addingNote', function (noteText) {
            NotesModel.addNote(noteText, function (notes) {
                NotesView.render('notes', notes);
            });
        })
        //;;

        NotesView.listen('addingNewLength', function (lengthText) {
            NotesModel.addLength(lengthText, function (notesLength) {
                NotesView.render('length', notesLength);
            });
        }) 

        NotesView.listen('deletingNote', function (target) {
            NotesModel.delNote(target, function (notes) {
                NotesView.render('notes', notes);
            });
        })
        //;;
    }

    return {
        init: function () {
            getNotes();
            getLength();
            listeners();
        }
    }
}());



















