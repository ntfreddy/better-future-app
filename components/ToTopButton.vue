<template>
  <div class="wrapper_1dNaL" style>
    <div class="btn_35Gd1">
      <svg viewBox="0 0 23 32" class="icon icon--to-top icon_2SKlE arrows_37UQa">
        <use xlink:href="#to-top">
          <svg fill="none" viewBox="0 0 23 32" id="to-top" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12.5L11.5 2l10 10" stroke="#fff" stroke-width="2" />
            <path opacity=".6" d="M1 21.5L11.5 11l10 10" stroke="#fff" stroke-width="2" />
            <path opacity=".3" d="M1 30.5L11.5 20l10 10" stroke="#fff" stroke-width="2" />
          </svg>
        </use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper_1dNaL {
  border-radius: 50%;
  position: fixed;
  z-index: 100;
  cursor: pointer;
  right: 90px;
  bottom: 16px;
}
.wrapper_1dNaL .btn_35Gd1 {
  padding: 0;
  width: 60px;
  height: 60px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  line-height: 0;
  background: #2469c7;
  -webkit-box-shadow: 0 6px 10px rgba(36, 105, 199, 0.4);
  box-shadow: 0 6px 10px rgba(36, 105, 199, 0.4);
}
.wrapper_1dNaL .btn_35Gd1:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
  border-radius: 50%;
}
.wrapper_1dNaL.active_1Zsv1 .btn_35Gd1:before,
.wrapper_1dNaL:focus .btn_35Gd1:before,
.wrapper_1dNaL:hover .btn_35Gd1:before {
  opacity: 0.08;
}
@media (max-width: 767.98px) {
  .wrapper_1dNaL {
    right: 83px;
  }
}
.arrows_37UQa {
  font-size: 25px;
  z-index: 3;
}
</style>