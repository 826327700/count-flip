# count-flip
适用于vue的数字滚动动画插件。
Number flip animation for vue.
## install（安装）

```
yarn add count-flip
or
npm install count-flip
```

## import（引入）
```
import CountFlip from 'count-flip'

Vue.use(CountFlip)
```

## use（使用）
```
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
```

## props（参数）
prop | type | default | describe
- | :-: | :-: | :-: 
number | Number | 0 | The number should be showed | 
comma | Boolean | true | If need currency format or not,like 123,456 | 
size | Number | 24 | The size of font | 
color | String | #000 | The color of font | 

## screenshot（截图）
![](https://xiaobaozi-1252810292.cos.ap-chengdu.myqcloud.com/count-flip.gif)
