console.log("biglietto treno chuchuuu");

// inizioa dichiarare le costanti utilizzando il getelem
const generaBtn = document.getElementById("genera");
const annullaBtn = document.getElementById("annulla");

// comincio a formulare il event listener per il genaraBtn

generaBtn.addEventListener("click", () => {
  // all'interno inizio a scrivere la funzione inizializzata da =>
  const name = document.getElementById("name").value;
  const km = document.getElementById("numberKm").value;
  const age = document.getElementById("age").value;

  //  inizio  a calcolare il prezzo base
  let price = km * 0.21;
  let ticket_type = "Biglietto standard";

  //   inizio a scrivere codice condizionale per gli sconti
  if (age === "minorenne") {
    price * 0.8;
    ticket_type = "SConto 20% per minorenni";
  } else if (age === "over65") {
    price * 0.6;
    ticket_type = "sconto 40% over 65";
  }
});
