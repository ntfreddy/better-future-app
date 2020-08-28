<template></template>

<script>
export default {};
</script>

<style>
.load_8uSHT {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.loading_3yud6 {
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: 2px solid hsla(0, 0%, 100%, 0);
  border-top: 3px solid #fff;
  -webkit-animation: spin_2-SqP 1s ease-in infinite;
  animation: spin_2-SqP 1s ease-in infinite;
  position: relative;
}
.circle_19Dbl {
  margin: -2px;
  width: 62px;
  height: 62px;
  border: 2px solid hsla(0, 0%, 100%, 0.2);
  border-radius: 50%;
  position: absolute;
  top: -1px;
  left: 1px;
}
@-webkit-keyframes spin_2-SqP {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes spin_2-SqP {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
</style>