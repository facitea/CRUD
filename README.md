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



npm은 당연히 설치되어있는데 왜그러는지 몰라 한참을 찾아보다가 npm 캐시를 지워주면 된다는 말을 듣고 캐시를 지우고 다시 package.json에 정의된 모듈을 설치하였더니 잘 된다!

1npm cache clean --force #npm 캐시 삭제
2npm install #package.json 의존하는 모듈 설치
만약 npm install을 시행해도, 프로젝트 실행이 안된다면, npm run serve 중 필요한 라이브러리를 설치하라고 뜰테니 해당 라이브러리를 설치하고 시행하면 잘 된다.

npm은 당연히 설치되어있는데 왜그러는지 몰라 한참을 찾아보다가 npm 캐시를 지워주면 된다는 말을 듣고 캐시를 지우고 다시 package.json에 정의된 모듈을 설치하였더니 잘 된다!

1npm cache clean --force #npm 캐시 삭제
2npm install #package.json 의존하는 모듈 설치
만약 npm install을 시행해도, 프로젝트 실행이 안된다면, npm run serve 중 필요한 라이브러리를 설치하라고 뜰테니 해당 라이브러리를 설치하고 시행하면 잘 된다.

npm은 당연히 설치되어있는데 왜그러는지 몰라 한참을 찾아보다가 npm 캐시를 지워주면 된다는 말을 듣고 캐시를 지우고 다시 package.json에 정의된 모듈을 설치하였더니 잘 된다!

1npm cache clean --force #npm 캐시 삭제
2npm install #package.json 의존하는 모듈 설치
만약 npm install을 시행해도, 프로젝트 실행이 안된다면, npm run serve 중 필요한 라이브러리를 설치하라고 뜰테니 해당 라이브러리를 설치하고 시행하면 잘 된다.

https://velog.io/@zofqofhtltm8015/Axios-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0-%ED%95%B4%EB%B3%B4%EA%B8%B0


axios 쓰는 법
https://bongra.tistory.com/122



https://reqres.in/ 이용해서 로그인 구현함.

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="개발중인 Social Media입니다"/>
    <div>
        <input type="email" placeholder="email을 입력해주세용" id="email" value="" >
        </div>
        <div>
            <input type="password" placeholder="비밀번호를 입력해주세용" id="pw" value="">
        </div>
        <button v-on:click="onLoggin()">hey</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    onLoggin(){
            const email = document.getElementById("email");
            const password = document.getElementById('pw')
            axios({
                method:"POST",
                url: 'https://reqres.in/api/login',
                data:{
                    "email": email.value,
                    "password": password.value
                }
            }).then((res)=>{
                console.log(res);
            }).catch(error=>{
                console.log(error);
                throw new Error(error);
            });
  }
}


}
</script>

{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}

아이디 비번임

fake 서버 통해 통신하면서 느낀 점
vue에서는 methods에 함수를 정의해야 사용가능하다. 그냥 자바스크립트 처럼 쓰는게 아니다.


https://sedangdang.tistory.com/147
깃 폴더 바꾸고 싶을때 참고 숨김 git폴더를 옮기자.

git commit -m "~~~" 해줘야 오류가 안뜬다

★급 아이디어☆★
트위터처럼 글을 뜨게 해주지만
개인 페이지에서는 일반 게시판처럼 관리자 모드로 글을 볼수 

# 22/5/19
아예 1년 반 퇴사 전까지 서비스를 만들어서 보완 유지보수 하자
이런 생각 가지고 서비스 비스무리하게 시도할 생각조차 못하는 사람들이 많을거다
나는 그 틈새시장을 노려야겠다
코딩테스트는 일단 후순위로 미루자

vue 무한스크롤 파이어베이스 댓글 채팅
남의 포트폴리오 사이트 보면서 벤치마킹까지
조금 더 세부적이고 실용적이도록

http://www.mins01.com/ 이런 사이트 참고

