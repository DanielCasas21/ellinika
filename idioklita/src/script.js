var verbs = ["γράψιμο", "βάψιμο", "τρέξιμο", "ντύσιμο", "κρέας", "γάλα", "δόρυ", "γεγονός", "καθεστώς", "συμβάν", "παν", "σύμπαν", "φως", "δάκρυ", "βράδυ", "μηδέν", "φωνήεν", "πρωί", "οξύ"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function autoFill() {
  var rand3 = Math.floor(Math.random() * verbs.length);
  var content = verbs[rand3] 
  document.getElementById('input1').value = content;
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

