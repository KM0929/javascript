
let time = document.getElementById("timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let elapsed = 0;
let intervalId = null;

function updateTime(){
    let ms = Math.floor(elapsed / 100);
    let s = Math.floor(elapsed / 1000) % 60;
    let minute = Math.floor(elapsed / (1000*60)) % 60;
    let hour = Math.floor(elapsed / (1000*60*60))

    let msStr = ms.toString().slice(-1);
    let sStr = s.toString();
    let mStr = minute.toString();
    let hStr = hour.toString();

    time.innerHTML = `${hStr}:${mStr}:${sStr}:${msStr}`;
};


function Start(){
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;

    if (intervalId !== null) {
        return;}
    else{
    let pre = new Date();
    intervalId = setInterval(function() {
        let now = new Date();
        elapsed += now - pre;　//※最下部にまとめてメモ
        pre = now;　//加算されることを防ぐために一秒ごとに区切る→最後にpreをリセット
        updateTime();
    }, 100)};
};

function Stop(){
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;

    clearInterval(intervalId);
    intervalId = null;
};

function Reset(){
    start.disabled = false;
    stop.disabled = false;
    reset.disabled = true;

    elapsed = 0;
    time.innerHTML = "0:0:0:0"
    console.log(time.innerHTML);
    reset.disabled = true;
};


//※メモ
//右辺に変数（elapsed）がないとリセットボタンが効かない（×elapsed = now - pre;）
//（理由）”＝”は代入の意（≒再定義？）。左辺にelapsedがあってもリセットボタン押下時のelapsed=0は
//上記now-preに上書き？されるためnow-preの値が代入され続ける？
//リセットボタンを押してelapsedを０にするには右辺にelapsedを書くことでelapsed=0が反映されるようにする必要あり？

