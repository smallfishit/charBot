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

function initSwiper() {
        
    const swiper = new Swiper(".mySwiper", {
        
        /*  預設要顯示幾個卡片 */
        slidesPerView: 1,
        
        /* 斷點設定 */
        breakpoints: {
            /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
            992: {
                slidesPerView: 3
            },
            /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
            768: {
                slidesPerView: 2
            },
            /* 更小時都顯示 1 欄 */
            0: {
                slidesPerView: 1
            }
        },
        /* 卡片元素的間隔 */
        spaceBetween: 16,
        pagination: {
            /* 想將分頁圓點綁在哪個 class */
            el: ".swiper-pagination",
            /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
            clickable: true
        }
    });
}
  
/* 觸發自己定義的函式 */
initSwiper();
  