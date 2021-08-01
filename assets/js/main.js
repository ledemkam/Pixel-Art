//Größe Auswahl input
let gridHeight = document.getElementById("gridHeight");
let gridWidth = document.getElementById("gridWidth");
const submitBtn = document.getElementById("submitBtn");
const Grid = document.getElementById("pixelGrid");
const pickerpalette = document.getElementById("pickerpalette");
// Farbeauswahl
//let gridColor = document.getElementById('colorPicker');
let chang_Color ;
//wenn der benutzer der groß ändert,  Makegrid() ist geruft
 submitBtn.addEventListener('click',e => {
       //to check the listener 
       console.log("the user was submit the grid dimention");
       //to remove the old grid 
       Grid.innerHTML = " ";
       //to keep the changes 
       e.preventDefault();
       //call the function
       makeGrid();
 })
//Allow user to pick color

var colors = () => {
  v

}

 

let makeGrid = () => {
    for(let i=0 ; i<gridHeight.value ; i++){
        const row = Grid.insertRow (i);
        for( let j=0 ; j<gridWidth.value ; j++){
        const column = row.insertCell (j);
        column.className = 'grid-row';
        }
    }
  
 
  }


