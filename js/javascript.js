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
var changenavcolor3 = false;

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
        document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-wit.png)"; 
      }

       // functie om denavigatie onscroll te laten veranderen
      function changenavwhite2(){
        document.getElementById("a1").style.color = "white";
        document.getElementById("a2").style.color = "white";
        document.getElementById("a3").style.color = "white";
        document.getElementById("a4").style.color = "white";
        document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-zwart.png)"; 
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
  var textArray=[
    "<h4>1e project</h4> Dit is mijn eerste project welke ik gemaakt heb tijdens de Hackaton van CodeGorilla te breda.<br> De opdracht was om statushouders makkelijker te laten opnemen in de samenleving.<br>Voor deze opdracht dacht ik om de eenzame ouderen erbij te betrekken zodat niet<br> enkel de statushouders geholpen worden maar ook gelijk de eenzame ouderen.<br>Het concept was dat statushouders in contact konden komen met de ouderen zodatze iets leren over de geschiedenis van Nederland, ook kunnen ze<br>gezamelijk een boodschap doen of een uitje zodat ze social naar elkaar toe getrokken worden.<br>", 
    "<h4>2e project</h4> Dit is mijn tweede project welke ik gemaakt heb tijdens de bootcamp van CodeGorilla te breda.<br> De opdracht was om een portfolio te maken waarop je kunt laten zien wat je tot nu toe geleerd hebt tijdens de thuisstudie.<br>Er moest gebruik worden gemaakt van een grid en omdat ik de projecten wou gebruiken die ik laat zien heb ik deze in een iframe gestopt.<br>Ik heb gekozen voor grijstinten om het rustig te houden en besloten om een clean en overzichtelijk portfolio te maken.<br>",
    "<h4>3e project</h4> Dit is mijn derde project welke ik gemaakt heb tijdens de bootcamp van CodeGorilla te breda.<br> De opdracht was om een webshop maken en hierbij gebruik te maken van php zodat de pruducten dynamisch ingeladen kunnen worden.<br>Ook heb ik gebruikt gemaakt van bootstrap en heb ik er voor gezorgd dat er middels php gefilterd kan worden.<br>",
    "<h4>4e project</h4> Dit is mijn vierde project welke ik gemaakt heb tijdens de bootcamp van CodeGorilla te breda.<br> De opdracht was om een webshop maken en hierbij gebruik te maken van php zodat de pruducten dynamisch ingeladen kunnen worden.<br>Ook heb ik gebruikt gemaakt van horizontalscroll en heb ik er voor gezorgd dat er middels php gefilterd kan worden, je producten kon plaatsen in een winkelwagen welke automatisch geupdate word.<br>", 
    "<h4>5e project</h4> Dit is mijn vijfde project welke ik gemaakt heb tijdens de bootcamp van CodeGorilla te breda.<br> De opdracht was om genruik te maken van bootstrap en een api.<br>Ik heb gekozen om een website te maken die een cruise verkoopt en voor de api heb ik gebruikt van een weather api.<br>Deze heb ik middels een mooi product (weerkaartje) kunnen weergeven.<br>", 
    "<h4>6e project</h4> Dit is mijn zesde project <br> welke ik gemaakt heb tijdens <br> de bootcamp van CodeGorilla <br> te breda.<br> De opdracht was om een pwa <br> te maken. <br> Ik heb er voor gekozen om <br> voor mijn dochter een pwa <br> te maken waarmee een- <br> voudige sommetjes <br> en woordjes kon leren.", 
    "<h4>7e project</h4> Dit is mijn zevende <br> project welke ik ge- <br> maakt heb tijdens de <br> bootcamp van Code- <br> Gorilla te breda.<br> De opdracht was om <br> in een groep een zelf <br> gekozen idee te ma- <br> ken.Wij hebben geko- <br> zen om een app te <br> maken tegen voedel <br> verspilling.",
  ];

  index++;
  if(index > array.length-1){
    // console.log(array.length)
    index = 0;
  }
  document.getElementById("img").classList.remove("scale-in-project");
  setTimeout(function() {  // functie om 2 animatie tegelijk te laten uitvoeren 
    document.getElementById('foto').src = array[index];
    document.getElementById('tekst').innerHTML = textArray[index];
    // document.getElementById('tekst').setAttribute("style","width:43%");
    document.getElementById("img").classList.add("scale-in-project");
  }, 100);  // het aantal seconden voordat project2 tevoorschijn komt 
  if (index === 5){
    document.getElementById('tekst').setAttribute("style","width:57.3%");
  }else if (index === 6){
   document.getElementById('tekst').setAttribute("style","width:43%");
  } else
    document.getElementById('tekst').setAttribute("style","width:100%");
  };


  if (matchMedia('only screen and (max-width: 1024px)').matches) {
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
       if ( scrollPixels > 1180 && faceIsVisable1 === false) { // if pixels groter dan 100 
        showpage2(); // hier voer ik de functie showpage uit
        faceIsVisable1 = true;
      } else if ( scrollPixels < 1180 && faceIsVisable1 === true) { // if pixels groter dan 100 
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
      if ( scrollPixels > 106 && changenavcolor === false) { // if pixels groter dan 100 
        changenavblack(); // hier voer ik de functie showpage uit
        changenavcolor = true;
      } else if ( scrollPixels < 885 && changenavcolor === true) { // if pixels groter dan 100 
        changenavwhite(); // hier voer ik de functie showpage uit
      changenavcolor = false;
      }if ( scrollPixels > 1100 && changenavcolor2 === false) { // if pixels groter dan 100 
        changenavblack2(); // hier voer ik de functie showpage uit
        changenavcolor2 = true;
      } else if ( scrollPixels < 2040 && changenavcolor2 === true) { // if pixels groter dan 100 
        changenavwhite2(); // hier voer ik de functie showpage uit
      changenavcolor2 = false;
      }
      if ( scrollPixels > 2139 && changenavcolor3 === false) { // if pixels groter dan 100 
        changenavblack3(); // hier voer ik de functie showpage uit
        changenavcolor3 = true;
      } else if ( scrollPixels < 3074 && changenavcolor3 === true) { // if pixels groter dan 100 
        changenavwhite3(); // hier voer ik de functie showpage uit
      changenavcolor3 = false;
      }
    };

    function changenavblack(){
      document.getElementById("a1").style.color = "black";
      document.getElementById("a2").style.color = "black";
      document.getElementById("a3").style.color = "black";
      document.getElementById("a4").style.color = "black";
      document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-zwart.png)"; // specify the image path here
    }

     // functie om denavigatie onscroll te laten veranderen
    function changenavwhite(){
      document.getElementById("a1").style.color = "white";
      document.getElementById("a2").style.color = "white";
      document.getElementById("a3").style.color = "white";
      document.getElementById("a4").style.color = "white";
      document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-wit.png)"; // specify the image path here
    }

     // functie om denavigatie onscroll te laten veranderen
    function changenavblack2(){
      document.getElementById("a1").style.color = "white";
      document.getElementById("a2").style.color = "white";
      document.getElementById("a3").style.color = "white";
      document.getElementById("a4").style.color = "white";
      document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-wit.png)"; 
    }

     // functie om denavigatie onscroll te laten veranderen
    function changenavwhite2(){
      document.getElementById("a1").style.color = "black";
      document.getElementById("a2").style.color = "black";
      document.getElementById("a3").style.color = "black";
      document.getElementById("a4").style.color = "black";
      document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-zwart.png)"; 
  }
  function changenavblack3(){
    document.getElementById("a1").style.color = "black";
    document.getElementById("a2").style.color = "black";
    document.getElementById("a3").style.color = "black";
    document.getElementById("a4").style.color = "black";
    document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-zwart.png)"; 
  }

   // functie om denavigatie onscroll te laten veranderen
  function changenavwhite3(){
    document.getElementById("a1").style.color = "white";
    document.getElementById("a2").style.color = "white";
    document.getElementById("a3").style.color = "white";
    document.getElementById("a4").style.color = "white";
    document.getElementById('change-hamburger').style.backgroundImage="url(img/menu-wit.png)"; 

}
  }
