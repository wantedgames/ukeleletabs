// Displays
chord1Display = document.getElementById("chord1Display");
chord2Display = document.getElementById("chord2Display");
chord3Display = document.getElementById("chord3Display");
chord4Display = document.getElementById("chord4Display");

// Button
applyChangesBtn = document.getElementById("applyChanges");

// Images
c = "C.svg"; // Do
d = "D.svg"; // Re
e = "E.svg"; // MI
f = "F.svg"; // Fa
g = "G.svg"; // Sol
a = "A.svg"; // La
b = "B.svg"; // Si

// Listener
applyChangesBtn.addEventListener('click', () => {
    applyChanges();
});

// Apply Changes
function applyChanges() {
    // Inputs
    chord1 = document.getElementById("chord1").value;
    chord2 = document.getElementById("chord2").value;
    chord3 = document.getElementById("chord3").value;
    chord4 = document.getElementById("chord4").value;

    switch(chord1) {
        case "Do":
            chord1Display.innerHTML = '<img src="' + c + '">';
        break;
        case "Re":
            chord1Display.innerHTML = '<img src="' + d + '">';
        break;
        case "Mi":
            chord1Display.innerHTML = '<img src="' + e + '">';
        break;
        case "Fa":
            chord1Display.innerHTML = '<img src="' + f + '">';
        break;
        case "Sol":
            chord1Display.innerHTML = '<img src="' + g + '">';
        break;
        case "La":
            chord1Display.innerHTML = '<img src="' + a + '">';
        break;
        case "Si":
            chord1Display.innerHTML = '<img src="' + b + '">';
        break;
    }

    switch (chord2) {
      case "Do":
        chord2Display.innerHTML = '<img src="' + c + '">';
        break;
      case "Re":
        chord2Display.innerHTML = '<img src="' + d + '">';
        break;
      case "Mi":
        chord2Display.innerHTML = '<img src="' + e + '">';
        break;
      case "Fa":
        chord2Display.innerHTML = '<img src="' + f + '">';
        break;
      case "Sol":
        chord2Display.innerHTML = '<img src="' + g + '">';
        break;
      case "La":
        chord2Display.innerHTML = '<img src="' + a + '">';
        break;
      case "Si":
        chord2Display.innerHTML = '<img src="' + b + '">';
        break;
    }

    switch (chord3) {
      case "Do":
        chord3Display.innerHTML = '<img src="' + c + '">';
        break;
      case "Re":
        chord3Display.innerHTML = '<img src="' + d + '">';
        break;
      case "Mi":
        chord3Display.innerHTML = '<img src="' + e + '">';
        break;
      case "Fa":
        chord3Display.innerHTML = '<img src="' + f + '">';
        break;
      case "Sol":
        chord3Display.innerHTML = '<img src="' + g + '">';
        break;
      case "La":
        chord3Display.innerHTML = '<img src="' + a + '">';
        break;
      case "Si":
        chord3Display.innerHTML = '<img src="' + b + '">';
        break;
    }

    switch (chord4) {
      case "Do":
        chord4Display.innerHTML = '<img src="' + c + '">';
        break;
      case "Re":
        chord4Display.innerHTML = '<img src="' + d + '">';
        break;
      case "Mi":
        chord4Display.innerHTML = '<img src="' + e + '">';
        break;
      case "Fa":
        chord4Display.innerHTML = '<img src="' + f + '">';
        break;
      case "Sol":
        chord4Display.innerHTML = '<img src="' + g + '">';
        break;
      case "La":
        chord4Display.innerHTML = '<img src="' + a + '">';
        break;
      case "Si":
        chord4Display.innerHTML = '<img src="' + b + '">';
        break;
    }
}