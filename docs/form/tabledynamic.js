function addRow() {
          
    var STAGE = document.getElementById("stage");
    var VMName = document.getElementById("name");
    var OS = document.getElementById("os");
    var CPU = document.getElementById("cpu");
    var RAM = document.getElementById("ram");
    var HDD1 = document.getElementById("hdd1");
    var HDD2 = document.getElementById("hdd2");
    var HDD3 = document.getElementById("hdd3");
    var HDD4 = document.getElementById("hdd4");
    var HDD5 = document.getElementById("hdd5");
    var DOMAIN = document.getElementById("domain");
    var VLAN1 = document.getElementById("vlan1");
    var IP1 = document.getElementById("ip1");
    var MASK1 = document.getElementById("mask1");
    var GW1 = document.getElementById("gw1");
    var VLAN2 = document.getElementById("vlan2");
    var IP2 = document.getElementById("ip2");
    var MASK2 = document.getElementById("mask2");
    var GW2 = document.getElementById("gw2");
    var table = document.getElementById("myTableData");
    var table1 = document.getElementById("myTableData1");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= STAGE.value;
    row.insertCell(1).innerHTML= VMName.value;
    row.insertCell(2).innerHTML= OS.value;
    row.insertCell(3).innerHTML= CPU.value;
    row.insertCell(4).innerHTML= RAM.value;
    row.insertCell(5).innerHTML= HDD1.value;
    row.insertCell(6).innerHTML= HDD2.value;
    row.insertCell(7).innerHTML= HDD3.value;
    row.insertCell(8).innerHTML= HDD4.value;
    row.insertCell(9).innerHTML= HDD5.value;
    row.insertCell(10).innerHTML= DOMAIN.value;
    row.insertCell(11).innerHTML= VLAN1.value;
    row.insertCell(12).innerHTML= IP1.value;
    row.insertCell(13).innerHTML= MASK1.value;
    row.insertCell(14).innerHTML= GW1.value;
    row.insertCell(15).innerHTML= VLAN2.value;
    row.insertCell(16).innerHTML= IP2.value;
    row.insertCell(17).innerHTML= MASK2.value;
    row.insertCell(18).innerHTML= GW2.value;
    row.insertCell(19).innerHTML= '<input type="button" value = "Удалить" onClick="Javacsript:deleteRow(this)">';
    
    var row = table1.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= VMName.value + '.' + DOMAIN.value + '    IN    A    ' + IP1.value;
    row.insertCell(1).innerHTML= 'TO DO';
    row.insertCell(2).innerHTML= '<input type="button" value = "Удалить" onClick="Javacsript:deleteRow(this)">';
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    var table1 = document.getElementById("myTableData1");
    table.deleteRow(index);
    table1.deleteRow(index);
    
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
