function generateTable() {
   
    var rows = parseInt(document.getElementById('rows').value);
    var columns = parseInt(document.getElementById('columns').value);

    
    if (rows < 2 || rows > 10 || columns < 2 || columns > 10) {
        alert("Please enter numbers between 2 and 10");
        return; 
    }

    
    var table = '<table border="1">\n';
    for (var i = 1; i <= rows; i++) {
        table += '<tr>\n';
        for (var j = 1; j <= columns; j++) {
            
            table += '<td>' + i * j + '</td>\n';
        }
        table += '</tr>\n';
    }
    table += '</table>';

   
    document.getElementById('tableContainer').innerHTML = table;
}

function resetTable() {
    document.getElementById('rows').value = 2;
    document.getElementById('columns').value = 2;
    document.getElementById('tableContainer').innerHTML = '';
}