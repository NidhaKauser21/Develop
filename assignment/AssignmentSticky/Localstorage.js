 
                       // TO load the data in localStorage
 
 
 // const loadNotes = () => {
                                  // for (let i = 0; i < localStorage.length; i++) {
                                  // const key = localStorage.key(i);
                                  // if (key.startsWith("note")) {
                                  // const sno = key.substring(4);
                                  // const savedData = localStorage.getItem(key);
                                  // notesContainer.innerHTML += `
                                  //                               <div id="note-container${sno}" class="sticky-container">
                                  //                                    <textarea id="note${sno}" class="sticky" draggable="true">${savedData}</textarea>
                                  //                                  <div class="action"> 
                                  //                                         <button class="acbtn1" onclick="saveData(${sno})">Save</button>
                                  //                                         <button class="acbtn2" onclick="editData(${sno})">Edit</button>
                                  //                                         <button class="acbtn3" onclick="deleteData(${sno})">Delete</button>
                                  //                                   </div>
                                  //                               </div>
                                  //                                    `;
                                  //                                }
                                  //                             }
                                  //                        }; 

                            //      const saveData = (sno) => {
                            //      const inputText = document.getElementById(`note${sno}`).value;
                            //      localStorage.setItem(`note${sno}`, inputText);
                            //   };

                            //     const editData = (sno) => {
                            //     const savedData = localStorage.getItem(`note${sno}`);
                            //     document.getElementById(`note${sno}`).value = savedData;
                            //  };

                            //  const deleteData = (sno) => {
                            //     localStorage.removeItem(`note${sno}`);
                            //     const noteElement = document.getElementById(`note-container${sno}`);

                            //          if (noteElement) {
                            //          noteElement.remove();
                            //         }
                            //  };

                            // const notes = () => {
                            //     const sno = Date.now();
      
                            //   notesContainer.innerHTML += `
                            //                                  <div id="note-container" class="sticky-container">
                            //                                                     <textarea id="note" class="sticky"></textarea>
                            //                                        <div class="action"> 
                            //                                            <button class="acbtn1" onclick="saveData()">Save</button>
                            //                                            <button class="acbtn2"  onclick="editData()">Edit</button>
                            //                                            <button class="acbtn3"  onclick="deleteData()">Delete</button>
                            //                                       </div>
                            //                                    </div>
                            //                                 `;
                            //                             };
      
                             
                            //   window.onload=loadNotes;
      
      
                            //  let note= document.getElementsByClassName("sticky");
                            //  let downBox=document.getElementById("test");
                            //  let upBox=document.getElementById("up"); 
      
                            //  for(notes of note){
                            //       note.addEventListerner("dragstart",function(e){
                            //         let selected = e.target;
      
                            //         upBox.addEventListerner("dragover",function(e){
                            //           e.preventDefault();
                                    
                            //         upBox.addEventListerner("drop",function(e)
                            //         {
                            //           consolo.log("drop")
                            //           upBox.appendchild(selected);
                            //           selected=null;
      
                            //         })  
                                    
                            //          })
      
                            //       })
                            //  };


                          