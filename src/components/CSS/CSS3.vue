<template>
  <div class="hello" id="home" style="background-color: #0081a7; color: white">
    <div class="layout">
      <div class="left">
        <div class="title">
          <h2>CSS internal, External, Inline</h2>
          <div class="lvl">
            <p>level 3 of 5</p>
          </div>
        </div>

        <br />
        <br />
        <p>
          Internal CSS or embedded CSS requires you to implement CSS inside
          <code>&lt;style&gt; &lt;/style&gt;</code> tag in the
          <code>&lt;head&gt;</code> section.
        </p>
        <br />
        <p>
          Similar to Internal CSS, External CSS requires you to implement the CSS you've
          learned but outside of your HTML file. where you can create a file
          named "style.css" for example.
        </p>
        <br />
        <p>
          Then, you need to call that file in your HTML file to import it by
          using <br />
          <code
            >&lt;link rel='stylesheet' type='text/css'
            href='style.css'&gt;</code
          >
        </p>
        <br />

        <p>
          Meanwhile, Inline CSS is different from Internal and External because
          you implement the CSS inline with your HTML tag. Usually, Inline CSS
          is used for a quick change only, it is not practical to use it as the main
          CSS. Let's look at an Inline CSS example.
        </p>
        <br />

        <p style="margin-top: 20px">Example:</p>
        <br />
        <div class="snip2">
          <pre>
&lt;p style='text-align: center;'&gt; I'm centered &lt;/p&gt;</pre
          >
        </div>

        <p style="margin-top: 50px">Exercise:</p>
        <br />
        <div class="codeBlock">
          <p>Try to apply Inline CSS to center the text.</p>
          <label for="inp" class="inp">
            <input
              type="text"
              id="inp userInput"
              v-model="userInput"
              placeholder=" "
            />
            <span class="label">Write your code here</span>
            <span class="focus-bg"></span>
          </label>
          <br />

          <button class="btn chc" id="ans" @click="show = !show">
            Check answer
          </button>

          <transition
            enter-active-class="animate__animated animate__slideInDown animate__faster"
            leave-active-class="animate__animated animate__fadeOut animate__faster"
          >
            <div
              v-if="ans()"
              v-show="show"
              @click="show = !show"
              class="alert alert-success"
            >
              Correct!
            </div>
            <div
              v-else
              v-show="show"
              @click="show = !show"
              class="alert alert-danger"
            >
              Almost there, try again!
            </div>
          </transition>
        </div>
        <div class="navi">
          <router-link to="/CSS/two"
            ><button class="btn prev">Previous</button></router-link
          >

          <div v-if="answer == false">
            <button class="btn prev" :disabled="!answer">Next</button>
          </div>
          <div v-else>
            <router-link to="/CSS/four">
              <button class="btn prev">Next</button>
            </router-link>
          </div>

        </div>
      </div>
      <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////  -->

      <div class="right">
        <!-- output -->
        <div class="banner">
          <h1 v-if="ans() == false" class="wrongoutput">
            <img src="../../assets/bunnyCss2.png" alt="bunnyStanding" class="imgBunny">
          </h1>

          <div v-if="ans()" class="output">
           <img src="../../assets/bunnyCss2.png" alt="bunnyStanding" class="imgBunny">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      userInput: "<p> center me! </p>",
      showAlert: false,
      show: false,
      answer: false,
    };
  },
  methods: {
    ans() {
      let ans1 = "<p style='text-align: center;'> center me! </p>";

      if (this.userInput == ans1) {
        this.answer = true;
        return true;
      } else return false;
    },
  },
};
</script>

<style scoped>
/* font-family: 'Montserrat', sans-serif;
    font-family: 'Open Sans', sans-serif; */

code {
  color: #fff;
  background-color: #7C99AC;
}

h1 {
  font-family: "Montserrat", sans-serif;
  /* font-weight: bold; */
}

p {
  font-family: "Open Sans", sans-serif;
  margin: 0;
}

a {
  color: #023e8a;
}

.banner {
  height: 100%;
}

.wrongoutput {
  display: flex;
  align-items: center;

  height: 100%;
  /* border: 1px solid red; */
}

.layout {
  height: auto;
  width: 100%;

  display: flex;
}

.left {
  /* margin: auto; */
  width: 50%;
  /* height: 100vh; */

  padding: 50px;
}

.imgBunny {
  width: 30%;
  height: 30%;
}

.right {
  background-color: #00afb9;
  /* background-image: url("../../assets/anology.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: contain; */
  width: 50%;
  height: 44em;
  border-radius: 0 0 0 25px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lvl {
  border-radius: 25px;
  background-color: #00afb9;
  width: 150px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.snip {
  border-radius: 5px;
  background-color: #00afb9;
  width: 80%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 40px 20px 10px 0;
}

.snip2 {
  border-radius: 5px;
  background-color: #00afb9;
  width: 80%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 0 10px 0;
}

pre {
  font-size: 18px;
  margin: 0;
}

.codeBlock {
  background-color: #9f9f9f;
  padding: 30px;
  width: 100%;
  border-radius: 5px;
  color: black;

  display: flex;
  flex-direction: column;
}

.userInput {
  width: 50%;
  margin-top: 15px;
  border-radius: 5px;
  outline: none;
}

.chc {
  background-color: #fddc3e;
  margin: 10px 0 30px 0;
  width: 20%;
  border-radius: 10px;
  border: 1px solid #707070;
  padding: 5px;
  align-self: flex-end;
}

.prev {
  background-color: #fddc3e;
  border: 1px solid #707070;
  padding: 5px 20px 5px 20px;
  margin: 20px;
  margin-right: 5px;
}

.nex {
  background-color: #fddc3e;
  border: 1px solid #707070;
  margin: 20px;
  margin-right: 0;
  padding: 5px 20px 5px 20px;
}

.chc:hover,
.prev:hover,
.nex:hover {
  transform: scale(1.15);
}

.navi {
  display: flex;
  justify-content: flex-end;

  /* margin-top: 10%; */
}

.output {
  /* border: 1px solid green; */
  width: 100%;
  color: #fff;
  font-size: 40px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.alert {
  cursor: pointer;
}

/* css input */
.inp {
  position: relative;
  margin: 20px 0;
  width: 100%;
  max-width: 350px;
  border-radius: 3px;
  overflow: hidden;
}
.inp .label {
  position: absolute;
  top: 15px;
  left: 12px;
  font-size: 18px;
  color: #535353;
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
}
.inp .focus-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
}
.inp input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  background: #fff;
  box-shadow: inset 0 -1px 0 #fff;
  color: #000;
  transition: all 0.15s ease;
}
.inp input:hover {
  background: rgb(197, 197, 197);
  box-shadow: inset 0 -1px 0 rgb(197, 197, 197);
}
.inp input:not(:placeholder-shown) + .label {
  color: transparent;
  transform: translate3d(0, -12px, 0) scale(0.75);
  content: " ";
}
.inp input:focus {
  background: #fff;
  outline: none;
  box-shadow: inset 0 -2px 0 #0077ff;
}
.inp input:focus + .label {
  color: #0077ff;
  transform: translate3d(0, -12px, 0) scale(0.75);
}
.inp input:focus + .label + .focus-bg {
  transform: scaleX(1);
  transition: all 0.1s ease;
}
/* end */
</style>
