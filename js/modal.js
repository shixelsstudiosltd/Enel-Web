
$(document).ready(function(){
    $("#LoginBtn").click(function(){
        $("#LoginModal").modal();
    });
});


$(document).ready(function(){
    $("#RegBtn").click(function(){
        $("#RegModal").modal();
    });
});

$(document).on("click",".reg-modal-up",function(){
  $('#LoginModal').modal('hide');
  $('#RegModal').modal('show');
});

$(document).on("click",".login-modal-up",function(){
  $('#RegModal').modal('hide');
  $('#LoginModal').modal('show');
});


// For slide_toggle : On Landing Page
$(document).ready(function(){
    $("#hide").click(function(){
        $("PastNum-holder_Five_Star").hide();
    });
    $("#show").click(function(){
        $("PastNum-holder_Six_Star").show();
    });
});





// Confirmation Ticket modal

// $(document).ready(function(){
//     $("#ConfirmBtn").click(function(){
//         $("#ConfirmModal").modal();
//     });
// });

