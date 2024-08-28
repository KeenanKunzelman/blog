document.querySelector('main').addEventListener('click', () => {
var small_win_size = window.matchMedia("(max-width: 600px")
if (small_win_size.matches && navs[0].style.visibility === "visible"){
      navs[0].style.visibility = "hidden";
      document.querySelector('main').style.paddingTop = "1rem";

}});

document.querySelector('.fa-bars').addEventListener('click', () => {


  var navs = document.getElementsByClassName('navbar-nav');
  
  if (navs[0].style.visibility === "visible"){

    for (var i = 0; i < navs.length; ++i) {
      navs[i].style.visibility = "hidden";
      document.querySelector('main').style.paddingTop = "1rem";
    }
  }else{
    for (var i = 0; i < navs.length; ++i) {
      navs[i].style.backgroundColor = "#23232e";
      navs[i].style.visibility = "visible";

    }
    document.querySelector('main').style.paddingTop = "6.5rem";
  }





});


var navs = document.getElementsByClassName('navbar-nav');
var large_win_size = window.matchMedia("(min-width: 601px")
large_win_size.addEventListener("change", function() {
if (large_win_size.matches ){
      navs[0].style.visibility = "visible";

}
}); 


var small_win_size = window.matchMedia("(max-width: 600px")
small_win_size.addEventListener("change", function() {
if (small_win_size.matches && navs[0].style.visibility === "visible"){
      navs[0].style.visibility = "hidden";

}


}); 




//function scrollFunction() {
//var small_win_size = window.matchMedia("(max-width: 600px")
//if (small_win_size.matches && navs[0].style.visibility === "visible"){
//      navs[0].style.visibility = "hidden";
//      document.querySelector('main').style.paddingTop = "1rem";
//}
//
//    // do your stuff here;
//}
//
//window.onscroll = scrollFunction;

