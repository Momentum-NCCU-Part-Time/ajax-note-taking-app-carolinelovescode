// getting notes to show up on the page 

const notes = {
    data: {
        url: "http://localhost:3000/notes/",
        notes: [],
    },

    displayNotes: function () {
        fetch(this.data.url), {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "title": " ", "body": " " })
                .then((response) => response.JSON())
                .then(response => {
                    for (let none of response) {
                        this.data.notes.push(note);
                    }
                    this.data.notes();
                }),

        },




    };
/*
const allNotes = 
const pad = document.getElementById('notepad')
const mainPad = document.createElement('div')

notes.map((note) => mainPad(note));
console.log(note)

funtion(showNotes)
fetch('http://localhost:3000/notes/', {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "title": " ", "body": " " })
})
    .then(r => r.json())
    .then(response => {
        this.showNotes.push(note)
    }

    )
showNotes.map()
    ,

    pad.innerHTML = `${notes.title}`
mainPad.appendChild(pad)
*/
