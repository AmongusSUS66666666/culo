function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}

async function myAsyncFunction() {
  
  
  var quoteArray = ["Semana 2"];
  var index = 0;
  var textPosition = 0;

  typewriter = () => {
    document.querySelector("#mensaje_inicio_dos").innerHTML =
      quoteArray[index].substring(0, textPosition) + "<span>\u25AE</span>";

    if (textPosition++ != quoteArray[index].length) {
      setTimeout("typewriter()", 120);
    }
  };
  window.addEventListener("load", typewriter);



  await delay(1.6);
  document.querySelector("#mensaje_inicio_dos span").innerHTML = "";
  
  await delay(0.25);
  
  document.querySelector("#mensaje_inicio_tres span").innerHTML = "<span>\u25AE</span>";
  
  await delay(1.4);
  
  
  var quoteArray2 = ["Aspirante"];
  var index2 = 0;
  var textPosition2 = 0;

  typewriter2 = () => {
        
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      quoteArray2[index2].substring(0, textPosition2) + "<span>\u25AE</span>";

    if (textPosition2++ != quoteArray2[index2].length) {
      setTimeout("typewriter2()", 100);
    }
  };

  typewriter2();

  await delay(2.5);
  
       
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      "Aspirant" + "<span>\u25AE</span>";
  
  await delay(0.05);
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      "Aspiran" + "<span>\u25AE</span>";
  await delay(0.05);
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      "Aspira" + "<span>\u25AE</span>";
   await delay(0.05);
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      "Aspir" + "<span>\u25AE</span>";
  await delay(0.05);
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      "Aspi" + "<span>\u25AE</span>";
  await delay(0.05);
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      "Asp" + "<span>\u25AE</span>";
  await delay(0.05);
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      "As" + "<span>\u25AE</span>";
  await delay(0.05);
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      "A" + "<span>\u25AE</span>";
  await delay(0.05);
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      "" + "<span>\u25AE</span>";

  
  await delay(1);

  var quoteArray3 = ["Ciencias Básicas e Ingenierías"];
  var index3 = 0;
  var textPosition3 = 0;

  typewriter3 = () => {
    document.querySelector("#mensaje_inicio_tres").innerHTML =
      quoteArray3[index3].substring(0, textPosition3) + "<span>\u25AE</span>";

    if (textPosition3++ != quoteArray3[index3].length) {
      setTimeout("typewriter3()", 100);
    }
  };

  typewriter3();
}

myAsyncFunction();
