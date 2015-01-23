var onload = {
	eventListeners: function(){
		$(".filter").on("click", this.setFilter);
		$(".display").on("click", this.setDisplay);
	  $(".weight").on("click", this.setWeight);
	  $(".filter-form, .weight-form").find("input[type=submit]").on("click", this.setForm);
	  $("#state-filter").on("change", this.setForm);
	  $("#close-button").on("click", function(e){
	    e.preventDefault();
	    $("#about").slideToggle(600);
	  });
	  $(".nav-button").on("click", function(e){
	    e.preventDefault();
	    var id = this.id;
	    updatePage(id);
	  });
	  $("#program").on("click", ".top", function(){
	    window.scrollTo(0, 0);
	  });
	},
	setFilter: function(e){
		e.preventDefault();
    var filter = detectFilter();
    var display = detectDisplay();
    var weight = detectWeight();
    $("button").removeClass("weight-type");
    $(".filter-form, .weight-form").hide();
    if (this.id != filter){
      $("button").removeClass("filter-type");
      $(this).addClass("filter-type");
    };
    if (display != "graph-display" && 
    this.id != "usPop-filter"){
      $(this).next("form").show();
    };
    updateDisplay[display]();
	},
	setDisplay: function(e){
		e.preventDefault();
    var display = detectDisplay();
    if (this.id != display){
      $("button").removeClass("display-type weight-type");
      $(".filter-form, .weight-form").hide();
      $(this).addClass("display-type");
      updateDisplay[this.id]();
    };
	},
	setWeight: function(e){
		e.preventDefault();
    var weight = detectWeight();
    var display = detectDisplay();
    $(".weight-form").hide();
    if (this.id === weight){
      $("button").removeClass("weight-type");
    } else {
      $("button").removeClass("weight-type");
      $(this).addClass("weight-type");
      if (display != "graph-display" && 
      this.id != "usPop-weight"){
        $(this).next("form").show();
      };
    };
    updateDisplay[display]();
	},
	setForm: function(e){
		e.preventDefault();
    var display = detectDisplay();
    updateDisplay[display]();
	}
};
