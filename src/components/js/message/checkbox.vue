<template>
<div>
 <div class="container">
      <h2>{{title}}</h2>
      <p>{{city}}</p>
      <div class="fenge">
          <div @touchstart="handleok">{{issure}}</div>
          <div  @touchstart="handlecancel">{{iscancel}}</div>
      </div>
  </div>
</div>
 
</template>

<script>
export default {
name:'checkbox'
}
</script>

<style scoped lang="scss">
.container{ 
   
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -60px  0 0 -100px;
    width: 200px;
    height: 120px;
    background-color: #fff;
   box-shadow: 5px 5px 5px rgb(100, 100, 100);
}
.fenge{
    display: flex;
    
    div{
        flex: 1;
        text-align: center;
        line-height: 40px;
        border-top: 1px solid #ccc;
        &:first-child{
            border-right:1px solid #ccc; 
        }
        }

}
.container p,h2 {
   line-height: 40px;
    text-align: center;

}
</style>