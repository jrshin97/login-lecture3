// hello 라는 컨트롤러 함수를 만들고 이를 외부에서 사용해줌.
'use strict';

const home = (req, res) => {
    res.render('home/index');
};

const login = (req, res) => {
    res.render('home/login');
};

// 외부에 넘겨줌.
module.exports = {
    home,
    login,
};