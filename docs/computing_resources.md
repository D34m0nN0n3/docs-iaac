# Выделение вычислительных ресурсов

## Информация об разработчике для предоставления доступа к ландшафтам

<div id="myform">
<b>Ведите данные...</b>
<table>
    <tr>
        <td>NAME</td>
        <td>CPU</td>
        <td>MEMORY</td>
        <td>HDD 1</td>
        <td>HDD 2</td>
        <td>HDD 3</td>
    </tr>
    <tr>
        <td><input type="text" placeholder="Имя VM" id="name"></td>
        <td><input type="number" maxlength="2" step="1" min="1" max="20" required placeholder="Количество" id="cpu"></td>
        <td><input type="number" maxlength="3" step="2" min="2" max="256" required placeholder="Гб" id="mem"></td>
        <td><input type="number" maxlength="4" step="10" min="50" max="1030" required placeholder="Гб" id="hdd1"></td>
        <td><input type="number" maxlength="4" step="5" min="5" max="1030" required placeholder="Гб" id="hdd1"></td>
        <td><input type="number" maxlength="4" step="5" min="5" max="1030" required placeholder="Гб" id="hdd1">
        <input type="button" id="add" value="Add" onclick="Javascript:addRow()"></td>
    </tr>
</table>
</div>
<div id="mydata">
<b>Веденные данные...</b>
<table id="myTableData"  border="1" cellpadding="2">
    <tr>
        <td>&nbsp;</td>
        <td><b>NAME</b></td>
        <td><b>CPU</b></td>
        <td><b>MEMORY</b></td>
        <td><b>HDD 1</b></td>
        <td><b>HDD 2</b></td>
        <td><b>HDD 3</b></td>
    </tr>
</table>
&nbsp;
 
</div>
<div id="myDynamicTable">
<input type="button" id="create" value="Click here" onclick="Javascript:addTable()">
to create a Table and add some data using JavaScript
</div>

## Информация для открытия сетевого доступа

## Информация об вычислительных и информационных ресурсах


