
document.querySelector('.fa-bars').addEventListener('click', () => {


  var navs = document.getElementsByClassName('navbar-nav');
  
  if (navs[0].style.visibility === "visible"){

    for (var i = 0; i < navs.length; ++i) {
      navs[i].style.visibility = "hidden";

    }
  }else{
    for (var i = 0; i < navs.length; ++i) {
      navs[i].style.backgroundColor = "#23232e";
      navs[i].style.visibility = "visible";

    }
    document.querySelector('main').style.paddingTop = "6.5rem";
  }




  setTimeout(function(){
  document.querySelector('.fa-bars').classList.toggle('fa-flip');
  },500);

  document.querySelector('.fa-bars').classList.toggle('fa-flip');

});


