$(document).ready(function(){

    dataProg=document.createElement('div');
    $(dataProg).attr('id','dane-programisty');
    $(dataProg).insertAfter($('button'));
   

    $('button').click(function(){
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',function(jsonProgram){

             let programList=$('<ul></ul>');
            programList.append('<li>'+jsonProgram.imie+'</li>');
            programList.append('<li>'+jsonProgram.nazwisko+'</li>');
            programList.append('<li>'+jsonProgram.zawod+'</li>');
            programList.append('<li>'+jsonProgram.firma+'</li>');
           
                $('#dane-programisty').html(programList) 
       

        });



    })








});



