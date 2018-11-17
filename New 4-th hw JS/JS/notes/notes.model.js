var NotesModel = (function () {
    var NOTES = [{
            id: 1,
            text: 'Some note text 1'
        },
        {
            id: 2,
            text: 'Some note text 2'
        },
        {
            id: 3,
            text: 'Some note text 3'
        },
        {
            id: 4,
            text: 'Some note text 4'
        }
    ];
//;;
    var notesLength = [{
        text: '4'
    }];
//;;
    return {
        getNotes: function (cb) {
            // get data from server...
            cb(NOTES);
            return NOTES;
        },
        
        addNote: function (newNoteText, cb) {
            var newNote = {
                id: NOTES.length + 1,// мне пришлось изменить сбособ задания id 
                // так как раньше при пустом массиве нельзя было добавить новую заметку
                text: newNoteText
            }
            NOTES.push(newNote);
            cb(NOTES);
        },
        //;;
        getLength: function (cb) {
            cb(notesLength);
            return notesLength;
        },

        addLength: function (newLengthText, cb) {
            var newLength = {
                text: newLengthText
            }
            notesLength.splice(0, 1, newLength);
            cb(notesLength);
        },
        //;;

        //;;;
        delNote: function (target, cb) {
            NOTES.splice(target, 1);
            cb(NOTES);
        }
        //;;;
    }
}());


















