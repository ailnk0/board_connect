<template>
  <div id="message">
    <h2>Welcome</h2>
    <h1>Firebase Hosting Setup Complete</h1>
    <p>
      You're seeing this because you've successfully setup Firebase Hosting. Now
      it's time to go build something extraordinary!
    </p>
    <ul>
      <li class="m-1" v-for="(value, key) in firebase" :key="value">
        Firebase <a target="_blank" href="#">{{ key.toUpperCase() }}</a> Loading
        {{ getResult(value) }}.
      </li>
    </ul>

    <a
      id="docs"
      target="_blank"
      href="https://firebase.google.com/docs/hosting/"
      >Open Hosting Documentation</a
    >
  </div>
</template>

<script>
import { firebase } from "../main.js";

export default {
  name: "App",
  beforeMount() {},
  data() {
    return {
      firebase: firebase,
    };
  },
  methods: {
    getResult(res) {
      return res ? "Successed" : "Failed";
    },
  },
  components: {},
};
</script>

<style>
#message {
  max-width: 360px;
  margin: 100px auto 16px;
  padding: 32px 24px;
  border-radius: 3px;
  border: 1px solid var(--color-border);
}

#message h2 {
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 8px;
}

#message h1 {
  font-size: 22px;
  font-weight: 300;
  margin: 0 0 16px;
}

#message p {
  line-height: 140%;
  margin: 16px 0 24px;
  font-size: 14px;
}

#message li {
  list-style-type: none;
  line-height: 140%;
  font-size: 14px;
}

#docs {
  display: block;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}
</style>
