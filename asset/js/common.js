// スクロールトップボタン
// 定義づけ
const scrollTopButton = document.querySelector(".js-footer__button--scroll-top");

// スクロールトップボタンが押されたら、スクロールする
scrollTopButton.addEventListener('click',(event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ハンバーガーメニュー
// 定義づけ
const bodyElement = document.getElementsByTagName("body")[0];
const hamburgerButton = document.querySelector("#js-hamburger");
const navigationMenuLinks = document.querySelectorAll("#js-nav a");
const activeClass = "is-active";
let hamburgerButtonState;


// ハンバーガーボタンが押されたら、メニューが開閉する
hamburgerButton.addEventListener('click',() => {
  // ハンバーガーボタンとナビゲーションメニューのクラス切り替え
  bodyElement.classList.toggle(activeClass);
  hamburgerButtonState = hamburgerButton.getAttribute('aria-expanded');
  // ハンバーガーボタンの開閉状態切り替え
  if(hamburgerButtonState === 'false'){
    hamburgerButton.setAttribute('aria-expanded','true');
  } else {
    hamburgerButton.setAttribute('aria-expanded','false');
  };
});

// メニューを閉じる命令
const closeMenu = () => {
  bodyElement.classList.remove(activeClass);
  hamburgerButton.setAttribute('aria-expanded','false');
}

// ナビゲーションリンクが押されたら、メニューが閉じる
navigationMenuLinks.forEach((link) => {
  link.addEventListener('click',() => {
    closeMenu();
  });
});

window.addEventListener('keydown',(event) => {
  if(event.key === 'Escape'){
    closeMenu();
  };
});


// Works,Illustについているタブメニュー
$(function(){
  $('.tab-list-item').on('click', function(){
    let index = $('.tab-list-item').index(this);
    $('.tab-list-item').removeClass('is-btn-active');
    $(this).addClass('is-btn-active');
    $('.tab-contents').removeClass('is-contents-active');
    $('.tab-contents').eq(index).addClass('is-contents-active');
  });

  $('.tab-list02-item').on('click', function(){
    let index = $('.tab-list02-item').index(this);

    $('.tab-list02-item').removeClass('is-btn02-active');
    $(this).addClass('is-btn02-active');
    $('.tab-contents02').removeClass('is-contents02-active');
    $('.tab-contents02').eq(index).addClass('is-contents02-active');
  });
}); 

// スクロールアニメーション
// ビューポートと交差したら、アニメーションのきっかけとなる要素
const animationTriggers = document.querySelectorAll(".js-animationTrigger");
// 追加されるクラス
const showClass = 'is-show';

// animationObserverオプション
const option01 = {
  rootMargin: '-50% 0%'
};

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animationObserver.unobserve(entry.target);
      entry.target.classList.add(showClass);
    }
  });
});

// 監視対象01：.js-animationTriggerが入ったすべての要素
animationTriggers.forEach(trigger => {
  animationObserver.observe(trigger, option01);
});
