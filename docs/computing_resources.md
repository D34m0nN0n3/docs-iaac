# Выделение вычислительных ресурсов

## Информация об разработчике для предоставления доступа к ландшафтам

<div class='container'>
  <div class='row'>
    <div class='col-md-8 center-block' style='float:none'>                 <h2>jComponent - редактируемая таблица</h2><hr>        
      <table class='table table-bordered mv20'>
        <thead> 
          <tr> 
            <th>#</th>
            <th>id</th>
            <th>Имя</th>
            <th>Фамилия</th>                        
            <th style='width:150px'>Цвет</th>                       
            <th></th>                       
          </tr>
        </thead>    
        <tbody data-jc="repeater__datasource" >           
          <script type="text/html">
            <tr data-index="$index">
              <td>{{index+1}}</td>
              <td>{{id}}</td>
              <td class='edit' data-type='textbox' data-field='firstname'>{{firstname}}</td>
              <td class='edit' data-type='textbox' data-field='lastname'>{{lastname}}</td>
              <td class='edit' data-type='dropdown' data-field='color_id' data-source='arr_colors'>{{color_id|select(arr_colors)}}</td>
              <td><button type='button' class='btn btn-danger btn-flat btn-xs' data-bind="rem__click:remRow"  data-id='$index' title='Удалить запись'><i class='fa fa-fw fa-remove'></i></button></td>        
            </tr>
          </script> 
        </tbody>  
        <tfooter> 
          <tr> 
            <th></th>
            <th><div data---="textbox__form.id__required:true;type:number;placeholder:id;class:form-control input-sm;"></div></th>
            <th><div data---="textbox__form.firstname__required:true;placeholder:Имя;class:form-control input-sm;"></div></th>
            <th><div data---="textbox__form.lastname__required:true;placeholder:Фамилия;class:form-control input-sm;"></div></th>   
            <th><div data---="dropdown__form.color_id__required:true;datasource:arr_colors;text:name;value:id;type:number;class:form-control input-sm;"></div></th>   
            <th><button type='button' class='btn btn-primary btn-flat btn-xs' data-bind="rem__click:addRow"  data-id='$index' title='Добавить запись'><i class='fa fa-fw fa-plus'></i></button></th>                        
          </tr>
        </tfooter>    
      </table>          
    </div>
  </div>
</div>  

## Информация для открытия сетевого доступа

## Информация об вычислительных и информационных ресурсах


