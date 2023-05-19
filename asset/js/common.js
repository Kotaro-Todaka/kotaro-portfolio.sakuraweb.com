// スクロールトップボタン
// 定義づけ
const SCROLL_TOP_BUTTON = document.querySelector(".js-footer__button--scroll-top");

// スクロールトップボタンが押されたら、スクロールする
SCROLL_TOP_BUTTON.addEventListener('click',(event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// ハンバーガーメニュー
// 定義づけ
const BODY_ELEMENT = document.getElementsByTagName("body")[0];
const HAMBURGER_BUTTON = document.querySelector("#js-hamburger");
const NAVIGATION_MENU = document.querySelector("#js-nav");
const NAVIGATION_MENU_LINKS = document.querySelectorAll("#js-nav a");
const ACTIVE_CLASS = "is-active";
let hamburgerButtonState;


// ハンバーガーボタンが押されたら、メニューが開閉する
HAMBURGER_BUTTON.addEventListener('click',() => {
  // ハンバーガーボタンとナビゲーションメニューのクラス切り替え
  BODY_ELEMENT.classList.toggle(ACTIVE_CLASS);
  hamburgerButtonState = HAMBURGER_BUTTON.getAttribute('aria-expanded');
  // ハンバーガーボタンの開閉状態切り替え
  if(hamburgerButtonState === 'false'){
    HAMBURGER_BUTTON.setAttribute('aria-expanded','true');
  } else {
    HAMBURGER_BUTTON.setAttribute('aria-expanded','false');
  }
});
// ナビゲーションリンクが押されたら、メニューが閉じる
NAVIGATION_MENU_LINKS.forEach((link) => {
  link.addEventListener('click',() => {
    BODY_ELEMENT.classList.remove(ACTIVE_CLASS);
    HAMBURGER_BUTTON.setAttribute('aria-expanded','false');
  });
});

window.addEventListener('keydown',(event) => {
  if(event.key === 'Escape'){
    BODY_ELEMENT.classList.remove(ACTIVE_CLASS);
    HAMBURGER_BUTTON.setAttribute('aria-expanded','false');
  }
});

// is-btn-activeをis-button-activeに変える
// Works Tab Menu 定義リスト
// const TAB_WORKS_BUTTON_LIST = document.querySelectorAll(".js-works-tab-button-list");
// const TAB_WORKS_BUTTON_ACTIVE = document.querySelector(".is-works-tab-button-active");
// const TAB_WORKS_CONTENTS = document.querySelectorAll(".js-works-tab-contents");
// const TAB_WORKS_CONTENTS_ACTIVE = document.querySelector(".is-works-tab-contents-active");
// // Illust Tab Menu 定義リスト
// const TAB_ILLUST_BUTTON_LIST = document.querySelectorAll(".js-illust-tab-button-list");
// const TAB_ILLUST_BUTTON_ACTIVE = document.querySelector(".is-illust-tab-button-active");
// const TAB_ILLUST_CONTENTS = document.querySelectorAll(".js-illust-tab-contents");
// const TAB_ILLUST_CONTENTS_ACTIVE = document.querySelector(".is-illust-tab-contents-active");

// TAB_WORKS_BUTTON_LIST.addEventListener('click',(tag) => {
//   // 要素を取得し、配列に格納する。
//   // n番目の要素を取得するには、HTML Collectionとして取得した要素の塊から、
//   // Elementsオブジェクトに対して、目印を置くだけでOK！
//   const TARGETS_ELEMENT = TAB_WORKS_BUTTON_LIST.parentNode.children;
//   Array.from(TARGETS_ELEMENT).indexOf(TAB_WORKS_BUTTON_LIST);
//   const SELECTED_ELEMENT = document.querySelectorAll("div#button > button");
//   SELECTED_ELEMENT[INDEX];
  
// });

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
const ANIMATION_TRIGGERS = document.querySelectorAll(".js-animationTrigger");
// 追加されるクラス
const SHOW_CLASS = 'is-show';

// ANIMATION_OBSERVERオプション
const OPTIONS_01 = {
  rootMargin: '-50% 0%'
  // threshold: 0.5
};

const ANIMATION_OBSERVER = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      ANIMATION_OBSERVER.unobserve(entry.target);
      entry.target.classList.add(SHOW_CLASS);
    }
  });
});

// 監視対象01：.js-animationTriggerが入ったすべての要素
ANIMATION_TRIGGERS.forEach(trigger => {
  ANIMATION_OBSERVER.observe(trigger, OPTIONS_01);
});
