$(document).ready(function(){
//Цепляю функцию на кнопку
 $('button').on('click',function(){
  //Достаю необходимые данные для формирования запроса
      let text = $('textarea').val();
      //Проверка на заполненность поля
      if(text == ''){
        alert("Ничего не введено");
        return
      }
      let input_lang = $('.input_lang').val();
      let output_lang = $('.output_lang').val();
      //Задаю url и ключ,который я получил от яндекса
    let url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    let api_key = 'trnsl.1.1.20190714T141059Z.9b129d9960ae3d2c.9767285ce4fb74fc98809b1ecdd12a245b9eafc6';
   //Формирую и отправляю запрос , обрабатываю ответ
 $.ajax(url + '?key=' + api_key + '&text=' + text + '&lang=' + input_lang + '-' + output_lang).done(function(data){
  
  //Обрабатыаю текст ответа
   $('.output_text').append(data.text[0] + '<br>');
 });
  //Зачищаю поле ввода
 $('textarea').on('click',function(){
     $('.output_text').text('');
     });
   });
});