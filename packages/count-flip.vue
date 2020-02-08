<template>
    <div class="box-item" :style="{fontSize:size+'px'}">
        <li
            :class="{'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
            v-for="(item,index) in numberString"
            :key="index"
        >
            <span v-if="!isNaN(item)">
                <i :ref="'numberItem'+index" :id="'numberItem'+index" :style="{fontSize:size+'px',color:color}">0123456789</i>
            </span>
            <span class="comma" :style="{fontSize:size+'px',color:color}" v-else>{{item}}</span>
        </li>
    </div>
</template>
<script>
export default {
    name:"CountFlip",
    props:{
        number:{
            type:Number,
            default:0,
        },
        color:{
            type:String,
            default:'#000'
        },
        size:{
            type:Number,
            default:24,
        },
        comma:{
            type:Boolean,
            default:true,
        }
    },
    data() {
        return {
            numberString:[]
        };
    },
    watch:{
        number:{
            handler(val){
                this.toStringNumber(val)
                setTimeout(() => {
                    this.setNumberTransform()
                }, 10);
            },
            immediate:true
        }
    },
    mounted() {
    },
    methods: {
        // 设置文字滚动
        setNumberTransform() {
            // 结合CSS 对数字字符进行滚动,
            for (let index = 0; index < this.numberString.length; index++) {
                var item=this.numberString[index]
                if(!isNaN(item)){
                    var elem=this.$refs['numberItem'+index][0]
                    elem.style.transform = `translate(-50%, -${this.numberString[index] * 10}%)`;
                }
            }
        },
        // 处理总订单数字
        toStringNumber(num) {
            if(this.comma)num=num.toLocaleString('en-US')
            num=num.toString()
            this.numberString = num.split("");
        },
    }
};
</script>
<style scoped lang='scss'>
.box-item {
    display: inline-block;
  position: relative;
  font-size: 50px;
  text-align: center;
  list-style: none;
  color: #2d7cff;
  writing-mode: vertical-lr;
  text-orientation: upright;
  /*文字禁止编辑*/
  user-select: none;
  /* overflow: hidden; */
}
/* 默认逗号设置 */
.mark-item {
  width: 10px;
  margin-right: 5px;
  line-height: 10px;
  position: relative;
  & > span {
    position: absolute;
    width: 100%;
    bottom: 0.2rem;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}
/*滚动数字设置*/
.number-item {
  width: 0.8em;
  height: 1em;
  padding: 5px 0;
  list-style: none;
  & > span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
    & > i {
      font-style: normal;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      transition: transform 1s ease-in-out;
      letter-spacing: 10px;
    }
  }
}
.number-item:last-child {
  margin-right: 0;
}
</style>