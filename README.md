# CRUD
CRUD 게시판 만들기

내 개인 프로젝트 SNS만들기
ㄴnode.js가 아니어도 axios를 통해 가능할수잇다.



노드 제이에스(node.js)에서는 서버를 만들 때 http를 포함(require) 시킨 뒤 createServer 메 서드로 응답과 요청을 합니다.

require('http').createServer(function(request, response){
response.writeHead(200,{'content-type':'text/html'});
response.end('<h1>hello world</h1>');
}).listen(200);

기본적인 node.js 서버 생성 코드입니다. 

node.js 더 알아보기
https://nodejs.org/en/
Node.js
nodejs.org

이때 쉽게 생각하면 request(요청)은 웹주소 입력창이고 response(응답)은 웹 화면입니다.


클라이언트(사용자)
요청(request)은 사용자가 주소를 입력할 때 고

구글 화면
응답(response)는 클라이언트에 요청(입력)을 받은 값을 출력해줍니다.
주소를 구분할 때 주소에 패스 네임으로 구분하는데 사용자가 입력(요청) 한 주소에 패스 네임을 찾은 다음에 반환(응답)을 합니다. 

var http = require('http');//http를 사용합니다.
var url =  require('url');//url를 사용합니다.

http.createServer(function(req, res){
var pathname = url.parse(req.url).pathname;//사용자 요청. url을 패스 네임만 저장(해석) 합니다.

if(pathname == '/'){//패스 네임이 / 만 있을 때 실행합니다.
res.writeHead(200,{'Content-type':'text/html'});응답합니다. 서버와 접속이 성공(200) 되고 화면 타입은 html 타입으로
res.end('hello world');//입력 내용을 출력합니다. 'hello world'
}
}).listen(200);//생성한 서버를 실행합니다.


request를 사용할 때는 사용자에 입력 요청이고

response를 사용할 때는 사용자가 주소로 입력(요청)을 할 때입니다.


https://velog.io/@hwang-eunji/nodejs-2-http%EB%AA%A8%EB%93%88%EA%B3%BC-request-response

https://velog.io/@saemsol/01-Node-JS-Express-JS

https://studyingpingu.tistory.com/40?category=935643

https://www.hanumoka.net/2018/11/13/vue-20181113-vue-how-to-make-vue-express-project/


//index.js
const express = require('express') //③번 단계에서 다운받았던 express 모듈을 가져온다.
const app = express() //가져온 express 모듈의 function을 이용해서 새로운 express 앱을 만든다. 🔥
const port = 5000 //포트는 4000번 해도되고, 5000번 해도 된다. -> 이번엔 5000번 포트를 백 서버로 두겠다.

app.get('/', (req, res) => { //express 앱(app)을 넣고, root directory에 오면, 
  res.send('Hello World!') //"Hello World!" 를 출력되게 해준다.
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) //포트 5000번에서 이 앱을 실행한다.
