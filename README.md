## Example

``` javascript
var Quotefm = require('quotefm').Quotefm;

var quotefm = new Quotefm();

quotefm.user("Gottox", function(err, obj) {
	if(err)
		return console.log("Error occured " + err);
	console.log(obj)
});
```

## Usage

Instantiate a new object with:

``` javascript
var Quotefm = require('quotefm').Quotefm;

var quotefm = new Quotefm();
```

Afterwards you can use the following method calls:

### quotefm.recommendation(id, options, cb)
Queries /recommendation/get, see <http://quote.fm/labs/documentation/recommendation/get>

 * id: ID to query.
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.recommendationByArticle(id, options, cb)
Queries /recommendation/listByArticle, see <http://quote.fm/labs/documentation/recommendation/listByArticle>

 * id: ID to query.
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.recommendationByArticle(id, options, cb)
Queries /recommendation/listByArticle, see <http://quote.fm/labs/documentation/recommendation/listByArticle>

 * id: ID or URL to query, determinated by type (typeof id === 'string' -> url; typeof id === 'number' -> id)
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.recommendationByUser(username, options, cb)
Queries /recommendation/listByArticle, see <http://quote.fm/labs/documentation/recommendation/listByArticle>

 * id: ID to query.
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.recommendationByUser(username, options, cb)
Queries /recommendation/listByArticle, see <http://quote.fm/labs/documentation/recommendation/listByArticle>

 * id: ID to query.
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.article(id, cb)
Queries /article/get, see <http://quote.fm/labs/documentation/article/get>

 * id: ID to query.
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.articleByPage(id, options, cb)
Queries /article/listByPage, see <http://quote.fm/labs/documentation/article/listByPage>

 * id: ID to query.
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.articleByCategories(ids, options, cb)
Queries /article/listByCategories, see <http://quote.fm/labs/documentation/article/listByCategories>

 * id: ID to query.
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.page(id, options, cb)
Queries /page/get, see <http://quote.fm/labs/documentation/page/get>

 * id: ID or Domain to query, determinated by type (typeof id === 'string' -> domain; typeof id === 'number' -> id)
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.user(id, options, cb)
Queries /user/get, see <http://quote.fm/labs/documentation/user/get>

 * id: ID or Username to query, determinated by type (typeof id === 'string' -> username; typeof id === 'number' -> id)
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.followers(id, options, cb)
Queries /user/listFollowers, see <http://quote.fm/labs/documentation/user/listFollowers>

 * id: ID or Username to query, determinated by type (typeof id === 'string' -> username; typeof id === 'number' -> id)
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.followings(id, options, cb)
Queries /user/listFollowings, see <http://quote.fm/labs/documentation/user/listFollowings>

 * id: ID or Username to query, determinated by type (typeof id === 'string' -> username; typeof id === 'number' -> id)
 * options: an object containing key value pairs for building the parameter list. **optional**
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.listPage(size, page, cb)
Queries /page/get, see <http://quote.fm/labs/documentation/page/get>

 * size: how many entries per page.
 * page: which page
 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error

### quotefm.listCategories(cb)
Queries /category/list, see <http://quote.fm/labs/documentation/category/list>

 * cb: a callback. will be called on result.  
   ```function(err, obj)```
   * err: defined when an error occured, otherwise ```undefined```
   * obj: the actual resultobject, ```undefined``` on error