면접 질문 정리를 통해 서당개식 공부 완성

https://okky.kr/article/842696 네카라 입사방법

https://lts0606.tistory.com/515 공부 

# 22/5/20
html을 통해 무한스크롤을 만드는 방법을 찾아보았다.
innerhtml을 생성하는 식을 만드는 것을 보았는데,
생각해보니 vue에서는 v-html을 쓴다. 이걸 활용하자.

console.log(`${num1} + ${num2} = ${num1+num2} 입니다.`);

백틱과 $를 사용하면 더 명확해진다.

그런데 이런 방법이면 게시글은 넣을 수 있겠지만
댓글, 좋아요 공유 등의 버튼 상호작용이 불가능해진다
새로운 방법을 찾거나 컴포넌트화를해버리거나

무한스크롤은 초기 15개 정도 정보를 가져오고
추가로 생성되는 것에 대해서 10개씩 로드를 하자
ㄴ브라우저 축소 25% 비율까지 낮춰보니 이정도 된다.

게시물 마지막 로드한 순서대로 로드하는 방법을 찾아야한다.
지금의 방식대로는 매번 로드하면 1번부터 로드된다

그럼 let 변수안에 숫자를 하나씩 추가되게 만들고 페이지 새로고침만 안하면 계속 새로운 글을 볼 수 있지 않나?
ㄴ근데 그럼 새로고침하면 첨부터 또 봐야함
ㄴ이렇게하면 새글은 맨앞에 로딩되게 해야겠군

# 22/5/22
- 앞으로의 방향성 정리!!
1. Vue기반으로 자바스크립트를 공부한다.
2. 백엔드 개발은 하지 말고 Firebase 기반으로 개발한다.


로그인/회원가입을 분리시켰으나 아직 firebase 오류가 있다.
그래서 일단 보류하고 게시판부터 만들어보기로 했다.
https://blog.naver.com/kimdongy1000/221739900520

잘 생각해보면 로그인, 회원가입, 글쓰기, 수정하기, 댓글달기 정도만 해도 나는 누군가보다는 앞서가는 것이다.
느려도 천천히 차근차근 하면 된다.

# 22/5/23
- Vue -> Next.js -> Typescript 순으로 학습하자
- 22/6~23/12 19개월 동안
- vue 6개월 -> Next.js 6개월 -> Typescript 6개월 진행
- 즉, 22년 12월까지 Vue 공부와 type 공부를 하면 된다.
- 프로젝트에는 안 써도 Jquery도 

# 22/5/24
- 포트폴리오에 어떤 내용을 쓸 지 미리 큰 틀을 그려놓고 내가 그걸 채워나가는 것도 재미있겠다!
- 클론코딩 + 내 서비스 틀을 잡으면 좋겠다
- 남들이 만든 포트폴리오 

- SM으로 가되 방향성을 정하자.
- 포털로 가고 싶으나 대기업이 많으니 쇼핑몰로 시선을 

https://www.wappalyzer.com/lookup/naver.com
https://builtwith.com/naver.com

https://www.gabia.com/member/member_register.php 호크톡.net 제일 

# 22/5/26
- 클라이언트, 서버, DB의 관계
- 나는 무엇을 모르는가
ㄴ Vue와 서버는 어떻게 연결하는가
ㄴ 서버 언어는 어떻게 구성되는가
ㄴ 미들웨어란 무엇인가

- 파이어베이스만 제대로 연결되면 게시판도 별 것 없다..

https://marshmello.tistory.com/64 - vue express sql

그러나!!
★파이어베이스 먼저 하고 아쉬우면 서버 연동하자★

디자인 신경 쓰지 말고 일단 게시글이 제대로 표현되도록 하기!
- 제일 먼저 할 것! 무한스크롤이 아니라 게시글이 표현되도록 하는 것!!!!!!!!!!!!!!

파이어베이스 자바스크립트 구글에 검색해보기

