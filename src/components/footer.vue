<template>
  <div class='footerbox'>
    <div class='textbox'>
<div>
  <p>Join us!<br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br><a href="#">Sign up</a></p>
</div>
<div>
<p>Customer service<br><a href="#">Help</a><br><a href="#"> Fan Guarantee</a><br><a href="#"> Gift card</a><br><a href="#">Cancellation insurance</a>
</p>
</div>
<div>
  <p>Get to know us<br><a href="#">About us</a><br><a href="#">Our blog</a><br><a href="#">Company culture</a></p>
</div>
</div>
<hr>
<div class='icoinbox'>
  <a><i class="fa fa-facebook"></i></a>
  <a><i class="fa fa-twitter"></i></a>
  <a><i class="fa fa-dribbble"> </i></a>
</div>



  </div>
</template>
<style scoped lang="scss">
.footerbox{
  background-color: #102038;
  height: 300px;
  display: flex;
flex-direction: column;
  padding-top: 40px;
}
.textbox{
  display: flex;
  justify-content: space-around;
}
.icoinbox{
    display: flex;
    justify-content: center;
}
p,a {
  color:white;
}
a:hover{
  color:rgb(154, 206, 241);
}
i{
  color:white;
}
</style>