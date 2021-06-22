var verbs = ["γράψιμο", "βάψιμο", "τρέξιμο", "ντύσιμο", "κρέας", "γάλα", "δόρυ", "γεγονός", "καθεστώς", "συμβάν", "παν", "σύμπαν", "φως", "δάκρυ", "βράδυ", "μηδέν", "φωνήεν", "πρωί", "οξύ"];

var ousiastiko = {ellinika:"γράψιμο", english:"writing."};
var ousiastiko1 = {ellinika:"βάψιμο", english:"painting (walls)."};
var ousiastiko2 = {ellinika:"τρέξιμο", english:"running. Η αγαπημένη μας λέξη!"};
var ousiastiko3 = {ellinika:"ντύσιμο", english:"formal suit."};
var ousiastiko4 = {ellinika:"κρέας", english:"meat."};
var ousiastiko5 = {ellinika:"γάλα", english:"milk."};
var ousiastiko6 = {ellinika:"δόρυ", english:"spear. 'Hasta, hasta'στα Λατινικά!"};
var ousiastiko7 = {ellinika:"γεγονός", english:"incident, event, fact."};
var ousiastiko8 = {ellinika:"καθεστώς", english:"regime."};
var ousiastiko9 = {ellinika:"συμβάν", english:"incident."};
var ousiastiko10 = {ellinika:"παν", english:"everything."};
var ousiastiko11 = {ellinika:"σύμπαν", english:"the Universe."};
var ousiastiko12 = {ellinika:"φως", english:"light."};
var ousiastiko13 = {ellinika:"δάκρυ", english:"tear."};
var ousiastiko14 = {ellinika:"βράδυ", english:"evening. In Greece form 8pm till midnight!!!"};
var ousiastiko15 = {ellinika:"μηδέν", english:"zero."};
var ousiastiko16 = {ellinika:"φωνήεν", english:"vowel."};
var ousiastiko17 = {ellinika:"πρωί", english:"morning."};
var ousiastiko18 = {ellinika:"οξύ", english:"acid."};

function randGen() {
  return Math.floor(Math.random() * 5);
}

function autoFill() {
  var rand3 = Math.floor(Math.random() * verbs.length);
  var content = verbs[rand3] 
  document.getElementById('input1').value = content;

  if ( content === ousiastiko.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko.ellinika + " στα αγγλικά είναι: " + ousiastiko.english;
  }

  else if (content === ousiastiko1.ellinika){
    document.getElementById("input2").innerHTML = "- " + ousiastiko1.ellinika + " στα αγγλικά είναι: " + ousiastiko1.english;
  }

  else if (content === ousiastiko2.ellinika){
    document.getElementById("input2").innerHTML = "- " + ousiastiko2.ellinika + " στα αγγλικά είναι: " + ousiastiko2.english;
  }

  else if ( content === ousiastiko3.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko3.ellinika + " στα αγγλικά είναι: " + ousiastiko3.english;
  }

  else if ( content === ousiastiko4.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko4.ellinika + " στα αγγλικά είναι: " + ousiastiko4.english;
  }

  else if ( content === ousiastiko5.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko5.ellinika + " στα αγγλικά είναι: " + ousiastiko5.english;
  }

  else if ( content === ousiastiko6.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko6.ellinika + " στα αγγλικά είναι: " + ousiastiko6.english;
  }

  else if( content === ousiastiko7.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko7.ellinika + " στα αγγλικά είναι: " + ousiastiko7.english;
  }

  else if ( content === ousiastiko8.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko8.ellinika + " στα αγγλικά είναι: " + ousiastiko8.english;
  }

  else if( content === ousiastiko9.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko9.ellinika + " στα αγγλικά είναι: " + ousiastiko9.english;
  }

  else if ( content === ousiastiko10.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko10.ellinika + " στα αγγλικά είναι: " + ousiastiko10.english;
  }

  else if( content === ousiastiko11.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko11.ellinika + " στα αγγλικά είναι: " + ousiastiko11.english;
  }

  else if ( content === ousiastiko12.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko12.ellinika + " στα αγγλικά είναι: " + ousiastiko12.english;
  }

  else if ( content === ousiastiko13.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko13.ellinika + " στα αγγλικά είναι: " + ousiastiko13.english;
  }

  else if ( content === ousiastiko14.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko14.ellinika + " στα αγγλικά είναι: " + ousiastiko14.english;
  }

  else if ( content === ousiastiko15.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko15.ellinika + " στα αγγλικά είναι: " + ousiastiko15.english;
  }

  else if ( content === ousiastiko16.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko16.ellinika + " στα αγγλικά είναι: " + ousiastiko16.english;
  }

  else if ( content === ousiastiko17.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko17.ellinika + " στα αγγλικά είναι: " + ousiastiko17.english;
  }

  else if ( content === ousiastiko18.ellinika ) {
    document.getElementById("input2").innerHTML = "- " + ousiastiko18.ellinika + " στα αγγλικά είναι: " + ousiastiko18.english;
  }

  else {
    document.getElementById("input2").innerHTML = "Κρίμα, δεν το βρήκαμε!"
  }
}