https://console.firebase.google.com/u/1/project/hawktalk-b0a71/settings/general/web:Njk4MzMyNjktMmE2ZS00OTA5LWI5OWQtNDE3MWIzZTIxZTA2
https://firebase.google.com/docs/database/web/read-and-write?hl=ko&authuser=1

이 두사이트 firebase 근본 페이지를 기반으로 만들자

★★★ 비전공자들을 위한 직장인들을 위한 인터넷강의 플랫폼 ★★★
ㄴ 강의도 하고 수강후기는 게시판 형식으로 만들면 굿?!

- 괴발개발
- 재활코딩(직업교육), 생활코콩딩
- 비전코딩(비전공)
- 밥벌로퍼
- 비전캠프(비전공캠프)
- 코딩빠사삭
- 코딥러닝머스크(co., lmk)
- 코지보딩
- 코딩꾸러기(주니어코딩-줄여서 준코)

코딩아나바다
디벨로퍼
비트코딩
코드허브
폰데브
x.codeos
코드햄스터
레드코드
코드튜브
FBI코딩
코딩노리
코딩365 
코딩추천개발기(코추발기)
코딩노리방
바둑이코딩
코딩마약(코마)
대박코딩
자기개발

# 22/5/27
- 나를 더 혹독하게 다루기로 했다
- 비전공자들을 위한 직장인들을 위한 인터넷강의 플랫폼을 만들자
- 인프런 클론 코딩을 하고 기능을 구현하자

- 전체 공통 - 반응형/vue.js/슬라이더 많이필요/
- 회사입장 글쓰는 공간
- 구직자 글쓰는 공간
- 로드맵
- 강의페이지 / 강의 

# 22/5/29
- 인프런 클론 코딩 및 서비스 제작 시작

- router에서 보여주는 component 파일은 views 폴더에 넣는다. 그 외에는 components 폴더다.Permalink

- vue를 통해 image slider를 만드는 일은 쉽지 않다.. 벌써부터 난관이다.

- 프로그래밍 강의 뿐만 아니라 일반 강의도 확장하는 방식으로
- 일정 수준 되면 한달 정액제 같이 산타토익 스타일로 가자

# 22/5/30
- <img alt="Vue logo" src="./assets/logo.png" /> 형식으로 하면 사진 불러올 수 있는 것 같은데? 집가서 해봐야겠다.
- 인프런은 반응형 2갈래로 만들었음
- flex, grid를 적절히 이용하는게 중요함
- 네비게이션바를 컴포넌트화 하자! 그래야 로그인 후 화면 구성이 원활하다

- 강의 => 기본 강의 형식 갖추기 => 로그인 회원만 가능
- 로드맵 => 차후 개발
- 멘토링 => 차후 개발
- 커뮤니티 => 이게 
- 채용정보 => 일단 데이터 스크래핑으로 대체

# 22/6/1
- 최재민한테 물어볼것. 서버를 어떻게 연결시키는지.
- https://velog.io/@shelly/vue-node-%EB%B0%B0%ED%8F%AC-vue%EC%99%80-node-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0
- Vue를 node에 배포해야한다!


https://medium.com/hivelab-dev/vue-express-mysql-part1-98f68408d444 이거 보면 도움 많이 될 듯

spring - 서버구축
ㄴ자바 코드 안에 HTML이 다 들어간다
ㄴCSS 고정값 헤더/바디 따로 만들어두면 컴포넌트화가 된다 include - 기본 html로 하는거임 옛날 방식ㅇㅇ 근데 많이 씀

내가 고민인 것
vue + node + 몽고db
vue cli - npm run serve

- https://opentutorials.org/course/3370 생활코딩 

# 22/6/2
- https://mrw0119.tistory.com/137 vue node 심화 

# 22/6/8
- 라매개발자 영상 참고하기
- 느낀점 : vue로 로그인 + CRUD만 표현하자 + Node로 백엔드까지 구현하면 자기만족도 될듯
- 적고 명확하게
