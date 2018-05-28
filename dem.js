function ads()
{


    $("#cc").clone().appendTo("#cr")
    var p1 = prompt("enter src user image")
    $("#dk").attr("src",p1)
    var p2 = prompt("enter your name")
    $("#ds").text(p2)
    var p3 = prompt("description")
    $("#di").text(p3)
    var p4 = prompt("enter ulr for user image")
    $("#cs").css("background-image","url("+p4+")")

   
}

function rotate1()
 {
// //$("#ss").rotate(45);
for(var i=0;i<10;i++)
{
$("#ss").css({
    '-webkit-transform':'rotate('+90+'deg)', 
    '-moz-transform':'rotate('+90+'deg)',
    'transform':'rotate('+90+'deg)'
    });
}


 }
 /*
function rotateImage(degree) {
    $('#ss').animate({ transform: degree }, {
    step: function(now,fx) {
    $(this).css({
    '-webkit-transform':'rotate('+now+'deg)', 
    '-moz-transform':'rotate('+now+'deg)',
    'transform':'rotate('+now+'deg)'
    });
    }
    });
    }*/