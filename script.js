/* var inititalString;
var clickCounter = 0
function beginGame() {

    inititalString = prompt("Give me a sentence.");
    document.getElementById("demo").innerHTML = inititalString;
    var button = document.getElementById("button").innerHTML;
    var buttonChange = button.replace("Click Me to Begin!", "Camelize Me Captain!");
    document.getElementById("button").innerHTML = buttonChange;
    clickCounter++;
    console.log(clickCounter);

    document.getElementById('button').onclick = function () {
        var button = document.getElementById("button").innerHTML;
        var buttonChange = button.replace("Click Me to Begin!", "Camelize Me Captain!");
        document.getElementById("button").innerHTML = buttonChange;
    } 
} */


//if (clickCounter >=1) {

    var inititalString = prompt("Give me a sentence.");
    document.getElementById("demo").innerHTML = inititalString;

function camelCaser() {
    //var inititalString = prompt("Give me a sentence.");
    //document.getElementById("demo").innerHTML = inititalString;
    var str = document.getElementById("demo").innerHTML
    var firstCharacter = str.charAt(0);
    var spaceNumber;
    var firstLetters = [];
    //var finalSentence = arrayOfSentence[0];


    console.log(str);
    for (var i = 0; i < str.length; i++) {
        if (Number(firstCharacter) === i) {
            alert("No number as first character.");
            break;
        } else if (firstCharacter === firstCharacter.toUpperCase()) {
            var newFirstCharacter = firstCharacter.toLowerCase();
            str = str.replace(firstCharacter, newFirstCharacter);
            console.log(str);
        }
        else {
            console.log(str);
        }
    }

    /* function find_occurences(str, char_to_count) {
 
         spaceNumber = str.split(char_to_count).length - 1
         console.log(spaceNumber);
     }
 
     find_occurences(str, ' ') */

    var arrayOfSentence = str.split(" ")
    console.log(arrayOfSentence);

    var camelSentence = "";

    for (var i = 0; i < arrayOfSentence.length; i++) {
        if (i === 0) {
            camelSentence += arrayOfSentence[i];
            camelSentence = camelSentence.toLowerCase();  
        } else {
            arrayOfSentence[i] = arrayOfSentence[i].toLowerCase();
            console.log(arrayOfSentence[i]);
            camelSentence += arrayOfSentence[i].charAt(0).toUpperCase() + arrayOfSentence[i].slice(1);
            console.log("camSen", camelSentence);
        }

        // camelSentence += arrayOfSentence[i].charAt(0).toUpperCase();
    }

    for (var i = 0; i < arrayOfSentence.length; i++) {
        console.log(arrayOfSentence[i].charAt(0).toUpperCase());
        firstLetters[i] = arrayOfSentence[i].charAt(0).toUpperCase();

        //arrayOfSentence[i].charAt(0).toUpperCase() + name.slice(1);
        // arrayOfSentence[i].charAt(0) = arrayOfSentence[i].charAt(0).toUpperCase();
        // console.log(arrayOfSentence[i].charAt(0));
    }
    /* for (var i = 1; i < firstLetters.length; i++) {
         arrayOfSentence[i].charAt(0) = firstLetters[i];
     } */

    console.log(camelSentence);
    document.getElementById("demo").innerHTML = camelSentence;
    var title = document.getElementById("demo2").innerHTML;

    var res = title.replace("You typed:", "Camelized:");
    document.getElementById("demo2").innerHTML = res;


    //var buttonChange = button.replace("Click Me to Begin!", "Camelize Me Captain!" );
    //document.getElementById("button").innerHTML = buttonChange;




    var newStringOfSentence = "";

    for (var i = 0; i < arrayOfSentence.length; i++) {
        newStringOfSentence += arrayOfSentence[i];
    }
}


    //console.log(newStringOfSentence);
    // arrayOfSentence = arrayOfSentence.toString();
    //  arrayOfSentence = arrayOfSentence.replace(",", "");
    //  arrayOfSentence.toString();
    //   console.log(arrayOfSentence);
    //console.log(arrayOfSentence.splice(","));
    // console.log(arrayOfSentence.replace(",", ""));
    /* for (var i = 0; i < arrayOfSentence.length; i++) {
        if (arrayOfSentence.charAt(i) === ",") {
            arrayOfSentence[i].charAt(0) = arrayOfSentence[i].toUpperCase.charAt(0);
            console.log(arrayOfSentence);

        }
    } 

    str = str.replace(/\s/g, '');
    console.log(str) */

    // document.getElementById("demo").innerHTML = str;

    /* for (var i = 0; i < spaceNumber; i++) {
         var res = str.replace(" ", "");
         console.log(res);
     } */
    //document.getElementById("demo").innerHTML = res;


