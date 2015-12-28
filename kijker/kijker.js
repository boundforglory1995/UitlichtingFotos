
$(document).ready(function(){
    var gebieden = [
        { lnks: 0, bvn: 0, brdt: 841, hgt:700,kromm: 0, tekstId:"allTekst"},// 0 hele foto
        { lnks: 377, bvn: 250, brdt: 127, hgt:446,kromm: 40, tekstId:"basTekst"},// 1 Oom
        { lnks: 489, bvn: 263, brdt: 124, hgt:437,kromm: 50, tekstId:"gianniTekst"},// 2 Gianni
        {lnks: 90, bvn: 227, brdt: 162, hgt:476,kromm: 20, tekstId:"buurmanTekst"},// 3 buurman
        {lnks: 588, bvn: 256, brdt: 164, hgt:448,kromm: 50, tekstId:"vriendTekst"},// 4 vriend van opa
        {lnks: 243, bvn: 253, brdt: 132, hgt:451,kromm: 70, tekstId:"opaTekst"},// 5 opa
        
        
];
    var infoGoesUp = false;
    
    function schuifGebieden(gebiedsObject) {
        //object gereed maken voor acties
        var links = gebiedsObject.lnks + "px";
        var boven = gebiedsObject.bvn + "px";
        var achtergrondPositie = "-" + links + " -" + boven;
        var breedte = gebiedsObject.brdt + "px";
        var hoogte = gebiedsObject.hgt + "px";
        var kromming = gebiedsObject.kromm + "px";
        var idTekst = "#" + gebiedsObject.tekstId;
        
        //#venster animeren(acties)
            $('#window').css("left",links);
           $('#window').css("top",boven);
           $('#window').css("background-position", achtergrondPositie);
           $('#window').css("width",breedte);
           $('#window').css("height",hoogte);
           $('#window').css("border-radius",kromming);
           
           // de juiste tekst selecteren
           selecteerTekst(idTekst);
    }
    
    function selecteerTekst(idVanDiv) {
       $('article div').removeClass("zichtbaar"); 
        $('article div').addClass("onzichtbaar"); 
        $(idVanDiv).removeClass("onzichtbaar"); 
        $(idVanDiv).addClass("zichtbaar");
          bovenkant = 632 - $('div.zichtbaar').height();
          console.log(bovenkant);
          if (infoGoesUp) {
           $('article div').animate({top:bovenkant }, 2000);
       }
        
        
        
        
        }   
    
      // de website opstarten
      $('#holder').css("overflow","hidden");
       schuifGebieden(gebieden[0]);
       var bovenkant = 600;
       
     
      
    
    
    
    
  
    
    
    
    
        $('#hele').click(function(e){
           $('nav a').removeClass("actief");
           $(this).addClass("actief");
           schuifGebieden(gebieden[0]);
           return false;
        
        
        })
    
         $('#oom').click(function(){
            $('nav a').removeClass("actief");
            $(this).addClass("actief");
            schuifGebieden(gebieden[1]);
            return false;
        
        })
         
         
          $('#zelf').click(function(){
            $('nav a').removeClass("actief");
            $(this).addClass("actief");
            schuifGebieden(gebieden[2]);
            return false;
        
        })
          
          $('#buurman').click(function(){
            $('nav a').removeClass("actief");
            $(this).addClass("actief");
            schuifGebieden(gebieden[3]);
            return false;
        
        })
          
           $('#vriend').click(function(){
            $('nav a').removeClass("actief");
            $(this).addClass("actief");
            schuifGebieden(gebieden[4]);
            return false;
        
        })
           
            $('#opa').click(function(){
            $('nav a').removeClass("actief");
            $(this).addClass("actief");
            schuifGebieden(gebieden[5]);
            return false;
        
        })
            
         //---------------------menu centreren--------------------------------- //
         function meetBreedte(elementen) {
         var totaleBreedte = 1;
         elementen.each(function() {
         var elementBreedte = $(this).width();
         totaleBreedte += elementBreedte + 1;
 

      })
         return totaleBreedte;


   }
      var menuBreedte = meetBreedte($('nav li'));
      $('nav ul').css("width",menuBreedte);
//---------------------de info-knop----------------//
    $('#informationButton').click(function(){
        if (infoGoesUp) {
            $('#informationButton').removeClass("geklikt");
            $('article div').animate({top:700 }, 2000);
             infoGoesUp = false; 



          }
          else {
  
          $('#informationButton').addClass("geklikt");
          bovenkant = 632 - $('div.zichtbaar').height();
          console.log(bovenkant);
            $('article div').animate({top:bovenkant }, 2000);
            infoGoesUp = true; 
            
          }
        return false; 
        
    })

    })