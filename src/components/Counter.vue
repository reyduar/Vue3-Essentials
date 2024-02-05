<template>
  <div>
    <h1>{{ title }} - {{ initialCount }}</h1>
    <p>{{ count }} <sup>2</sup> = {{ squareCounter }}</p>
    <p></p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    initialCount: {
      type: Number,
      default: 100,
      validator: (value) => value >= 0,
    },
  },
  data() {
    return {
      count: this.initialCount,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    getSquared() {
      return this.count * this.count;
    },
  },
  computed: {
    squareCounter() {
      return this.count * this.count;
    },
    customTitle() {
      return this.title ? this.title : "Counter";
    },
  },
};
</script>

<style>
button {
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #45a049;
  transition: 0.3s ease-in-out;
}
</style>
