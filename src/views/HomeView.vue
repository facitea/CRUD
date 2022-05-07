<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg">
    <HelloWorld msg="개발중인 Social Media입니다"/>
    <div>
      <input type="email" placeholder="email을 입력해주세용" id="email" value="" >
    </div>
    <div>
      <input type="password" placeholder="비밀번호를 입력해주세용" id="pw" value="">
    </div>
        <button v-on:click="onLoggin()">로그인</button>
        <button @click="handle_toggle" type="button">회원가입</button>
    </div>

    <div v-if="is_show">
        <div>회원가입</div>

        <div><input type="email" placeholder="사용할 이메일" id="signup_email"></div>
        <div><input type="password" placeholder="사용할비밀번호" id="signup_pw"></div>
        <div><input type="password" placeholder="비밀번호확인" id="signup_pw"></div>

        <button @click="handle_toggle" type="button">
            확인
        </button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  data: function() {
    return {
      is_show: false
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    handle_toggle: function(){ 
      this.is_show = !this.is_show; // #2, #3
    }, //#1: template에서 v-if 또는 v-show의 조건문에 넣을 변수를 data에 추가한다. vue에서는 data를 함수로 정의하고 실제 데이터를 return한다. #2: method 내에서 같은 컴포넌트 내의 데이터에 접근하려면 this를 사용하면 된다. this는 현재 method 자신이 속한 컴포넌트를 가리킨다. (this와 관련하여 함수를 정의할 때 주의할 것.) #3: true면 false로, false면 true로 바꾸기 위해 !로 부정형을 만든다.

    //차후 확인 버튼은 v-if를 사라지게 하는 것이 아닌 회원가입으로 넘어가야한다.
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


<style scoped>
  img {
  width: 300px;
  height: 150px;
  object-fit: cover;
}
</style>