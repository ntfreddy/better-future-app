<template>
    <div :class="$style.link" :data-target="target" v-on:click="menuItemClickedOn($event)">
        <div :class="$style.line"></div>
        <div :class="$style.title">{{text}}</div>
    </div>
</template>
<script>
    export default {
        props: ["text", "target", "lmS"],
        methods: {
            menuItemClickedOn: function(event){
                const targetId = event.currentTarget.getAttribute("data-target");
                const targetElement = document.querySelector(targetId);
                this.lmS.scrollTo(targetElement);
            }
        }
    };
</script>
<style module>
.link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    min-width: 40px;
    position: relative
}

.link:not(:last-child) {
    margin-right: 31px
}

@media (min-width:992px) and (max-width:1199.98px) {
    .link:not(:last-child) {
        margin-right: 15px
    }
}

.link:hover .title {
    color: #fff
}

.link:hover .number_-BpaA {
    display: none
}

.link:hover .line {
    display: block;
    height: 1px;
    background: #fff;
    -webkit-animation: increase_Ktm8F .3s ease-in;
    animation: increase_Ktm8F .3s ease-in
}

.line {
    display: none;
    padding-top: 2px;
    margin-bottom: 6px;
    margin-top: 4px;
    width: 40px;
    position: absolute;
    bottom: 30px
}

.title {
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in
}

.title:active,
.title:focus,
.title:hover {
    color: #2469c7
}
</style>