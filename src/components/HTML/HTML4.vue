<template>
  <div class="hello" id="home" style="background-color: #fed9b7">
    <div class="layout">
      <div class="left">
        <div class="title">
          <h2>HTML Links</h2>
          <div class="lvl">
            <p>level 4 of 7</p>
          </div>
        </div>

        <br />
        <br />
        <p>
          Links are found on nearly all web pages. Links allow users to click
          their way from page to page.
        </p>
        <br />
        <p>
          HTML links are hyperlinks. You can click on a link to jump to another
          page.
        </p>
        <br />
        <p>
          The HTML <code>&lt;a&gt;</code> tag defines a hyperlink. The most important
          attribute of the <code>&lt;a&gt;</code> element is the "href" attribute, which
          indicates the link's destination.
        </p>

        <p style="margin-top: 40px">Example:</p>
        <br />
        <div class="snip2">
          <pre>&lt;a href="www.google.com"&gt; Google &lt;/a&gt;</pre>
        </div>

        <br />

        <p>Exercise:</p>
        <br />
        <div class="codeBlock">
          <p>Click this link and see where it takes you.</p>
          <a
            href="https://www.google.com"
            target="_blank"
            @click="
              show = true;
              answer = true;
            "
            >Go to Google.com</a
          >
          <div v-if="show" class="alert alert-success" @click="show = false">
            Correct!
          </div>
        </div>
        <div class="navi">
          <router-link to="/HTML/three"
            ><button class="btn prev" style="margin: 0px;">Previous</button></router-link
          >
          <div v-if="!answer">
            <button class="btn prev" :disabled="!answer">Next</button>
          </div>
          <div v-else>
            <router-link to="/HTML/five"
              ><button class="btn prev">Next</button></router-link
            >
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
      show: false,
      answer: false,
    };
  },
};
</script>

<style scoped>
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
  margin: 20px 0;
  font-size: 20px;
}

.layout {
  /* height: 100%;
  width: 100%; */

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
  margin: auto;
  width: 65%;
  height: 100%;

  padding: 50px;
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
  width: 80%;
  color: #000;
  font-size: 40px;
}

.alert {
  cursor: pointer;
}
</style>
