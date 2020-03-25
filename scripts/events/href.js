export default function() {
    document.addEventListener('DOMContentLoaded', () => {
        const apple = document.querySelector('.apple')
        apple.addEventListener('change', (e) => {
            const base = 'https://www.apple.com/jp/';
            const code = e.target.value;
            // 履歴を残したくないときは location.replace
            open( base + code, "_blank" ) ;
        })
    })
}
