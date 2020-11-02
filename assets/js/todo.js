//Strik off done items
$("li").on("click",function(){
    $(this).toggleClass("striked");    
});

//Delete the todo
$("span").on("click",function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});