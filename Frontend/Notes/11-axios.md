> 前置知识
>
> ​	Promise
>
> ​	AJAX

## 0 - json-server

快速搭建 http 服务

### 0.1 - 安装

- 安装 JSON Server

    ```sh
    npm install -g json-server
    ```

- 创建 `db.json 文件`

    ```json
    {
      "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
      ],
      "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
      ],
      "profile": { "name": "typicode" }
    }
    ```

- 启动 JSON Server

    ```sh
    json-server --watch db.json
    ```

    

## 1 - axios 简介

### 1.1 - 简介

- Axios 是一个基于 *promise* 网络请求库，作用于[`node.js`](https://nodejs.org/) 和浏览器中
-  它是 *isomorphic* 的(即同一套代码可以运行在浏览器和node.js中)
- **服务端**它使用原生 node.js `http` 模块, 而在**客户端** (浏览端) 则使用 `XMLHttpRequests`

### 1.2 - 特性

- 从 <span style="color: #0099dd">浏览器</span> 创建  <span style="color: #e3371e">XMLHttpRequests</span> ；从 <span style="color: #0099dd">node.js</span> 创建 <span style="color: #e3371e">http</span> 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换JSON数据
- 客户端支持防御[XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

## 2 - axios 安装

### 2.1 - npm

```sh
$ npm install axios -S
```

```js
// 需要使用 axios 的文件中导入，例如 main.js
import axios from 'axios'
```

### 2.2 - CDN

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<!-- OR -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## 3 - 基本使用

### 3.0 - axios API

通过向 `axios` 传递相关配置来创建请求

#### 3.0.1 - axios(config)

```html
    <div class="container">
        <h2 class="page-header">axios 基本使用</h2>
        <button class="btn btn-primary">发送GET请求</button>
        <button class="btn btn-warning">发送POST请求</button>
        <button class="btn btn-success">发送PUT请求</button>
        <button class="btn btn-danger">发送DELETE请求</button>
    </div>
```

```js
        const btns = document.querySelectorAll('button')
        
        // GET 请求 - 获取数据
        btns[0].onclick = function () {
            // 发送 ajax 请求
            axios({
                // 请求类型
                method: 'GET',
                // 请求 url
                url: 'http://localhost:3000/posts/2',
            }).then(response => {
                console.log(response);
            })
        }

        // POST 请求 - 添加数据
        btns[1].onclick = function () {
            // 发送 ajax 请求
            axios({
                // 请求类型
                method: 'POST',
                // 请求 url
                url: 'http://localhost:3000/posts',
                // 设置请求体
                data: {
                    title: "我是一篇文章的标题",
                    author: "小编"
                }
            }).then(response => {
                console.log(response);
            })
        }
        
        // PUT 请求 - 更新数据
        btns[2].onclick = function () {
            // 发送 ajax 请求
            axios({
                // 请求类型
                method: 'PUT',
                // 请求 url
                url: 'http://localhost:3000/posts/3',
                // 设置请求体
                data: {
                    title: "还是说说天气吧",
                    author: "真名出岫"
                }
            }).then(response => {
                console.log(response);
            })
        }
        
        // DELETE 请求 - 删除数据
        btns[3].onclick = function () {
            // 发送 ajax 请求
            axios({
                // 请求类型
                method: 'delete',
                // 请求 url
                url: 'http://localhost:3000/posts/3',
            }).then(response => {
                console.log(response);
            })
        }
```

#### 3.0.1 - axios(url[, config])

```js
// 发送 GET 请求（默认的方法）
axios('http://localhost:3000/posts/2')
```



### 3.1 - 请求方式的别名

为方便起见，已为所有支持的请求方法提供了别名

- axios.**request**(config)
- axios.**get**(**url**[, config])
- axios.**delete**(**url**[, config])
- axios.**head**(**url**[, config])
- axios.**options**(**url**[, config])
- axios.**post**(**url**[, data[, config]])
- axios.**put**(**url**[, data[, config]])
- axios.**patch**(**url**[, data[, config]])

在使用别名方法时， `url`、`method`、`data` 这些属性都不必在配置中指定

#### 3.1.1 - axios.request()

语法：`axios.request(config)`

```js
axios.request({
    method: 'GET',
    url: 'http://localhost:3000/comments'
}).then(response => {
    console.log(response);
})
```

#### 3.1.2 - axios.get()

语法：`axios.get(url[, config])`

```js
axios.get(
    'http://localhost:3000/comments/2',
).then(response => {
    console.log(response);
})
```

#### 3.1.3 - axios.**post**()

语法：`axios.post(url[, data[, config]])`

```js
axios.post(
    'http://localhost:3000/comments',
    {
        "body": "有手就行嘛~",
        "postId": 2
    }
).then(response => {
    console.log(response);
})
```

#### 3.1.4 - axios.put()

语法：`axios.put(url[, data[, config]])`

```js
axios.put(
    'http://localhost:3000/comments/4',
    {
        "body": "可惜你没有手",
        "postId": 2
    }
).then(response => {
    console.log(response);
})
```

#### 3.1.5 - axios.delete()

语法：`axios.delete(url[, config])`

```js
axios.delete(
    'http://localhost:3000/comments/4',
).then(response => {
    console.log(response);
})
```

#### 3.1.6 - axios.head()

语法：`axios.head(url[, config])`

#### 3.1.7 - axios.options()

语法：`axios.options(url[, config])`

#### 3.1.8 - axios.patch()

语法：`axios.patch(url[, data[, config]])`

### 3.2 - 创建实例

可以自定义配置新建一个 axios 实例，所创建的实例对象与 axios 对象的功能几乎一样

语法：`axios.create([config])`

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

应用场景：从多个服务器调接口时使用，

## 4 - 配置

### 4.1 - 请求配置

这些是创建请求时可以用的配置选项

- 只有 `url` 是必需的
- 如果没有指定 `method`，请求将默认使用 `get` 方法

```js
{
   // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // default

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data, headers) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

   // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求花费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

   // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default（跨域时不携带 cookie）

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

 // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

   // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

   // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

   // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

   // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

### 4.2 - 响应结构

某个请求的响应包含以下信息

```js
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

   // `config` 是为请求提供的配置信息
  config: {},
 // 'request'
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
```

#### 4.2.1 - 使用 `then`

使用 `then` 时，你将接收下面这样的响应 :

```js
axios.get('/user/12345')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

#### 4.2.2 - 使用 `catch`

使用 `catch` 时，或传递 [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 作为 `then` 的第二个参数时，响应可以通过 `error` 对象可被使用

### 4.3 - 配置默认值

可以指定将被用在各个请求的配置默认值

#### 4.3.1 - 全局 axios 默认值

```js
// main.js 文件中全局配置
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

#### 4.3.2 - 自定义实例默认值

```js
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

#### 4.3.3 - 配置的优先顺序

配置会以一个优先顺序进行合并，后者将优先于前者

- 在 `lib/defaults.js` 找到的库的默认值	↓
- 实例的 `defaults` 属性	↓
- 请求的 `config` 参数	↓

```js
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
  timeout: 5000
});
```

## 5 - 拦截器

在请求或响应被 `then` 或 `catch` 处理前拦截它们

### 5.1 - 添加请求拦截器

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

### 5.2 - 移除拦截器

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

### 5.3 - 为自定义 axios 实例添加拦截器

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

## 6 - 错误处理

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

可以使用 `validateStatus` 配置选项定义一个自定义 HTTP 状态码的错误范围

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  }
})
```

## 7 - 取消

使用 *cancel token* 取消请求

> Axios 的 cancel token API 基于[cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises)，它还处于第一阶段。

### 7.1 - CancelToken.source

使用 `CancelToken.source` 工厂方法创建 cancel token

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
     // 处理错误
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');
```

### 7.2 - 传递一个 executor 函数

还可以通过传递一个 executor 函数到 `CancelToken` 的构造函数来创建 cancel token

```js
`const CancelToken = axios.CancelToken;let cancel;axios.get('/user/12345', {  cancelToken: new CancelToken(function executor(c) {    // executor 函数接收一个 cancel 函数作为参数    cancel = c;  })});// cancel the requestcancel();`
```

> 注意: 可以使用同一个 cancel token 取消多个请求