function myFunction() {
  var noun = document.getElementById("input1").value;
  var x = noun.replace(/ά/, "α").replace(/έ/, "ε").replace(/ή/, "η").replace(/ί/,"ι").replace(/ό/, "ο").replace(/ύ/, "υ").replace(/ώ/, "ω").replace(/Ά/, "Α").replace(/Έ/, "Ε").replace(/Ή/, "Η").replace(/Ί/, "Ι").replace(/Ό/, "Ο").replace(/Ύ/, "Υ").replace(/Ώ/, "Ω").replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/g,"");
  var declension;

  if (noun === "γράψιμο" || noun === "βάψιμο" || noun === "τρέξιμο" || noun === "ντύσιμο") {

    declension = "το " + noun + ".";
    declension1 = "του " + x.slice(0, -3) + "ίματος.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + x.slice(0, -3) + "ίματα.";
    declension5 = "των " + x.slice(0, -1) + "άτων.";
    declension6 = "τα " + x.slice(0, -3) + "ίματα.";
    declension7 = x.slice(0, -3) + "ίματα!";
  }

  else if (noun === "κρέας"){
    declension = "το " + noun + ".";
    declension1 = "του " + noun.slice(0, -1) + "τος.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + noun.slice(0, -1) + "τα.";
    declension5 = "των " + x.slice(0, -2) + "άτων.";
    declension6 = "τα " + noun.slice(0, -1) + "τα.";
    declension7 = noun.slice(0, -1) + "τα!";
  }

  else if (noun === "γάλα" || noun === "δόρυ"){
    declension = "το " + noun + ".";
    declension1 = "του " + noun.slice(0,-1) + "ατος.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + noun.slice(0,-1) + "ατα.";
    declension5 = "των " + x.slice(0, -1) + "άτων.";
    declension6 = "τα " + noun.slice(0,-1) + "ατα.";
    declension7 = noun.slice(0,-1) + "ατα!";
  }

  else if (noun === "γεγονός" || noun === "καθεστώς"){
    declension = "το " + noun + ".";
    declension1 = "του " + noun.slice(0,-1) + "τος.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + noun.slice(0,-1) + "τα.";
    declension5 = "των " + noun.slice(0, -1) + "των.";
    declension6 = "τα " + noun.slice(0,-1) + "τα.";
    declension7 = noun.slice(0,-1) + "τα!";
  }

  else if (noun === "συμβάν" || noun === "σύμπαν"){
    declension = "το " + noun + ".";
    declension1 = "του " + noun + "τος.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + noun + "τα.";
    declension5 = "των " + x.slice(0,-2) + "άντων.";
    declension6 = "τα " + noun + "τα.";
    declension7 = noun + "τα!";
  }

  else if (noun === "παν"){
    declension = "το " + noun + ".";
    declension1 = "του παντός.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα πάντα.";
    declension5 = "των πάντων.";
    declension6 = "τα πάντατα.";
    declension7 = "Κλιτική: πάντατα!";
  }

  else if (noun === "φως"){
    declension = "το " + noun + ".";
    declension1 = "του " + noun.slice(0,-1) + "τός.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + noun.slice(0,-2) + "ώτα.";
    declension5 = "των " + noun.slice(0,-2) + "ώτων.";
    declension6 = "τα " + noun.slice(0,-2) + "ώτα.";
    declension7 = noun.slice(0,-2) + "ώτα!";
  }

  else if (noun === "δάκρυ"){
    declension = "το " + noun + ".";
    declension1 = "- ";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + noun + "α.";
    declension5 = "των " + x.slice(0,-1) + "ύων.";
    declension6 = "τα " + noun + "α.";
    declension7 = noun + "α!";
  }

  else if (noun === "βράδυ"){
    declension = "το " + noun + ".";
    declension1 = "του " + x.slice(0,-1) + "ιού.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + noun.slice(0,-1) + "ια.";
    declension5 = "των " + x.slice(0,-1) + "ιών.";
    declension6 = "τα " + noun.slice(0,-1) + "ια.";
    declension7 = noun.slice(0,-1) + "ια!";
  }

  else if (noun === "μηδέν"){
    declension = "το " + noun + ".";
    declension1 = "του " + x + "ός.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + x + "ικά.";
    declension5 = "των " + x + "ικών.";
    declension6 = "τα " + x + "ικά.";
    declension7 = x + "ικά!";
  }

  else if (noun === "φωνήεν"){
    declension = "το " + noun + ".";
    declension1 = "του " + noun + "τος.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + noun + "τα.";
    declension5 = "των " + x.slice(0,-2) + "έντων.";
    declension6 = "τα " + noun + "τα.";
    declension7 = noun + "τα!";
  }

  else if (noun === "πρωί"){
    declension = "το " + noun + ".";
    declension1 = "του " + x + "νού.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + x + "νά.";
    declension5 = "των " + x + "νών.";
    declension6 = "τα " + x + "νά.";
    declension7 = x + "νά!";
  }

  else if (noun === "οξύ"){
    declension = "το " + noun + ".";
    declension1 = "του " + x.slice(0,-1) + "έος.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + x.slice(0,-1) + "έα.";
    declension5 = "των " + x.slice(0,-1) + "έων.";
    declension6 = "τα " + x.slice(0,-1) + "έα.";
    declension7 = x + "νά!";
  }

  else if (noun === "οξύ"){
    declension = "το " + noun + ".";
    declension1 = "του " + x.slice(0,-1) + "έος.";
    declension2 = "το " + noun + ".";
    declension3 = noun + "!";
    declension4 = "τα " + x.slice(0,-1) + "έα.";
    declension5 = "των " + x.slice(0,-1) + "έων.";
    declension6 = "τα " + x.slice(0,-1) + "έα.";
    declension7 = x + "νά!";
  }

  else {
    declension = "Ονομαστική";
    declension1 = "Γενική";
    declension2 = "Αιτιατική";
    declension3 = "Κλιτική";
    declension4 = "Ονομαστική";
    declension5 = "Γενική";
    declension6 = "Αιτιατική";
    declension7 = "Κλιτική";
  }

  document.getElementById("demo").innerHTML = declension;
  document.getElementById("demo1").innerHTML = declension1;
  document.getElementById("demo2").innerHTML = declension2;
  document.getElementById("demo3").innerHTML = declension3;
  document.getElementById("demo4").innerHTML = declension4;
  document.getElementById("demo5").innerHTML = declension5;
  document.getElementById("demo6").innerHTML = declension6;
  document.getElementById("demo7").innerHTML = declension7;

  console.clear();
}

