$(document).ready(function () {
    // Selector de ID
    $("#rojo").css("background", "red")
        .css("color", "white");
    console.log(rojo);

    $("#amarillo").css("background", "yellow")
        .css("color", "green");

    $("#verde").css("background", "green")
        .css("color", "white");

    // Selector de clases
    let mi_clase = $('.zebra').css("padding", "5px");
    mi_clase.css("border", "5px dashed black")

    $('.sin_borde').click(function () {
        console.log("Click dado!!!");
        $(this).addClass('.zebra');
    });

    // Selectores de etiqueta
    let parrafos = $('p');

    parrafos.click(function () {
        let that = $(this);
        if (!that.hasClass('zebra')) {
            that.addClass('grande')
        }else{
            that.removeClass('grande');
        }
    })
});