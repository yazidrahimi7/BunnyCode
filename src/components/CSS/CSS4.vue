<template>
  <div class="hello" id="home" style="background-color: #0081a7; color: white;">
    <div class="layout">
      <div class="left">
        <div class="title">
          <h2>CSS Comments</h2>
          <div class="lvl">
            <p>level 4 of 5</p>
          </div>
        </div>

        <br />
        <br />
        <p>
          Comments are used to explain the code, comment also be used as a note for references.
        </p>
        <br />
        <p>
          However, comments will have no effect on your coding. Browsers will also disregard it.
        </p>
        <br />
        <p>
          A CSS comment starts with <code>/*</code> and ends with <code>*/</code>
        </p>
        <br />
        <p>Note: Every language has a different commenting method.</p>

        <p style="margin-top: 40px">Example:</p>
        <br />
        <div class="snip2">
          <pre>/* I'm a CSS comment */</pre>
        </div>

        <br />
        <p>Exercise:</p>
        <br />
        <div class="codeBlock">
          <p>Using CSS method comment out the green text color line.</p>
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
          <router-link to="/CSS/three"
            ><button class="btn prev">Previous</button></router-link
          >

          <div v-if="answer == false">
            <button class="btn prev" :disabled="!answer">Next</button>
          </div>
          <div v-else>
            <router-link to="/CSS/five">
              <button class="btn prev">Next</button>
            </router-link>
          </div>

        </div>
      </div>
      <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////  -->

      <div class="right">
        <!-- output -->
        <div class="banner output">
          <div>
            <h1 v-if="ans() == true">
              .wood {<br />
              text-size: 20px; <br />
              }
            </h1>
          </div>
          <div v-if="ans() == false">
            <h1 id="output" style="margin-top: 30px">
              .wood {<br />
              text-size: 20px; <br />color: green; <br />
              }
            </h1>
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
      userInput: "",
      showAlert: false,
      show: false,
      answer: false,
    };
  },
  methods: {
    ans() {
      let ans1 = "/* color: green; */";
      // let ans1 = "1";
      let ans2 = "/* color:green; */";

      if (this.userInput == ans1) {
        this.answer = true;
        return true;
      } else if (this.userInput == ans2) {
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
  /* width: 50%; */
  /* height: 100vh; */

  padding: 50px;
}

.right {
  background-color: #00afb9;
  background-image: url("../../assets/wood signboard.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: contain;
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
  color: #000;
  font-size: 40px;
  height: 100%;
  padding-left: 50px;

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
