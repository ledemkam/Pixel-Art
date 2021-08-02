// change size for the grid
let gridHeight = document.getElementById('gridHeight');
let gridWidth = document.getElementById('gridWidth');
const submitBtn = document.getElementById('submitBtn');
const Grid = document.getElementById('pixelGrid');
const pickerpalette = document.getElementById('pickerpalette');
// to choice color
let gridColor = document.getElementById('colorPicker');
let chang_Color;
//wenn der benutzer der groß ändert,  Makegrid() ist geruft
submitBtn.addEventListener('click', (e) => {
   //to check the listener
   console.log('the user was submit the grid dimention');
   //to remove the old grid
   Grid.innerHTML = ' ';
   //to keep the changes
   e.preventDefault();
   //call the function
   makeGrid();
});
//Allow user to pick a color,  the if statement to prevent coloring all the grid

Grid.addEventListener('click', (x) => {
   if (x.target.nodeName === 'TD') {
      x.target.style.backgroundColor = gridColor.value;
   }
});

// gridHeight determines the number of rows. gridWidth determines how many pixels to put in each row
let makeGrid = () => {
   for (let i = 0; i < gridHeight.value; i++) {
      const row = Grid.insertRow(i);
      for (let j = 0; j < gridWidth.value; j++) {
         const column = row.insertCell(j);
         column.className = 'grid-row';
      }
   }
};

//function to convert the HTML to image format
function downloadimage() {
   //var container = document.getElementById("image-wrap"); //specific element on page
   var container = document.getElementById('maincontainer'); // full page
   html2canvas(container, { allowTaint: true }).then(function (canvas) {
      var link = document.createElement('a');
      document.body.appendChild(link);
      link.download = 'html_image.jpg';
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
   });
}
