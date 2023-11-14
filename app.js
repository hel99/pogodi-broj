const zeljeniBroj = Math.floor((Math.random() * 10) + 1);

function prikaziPoruku(poruka) {
    document.getElementById('message').textContent = poruka;
}

function proveraBroja() {
    const unetiBroj = parseInt(document.getElementById('guess').value);
    if (unetiBroj >= 1 && unetiBroj <= 10) {
        if (unetiBroj === zeljeniBroj) {
            prikaziPoruku('Bravo, care.');
        } 
        else {
            prikaziPoruku('Nisi pogodio. Zeljeni broj je ' + zeljeniBroj);
        }
    }
    else {
        prikaziPoruku('Unesi broj od 1 do 10.');
    }
}



