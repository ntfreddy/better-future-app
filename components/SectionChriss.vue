<template>
    <div id="section-chriss" class="block_2lprE" data-scroll-section>
        <div class="bg_2dWKc"></div>
        <div class="container container_3-ZcA">
            <div class="row row_3MnZK">
                <div class="col-sm-12 col-md-6 col-lg-6 left_31XS0">
                    <div class="chriss_1kHQT"></div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="text-sm-left label_EMXNu">{{data.label}}</div>
                    <p class="text-sm-left title_21Ldo"><span class="highlight_2B_aw">{{data.titleHighlight}}</span><br>{{data.title}}
                    </p>
                    <div class="text-sm-left description_16PS3">{{data.description}}</div>
                    <a :href="data.link" target="_blank" class="action_1Cd56">
                        <div class="circle_1uOac"><svg viewBox="0 0 13 17" class="icon icon--play icon_2SKlE play_wisbX"><use xlink:href="#play"></use></svg></div>
                        <div class="watch__IfGH">{{data.watch}}</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "SectionChriss", 
  props: ["data"]
};
</script>
<style scoped>
.block_2lprE {
    padding: 270px 0 300px;
    margin-top: -40px;
    position: relative;
    overflow: hidden
}

@media (min-width:1440px) and (max-width:1599.98px) {
    .block_2lprE {
        padding: 100px 0 176px
    }
}

@media (max-width:991.98px) {
    .block_2lprE {
        padding-top: 40px;
        padding-bottom: 40px
    }
}

@media (min-width:768px) and (max-width:991.98px) {
    .block_2lprE {
        padding-top: 50px;
        height: 600px
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .block_2lprE {
        padding: 20px 0 80px
    }
}

.bg_2dWKc {
    width: 110%;
    height: 107%;
    position: absolute;
    top: 28%;
    left: -1%;
    background-image: url(../assets/chriss_holland_bg.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}

.container_3-ZcA {
    position: relative
}

@media (max-width:767.98px) {
    .row_3MnZK {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse
    }
}

.left_31XS0 {
    position: relative;
    width: 100%
}

.chriss_1kHQT {
    width: 1000px;
    height: 930px;
    position: absolute;
    top: -280px;
    right: -100px;
    background-image: url(../assets/chriss_master_class.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}

@media (min-width:1440px) and (max-width:1599.98px) {
    .chriss_1kHQT {
        width: 700px;
        height: 650px;
        right: -70px;
        top: -140px
    }
}

@media (max-width:767.98px) {
    .chriss_1kHQT {
        position: relative;
        width: 441px;
        height: 420px;
        top: auto;
        right: auto;
        margin-top: -40px;
        margin-left: -42px
    }
}

@media (min-width:576px) and (max-width:767.98px) {
    .chriss_1kHQT {
        width: 486px;
        height: 450px;
        margin-left: 40px
    }
}

@media (min-width:768px) and (max-width:991.98px) {
    .chriss_1kHQT {
        width: 486px;
        height: 450px;
        right: -65px;
        top: 0
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .chriss_1kHQT {
        width: 520px;
        height: 480px;
        right: 0;
        top: -50px
    }
}

.label_EMXNu {
    font-size: 14px;
    line-height: 145.4%;
    letter-spacing: 1.5px;
    font-weight: 700;
    text-transform: uppercase;
    color: #2469c7;
    margin-top: 70px;
    margin-bottom: 11px
}

@media (max-width:767.98px) {
    .label_EMXNu {
        margin-top: 0
    }
}

@media (min-width:768px) and (max-width:991.98px) {
    .label_EMXNu {
        margin-top: 120px
    }
}

.title_21Ldo {
    font-family: Bebas Neue;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #000;
    width: 460px;
    margin-bottom: 29px
}

.title_21Ldo .highlight_2B_aw {
    color: #2469c7
}

@media (max-width:991.98px) {
    .title_21Ldo {
        width: 100%;
        margin-bottom: 15px
    }
}


.title_21Ldo {
    font-family: Bebas Neue;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #000;
    width: 460px;
    margin-bottom: 29px
}

.title_21Ldo .highlight_2B_aw {
    color: #2469c7
}

@media (max-width:991.98px) {
    .title_21Ldo {
        width: 100%;
        margin-bottom: 15px
    }
}

.description_16PS3 {
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, .6);
    width: 490px;
    margin-bottom: 89px
}

@media (max-width:991.98px) {
    .description_16PS3 {
        width: 100%;
        margin-bottom: 52px
    }
}

@media (prefers-color-scheme:dark) {
    .title_21Ldo {
        color: #fff
    }
    .description_16PS3 {
        color: hsla(0, 0%, 100%, .6)
    }
    .watch__IfGH {
        color: #fff!important
    }
}

.title_21Ldo {
    font-family: Bebas Neue;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    color: #000;
    width: 460px;
    margin-bottom: 29px
}

.title_21Ldo .highlight_2B_aw {
    color: #2469c7
}

@media (max-width:991.98px) {
    .title_21Ldo {
        width: 100%;
        margin-bottom: 15px
    }
}

.action_1Cd56 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    text-decoration: unset!important
}

.action_1Cd56:active .circle_1uOac,
.action_1Cd56:hover .circle_1uOac,
.action_1Cd56:visited .circle_1uOac {
    background: #b3daff
}

.action_1Cd56:active .watch__IfGH,
.action_1Cd56:hover .watch__IfGH,
.action_1Cd56:visited .watch__IfGH {
    color: rgba(0, 0, 0, .8)
}


.circle_1uOac {
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
    -webkit-animation: pulse_1TlEP 3s ease-in infinite;
    animation: pulse_1TlEP 3s ease-in infinite
}

.circle_1uOac:hover {
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

.play_wisbX {
    color: #2469c7;
    width: 20px;
    height: 19px;
    margin-left: 5px;
    margin-top: -1px
}

.watch__IfGH {
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


</style>