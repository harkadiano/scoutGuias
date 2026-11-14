var TOTAL_BOLILLAS = 90;
var CLAVE_ALMACEN = "scoutGuias.bolillasSorteadas";

$(document).ready(function() {
	construirTablero();
	restaurarEstado();
	addClickToButtons();
	addClickToReiniciar();
});

function construirTablero()
{
	var $tablero = $("#tablero");

	for (var n = 1; n <= TOTAL_BOLILLAS; n++) {
		var etiqueta = (n < 10 ? "0" : "") + n;
		$('<button type="button" class="btn bolilla buttonClick"></button>')
			.attr("id", "btn" + n)
			.attr("aria-pressed", "false")
			.text(etiqueta)
			.appendTo($tablero);
	}
}

function addClickToButtons()
{
	$("#tablero").on("click", ".buttonClick", function() {
		var sorteada = $(this).toggleClass("bolillaSorteada").hasClass("bolillaSorteada");
$(this).attr("aria-pressed", sorteada);
		guardarEstado();
	});
}

function addClickToReiniciar()
{
	$("#btnReiniciar").on("click", function() {
		if (window.confirm("¿Reiniciar el tablero y desmarcar todas las bolillas?")) {
			$(".bolillaSorteada").removeClass("bolillaSorteada").attr("aria-pressed", "false");
			guardarEstado();
		}
	});
}

function guardarEstado()
{
	var sorteadas = $(".bolillaSorteada").map(function() {
		return parseInt(this.id.replace("btn", ""), 10);
	}).get();

	try {
		window.localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(sorteadas));
	} catch (e) {
		// Almacenamiento no disponible (modo privado o cuota): el tablero sigue funcionando sin persistir.
	}
}

function restaurarEstado()
{
	var sorteadas = [];

	try {
		sorteadas = JSON.parse(window.localStorage.getItem(CLAVE_ALMACEN)) || [];
	} catch (e) {
		return;
	}

	if (!$.isArray(sorteadas)) {
		return;
	}

	$.each(sorteadas, function(_, n) {
		if (n >= 1 && n <= TOTAL_BOLILLAS) {
			$("#btn" + parseInt(n, 10)).addClass("bolillaSorteada").attr("aria-pressed", "true");
		}
	});
}
