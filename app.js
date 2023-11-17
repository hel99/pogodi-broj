const zeljeniBroj = Math.floor(Math.random() * 10 + 1);
const poruka = document.getElementById("message");
let brojPokusaja = 3;
localStorage.setItem("brojPokusaja", "3");
const unosBroja = document.getElementById("guess");

console.log(localStorage.getItem("brojPokusaja")); // 3
console.log(localStorage.getItem("danZaSpavanje")); // null
localStorage.removeItem("brojPokusaja");
const brojUspesnihPokusaja = localStorage.getItem("bUp");
const ukupanBrojPOkusaja = localStorage.getItem("upk");

function prikaziPoruku(poruka) {
	document.getElementById("message").textContent = poruka;
}

function ucitajPonovo() {
	setTimeout(function () {
		location.reload();
	}, 2000);
}

unosBroja.addEventListener("input", (e) => {
	const value = +e.target.value;

	if (!Number.isInteger(value)) {
		console.log(value);
		prikaziPoruku("Molim te unesi ceo broj!");
		poruka.style.color = "red";
	} else {
		prikaziPoruku("");
	}
});

function proveraBroja() {
	const unetiBroj = parseFloat(document.getElementById("guess").value);
	if (Number.isInteger(unetiBroj)) {
		if (unetiBroj >= 1 && unetiBroj <= 10) {
			if (unetiBroj === zeljeniBroj) {
				prikaziPoruku("Bravo, pogodio si.");
				poruka.style.color = "grey";

				ucitajPonovo();
			} else {
				brojPokusaja--;
				if (brojPokusaja > 0) {
					prikaziPoruku(
						`Nisi pogodio. Broj preostalih pokušaja: ${brojPokusaja}`
					);
					poruka.style.color = "red";
				} else {
					prikaziPoruku(
						`Potrošio si sve pokušaje. Traženi broj je bio ${zeljeniBroj}.`
					);
					poruka.style.color = "red";
					localStorage.setItem("ukp", ukupanBrojPOkusaja + 1);
					ucitajPonovo();
				}
			}
		} else {
			prikaziPoruku("Unesi broj od 1 do 10.");
		}
	} else {
		prikaziPoruku("Unesi ceo broj.");
	}
}
