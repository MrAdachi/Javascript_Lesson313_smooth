// 属性セレクターを使用して要素を抜き出し
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

for(let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        // 指定された属性の値を返す
        // #menu1 or #menu2 or #menu3
        let href = smoothScrollTrigger[i].getAttribute('href');
        // hrefの'#'を空文字に置換する（＝削除）
        let targetElement = document.getElementById(href.replace('#', ''));
        // 要素の寸法を返す（top → 現在のページの上端（viewportの範囲）からスクロールされたピクセル数を取得）
        const rect = targetElement.getBoundingClientRect().top;
        // 文書が現在垂直方向にスクロールしているピクセル数を返す
        const offset = window.scrollY;
        // 固定ヘッダー文の高さ
        const gap = 60;
        // ウィンドウ最上部からターゲット位置の距離を取得
        const target = rect + offset - gap;
        // 指定された要素を指定された座標までスクロール
        // （top：ウィンドウまたは要素をスクロールする Y 軸方向のピクセル数を指定)
        // （behavior：スクロールを即座に行うか、滑らかにアニメーションさせるかを決定する。
        // smooth → scrollをスムーズなアニメーションで行う）
        window.scrollTo({
            top: target,
            behavior: 'smooth'
        })
    })
}