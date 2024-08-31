'use strict';

const express = require('express');
const router = express.Router();

// 받아옴
const ctrl = require('./home.ctrl');

// 컨트롤러 부분 모듈화
router.get('/', ctrl.home);
router.get('/login', ctrl.login);


// 루트 라우팅
router.get('/', (req, res) => {
    res.render('home/index');
});

//로긴 라우팅
router.get('/login', (req, res) => {
    res.render('home/login');
});

// 외부에서 사용할 수 있도록 내보내기
module.exports = router