/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
-Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
-Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while */

/* Tools:
-array
-variabili
-ciclo while
*/

//creo la mia array
const listaSpesa = ["latte", "uova", "legumi", "pasta", "yogurt"];

//inizializziamo le variabili
let i = 0;
let spesa = "";

//ciclo while
while (i < listaSpesa.length) {
  spesa += " <br>La mia lista della spesa è: " + listaSpesa[i];
  i++; //incremento il contatore (che va alla fine)
}

//stampo in pagina
document.getElementById("lista").innerHTML = spesa;
