const express = require("express");
const app = express();

// 앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
// __dirname는 현재 app4.js 파일이 있는 위치를 반환을 함. 위치안에/src안에/public 폴더를 정적경로로 추가해주겠다는 의미

// 라우팅
const home = require('./src/routes/home');  // index.js 를 읽어오는 상대경로

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