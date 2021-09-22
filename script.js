

function insertNumber(number){
    let inResult = $("#result").val();
    $("#result").val(inResult + number);
}

$("#clear").click(function(){
    $("#result").val(" ");
});


function deletLast(){
   if($("#result") != ""){
       $("#result").val( $("#result").val().slice(0, -1));
   }
}

$("#equalAll").click(function(){
    let result = eval($("#result").val());
    $("#result").val(result);
});