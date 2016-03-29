$('.editable').each(function(){
    this.contentEditable = true;
});
// ================== tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();

	// ================== zmiana fontów
	$('#bold').click(function() {
		document.execCommand('bold');
	});

	$('#italic').click(function() {
		document.execCommand('italic');
	});

	$('#underline').click(function() {
		document.execCommand('underline');
	});

	$('#strikeThrough').click(function() {
		document.execCommand('strikeThrough');
	});

	// ================== centrowanie
	$('#left').click(function() {
		document.execCommand('justifyLeft');
	});

	$('#center').click(function() {
		document.execCommand('justifyCenter');
	});

	$('#right').click(function() {
		document.execCommand('justifyRight');
	});

	$('#full').click(function() {
		document.execCommand('justifyFull', false, null);
	});

	// ================== Index górny i dolny
	$('#superscript').click(function() {
		document.execCommand('superscript');
	});

	$('#subscript').click(function() {
		document.execCommand('subscript');
	});

	// ================== Wielkość cofanie
	$('#undo').click(function() {
		document.execCommand('undo');
	});

	// ================== Listy ol, ul
	$('#ol').click(function() {
		document.execCommand('insertOrderedList');
	});

	$('#ul').click(function() {
		document.execCommand('insertUnorderedList');
	});

	// ================== Zdjęcia
	$('#picture').click(function() {
		document.execCommand('insertHTML', false, '<br>');
		document.execCommand('insertImage', false, 'http://s8.flog.pl/media/foto/5904872_songo-ssj-2-.jpg');
		document.execCommand('insertHTML', false, '<br>');
	});

	// ================== link
	$('#myModal').on('shown.bs.modal', function () {
	    $('#linkField').focus();
	});

	$('bLink').click(function(){
		$('#myModal').modal('show');
	});

	$('#CreateLink').click(function(){
		$('#myModal').modal('hide');
		var linkValue = 'http://'+$('#linkField').val();
		document.execCommand('createLink', false, linkValue);
	});


	// ================== modalHTML
	$('#showHTML').click(function(){
		var htmlCode = $('.editable').html();
		$('#htmlHere').text(htmlCode);
		$('#modalHTML').modal('show');
		
	});


	$('#copyHTML').click(function(){
		$('#modalHTML').modal('hide');
		// Tworzenie niewidocznego inputa, wklejanie do niego HTML, copiowanie zawartości i temp input
		var copyFrom = $('<textarea/>');
	  copyFrom.text($('#toCopy').html());
	  $('body').append(copyFrom);
	  copyFrom.select();
	  document.execCommand('copy');
	  copyFrom.remove();
	});

	$('input[type="color"]').on('input',function(){
		var colorek = $(this).val();
		document.execCommand('foreColor', false, colorek);
	});

	// Kopiowanie tekstu
	$('#cpyCode').click(function(){
		var copyFrom = $('<textarea/>');
	  copyFrom.text($('#toCopy').html());
	  $('body').append(copyFrom);
	  copyFrom.select();
	  document.execCommand('copy');
	  copyFrom.remove();
	});

}); // on ready