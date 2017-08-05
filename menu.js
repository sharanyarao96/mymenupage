function openMenu(evt, menuName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
}
function myFunction() {
    var x = document.getElementById("myTopnav");

    /*if (x.className === "container") {*/
        x.className += " responsive";
    /*} else {
        x.className = "container";
    }
    /*document.getElementById("myTopnav").style.width = "100%";*/
}
function closeNav(){
    var x = document.getElementById("myTopnav");
        x.className = "container";
} 
$(".content a").click(function(e) {
   //do something
   e.stopPropagation();
})
/*window.addEventListener("DOMContentLoaded", function(){
   btn = document.getElementById("btnShowHide");
   dd = document.getElementById("myDropdown");

   btn.addEventListener("click", showHide);
   window.addEventListener("click", hide);

});*/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*function showHide(evt) {
    //evt.preventDefault();  // Cancel the native click event
    evt.stopPropagation(); // Stop the event from propagating up to window
    
    // You used "toggle", not "toggleClass"
   // $(dd).toggleClass("dropdown-content");
    $(dd).toggleClass("show");
}*/

/*function hide(){
    // We don't want to toggle here because multiple clicks on the window
    // will re-show previously hidden content. Here, we just hide what needs
    // to be hidden.
    $(dd).removeClass("show").addClass("dropdown-content");
}*/