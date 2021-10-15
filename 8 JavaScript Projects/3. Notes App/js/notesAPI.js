export default class NotesAPI {
    //all methods are static, they can be evoked without object initialization:

    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
        
        //sorting notes newest to oldest
        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNotes(noteToSave) {
        //getting all existing notes:
        const notes = NotesAPI.getAllNotes();

        //looking for a particular note:
        const existing = notes.find(note => note.id === noteToSave.id);

        if(existing) {
            //update:
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();

        } else {
            //creation:

            //generating a random id:
            noteToSave.id = Math.floor(Math.random() * 1000000);

            //getting the date in  a format:
            noteToSave.updated = new Date().toISOString();

            notes.push(noteToSave);
        }
        
        //notesapp-notes is a key value that we set ourselves and by which we retrive data
        localStorage.setItem("notesapp-notes", JSON.stringify(notes));
    }

    static deleteNote (id) {
        
        const notes = NotesAPI.getAllNotes();

        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
    }
}