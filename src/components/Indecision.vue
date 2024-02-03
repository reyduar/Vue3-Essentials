<template>
  <div>
    <img alt="image" v-if="image" :src="image" />
    <div class="bg-dark"></div>
    <div class="indecision-container">
      <h1>Indecision App</h1>
      <input
        type="text"
        placeholder="Please add your question here"
        v-model="question"
      />
      <div>
        <small>Remember to add question mark simbol at end(?)</small>
      </div>
      <div>
        <h2>{{ question }}</h2>
        <h1 v-if="anwser">{{ anwser === "yes" ? "Si" : "No" }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: null,
      anwser: null,
      image: null,
    };
  },
  watch: {
    question(newQuestion, oldQuestion) {
      if (newQuestion.endsWith("?")) {
        this.submitQuestion();
      }
    },
  },
  methods: {
    async submitQuestion() {
      this.anwser = "Thinking...";
      const { answer, image } = await fetch("https://yesno.wtf/api").then(
        (res) => res.json()
      );
      this.anwser = answer;
      this.image = image;
    },
  },
};
</script>

<style scoped>
img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>
