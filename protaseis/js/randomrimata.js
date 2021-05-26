var firstSingular, secondSingular, thirdSingular, verbsFirstSingular, verbsSecondSingular, verbsThirdSingular, 
verbsFirstPlural, verbsSecondPlural, verbsThirdPlural, adverbs;

firstSingular = ["εγώ", ""];
secondSingular = ["εσύ", ""];
thirdSingular = ["αυτός", "αυτή", "αυτό", ""];
firstPlural = ["εμείς", "εσύ κει εγώ", "οι δύο μας", ""];
secondPlural = ["εσείς", ""];
thirdPlural = ["αυτοί", "αυτές", "αυτά", ""];
            
verbsFirstSingular = ["αγοράζω", "αλλάζω", "ανοίγω", "αρχίζω", "αφήνω", "βάζω", "βγάζω", "βγαίνω", "βλέπω", "βρίσκω", "γράφω", "γυρίζω", "δένω", "διαβάζω", "δίνω", "δοκιμάζω", "δουλεύω", "έχω", "θέλω", "κάνω", "καταλαβαίνω", "κλείνω", "κοιτάζω", "μαγειρεύω", "μαθαίνω", "μένω", "μπαίνω", "νομίζω", "ξέρω", "παθαίνω", "παίρνω", "παίζω", "περιμένω", "πηγαίνω", "πιάνω", "πίνω", "πληρώνω", "προγευματίζω", "ρίχνω", "στέλνω", "ταξιδεύω", "τελειώνω", "τρέμω", "φεύγω", "φέρνω", "φτιάχνω", "φτάνω ", "τρέχω", "χάνω", "χορεύω", "ψάχνω", "ψωνίζω",];
verbsSecondSingular = ["αγοράζεις", "αλλάζεις", "ανοίγεις", "αρχίζεις", "αφήνεις", "βάζεις", "βγάζεις", "βγαίνεις", "βλέπεις", "βρίσκεις", "γράφεις", "γυρίζεις", "δένεις", "διαβάζεις", "δίνεις", "δοκιμάζεις", "δουλεύεις", "έχεις", "θέλεις", "κάνεις", "καταλαβαίνεις", "κλείνεις", "κοιτάζεις", "μαγειρεύεις", "μαθαίνεις", "μένεις", "μπαίνεις", "νομίζεις", "ξέρεις", "παθαίνεις", "παίρνεις", "παίζεις", "περιμένεις", "πηγαίνεις", "πιάνεις", "πίνεις", "πληρώνεις", "προγευματίζεις", "ρίχνεις", "στέλνεις", "ταξιδεύεις", "τελειώνεις", "τρέμεις", "φεύγεις", "φέρνεις", "φτιάχνεις", "φτάνωεις", "τρέχεις", "χάνεις", "χορεύεις", "ψάχνεις", "ψωνίζεις",];
verbsThirdSingular = ["αγοράζει", "αλλάζει", "ανοίγει", "αρχίζει", "αφήνει", "βάζει", "βγάζει", "βγαίνει", "βλέπει", "βρίσκει", "γράφει", "γυρίζει", "δένει", "διαβάζει", "δίνει", "δοκιμάζει", "δουλεύει", "έχει", "θέλει", "κάνει", "καταλαβαίνει", "κλείνει", "κοιτάζει", "μαγειρεύει", "μαθαίνει", "μένει", "μπαίνει", "νομίζει", "ξέρει", "παθαίνει", "παίρνει", "παίζει", "περιμένει", "πηγαίνει", "πιάνει", "πίνει", "πληρώνει", "προγευματίζει", "ρίχνει", "στέλνει", "ταξιδεύει", "τελειώνει", "τρέμει", "φεύγει", "φέρνει", "φτιάχνει", "φτάνωει", "τρέχει", "χάνει", "χορεύει", "ψάχνει", "ψωνίζει",];
verbsFirstPlural = ["αγοράζουμε", "αλλάζουμε", "ανοίγουμε", "αρχίζουμε", "αφήνουμε", "βάζουμε", "βγάζουμε", "βγαίνουμε", "βλέπουμε", "βρίσκουμε", "γράφουμε", "γυρίζουμε", "δένουμε", "διαβάζουμε", "δίνουμε", "δοκιμάζουμε", "δουλεύουμε", "έχουμε", "θέλουμε", "κάνουμε", "καταλαβαίνουμε", "κλείνουμε", "κοιτάζουμε", "μαγειρεύουμε", "μαθαίνουμε", "μένουμε", "μπαίνουμε", "νομίζουμε", "ξέρουμε", "παθαίνουμε", "παίρνουμε", "παίζουμε", "περιμένουμε", "πηγαίνουμε", "πιάνουμε", "πίνουμε", "πληρώνουμε", "προγευματίζουμε", "ρίχνουμε", "στέλνουμε", "ταξιδεύουμε", "τελειώνουμε", "τρέμουμε", "φεύγουμε", "φέρνουμε", "φτιάχνουμε", "φτάνωουμε", "τρέχουμε", "χάνουμε", "χορεύουμε", "ψάχνουμε", "ψωνίζουμε",];
verbsSecondPlural = ["αγοράζετε", "αλλάζετε", "ανοίγετε", "αρχίζετε", "αφήνετε", "βάζετε", "βγάζετε", "βγαίνετε", "βλέπετε", "βρίσκετε", "γράφετε", "γυρίζετε", "δένετε", "διαβάζετε", "δίνετε", "δοκιμάζετε", "δουλεύετε", "έχετε", "θέλετε", "κάνετε", "καταλαβαίνετε", "κλείνετε", "κοιτάζετε", "μαγειρεύετε", "μαθαίνετε", "μένετε", "μπαίνετε", "νομίζετε", "ξέρετε", "παθαίνετε", "παίρνετε", "παίζετε", "περιμένετε", "πηγαίνετε", "πιάνετε", "πίνετε", "πληρώνετε", "προγευματίζετε", "ρίχνετε", "στέλνετε", "ταξιδεύετε", "τελειώνετε", "τρέμετε", "φεύγετε", "φέρνετε", "φτιάχνετε", "φτάνωετε", "τρέχετε", "χάνετε", "χορεύετε", "ψάχνετε", "ψωνίζετε",];
verbsThirdPlural = ["αγοράζουν", "αλλάζουν", "ανοίγουν", "αρχίζουν", "αφήνουν", "βάζουν", "βγάζουν", "βγαίνουν", "βλέπουν", "βρίσκουν", "γράφουν", "γυρίζουν", "δένουν", "διαβάζουν", "δίνουν", "δοκιμάζουν", "δουλεύουν", "έχουν", "θέλουν", "κάνουν", "καταλαβαίνουν", "κλείνουν", "κοιτάζουν", "μαγειρεύουν", "μαθαίνουν", "μένουν", "μπαίνουν", "νομίζουν", "ξέρουν", "παθαίνουν", "παίρνουν", "παίζουν", "περιμένουν", "πηγαίνουν", "πιάνουν", "πίνουν", "πληρώνουν", "προγευματίζουν", "ρίχνουν", "στέλνουν", "ταξιδεύουν", "τελειώνουν", "τρέμουν", "φεύγουν", "φέρνουν", "φτιάχνουν", "φτάνωουν", "τρέχουν", "χάνουν", "χορεύουν", "ψάχνουν", "ψωνίζουν",];

