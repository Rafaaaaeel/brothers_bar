$(function(){

    /*Variaveis*/
    
    let answer_number_berfore_and_after = $('#res0');
    let answer_product_price = $('#res1');
    let answer_meter_conversor = $('#res2');
    let answer_temp_conversor = $('#res3');
    let answer_money_conversor = $('#res4');
    let answer_discount = $('#res5');
    let answer_payment_reajust = $('#res6');
    let answer_classmate_note = $('#res7');
    let number_for_before_and_after;
    let number_before;
    let number_after;
    let product_name;
    let product_price_1;
    let product_price_2;
    let product_price_final;
    let meter;
    let calcKm;
    let calcHm;
    let calcDam;
    let calcDm;
    let calcCm;
    let calcMm;
    let box_answer_measure = $('#measure, #answer2');
    let box_answer_item_price = $('#product');
    let box_Before_and_after = $('#before_and_after_box');
    let box_temp_conversor = $('#temp_conversor')
    
    let date = new Date();
    let hour = date.getHours;
    let temp_c;
    


    if(hour>= 0 && hour < 12){
        $('html,body').css('background','#fae3a2')
    }else if(hour  >= 12 && hour < 18){
        $('html,body').css('background','#d18454')
    }else{
        //$('html,body').css('background','url(../img/night.jpg)').css('background-size','cover').css('background-position','center')
    }


    
    //Funtion number after and before
    $('#before_And_after').click(function(){
        number_for_before_and_after = Number(prompt('Tell me a number:'));
        number_before = number_for_before_and_after - 1;
        number_after = number_before + 2;
        answer_number_berfore_and_after.html(`
        <div id="answer0">
            <p>Number: ${number_for_before_and_after}</p>
            <p>Number After: ${number_after}</p>
            <p>Number Before: ${number_before}</p>
        </div>`);
        box_Before_and_after.css('height', '80px').css('transition','0.4s')
        box_Before_and_after.dblclick(function(){
           
        })
        box_Before_and_after.mouseout(function(){
            $(this).css('height','23px');
            $('#answer0').css('display','none');
            $(this).css('background','rgb(255, 255, 255)');
            $('.box').css('opacity','100%');
        })
        box_Before_and_after.mouseenter(function(){
            $('#answer0').css('display','initial');
            $(this).css('height', '100px').css('transition','0.4s');
        })
    })

    // Function Item price
    $('#item_price').click(function(){
        product_name = prompt('What is it the product do you want to buy?');
        while(product_name.length == 0){;
            alert('Please what is the product name?');
            product_name = prompt('What is it the product do you want to buy?');
        }

        product_price_1 = Number(prompt('how much is it?'));
        product_price_2 = Number(prompt('How much do you pay for it?'));

        if(product_price_2 < product_price_1){

            product_price_final = product_price_1 - product_price_2;

            alert(`Do you can´t buy this product: "${product_name}" ,missing ${product_price_final.toLocaleString('en', {style:'currency', currency:'USD'})} `);

        }else{

            product_price_final = product_price_2 - product_price_1;
            answer_product_price.html(`
                <div id="answer1">
                    <span><strong>Product: ${product_name}</strong></span>
                    <p>Keep the change ${product_price_final.toLocaleString('en',{style:'currency',currency:'USD'})}</p>
                </div>`);
                box_answer_item_price.css('height','70px').css('transition','0.4s')
                box_answer_item_price.dblclick(function(){
                    
                })
                box_answer_item_price.hover(function(){
                    $(this).css('height','70px') ;
                    $('#answer1').css('display','initial')              
                })
                box_answer_item_price.mouseout(function(){
                    $(this).css('height','23px');
                    $('#answer1').css('display','none');
                    $(this).css('background','rgb(255, 255, 255)');
                    $('.box1').css('opacity','100%');
                })
        }
        
    })

    //Function meter conversor
    $('#measure_conversor').click(function(){
        meter = Number(prompt('What is the meter for conversor?'));
        calcKm = meter / 1000;
        calcHm = meter / 100;
        calcDam = meter / 10;
        calcDm = meter * 10;
        calcCm = calcDm * 10;
        calcMm = calcCm * 10;
        answer_meter_conversor.html(`
            <div id="answer2">
                <span><strong>Meter ${meter} converter is:</strong></span>
                <p>Km: ${calcKm}</p>
                <p>Hm: ${calcHm}</p>
                <p>Dam: ${calcDam}</p>
                <p>Dm: ${calcDm}</p>
                <p>Cm: ${calcCm}</p>
                <p>Mm: ${calcMm}</p>
                <p><strong>*Double click do close this window</strong</p>
            </div>`)
        box_answer_measure.css('height','160px').css('transition','0.5s')
        
        box_answer_measure.mouseout(function(){
            $(this).css('height','23px').css('background','rgb(255, 255, 255)')
            $('.box2').css('opacity','100%');
            $('#answer2').css('display','none');
        })
        box_answer_measure.dblclick(function(){
            $(this).css('height','160px').css('transition','0.5s');
            
        })

        box_answer_measure.mouseenter(function(){
            $(this).css('height','160px').css('transition','0.5s').css('background','rgb(255, 255, 255)')
            $('#answer2').css('display','initial');

        })

    })
    $('#temp_conversor_button').click(function(){
        temp_c = Number(prompt('tell a me a temp in Celcius'));
        
        let temp_to_f;
        temp_to_f = temp_c / 5 * 9 + 32;
        temp_to_k = temp_c + 273;
        answer_temp_conversor.html(`
        <div id="answer3">
            <p>The temperature ${temp_c}ºC converter </p>
            <p>${temp_to_f}ºf</p>
            <p>${temp_to_k}K</p>
        </div>`)
        box_temp_conversor.css('height','100px').css('transition','0.5s')
        box_temp_conversor.mouseout(function(){
            $(this).css('height','23px').css('background','rgb(255, 255, 255)')
            $('.box3').css('opacity','100%');
            $('#answer3').css('display','none');
        })
        box_temp_conversor.mouseenter(function(){
            $(this).css('height','100px').css('transition','0.5s')
            $('#answer3').css('display','initial');
        })
    })

    ///Terminar - incompleto
    $('#money_convesor').click(function(){
        let dolar, real;
        dolar = Number(prompt('how much is it the dolar price today?'))
        real = Number(prompt('how much do R$ do you have in the wallet?'))
        $('#res4').html(`
        <div id="answer4">
            <p>${dolar}</p>
        </div>`)
    })
    $('#classmate_note_button').click(function(){
        let student_name;
        student_name = prompt('What is the student name ')
        
        while(student_name.length <= 2){
            alert("[ERROR] Student not found, please tell me a student name")
            student_name = prompt('What is the student name ')
        }
        let note = [];
        let notes = Number(prompt(`how many notes ${student_name} has you have?`))
        
        if(notes != 0){

        console.log(notes)
        while(notes == 0){
            alert(`[ERROR] please say the many notes ${student_name} has `)
            notes = Number(prompt(`how many notes ${student_name} has?`))
        }
        notes--
        console.log(notes)
        while(note.length <= notes){
            note.push(Number(prompt(`Tell me the notes `)))
        }
        
        
        var total = 0

        for(var i = 0; i < note.length; i++){
            total += note[i];
        }
        let average = total / note.length
        
        if(average < 3){
            answer_classmate_note.html(`<span id="answer4">Reprovado</span>`)
        }else if (average < 5){
            answer_classmate_note.html(`<span id="answer4">Recuperação</span>`)
        }else{
            answer_classmate_note.html(`<span id="answer4">Aprovado</span>`)
        }
        let box_note = $('#note');
        box_note.css('height','40px').css('transition','0.05s').css('background','white')
        box_note.mouseenter(function(){
            $(this).css('height','40px').css('transition','0.05s')
            $('#answer4').css('display','initial')
        })
        box_note.mouseout(function(){
            $(this).css('height','23px').css('transition','0.05s')
            $('#answer4').css('display','none')
            $('.box7').css('opacity','100%');
            $('#answer4').css('display','none');
        })
        }else{
            
            box_note.css('height','40px').css('transition','0.05s').css('background','white')

            box_note.mouseenter(function(){
                $(this).css('height','40px').css('transition','0.05s')
                $('#answer4').css('display','initial')
            })
            box_note.mouseout(function(){
                $(this).css('height','23px').css('transition','0.05s')
                $('#answer4').css('display','none')
                $('.box7').css('opacity','100%');
                $('#answer4').css('display','none');
            })
            answer_classmate_note.html(`<span id="answer4">Reprovado</span>`) 
        }
        
    })
})