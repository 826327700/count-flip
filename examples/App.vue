<template>
  <div id="app">
      <div class="row">
          <span>带小数点：</span><CountFlip :number="5201314"></CountFlip>
      </div>
      <div class="row">
          <span>不带小数点：</span><CountFlip :number="5201314" :comma="false"></CountFlip>
      </div>
      <div class="row">
          <span>自定义字号：</span><CountFlip :number="5201314" :size="50"></CountFlip>
      </div>
      <div class="row">
          <span>自定义颜色：</span><CountFlip :number="5201314" color="#ff6600"></CountFlip>
      </div>
      <div class="row">
          <span>动态切换数值：</span><CountFlip :number="number" color="#ff6600"></CountFlip>
          <button @click="change">切换数字</button>
      </div>
  </div>
</template>
<script>
export default {
    name: 'Home',
    data(){
        return{
            number:5201314
        }
    },
    mounted(){
    },
    methods:{
        change(){
            this.number=5212499
        }
    }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.row{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
}
</style>
