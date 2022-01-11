import Home2 from "./components/Home2.vue";
import Home1 from "./components/Home1.vue"

import HTML1 from "./components/HTML/HTML1.vue";
import HTML2 from "./components/HTML/HTML2.vue";
import HTML3 from "./components/HTML/HTML3.vue";
import HTML4 from "./components/HTML/HTML4.vue";
import HTML5 from "./components/HTML/HTML5.vue";
import HTML6 from "./components/HTML/HTML6.vue";
import HTML7 from "./components/HTML/HTML7.vue";

import CSS1 from "./components/CSS/CSS1.vue";
import CSS2 from "./components/CSS/CSS2.vue";
import CSS3 from "./components/CSS/CSS3.vue";
import CSS4 from "./components/CSS/CSS4.vue";
import CSS5 from "./components/CSS/CSS5.vue";

import congrats from "./components/congrats.vue";

import test from "./components/test.vue";

export const routes = [
  { path: "/", component: Home1 },
  { path: "/select", component: Home2 },
  { path: "/HTML/one", component: HTML1 },
  { path: "/HTML/two", component: HTML2 },
  { path: "/HTML/three", component: HTML3 },
  { path: "/HTML/four", component: HTML4 },
  { path: "/HTML/five", component: HTML5 },
  { path: "/HTML/six", component: HTML6 },
  { path: "/HTML/seven", component: HTML7 },
  
  { path: "/CSS/one", component: CSS1 },
  { path: "/CSS/two", component: CSS2 },
  { path: "/CSS/three", component: CSS3 },
  { path: "/CSS/four", component: CSS4 },
  { path: "/CSS/five", component: CSS5 },

  { path: "/congrats", component: congrats },
  
  { path: "/test", component: test },
  

];
