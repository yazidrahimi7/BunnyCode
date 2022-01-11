<template>
  <div>
    <div class="layout">
      <div class="left">
        <p class="titleBunny">BUNNY CODE</p>
        <div class="subtitle">
          <h1>Let's learn coding!</h1>
          <router-link to="/select"
            ><button class="btn">START</button></router-link
          >
        </div>
      </div>

      <div class="right">
        <img
          src="../assets/bunnyBasket.png"
          alt="bunny in basket"
          width="70%"
          height="70%"
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
/* height: auto;
  width: 100%; */

  background: #FFAB4C;
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
}

.left {
  width: 50%;
  /* padding-top: 5%;
  padding-left: 6%; */

  padding: 100px;

  height: 100%;
}

.right {
  width: 50%;
  padding: 50px;

  height: 100%;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;

  margin-top: 60px;
}

.titleBunny {
  font-family: "Montserrat", sans-serif;
  font-size: 10em;
  line-height: 110%;
  width: 50%;
  font-weight: 800;
}

.subtitle {
  padding-left: 15px;
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
