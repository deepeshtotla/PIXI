// document.onload = ()=>{
    const game = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x3366FF 
    });
    document.getElementById('game').append(game.view);
// }
const pBar = document.getElementById('bar');
const pText = document.getElementById('progress');
function preload(e){
    pBar.style.width = e.progress * 4 + "%";
    pText.innerText = e.progress + "%";
    console.log(e.progress);
}
function loadAssets(list,onLoadComplete){
    game.loader.onProgress.add(preload);
    game.loader.add(list).load(onLoadComplete);
}