export default function() {
    document.addEventListener('DOMContentLoaded', () => {
        // HTML読み込み後
        const box = document.querySelector('.box');
        box.addEventListener('mousemove', (event) => {
            box.innerHTML = `
            スクリーン上の座標 <br>
            screen ${event.screenX} / ${event.screenY} </br>
            ページ上の座標 <br>
            page ${event.pageX} / ${event.pageY} <br>
            表示領域の座標 <br>
            client ${event.clientX} / ${event.clientY} <br>
            要素領域の座標 <br>
            offset ${event.offsetX} / ${event.offsetY} <br>
            `
        })
    }, false)
    // useCapture：上方向のバブリングイベントはリスナーを起動しない（default false）
}
