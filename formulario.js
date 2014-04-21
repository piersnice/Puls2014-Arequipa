var $form = $('#formulario'),
	$titulo= $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

function mostrarFormulario(){
	$form.slideToggle() //ocultar y mostrar formulario (slideToggle)
	return false;
}

function agregarPost(){
	var url= $url.val(),
	titulo = $titulo.val(),	
	$clone = $post.clone();
	
	$clone.find('.titulo_item a')
	.text(titulo)
	.attr('href', url);

	$clone.hide();
	$list.prepend($clone);
	$clone.fadeIn;
	return false;
}

//EVENTOS

$button.click( mostrarFormulario );
$form.on('submit', agregarPost);