// function saveData() {

//     const noteID = Date.now();

//     let text = document.getElementById("note").value;
//     console.log(text);

//     const jsonData = {
//       id: noteID,
//       content: text
//     };
  
//     const url = 'https://stickynotes-1f5d0-default-rtdb.firebaseio.com/notes.json';
  
//     fetch(url, {
//       method: 'POST',
//       body: JSON.stringify(jsonData)
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Data add successful');
//         } else {
//           console.error('Failed to save data:', response.status);
//         }
//       })
//       .catch((error) => {
//         console.error('Error saving data:', error);
//       });
//   }

//   function deleteData() {
    

//     const url = 'https://stickynotes-1f5d0-default-rtdb.firebaseio.com/notes.json';
  
//     fetch(url, {
//       method: 'DELETE'
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log('Data deleted successfully');
//         } else {
//           console.error('Failed to delete data:', response.status);
//         }
//       })
//       .catch((error) => {
//         console.error('Error deleting data:', error);
//       });
//   }












    // const notesContainer = document.getElementById("test");
    // const generateUniqueID = () => {
    //   return Date.now();
    // };

    // const createNewNoteElement = (noteID, noteText) => {
    //   return `
    //                                              <div id="note-container-${noteID}" class="sticky-container">
    //                                                 <textarea id="note-${noteID}" class="sticky">${noteText}</textarea>
    //                                                      <div class="action"> 
    //                                                        <button class="acbtn1" onclick="saveData(${noteID})">Save</button>
    //                                                        <button class="acbtn2"  onclick="editData(${noteID})">Edit</button>
    //                                                        <button class="acbtn3"  onclick="deleteData(${noteID})">Delete</button>
    //                                                        </div>
    //                                                 </div>
    //                                                  `;
    // };

    // const notes = () => {
    //   const url = 'https://stickynotes-1f5d0-default-rtdb.firebaseio.com/notes.json';

    //   fetch(url)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch data');
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       notesContainer.innerHTML = "";

    //       for (const key in data) {
    //         if (data.hasOwnProperty(key)) {
    //           console.log(key)
    //           const note = data[key];
    //           const noteText = note.content;
    //           const noteID = note.id;
    //           console.log(noteID)

    //           const noteElement = createNewNoteElement(noteID, noteText);
    //           notesContainer.innerHTML += noteElement;
    //         }
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //     });
    // };

    // const createNewNote = () => {
    //   const newNoteID = generateUniqueID();
    //   const newNoteElement = createNewNoteElement(newNoteID, '');
    //   notesContainer.innerHTML += newNoteElement;
    // };

  

 

  