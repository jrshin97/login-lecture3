const express = require("express");
const app = express();

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

// index.js로 연결해주기
const home = require('./routes/home');  // index.js 를 읽어오는 상대경로
app.use('/', home);    // use -> 미들웨어를 등록해주는 메서드

// 브라우저에서 루트경로로 들어오면 
app.get('/', (req, res) => {
    res.render('home/index');
});

// /login 라우터
app.get('/login', (req, res) => {
    res.render('home/login');
});

// 서버가동
// app.listen(3000, function(){
//     console.log("로그인 서버 가동");
// });

// 내보내기
module.exports = app;