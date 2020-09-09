<template>
  <nav :class="$style.nav">
    <a
      target="_blank"
      href="https://privacy.adventist.org/"
      rel="noopener"
      :class="$style.link"
    >{{$t('enroll-form-privacy-policy-text')}}</a>
  </nav>
</template>

<script>
export default {};
</script>

<style module>
.link,
.nav {
  display: block;
}
.link {
  text-decoration: underline;
  margin-bottom: 5px;
  font-size: 16px;
  color: inherit;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
.link:active,
.link:focus,
.link:hover {
  color: #2469c7;
}
</style>