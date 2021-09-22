//helper для отрисовки названия цвета по его id
Thelpers.select = function(value, arr) {
    var res = arr.findItem('id', value);  
    return (res) ? res.name : '';
    return '';
  };
  //список цветов для select
  var arr_colors = [
    { id: 1, name: 'Красный'},     
    { id: 2, name: 'Синий'},     
    { id: 3, name: 'Зеленый'},     
  ];  
  //данные для таблицы
  var datasource = [
   {id: 125, firstname: 'Имя 1', lastname: 'Фамилия 1', color_id: 1},  
   {id: 133, firstname: 'Имя 2', lastname: 'Фамилия 2', color_id: 2},      
   {id: 143, firstname: 'Имя 3', lastname: 'Фамилия 3', color_id: 3},      
   {id: 145, firstname: 'Имя 4', lastname: 'Фамилия 4', color_id: 2},      
  ];
  //редактирование записи в ячейке таблицы  
  $('body').on('click', 'table td.edit', function(e) {      
    if ($(e.target).closest('select, input, .btn-group, .btn, a').length) return;          
    var tr = $(this).closest('tr');  
    var ind = tr.data('index'); 
    var type = $(this).data('type');
    var field = $(this).data('field');
    var source = $(this).data('source');
    if (type=='textbox') {
      $(this).html('<div data---="textbox__datasource[{0}].{1}__class:form-control input-sm;keypress:true;delay:1000;"></div>'.format(ind, field));
    }
    if (type=='dropdown') {
      $(this).html('<div data---="dropdown__datasource[{0}].{1}__class:form-control input-sm;required:true;datasource:{2};text:name;value:id;type:number;"></div>'.format(ind, field, source));
    }
    COMPILE();               
   }) 
  //добавить запись
  function addRow(e) {
    if (!VALIDATE('form.*')) return; 
    PUSH('datasource', form);
    SET('form', null);
    RESET('form.*');
  }
  //удалить запись
  function remRow(e) {  
    var tr = $(e).closest('tr');
    var ind = tr.data('index'); 
    datasource.splice(ind, 1);
    UPDATE('datasource');   
  }
  