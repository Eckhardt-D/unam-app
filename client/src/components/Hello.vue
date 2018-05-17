<template>
  <div class="hello">
    <div class="container">
      <div v-for="(set, index) in chapterTwo" class="card questionBlock my-3" :key="set.q">
        <p class="mt-2">{{ index + 1 }}: {{ set.q }}</p>
        <textarea @focus="closeDialog(index)" v-model="answer[index]" class="form-control mx-2 my-2 w-75 mx-auto" type="text" name="answer" placeholder="please answer here"></textarea>
        <button @click="runCheck(index)" class="btn btn-primary w-75 my-2 mx-2 mx-auto" type="button" name="button">Check your answer</button>
          <div v-if="check[index]" class="alert alert-info mt-1 mx-3" role="alert">
            <h3>The Correct answer is:</h3>
            <p class="green">{{ set.a }}</p>
            <p><small>Accuracy: {{ rating[index] }}%</small></p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import similarity from 'string-similarity'

export default {
  name: 'hello',
  data () {
    return {
      chapterTwo: this.$store.state.chapterTwo,
      answer: [],
      check: [],
      rating: [],
      overallRating: 0
    }
  },
  methods: {
    runCheck(index) {
      var s1 = this.answer[index].toString()
      var s2 = this.chapterTwo[index].a;

      var stringSimilarity = similarity.compareTwoStrings(s1, s2);
      this.rating[index] = (stringSimilarity * 100).toString().slice(0, 4)

      for(var i = 0; i < this.chapterTwo.length; i++){
        this.check.push(false)
      }
      this.check[index] = true
    },
    closeDialog(index) {
      for (var i =0; i < this.check.length; i++){
        this.check[i] = false
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
