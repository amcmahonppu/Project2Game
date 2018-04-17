var charactercreation = $(function(){

  var strength = 5;
  var attack = 5;
  var defense = 5;
  var magic = 5;
  var name = "";

  $("#slider3").slider({
    max: 20,
    min: 5,
    step: 1,
    change: function( event, ui ){
      $("#s3").html(ui.value);
      var tmpstrength = ui.value;
    }
  });


  function setStrength(str){
    var strength = str;
  }
// if above 35 update the slider so that the slider value is not higher than 35
console.log(strength);

  $("#slider4").slider({
    max: 20,
    min: 5,
    step: 1,
    change: function( event, ui ) {
      var tmpattack = ui.value
      $("#s4").html(ui.value);
    }
  });

  $("#slider5").slider({
    max: 20,
    min: 5,
    step: 1,
    change: function( event, ui ){
      $("#s5").html(ui.value);
      var tmpdefence = ui.value;
    }
  });

  $("#slider6").slider({
    max: 20,
    min: 5,
    step: 1,
    change: function( event, ui ){
      $("#s6").html(ui.value);
      var tmpmagic = ui.value;
    }
  });
  
function setName(string){
  var name = string;
}

function listen(cb) {
    listeners.push(cb);
}
function notify() {
    for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
    }
}


  return {
      name: name
  };

});
