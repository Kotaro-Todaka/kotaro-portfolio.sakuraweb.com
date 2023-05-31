// スクロールアニメーション
// 作品詳細ページで、メインビジュアルを過ぎたら表示される、外部リンクボタン
const siteLinkTrigger = document.querySelector(".js-linkButtonTrigger");
const siteLinkButton = document.querySelector(".js-works__button");

// siteLinkObserverオプション
const option02 = {
  rootMargin: '-50% 0px'
};

const siteLinkObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      siteLinkButton.classList.add(showClass);
    } else {
      siteLinkButton.classList.remove(showClass);
    }
  });
});

// 監視対象02：.js-siteLinkButtonTriggerが入っている要素
siteLinkObserver.observe(siteLinkTrigger, option02);