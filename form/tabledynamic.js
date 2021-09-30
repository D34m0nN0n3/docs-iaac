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
    var table2 = document.getElementById("myTableData2");
 
    let reversip = IP1.value;
    let ptrip = reversip.split(".").reverse();

    var PTR = ptrip.join(".");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= VMName.value;
    row.insertCell(1).innerHTML= OS.value;
    row.insertCell(2).innerHTML= CPU.value;
    row.insertCell(3).innerHTML= RAM.value;
    row.insertCell(4).innerHTML= HDD1.value;
    row.insertCell(5).innerHTML= HDD2.value;
    row.insertCell(6).innerHTML= HDD3.value;
    row.insertCell(7).innerHTML= HDD4.value;
    row.insertCell(8).innerHTML= HDD5.value;
    row.insertCell(9).innerHTML= DOMAIN.value;
    row.insertCell(10).innerHTML= VLAN1.value;
    row.insertCell(11).innerHTML= IP1.value;
    row.insertCell(12).innerHTML= MASK1.value;
    row.insertCell(13).innerHTML= GW1.value;
    row.insertCell(14).innerHTML= VLAN2.value;
    row.insertCell(15).innerHTML= IP2.value;
    row.insertCell(16).innerHTML= MASK2.value;
    row.insertCell(17).innerHTML= GW2.value;
    row.insertCell(18).innerHTML= '<input type="button" value = "Удалить" onClick="Javacsript:deleteRow(this)">';
    
    var row = table1.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= VMName.value + '.' + DOMAIN.value + '.' + '&nbsp;&nbsp;&nbsp;&nbsp;IN&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;' + IP1.value;
    row.insertCell(1).innerHTML= PTR + '.in-addr.arpa.&nbsp;&nbsp;&nbsp;&nbsp;IN&nbsp;&nbsp;PTR&nbsp;&nbsp;&nbsp;&nbsp;' + VMName.value + '.' + DOMAIN.value + '.';
 
    var row1 = table2.insertRow(rowCount);
    var row2 = table2.insertRow(rowCount+rowCount);
 
    row1.insertCell(0).innerHTML= '<input type="text" minlength="7" maxlength="15" size="15" required pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" placeholder="IP address" id="srcip1"><span class="validity"></span>';
    row1.insertCell(1).innerHTML= IP1.value;
    row1.insertCell(2).innerHTML= '<input type="text" minlength="2" maxlength="5" placeholder="Ports" id="dports">';
    row1.insertCell(3).innerHTML= '<input type="text" minlength="3" maxlength="32" id="dapp">';
    row2.insertCell(0).innerHTML= IP1.value;
    row2.insertCell(1).innerHTML= '<input type="text" minlength="7" maxlength="15" size="15" required pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" placeholder="IP address" id="destip1"><span class="validity"></span>';
    row2.insertCell(2).innerHTML= '<input type="text" minlength="2" maxlength="5" placeholder="Ports" id="sports">';
    row2.insertCell(3).innerHTML= '<input type="text" minlength="3" maxlength="32" id="sapp">';
}
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    var table1 = document.getElementById("myTableData1");
    table.deleteRow(index);
    table1.deleteRow(index);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}
