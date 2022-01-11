<template>
  <div class="hello" id="home" style="background-color: #fed9b7">
    <div class="layout">
      <div class="left">
        <div class="title">
          <h2>HTML Paragraphs</h2>
          <div class="lvl">
            <p>level 3 of 7</p>
          </div>
        </div>

        <br />
        <br />
        <p>
          A paragraph is iften a block of text that begins on a new line. The HTML <code>&lt;p&gt;</code> element defines a paragraph and browsers
          automatically add some white space (a margin) before and after a
          paragraph.
          <br />
        </p>

        <p style="margin-top: 40px">Example:</p>
        <br />
        <div class="snip2">
          <pre>&lt;p&gt; This is a paragraph &lt;/p&gt;</pre>
        </div>

        <p style="margin-top: 40px">Rules:</p>
        <br />
        <p>
          The <code>&lt;hr&gt;</code> tag defines a thematic break in an HTML page, and is
          most often displayed as a horizontal rule. <br /><br />
        </p>
        <p>
          The <code>&lt;hr&gt;</code> element is used to separate content (or define a
          change) in an HTML page. In other words, it creates a line.
          <br /><br />
        </p>
        <p>
          The HTML <code>&lt;br&gt;</code> element defines a line break. Use <code>&lt;br&gt;</code> if
          you want a line break (a new line) without starting a new
          paragraph.<br /><br />
        </p>

        <br />
        <p>Exercise:</p>
        <br />
        <div class="codeBlock">
          <p>Add a paragraph tags with "Do your homework" to the To-do list.</p>
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
          <router-link to="/HTML/two"
            ><button class="btn prev">Previous</button></router-link
          >

         <div v-if="answer == false">
            <button class="btn prev" :disabled="!answer">Next</button>
          </div>
          <div v-else>
            <router-link to="/HTML/four">
              <button class="btn prev">Next</button>
            </router-link>
          </div>

        </div>
      </div>
      <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////  -->

      <div class="right">
        <!-- output -->
        <div v-if="ans()" class="banner">
          <h1 id="output" class="output animate__animated animate__tada">
            Do your homework
          </h1>
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
      userInput: "",
      showAlert: false,
      show: false,
      answer: false,
    };
  },
  methods: {
    ans() {
      let ans1 = "<p>Do your homework</p>";
      let ans2 = "<p> Do your homework </p>";

      if (this.userInput == ans1) {
        this.answer = true;
        return true;
      } else if (this.userInput == ans2) {
        this.answer = true;
        return true;
      }
    },
  },
};
</script>

<style scoped>
/* font-family: 'Montserrat', sans-serif;
    font-family: 'Open Sans', sans-serif; */

/* html {
  height: 100%;
  background-color: #fed9b7;
} */

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

.layout {
  /* height: auto;
  width: 100%; */

  background: #fed9b7;
  height: 100%;
  width: 100%;
  /* position: absolute; */
  right: 0;
  top: 0;

  display: flex;
}

.left {
  width: 50%;
  height: 100%;

  padding: 50px;
}

.right {
  background-color: #fdfcdc;
  background-image: url("../../assets/todo.png");
  background-repeat: no-repeat;
  background-size: 200% 300%;
  background-position: center;
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
  background-color: #fdfcdc;
  width: 150px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.snip {
  border-radius: 5px;
  background-color: #fdfcdc;
  width: 80%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 40px 20px 10px 0;
}

.snip2 {
  border-radius: 5px;
  background-color: #fdfcdc;
  width: 80%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 0 40px 0;
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
}

.output {
  text-align: center;
  position: absolute;
  margin: 100px;
  padding-top: 175px;
  padding-right: 70px;
  width: 80%;
  color: #000;
  font-size: 30px;
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
