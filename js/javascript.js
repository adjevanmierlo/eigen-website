// read more functie op de about 
$(document).ready(function(){
  $('.about-me').hide();
  $(".quote").click(function(){
    $(".quote").toggle();
    $(".about-me").toggle();
  });
$(".about-me").click(function(){
  $(".about-me").toggle();
  $(".quote").toggle();
});
});

// functie om te zien hoe ver de user gescrolled heeft + 
var faceIsVisable = false;
var faceIsVisable1 = false;
var faceIsVisable2 = false;
var changenavcolor = false;
var changenavcolor2 = false;

function pixelsscrolled(){
  var scrollPixels = $(".horizontal-scroll-area").scrollLeft()
   console.log(scrollPixels);
   if ( scrollPixels > 100 && faceIsVisable === false) { // if pixels groter dan 100 
      showpage(); // hier voer ik de functie showpage uit
      faceIsVisable = true;
   } else if ( scrollPixels < 100 && faceIsVisable === true) { // if pixels groter dan 100 
    hidePage(); // hier voer ik de functie showpage uit
    faceIsVisable = false;
   }
   if ( scrollPixels > 1900 && faceIsVisable1 === false) { // if pixels groter dan 100 
    showpage2(); // hier voer ik de functie showpage uit
    faceIsVisable1 = true;
  } else if ( scrollPixels < 1900 && faceIsVisable1 === true) { // if pixels groter dan 100 
  hidePage2(); // hier voer ik de functie showpage uit
  faceIsVisable1 = false;
  }
  if ( scrollPixels > 3300 && faceIsVisable2 === false) { // if pixels groter dan 100 
    showpage3(); // hier voer ik de functie showpage uit
    faceIsVisable2 = true;
  } else if ( scrollPixels < 3300 && faceIsVisable2 === true) { // if pixels groter dan 100 
  hidePage3(); // hier voer ik de functie showpage uit
  faceIsVisable2 = false;
  }
  if ( scrollPixels > 1250 && changenavcolor === false) { // if pixels groter dan 100 
    changenavblack(); // hier voer ik de functie showpage uit
    changenavcolor = true;
  } else if ( scrollPixels < 2000 && changenavcolor === true) { // if pixels groter dan 100 
    changenavwhite(); // hier voer ik de functie showpage uit
  changenavcolor = false;
  }
  if ( scrollPixels > 2500 && changenavcolor2 === false) { // if pixels groter dan 100 
    changenavblack2(); // hier voer ik de functie showpage uit
    changenavcolor2 = true;
  } else if ( scrollPixels < 3900 && changenavcolor2 === true) { // if pixels groter dan 100 
    changenavwhite2(); // hier voer ik de functie showpage uit
  changenavcolor2 = false;
  }
};

// functie die de about page rustig op laat komen
function showpage(){
  document.getElementById('box').classList.add('fade-in');
  console.log(showpage);
  }  

  function hidePage(){
    document.getElementById('box').classList.remove('fade-in');
  console.log(showpage);
  }
 
  // functie die de project page rustig op laat komen
  function showpage2(){
    document.getElementById('box3').classList.add('fade-in');
    console.log(showpage);
    }  
  
    function hidePage2(){
      document.getElementById('box3').classList.remove('fade-in');
    console.log(showpage);
    }

    // functie die de contact page rustig op laat komen
    function showpage3(){
      document.getElementById('box4').classList.add('fade-in');
      console.log(showpage);
      }  
    
      function hidePage3(){
        document.getElementById('box4').classList.remove('fade-in');
      console.log(showpage);
      }

      // functie om denavigatie onscroll te laten veranderen
      function changenavblack(){
        document.getElementById("a1").style.color = "black";
        document.getElementById("a2").style.color = "black";
        document.getElementById("a3").style.color = "black";
        document.getElementById("a4").style.color = "black";
        document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-wit.png)"; // specify the image path here
      }

       // functie om denavigatie onscroll te laten veranderen
      function changenavwhite(){
        document.getElementById("a1").style.color = "white";
        document.getElementById("a2").style.color = "white";
        document.getElementById("a3").style.color = "white";
        document.getElementById("a4").style.color = "white";
        document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-zwart.png)"; // specify the image path here
      }

       // functie om denavigatie onscroll te laten veranderen
      function changenavblack2(){
        document.getElementById("a1").style.color = "black";
        document.getElementById("a2").style.color = "black";
        document.getElementById("a3").style.color = "black";
        document.getElementById("a4").style.color = "black";
        document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-wit.png)"; // specify the image path here
      }

       // functie om denavigatie onscroll te laten veranderen
      function changenavwhite2(){
        document.getElementById("a1").style.color = "white";
        document.getElementById("a2").style.color = "white";
        document.getElementById("a3").style.color = "white";
        document.getElementById("a4").style.color = "white";
        document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-zwart.png)"; // specify the image path here
      }

// stel de index vast 
var index = 0;

/* navbar functie */
function myFunction(){
    var x = document.getElementById("nav");
      if(x.classList.contains("hide") || x.classList.contains("slide-out-left")){
      x.classList.remove("hide");
      x.classList.remove("slide-out-left");
      x.classList.add("slide-in-left");
    } else {
      x.classList.remove("slide-in-left");
      x.classList.add("slide-out-left");
    }
  }

  /* arrow functie */ 
setTimeout(function() { /* functie om 2 animatie tegelijk te laten uitvoeren */
    document.getElementById("js-arrow").classList.remove("slide-in-right");/* hier zeg ik verwijder class slide-in-right */
    document.getElementById("js-arrow").classList.add("shake");   /* hier zeg ik add class shake */
  }, 2000);


// dit is enkel voor de muis scroll 
  //stel de hoogte in op de breedte van de horizontale scroll area
//$('body').css('height', $('.horizontal-scroll-area')[0].clientWidth * $('.item').length + 'px');

//Verticaal scrollen vertalen naar horizontaal scrollen
var prevTop = 0;
$(window).on('scroll', function(){
 
 
  //verkrijg de huidige verticale scroll value
  var currentTop = $(this).scrollTop();
  
  //Ontdek hoeveel de gebruiker heeft gescrolled sinds de vorige keer dat het evenement werd gebruikt
  var amountScrolled = currentTop - prevTop;
 
  
  //voeg deze waarde toe aan de huidige waarde van de horizontale area value
  var horizontalScrollArea = $('.horizontal-scroll-area');
  
  //zet nieuwe scroll value
  $('.horizontal-scroll-area').scrollLeft($('.horizontal-scroll-area').scrollLeft() +  amountScrolled);
  
  //update vorige scroll
  prevTop = currentTop;
 
})


// stel de index vast 
var index = 0;
// javascript imageslider */
function changeProject(){ 
  var array=["img/pr1.png", "img/pr2.png", "img/pr3.png", "img/pr4.png", "img/pr5.png", "img/pr6.png", "img/pr7.png"]; // array met mijn project image's 
  document.getElementById('img');
  var textArray = ["after", "asoijd asoidas", "saoijsadoiasd", "aosidjsad", "asadahsoidaom",  "oasidbsiduhad", "iuahsdhu"];
  document.getElementById('tekst');
  index++;
  if(index > array.length-1){
    // console.log(array.length)
    index = 0;
  }
  document.getElementById("img").classList.remove("scale-in-project");
  setTimeout(function() {  // functie om 2 animatie tegelijk te laten uitvoeren 
    document.getElementById('foto').src = array[index];
    document.getElementById("img").classList.add("scale-in-project");
  }, 100);  // het aantal seconden voordat project2 tevoorschijn komt 
}




// verander innerHTML van element.

// naar => 


