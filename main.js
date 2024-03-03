function init() {
    // アコーディオンの開け閉めのトリガーになるボタン
    const btn = document.querySelector(".accordion-label")
    // gridコンテナ要素
    const container = document.querySelector(".grid")
    // アコーディオンの開け閉め状態。false->閉じてる。true->開いている。
    let isOpen = false;

    // トリガーのボタンをクリックした時の処理
    btn.addEventListener("click", () => {
        // 開け閉めを反転
        isOpen = !isOpen;
        // gridコンテナのデフォルトのクラス名
        let css = "grid"
        // 開いた状態ならば、アニメーション用のopenクラスを追加。
        if (isOpen) {
            css += " " + "open"
        }
        // gridコンテナのクラスを設定
        container.className = css;
    })
}

window.addEventListener("load", init)
