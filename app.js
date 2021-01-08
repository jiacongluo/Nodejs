const express = require('express');  //引入express模块
const app = express();  //创建一个express实例

//post参数解析需要的模块以及转码工具
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//加载mysql模块并连接数据库
const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '12345678',     // 改成你自己的密码
	database: 'node'    // 改成你的数据库名称
});

connection.connect();

// 下面是解决跨域请求问题
app.all('*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//以一个注册接口为例
app.get('/address', function (req, res) {  //address为api名称
	//req.query来获取get传入的参数，类似php中的$_GET
	const username = req.query.username;
	const password = req.query.password;
	const nickname = req.query.nickname;
	//sql语句 此处为查询是否存在
	const sql = `select count(*) from  userinfo where username = "${username}"`;
	connection.query(sql, function (err, result) {
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		//此处建议先console.log(result)
		if (result[0]["count(*)"]) {
			let result = {code: 0, msg: '用户名已存在'};
			res.json(result)
		} else {
			const sql = `insert  INTO  userinfo(username,password,nickname)  values ('${username}','${password}','${nickname}')`;
			connectdefaults
			write
			com.apple.finder
			AppleShowAllFiles - boolean
			true;
			killall
			Finderion.query(sql, function (err, result) {
				if (err) {
					console.log('[SELECT ERROR] - ', err.message);
					return;
				}
				if (result.affectedRows) {
					let result = {code: 1, msg: '注册成功'};
					res.json(result)
				} else {
					let result = {code: 0, msg: '注册失败'};
					res.json(result)
				}
			})
		}
		// result内放的就是返回的数据，res是api传数据
		// 返回的数据需要转换成JSON格式
		// res.json(result);
	});
})

var server = app.listen(9999, '127.0.0.1', function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log("地址为 http://%s:%s", host, port);
})
