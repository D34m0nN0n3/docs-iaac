# Выделение вычислительных ресурсов

## Информация об разработчике для предоставления доступа к ландшафтам


## Информация об вычислительных и информационных ресурсах

<div id="myform">
<b>Ведите данные...</b>
<table>
    <tr>
        <th>Тип заявки *</th>
        <th>Ландшафт</th>
        <th>Название VM *</th>
        <th>ОС *</th>
        <th>Количество ядер CPU *</th>
        <th>Объем RAM в Гб *</th>
        <th>Объем HDD 1 в Гб *</th>
        <th>Объем HDD 2 в Гб</th>
        <th>Объем HDD 3 в Гб</th>
        <th>Объем HDD 4 в Гб</th>
        <th>Объем HDD 5 в Гб</th>
        <th>VLAN ID интерфейс 1 *</th>
        <th>IP address интерфейс 1 *</th>
        <th>Маска сети интерфейс 1 *</th>
        <th>Шлюз по умолчанию интерфейс 1 *</th>
        <th>VLAN ID интерфейс 2</th>
        <th>IP address интерфейс 2</th>
        <th>Маска сети интерфейс 2</th>
        <th>Шлюз по умолчанию интерфейс 2</th>
    </tr>
    <tr>
        <td style="min-width:250px"><select name="type" id="type" tabindex="0"><option value="">Выберите из списка</option><option value="выделение">Выделение</option><option value="добавление">Добавление</option><option value="возврат">Возврат</option></select></td>
        <td style="min-width:250px"><select name="stage" id="stage" tabindex="0"><option value="">Выберите из списка</option><option value="продуктив">Продуктив</option><option value="тест">Тест</option><option value="разработка">Разработка</option></select></td>
        <td style="min-width:300px"><input type="text" maxlength="32" placeholder="Имя VM" id="name"></td>
        <td style="min-width:250px"><select name="os" id="os" tabindex="0"><option value="">Выберите из списка</option><option value="CentOS 7">CentOS 7</option><option value="CentOS 8">CentOS 8</option><option value="Windows 2012">Windows 2012</option><option value="Windows 2016">Windows 2016</option></select></td>
        <td><input class="mod" type="number" maxlength="2" step="1" min="1" max="20" required placeholder="ШТ" id="cpu"></td>
        <td><input class="mod" type="number" maxlength="3" step="2" min="2" max="256" required placeholder="Гб" id="ram"></td>
        <td><input class="mod" type="number" maxlength="4" step="10" min="50" max="1030" required placeholder="Гб" id="hdd1"></td>
        <td><input class="mod" type="number" maxlength="4" step="5" min="5" max="1030" required placeholder="Гб" id="hdd2"></td>
        <td><input class="mod" type="number" maxlength="4" step="5" min="5" max="1030" required placeholder="Гб" id="hdd3"></td>
        <td><input class="mod" type="number" maxlength="4" step="5" min="5" max="1030" required placeholder="Гб" id="hdd4"></td>
        <td><input class="mod" type="number" maxlength="4" step="5" min="5" max="1030" required placeholder="Гб" id="hdd5"></td>
        <td style="min-width:150px"><input type="text" minlength="3" maxlength="16" placeholder="Домен *" id="domain"></td>
        <td><input class="mod" type="number" maxlength="4" step="1" min="2" max="4096" required placeholder="VLAN ID" id="vlan1"></td>
        <td style="min-width:180px"><input type="text" minlength="7" maxlength="15" size="15" required pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}" placeholder="IP address" id="ip1"><span class="validity"></span></td>
        <td style="min-width:180px"><input type="text" minlength="7" maxlength="15" size="15" required pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}" placeholder="Net mask" id="mask1"><span class="validity"></span></td>
        <td style="min-width:180px"><input type="text" minlength="7" maxlength="15" size="15" required pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" placeholder="Gateway" id="gw1"><span class="validity"></span></td>
        <td><input class="mod" type="number" maxlength="4" step="1" min="2" max="4096" required placeholder="VLAN ID" id="vlan2"></td>
        <td style="min-width:180px"><input type="text" minlength="7" maxlength="15" size="15" required pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" placeholder="IP address" id="ip2"><span class="validity"></span></td>
        <td style="min-width:180px"><input type="text" minlength="7" maxlength="15" size="15" required pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" placeholder="Net mask" id="mask2"><span class="validity"></span></td>
        <td style="min-width:180px"><input type="text" minlength="7" maxlength="15" size="15" required pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" placeholder="Gateway" id="gw2"><span class="validity"></span></td>
    </tr>
</table>
<input type="button" id="add" value="Добавить веденные данные в таблицу" onclick="Javascript:addRow()">
&nbsp;
 
</div>
<div id="mydata">
<b>Веденные данные...</b>
<table id="myTableData" cellpadding="2">
    <tr>
        <th style="min-width:180px"><b>STAGE</b></th>
        <th style="min-width:300px"><b>NAME VM</b></th>
        <th style="min-width:180px"><b>OS</b></th>
        <th><b>CPU</b></th>
        <th><b>RAM</b></th>
        <th><b>HDD 1</b></th>
        <th><b>HDD 2</b></th>
        <th><b>HDD 3</b></th>
        <th><b>HDD 4</b></th>
        <th><b>HDD 5</b></th>
        <th style="min-width:180px"><b>DOMAIN</b></th>
        <th><b>VLAN ID 1</b></th>
        <th style="min-width:180px"><b>IP ADDRESS 1</b></th>
        <th style="min-width:180px"><b>NET MASK 1</b></th>
        <th style="min-width:180px"><b>GATEWAAY 1</b></th>
        <th><b>VLAN ID 2</b></th>
        <th style="min-width:180px"><b>IP ADDRESS 2</b></th>
        <th style="min-width:180px"><b>NET MASK 2</b></th>
        <th style="min-width:180px"><b>GATEWAAY 2</b></th>
        <th>&nbsp;</th>
    </tr>
</table>
&nbsp;
 
</div>

## Информация для открытия сетевого доступа