adverbs = ["", "κάθε μέρα", "γρύγωρα", "τώρα", "αργότερα", "απόψε", "σήμερα το πρωί", "τελευταία ", "σύντομα", 
"αμέσως", "ακόμη", "εδώ", "εκεί", "εκεί πέρα", "παντού", "οπουδήποτε", "πουθενά", "στο σπίτι", "μακριά", "έξω",
"πολύ", "αρκετά", "πραγματικά", "καλά", "σκληρός", "αργά", "προσεκτικά", "σχεδον καθόλου", "μόλις", 
"ως επί το πλείστον", "σχεδόν", "απολύτως", "μαζί", "πάντοτε", "συχνά", "συνήθως", "μερικές φορές", "ενίοτε",
"σπανίως", "σχεδόν ποτέ", "ποτέ"];

var results = [];

var sentenceFooter = [];
 
function randGen() {
  return Math.floor(Math.random() * 10);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * firstSingular.length);
  var rand2 = Math.floor(Math.random() * verbsFirstSingular.length);
  var rand3 = Math.floor(Math.random() * adverbs.length);
  
  var content = firstSingular[rand1] + " " + verbsFirstSingular[rand2] + " " + adverbs[rand3];

  results.push(" " + content);
} 

function sentence1() {
  var rand4 = Math.floor(Math.random() * secondSingular.length);
  var rand5 = Math.floor(Math.random() * verbsSecondSingular.length);
  var rand6 = Math.floor(Math.random() * adverbs.length);
  
  var content1 = secondSingular[rand4] + " " + verbsSecondSingular[rand5] + " " + adverbs[rand6];

  results.push(" " + content1);
}

function sentence2() {
  var rand7 = Math.floor(Math.random() * thirdSingular.length);
  var rand8 = Math.floor(Math.random() * verbsThirdSingular.length);
  var rand9 = Math.floor(Math.random() * adverbs.length);
  
  var content2 = thirdSingular[rand7] + " " + verbsThirdSingular[rand8] + " " + adverbs[rand9];

  results.push(" " + content2);
}

function sentence3() {
  var rand10 = Math.floor(Math.random() * firstPlural.length);
  var rand11 = Math.floor(Math.random() * verbsFirstPlural.length);
  var rand12 = Math.floor(Math.random() * adverbs.length);
  
  var content3 = firstPlural[rand10] + " " + verbsFirstPlural[rand11] + " " + adverbs[rand12];

  results.push(" " + content3);
}

function sentence4() {
  var rand13 = Math.floor(Math.random() * secondPlural.length);
  var rand14 = Math.floor(Math.random() * verbsSecondPlural.length);
  var rand15 = Math.floor(Math.random() * adverbs.length);
  
  var content4 = secondPlural[rand13] + " " + verbsSecondPlural[rand14] + " " + adverbs[rand15];

  results.push(" " + content4);
}

function sentence5() {
  var rand16 = Math.floor(Math.random() * thirdPlural.length);
  var rand17 = Math.floor(Math.random() * verbsThirdPlural.length);
  var rand18 = Math.floor(Math.random() * adverbs.length);
  
  var content5 = thirdPlural[rand16] + " " + verbsThirdPlural[rand17] + " " + adverbs[rand18];

  results.push(" " + content5);
}

function protasi() {
  var x = Math.floor(Math.random() * results.length);

  var y = results[x] + ".";

  document.getElementById('demo').innerHTML = y;
  
  document.getElementById('allSentences').innerHTML = sentenceFooter;
  sentenceFooter.push(" " + y.slice(0, -1));
}



  

 


            

