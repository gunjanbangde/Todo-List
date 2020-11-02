//Strik off done items
$("ul").on("click","li",function(){
    $(this).toggleClass("striked");    
});

//Delete the todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Creating new todos
$("input").on("keypress",function(event){
    if(event.which === 13){
        var newTodo =$(this).val();
        $("ul").append("<li><span>X </span>"+newTodo+"</li>");
        $(this).val("");
    }
});