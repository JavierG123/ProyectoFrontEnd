function validarFormulario ()
{

var nomForm = document.forms["formulariocontacto"]["nombre"].value;
if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
	alert("Debes colocar tu nombre");
	return false;
}
var nomForm = document.forms["formulariocontacto"]["email"].value;
if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
	alert("Debes colocar tu apellido");
	return false;
}

var nomForm = document.forms["formulariocontacto"]["mensaje"].value;
if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
	alert("Coloca tu mensaje");
	return false;
}

}