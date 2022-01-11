<template>
  <div>
    <div class="subtitle">
      <h1>Select a programming language</h1>
      <div class="layout">
        <div class="left">
          <!-- <form action="HTML1.html">
                        <button class="btn">HTML</button>
                    </form> -->
          <router-link to="/HTML/one"
            ><button class="btn">HTML</button></router-link
          >

          <img src="../assets/bunnyHtml.png" alt="" width="45%" height="70%" />
        </div>
        <div class="right">
          <!-- <form action="HTML2.html">
                        <button class="btn">CSS</button>
                    </form> -->

          <router-link to="/CSS/one"
            ><button class="btn">CSS</button></router-link
          >

          <img src="../assets/bunnyCss.png" alt="" width="50%" height="70%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

;
  /* margin: 80px; */
}

.left {
  border: 10px solid #fddc3e;
  border-radius: 25px;
  padding-bottom: 10px;

  width: 50%;
  margin: 10px;
}

.right {
  border: 10px solid #fddc3e;
  border-radius: 25px;
  padding-bottom: 20px;
  width: 50%;

  margin: 10px;
}

.titleBunny {
  font-family: "Montserrat", sans-serif;
  font-size: 200px;
  font-weight: 800;
  line-height: 110%;
  width: 50%;
}

.subtitle {
  padding-top: 25px;
  text-align: center;

  background: #FFAB4C;
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
}

.btn {
  color: black;
  width: 80%;
  margin: 20px 0 30px 0;
  font-weight: bold;
  font-size: 25px;

  padding: 10px 20px 10px 20px;
}

.btn:hover {
  background-color: #f7e58d;
  color: black;
}

h1 {
  font-size: 50px;
}
</style>
