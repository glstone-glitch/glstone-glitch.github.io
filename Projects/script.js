// ---------- jQuery UI: Accordion ----------
$(document).ready(function () {

    $("#accordion").accordion({
        heightStyle: "content"
    });

    // ---------- Slick Carousel Plugin ----------
    $('.client-slider').slick({
        autoplay: true,
        dots: true,
        arrows: false
    });

    // ---------- AJAX Request ----------
    $("#ajax-btn").click(function () {
        $.ajax({
            url: "https://www.boredapi.com/api/activity",
            method: "GET",
            success: function (res) {
                $("#ajax-box").text("Beauty Tip: " + res.activity);
            }
        });
    });

    // ---------- JavaScript Event Handling ----------
    $(".lash-item").hover(
        function () {
            $(this).css("transform", "scale(1.03)");
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    );

});
