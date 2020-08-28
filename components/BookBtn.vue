<template>
  <div class="wrapper_2zQuR">
    <div class="content_h5vCw">
      <div class="image_2dFQy"></div>
      <div class="text_BENpy">
        get a
        <span class="highlight_2hvCI">free book</span> now
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper_2zQuR {
  position: fixed;
  z-index: 100;
  cursor: pointer;
  left: 30px;
  bottom: 30px;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
}
.wrapper_2zQuR:hover .content_h5vCw:before {
  opacity: 0.04;
}
@media (max-width: 767.98px) {
  .wrapper_2zQuR {
    bottom: 18px;
  }
}
.content_h5vCw {
  background: #c9daf0;
  border-radius: 16px;
  padding: 21px 13px 21px 103px;
  position: relative;
}
.content_h5vCw:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  border-radius: 16px;
  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;
}
@media (max-width: 767.98px) {
  .content_h5vCw {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 13px 16px 12px;
  }
  .content_h5vCw,
  .content_h5vCw:before {
    border-radius: 33px;
  }
}
.image_2dFQy {
  position: absolute;
  bottom: -17px;
  left: 0;
  width: 84px;
  height: 133px;
  background-image: url(../assets/book-small.png);
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
@media (max-width: 767.98px) {
  .image_2dFQy {
    display: none;
  }
}
.text_BENpy {
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  text-transform: uppercase;
  color: #000;
  width: 120px;
}
.text_BENpy .highlight_2hvCI {
  color: #2469c7;
}
@media (max-width: 767.98px) {
  .text_BENpy {
    width: auto;
    font-size: 17px;
    text-transform: capitalize;
  }
}
</style>