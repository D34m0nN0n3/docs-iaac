function addRow() {
          
    var VMName = document.getElementById("name");
    var CPU = document.getElementById("cpu");
    var RAM = document.getElementById("ram");
    var HDD1 = document.getElementById("hdd1");
    var HDD2 = document.getElementById("hdd2");
    var HDD3 = document.getElementById("hdd3");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= VMName.value;
    row.insertCell(1).innerHTML= CPU.value;
    row.insertCell(2).innerHTML= RAM.value;
    row.insertCell(3).innerHTML= HDD1.value;
    row.insertCell(4).innerHTML= HDD2.value;
    row.insertCell(5).innerHTML= HDD3.value;
    row.insertCell(6).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}
 
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}
