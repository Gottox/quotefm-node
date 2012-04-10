var http = require('http');
var querystring = require('querystring');

var HOST = "quote.fm"
var BASEPATH = "/api"

function extend(base, extension) {
	for(var k in extension) {
		base[k] = extension[k];
	}
	return base;
}

function Quotefm() {

}

Quotefm.prototype = {
	_request: function(path, query, cb) {
		var options = {
			host: HOST,
			port: 80,
			path: BASEPATH + path + "?" + querystring.stringify(query),
			method: 'GET'
		};

		console.log(options);
		var req = http.request(options, function(res) {
			var json = "";
			console.log(res);
			res.on('data', function(junk) {
				json += junk;
			})
			res.on('end', function() {
				cb(undefined, JSON.parse(json));
			})
			res.on('error', function(e) {
				cb(e, undefined);
			})
		});
		req.on('error', function(e) {
			cb(e, undefined);
		})
		req.end();
	},
	_createObj: function(args, idNames) {
		args = Array.prototype.slice.call(args);
		var options = {};
		var cb = null;
		var id = null;

		if(typeof args[0] != 'object')
			id = args.shift();
		if(typeof args[0] == 'object')
			options = args.shift();
		if(typeof args[0] == 'function')
			cb = args.shift();

		if(id !== null) {
			if(typeof idNames === 'string')
				options[idNames] = id;
			else {
				var type = typeof id;
				var idName = idNames[type];
				options[idName] = id;
			}
		}
		return { options: options, cb: cb };
	},
	recommendation: function(id, options, cb) {
		var o = this._createObj(arguments, 'id');
		this._request("/recommendation/get", o.options, o.cb);
	},
	recommendationByArticle: function(id, options, cb) {
		var o = this._createObj(arguments, 'id');
		this._request('/recommendation/listByArticle', o.options, o.cb);
	},
	recommendationByUser: function(username, options, cb) {
		var o = this._createObj(arguments, 'username');
		this._request('/recommendation/listByArticle', o.options, o.cb);
	},

	article: function(id, cb) {
		var o = this._createObj(arguments, {'string': 'url', 'number': 'id'});
		this._request('/article/get', o.options, o.cb);
	},
	articleByPage: function(id, options, cb) {
		var o = this._createObj(arguments, 'id');
		this._request('/article/listByPage', o.options, o.cb);
	},
	articleByCategories: function(ids, options, cb) {
		if(Array.isArray(ids))
			arguments[0] = arguments[0].join(',');
		var o = this._createObj(arguments, 'ids');
		return this._request('/article/listByCategories', o.options, o.cb);
	},
	page: function(id, options, cb) {
		var o = this._createObj(arguments, {'string': 'domain', 'number': 'id'});
		return this._request('/page/get', o.options, o.cb);
	},
	user: function(id, options, cb) {
		var o = this._createObj(arguments, {'string': 'username', 'number': 'id'});
		return this._request('/user/get', o.options, o.cb);
	},
	followers: function(id, options, cb) {
		var o = this._createObj(arguments, {'string': 'username', 'number': 'id'});
		return this._request('/user/listFollowers', o.options, o.cb);
	},
	followings: function(id, options, cb) {
		var o = this._createObj(arguments, {'string': 'username', 'number': 'id'});
		return this._request('/user/listFollowings', o.options, o.cb);
	},
	listPage: function(size, page, cb) {
		var options = {pageSize: size, page: page};
		return this._request('/page/get', o.options, o.cb);
	},
	listCategories: function() {
		return this._request('/category/list', {}, cb);
	}
}

exports.Quotefm = Quotefm;
