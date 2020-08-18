<template>
    <div id="section-cami" class="block_1kwPF" data-scroll-section>
        <div class="container container_1nDss">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="text-sm-left label_1v_he">{{data.label}}</div>
                    <p class="text-sm-left title_3S5fi"><span class="highlight_D11lW">{{data.titleHighlight}}</span><br>{{data.title}}
                    </p>
                    <div class="text-sm-left description_1oWHe">{{data.description}}</div>
                    <a :href="data.link" target="_blank" class="action_3hz2H">
                        <div class="circle_2A8CD"><svg viewBox="0 0 13 17" class="icon icon--play icon_2SKlE play_2Mql_"><use xlink:href="#play"></use></svg></div>
                        <div class="watch_302vL">{{data.watch}}</div>
                    </a>
                </div>
                <div class="col-sm-12 col-lg-6 right_3BIDQ">
                    <div class="cami_3Fv9A"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "SectionCami", 
  props: ["data"]
};
</script>
<style scoped>
.block_1kwPF {
    padding: 360px 0 200px
}

@media (min-width:1440px) and (max-width:1599.98px) {
    .block_1kwPF {
        padding: 150px 0 140px
    }
}

@media (max-width:991.98px) {
    .block_1kwPF {
        padding-top: 30px;
        padding-bottom: 80px
    }
}

@media (min-width:768px) and (max-width:991.98px) {
    .block_1kwPF {
        padding-top: 150px;
        height: 600px
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .block_1kwPF {
        padding: 150px 0 140px
    }
}

.container_1nDss {
    position: relative
}

.label_1v_he {
    font-size: 14px;
    line-height: 145.4%;
    letter-spacing: 1.5px;
    font-weight: 700;
    text-transform: uppercase;
    color: #2469c7;
    margin-bottom: 11px
}

.title_3S5fi {
    font-family: Bebas Neue;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #000;
    width: 460px;
    margin-bottom: 29px
}

.title_3S5fi .highlight_D11lW {
    color: #2469c7
}

@media (max-width:991.98px) {
    .title_3S5fi {
        width: 100%;
        margin-bottom: 15px
    }
}

.description_1oWHe {
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, .6);
    width: 490px;
    margin-bottom: 89px
}

@media (max-width:991.98px) {
    .description_1oWHe {
        width: 100%;
        margin-bottom: 52px
    }
}

@media (prefers-color-scheme:dark) {
    .title_3S5fi {
        color: #fff
    }
    .description_1oWHe {
        color: hsla(0, 0%, 100%, .6)
    }
    .watch_302vL {
        color: #fff!important
    }
}

.action_3hz2H {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    text-decoration: unset!important
}

.action_3hz2H:active .circle_2A8CD,
.action_3hz2H:hover .circle_2A8CD,
.action_3hz2H:visited .circle_2A8CD {
    background: #b3daff
}

.action_3hz2H:active .watch_302vL,
.action_3hz2H:hover .watch_302vL,
.action_3hz2H:visited .watch_302vL {
    color: rgba(0, 0, 0, .8)
}

.circle_2A8CD {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    left: 396px;
    top: 1096px;
    background: #dbeeff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 24px;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in;
    -webkit-animation: pulse_2gr3U 3s ease-in infinite;
    animation: pulse_2gr3U 3s ease-in infinite
}

.circle_2A8CD:hover {
    background: #b3daff
}


.icon_2SKlE {
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: middle
}

.icon_2SKlE use {
    color: inherit;
    fill: currentColor
}

.icon_2SKlE.stroked_1yLoG use {
    stroke: currentColor
}

.icon_2SKlE.hover-fill_2F_u8 use,
.icon_2SKlE.nofill_1GHxw use {
    fill: none
}

.icon_2SKlE.hover-fill_2F_u8 use:hover {
    fill: currentColor
}

.icon_2SKlE.active-fill_1ZpLy use {
    fill: none
}

.icon_2SKlE.active-fill_1ZpLy.is-active_2JuBa use {
    fill: currentColor
}

.icon_2SKlE.big_ata0o {
    width: 2em;
    height: 2em
}

.icon_2SKlE.large_24yv8 {
    width: 3em;
    height: 3em
}

.play_2Mql_ {
    color: #2469c7;
    width: 20px;
    height: 19px;
    margin-left: 5px;
    margin-top: -1px
}

.watch_302vL {
    font-size: 21px;
    line-height: 25px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: Roboto;
    color: #000;
    font-weight: 500;
    margin-bottom: 7px;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in
}

@media (prefers-color-scheme:dark) {
    .title_3S5fi {
        color: #fff
    }
    .description_1oWHe {
        color: hsla(0, 0%, 100%, .6)
    }
    .watch_302vL {
        color: #fff!important
    }
}

.right_3BIDQ {
    position: relative
}

.cami_3Fv9A {
    width: 1000px;
    height: 930px;
    position: absolute;
    top: -280px;
    right: -360px;
    background-image: url(../assets/cami_master_class.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}

@media (min-width:1440px) and (max-width:1599.98px) {
    .cami_3Fv9A {
        width: 700px;
        height: 650px;
        right: -100px;
        top: -140px
    }
}

@media (max-width:767.98px) {
    .cami_3Fv9A {
        position: relative;
        width: 441px;
        height: 420px;
        top: auto;
        right: auto;
        margin-left: -42px;
        margin-top: 30px
    }
}

@media (min-width:576px) and (max-width:767.98px) {
    .cami_3Fv9A {
        width: 486px;
        height: 450px;
        margin-left: 0;
        margin-top: 0
    }
}

@media (min-width:768px) and (max-width:991.98px) {
    .cami_3Fv9A {
        width: 486px;
        height: 450px;
        right: -70px;
        top: -400px
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .cami_3Fv9A {
        width: 520px;
        height: 480px;
        right: -20px;
        top: -50px
    }
}

</style>