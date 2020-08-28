<template>
  <div :class="$style.copyright">
    © 2020 Adventist World Radio. All rights reserved.</div>
</template>

<script>
export default {

}
</script>

<style module>
.copyright {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    color: hsla(0, 0%, 100%, .4)
}

@media (max-width:767.98px) {
    .copyright {
        max-width: 310px;
        font-size: 13px
    }
}

</style>