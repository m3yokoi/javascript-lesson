'use strict';



const menuBtn = document.querySelector('#menu-btn');

const gnavi = document.querySelector('#gnavi');



//menu-btnをクリックしたとき、#gnaviにクラス名の「open」がついていなければ追加
//menu-btnをクリックしたとき、#menu-btnにクラス名の「close」がついていなければ追加
menuBtn.addEventListener('click', (evt) => {
    gnavi.classList.toggle('open');
    evt.currentTarget.classList.toggle('close');
});

//上から３００以上スクロールしたら#page-topにopenを追加
const pageTop = document.querySelector('#page-top');
const getScrollY = () => {
    const scrolled = window.scrollY;
    if(scrollY >=300){
        pageTop.classList.add('open');
    } else{
        pageTop.classList.remove('open');
    }
};

window.addEventListener('scroll', getScrollY) ;

//【課題01】
//formの取得
const whatDay =document.querySelector('#what-day');

//送信イベント
const aA = document.querySelector('#A-01');

const aAA = document.querySelector('#A-02');

whatDay.addEventListener('submit', (evt) => {
    //初期動作のキャンセル
    evt.preventDefault();
    //入力内容の取得
    const year = whatDay.year.value;
    const month = whatDay.month.value;
    const date = whatDay.date.value;

    //日時
    const now = new Date(year,month-1,date);

    document.querySelector('aA').textContent = `${year}年${month}月${dete}日です`;

    console.log(now);
});
