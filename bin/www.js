'use strict';

// app을 불어옴.
const app = require('../app4');
const PORT = 3000;

app.listen(PORT, () => {
    console.log("로그인 서버 가동");
});