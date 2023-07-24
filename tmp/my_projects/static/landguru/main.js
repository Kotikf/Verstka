$(function() {
    $('.rev_slider').slick({
        arrows: true,
        slidesToShow: 3,
        variableWidth: true,
        appendArrows:$('.arrows'),
        infinite: false,
    });
});

function Switch(element_id, click_and_change) {
    if (document.getElementById(element_id)) {
        var obj = document.getElementById(element_id);
        var element = document.getElementById(click_and_change)
        if (obj.style.display != 'block') {
            // document.getElementById(click_and_change).src = "http://127.0.0.1:5500/svg/-.svg";
            element.src = "../static/landguru/svg/-.svg";
            obj.style.display = 'block';
        }
        else {
            // document.getElementById(click_and_change).src = "http://127.0.0.1:5500/svg/+.svg";
            obj.style.display = 'none';
            element.src = "../static/landguru/svg/+.svg";
        }
    }
    else alert("Элемент с id: " + element_id + " не найден!");
};