/*busca produto*/
function busca() {
    window.alert("Não é possível pesquisar no momento.")
  }


  
  /*menu hamburger*/

  function menu(){
    $("#menu").toggleClass("menu-ativo")
  }
  
  /*
  $("#hamburger_menu").on("click", function () {
    $("#menu").toggleClass("menu-ativo")
  })*/

$(document).ready (()=> {
  $(".dropdown-container").on("mouseenter", function(){
    $("#menu_acessorios").removeClass("menu_acessorios_desativado").addClass("menu_acessorios_ativado");
  })
  $(".dropdown-container").on("mouseleave", function(){
    $("#menu_acessorios").removeClass("menu_acessorios_ativado").addClass("menu_acessorios_desativado");
  })
})