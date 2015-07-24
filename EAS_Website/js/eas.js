
$(document).ready(function(){
    
    //Variables
    var boxRow = 10;
    var e = $('.myBox');
    var cloneBox = e.clone();
    var boxSize = 600/boxRow; //wrapper size is 600px; divides num of boxes by 600 to find perfect size
    
    //sets the height and width of the div depending on how many divs span the top row.
    $('.myBox').css('height',boxSize);
    $('.myBox').css('width',boxSize);
    
    //used to insert numbe of desided boxes.
    for (var i =1; i < (boxRow*boxRow); i++) {
        e.clone().insertAfter(e);
    }
    
    //outlines wrapper with black line when document is ready
    $('.wrapper').css({"outline":"black solid thick"})

    //changes div to random color when hovered over
    $('.myBox').mouseenter(function(){
        $(this).css({"background-color":randColor()});
     });
    
    //resets all div elements to white
    $('.resetBtn').click(function(){
        reset();
    })

    
});
//generates random color
function randColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

//resets all divs back to white
function reset(){
    $('.myBox').css({"background-color":"white"}); 
}





