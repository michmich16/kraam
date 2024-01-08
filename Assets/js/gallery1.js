// GALLERY
let imgCont = document.querySelectorAll(".gallery-1-images");
let imgCon = document.querySelector("#imgLarge");

// KIGGER EFTER "CONTAINERE" MED CLASS: ".gallery_content" (VARIABLEN: "imgCont").
imgCont.forEach((cont) => {
    //KIGGER PÅ ALLE BILLEDER I CONTAINERE MED CLASS: "gallery_content":
    let contImg = cont.querySelectorAll("img");
  
    contImg.forEach((e) => {
      // "LYTTER" EFTER "CLICK-EVENTET"
      e.addEventListener("click", () => {
        // SKIFTER "SOURCE" PÅ #imgLarge TIL DEN STI DER ER PÅ CLICKEVENTET:
        imgCon.src = e.src;
      });
    });
  });
  