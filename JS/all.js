$(".top").click(function() {
    console.log('回到最上');
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
    let btn = $(this);
    btn.toggleClass("icon_minus").toggleClass("icon_plus");
    btn.parent().toggleClass("active");
    let item = btn.parent().parent();
    item.find(".content_problem_answer").toggle();

    //關閉其他的頁籤
    item.siblings().find(".content_problem_answer").hide();
    item.siblings().find(".content_problem_symbol").removeClass("icon_minus").addClass("icon_plus");
    item.siblings().find(".content_problem_question").removeClass("active");
});