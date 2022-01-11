<template>
  <div style="background: #fed9b7">
    <div class="layout">
      <div class="left">
        <!-- <p class="titleBunny">Congratulations! You have finished a language!</p> -->
        <div class="subtitle">
          <h1>Congratulations!</h1>
          <div style="margin-top: 50px">
            <h2 style="line-height: 1.5em">
              You've completed a language! There is so much to learn out there, so don't give up!
            </h2>
          </div>

          <router-link to="/"><button class="btn">Home</button></router-link>
        </div>
      </div>

      <div class="right">
        <img
          src="../assets/run.png"
          alt="running bunny"
          width="100%"
          height="80%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}

.layout {
  display: flex;
 
  background: #FFAB4C;
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
}

.right {
  padding-top: 50px;
  padding-left: 150px;
  height: 90vh;
}

.left {
  width: 50%;
  padding-top: 5%;
  padding-left: 6%;
}

.titleBunny {
  font-family: "Montserrat", sans-serif;
  font-size: 50px;
  line-height: 110%;
  width: 50%;
}

.subtitle {
  padding-left: 15px;
  margin: 15px;
  line-height: 110%;
}

.btn {
  background-color: #fddc3e;
  color: black;
  margin-top: 30px;
  border-radius: 10px;
  border: 1px solid #707070;
  padding: 10px 20px 10px 20px;
  align-self: flex-end;

  font-size: 25px;
}

.btn:hover {
  background-color: #f7e58d;
  color: black;
}

h1 {
  font-size: 50px;
}
</style>
