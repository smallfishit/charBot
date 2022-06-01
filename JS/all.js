$(".top").click(function() {
    jQuery("html,body").animate({
        scrollTop: 0
    }, 1000);
});

function ChangProgram()
{
    location.href = 'program.html'
}

function ChangIndex()
{
    location.href = 'index.html'
}

$(".circle_button_normal2").click(function () {
    if($(this).hasClass('white_green_button'))
    {
        $(this).removeClass('white_green_button').addClass('green_button');
        $(this).parent().siblings().find('button').addClass('white_green_button').removeClass('green_button');
    }
});

$(".content_problem_symbol").click(function() {
    console.log('測試');
});