// スクロールアニメーション
// 作品詳細ページで、メインビジュアルを過ぎたら表示される、外部リンクボタン
const SITE_LINK_TRIGGER = document.querySelector(".js-linkButtonTrigger");
const SITE_LINK_BUTTON = document.querySelector(".js-works__button");

// SITE_LINK_OBSERVERオプション
const OPTIONS_02 = {
  rootMargin: '-50% 0px'
};

const SITE_LINK_OBSERVER = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      SITE_LINK_BUTTON.classList.add(SHOW_CLASS);
    } else {
      SITE_LINK_BUTTON.classList.remove(SHOW_CLASS);
    }
  });
});

// 監視対象02：.js-siteLinkButtonTriggerが入っている要素
SITE_LINK_OBSERVER.observe(SITE_LINK_TRIGGER, OPTIONS_02);