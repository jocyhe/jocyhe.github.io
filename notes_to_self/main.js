var orpheusFacts = {
    name: "Prophet Orpheus",
    numberOfEyes: 2,
    likes: ["food", "coding", "Hack Club"]
};

if (!localStorage.getItem("notes")) {
localStorage.setItem("notes",JSON.stringify([]));
}

var myNotes = JSON.parse(localStorage.getItem("notes"));
displayNotes();

function postNewNote() {
    var titleInput = $(".new-note-title");
    var contentInput = $(".new-notes-content");
    var noteTitle = titleInput.val();
    var noteContent = contentInput.val();
    var noteDate = getDate();
    var note = {};
    note.title = noteTitle;
    note.content = noteContent;
    note.date = noteDate;
    myNotes.push(note);
    localStorage.setItem("notes",JSON.stringify(myNotes));
    titleInput.val("");
    contentInput.val("");
    displayNotes();
}

$(".old-notes").html("");

function displayNotes() {
    for (var i = myNotes.length-1; i >= 0; i--) {
        var note = myNotes[i];
        var noteDate = note.date;
        var noteTitle = note.title;
        var noteContent = note.content.replace(/\n/g, "<br>");
        
        var thisNote = $("<div>").addClass("note");
        var noteTitleDisplay = $("<h2>").addClass("note.title").text(noteTitle);
        var noteDateDisplay = $("<p>").addClass("note.date").text(getDate(noteDate));
        var noteContentDisplay = $("<p>").addClass("note-content").html(noteContent);
        
        thisNote.append(noteTitleDisplay);
        thisNote.append(noteContentDisplay);
        thisNote.append(noteDateDisplay);
        
        $(".old-notes").append(thisNote);
    }
}
    
$(".post-new-note").on("click", postNewNote);

function getDate() {
    var monthNames= [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November",
        "December"
    ];
    
    var date = new Date()
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
    








