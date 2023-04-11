// Adding event listener to get user input and opening the second page
// when either submit button pressed or enter keyword pressed

document.querySelector("form").addEventListener("submit",(e) => {

    window.arrivalDate = document.getElementById("arrivalDate").value;
    window.departureDate = document.getElementById("DepartureDate").value;
    window.age = document.getElementById("Age").value;
    window.isStudent = document.getElementById("isStudent").value;


    e.preventDefault();

    const arrivalDateObject = new Date(arrivalDate);
    const departureDateObject = new Date(departureDate);

    if(arrivalDateObject > departureDateObject){
      $("form").before("<h6><b>Warning : Arrival Date cannot be at a later date than Departure!</b></h6>");
      $("h6").css("color","red");
      var widthMatcher = window.matchMedia("(max-width: 575px)")
      if(widthMatcher.matches){
        $("h6").css("font-size","2em");
        $(".SubmitButton").css("top","30px")
      }

    }
    else{
      location.href = "data_page/data.html";
    }
});
