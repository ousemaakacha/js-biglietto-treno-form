console.log("biglietto treno chuchuuu");

// inizioa dichiarare le costanti utilizzando il getelem
const generaBtn = document.getElementById("genera");
const annullaBtn = document.getElementById("annulla");

// aggiungo const per il div contente la tabella
const ticketDiv = document.getElementById("ticket");

// comincio a formulare il event listener per il genaraBtn

generaBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // all'interno inizio a scrivere la funzione inizializzata da =>
  const name = document.getElementById("name").value;
  const km = document.getElementById("Km").value;
  const age = document.getElementById("age").value;

  //  inizio  a calcolare il prezzo base
  let price = km * 0.21;
  let ticketType = "Biglietto standard";

  //   inizio a scrivere codice condizionale per gli sconti
  if (age === "minorenne") {
    price *= 0.8;
    ticketType = "SConto 20% per minorenni";
  } else if (age === "over65") {
    price *= 0.6;
    ticketType = "sconto 40% over 65";
  }

  /* -- da qua in poi inizio il codice per la visulizzazione dek biglietto -- */

  //   inizio con la creazione di valori random sia per la numero carzzo che per il codice
  const wagon = Math.floor(Math.random() * 7) + 1;
  const codeCP = Math.floor(Math.random() * 50000) + 10000;

  //  comincio a stampre gli output
  document.getElementById("person").textContent = name;
  document.getElementById("ticketType").textContent = ticketType;
  document.getElementById("wagon").textContent = wagon;
  document.getElementById("codeCP").textContent = codeCP;
  document.getElementById("price").textContent = price.toFixed(2);

  ticketDiv.style.display = "block";
});

annullaBtn.addEventListener("click", () => {
  document.getElementById("ticketForm").reset();
  ticketDiv.style.display = "none";
});
