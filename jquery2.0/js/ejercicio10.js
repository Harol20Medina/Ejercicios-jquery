$(".acordeon").on("click", ".acordeon-cabecera", function() {
    $(this).toggleClass("active").next().slideToggle();
});