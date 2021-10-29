function validarFormulario ()
{

var nomForm = document.forms["formulario"]["nombre"].value;
if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
	alert("Debes colocar tu nombre");
	return false;
}
var nomForm = document.forms["formulario"]["apellido"].value;
if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
	alert("Debes colocar tu apellido");
	return false;
}

var optForm = document.forms["formulario"]["equipo"].selectedIndex;
if( optForm == null || optForm == 0 ) {
	alert("Debes seleccionar un equipo");
	return false;					
}

var nomForm = document.forms["formulario"]["email"].value;
if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
	alert("Debes colocar un mail!");
	return false;
}

var nomForm = document.forms["formulario"]["descripcion"].value;
if ( nomForm == null || nomForm == "" || nomForm.length == 0  || /^\s+$/.test(nomForm) || !isNaN(nomForm) ) {
	alert("Necesitamos la descripcion de tu problema");
	return false;
}

}