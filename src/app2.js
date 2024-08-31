const http = require('http');
// http는 내장모듈로 npm으로 다운받을 필요는 없음
const app = http.createServer((req, res) => {
    // 한글설정코드
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
    if (req.url === '/') {
        res.end('여기는 루트입니다.');
    } else if (req.url === '/login') {
        res.end('여기는 로그인 화면입니다.');
    }
});

app.listen(3001, () => {
    console.log('http로 가동된 서버입니다.');
});