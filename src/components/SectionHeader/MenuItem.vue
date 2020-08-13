<template>
    <div class="link_3ep5W">
        <div class="line_2xwRg"></div>
        <div class="title_lf2AC">{{text}}</div>
    </div>
</template>
<script>
    export default {
        name: "MenuItem",
        props: ["text"]
    };
</script>
<style>
.link_3ep5W {
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

.link_3ep5W:not(:last-child) {
    margin-right: 31px
}

@media (min-width:992px) and (max-width:1199.98px) {
    .link_3ep5W:not(:last-child) {
        margin-right: 15px
    }
}

.link_3ep5W:hover .title_lf2AC {
    color: #fff
}

.link_3ep5W:hover .number_-BpaA {
    display: none
}

.link_3ep5W:hover .line_2xwRg {
    display: block;
    height: 1px;
    background: #fff;
    -webkit-animation: increase_Ktm8F .3s ease-in;
    animation: increase_Ktm8F .3s ease-in
}

.line_2xwRg {
    display: none;
    padding-top: 2px;
    margin-bottom: 6px;
    margin-top: 4px;
    width: 40px;
    position: absolute;
    bottom: 30px
}

.title_lf2AC {
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in
}

.title_lf2AC:active,
.title_lf2AC:focus,
.title_lf2AC:hover {
    color: #2469c7
}
</style>