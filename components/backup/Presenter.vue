<template>
    <div class="col-sm-12 col-lg-6" :class="[$style.content, $style.cami]">
        <div :class="[$style.avatar]" :style="'background-image: url(' + avatarPicture + ');'">
            <div :class="$style.border"></div>
        </div>
        <div :class="$style.label">{{label}}</div>
        <div :class="$style.title"></div>
        <div :class="$style.subtitle">
            {{subtitle}}
            <span :class="$style.name">{{name}}</span>
        </div>
        <a :href="link" target="_blank" :class="$style.action">
            <div :class="$style.circle">
                <svg viewBox="0 0 13 17" class="icon icon--play" :class="[$style.icon, $style.play]">
                    <use xlink:href="#play">
                        <svg viewbox="0 0 13 17" id="play" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 8.5L0 17V0l13 8.5z"></path>
                        </svg>
                    </use>
                </svg>
            </div>
            <div :class="$style.watch">
               {{watch}}
            </div>
        </a>
        <img :src="mainPicture" :class="$style.speaker">
    </div>
</template>
<script>
    export default {
        name: "Presenter",
        props: ["label","subtitle","name","watch","mainPicture","avatarPicture","link","presenterClass"]
    };
</script>
<style module>

.content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-top: 110px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: -15px
}

@media (min-width:768px) and (max-width:991.98px) {
    .content {
        margin-top: 50px;
        margin-bottom: 50px
    }
}

@media (max-width:991.98px) {
    .content {
        padding-top: 63px;
        padding-bottom: 25px;
        margin-top: 33px;
        margin-bottom: 33px;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        background: rgba(0, 0, 0, .1);
        -webkit-backdrop-filter: blur(50px);
        backdrop-filter: blur(50px);
        border-radius: 21px;
        border: 2px solid hsla(0, 0%, 100%, .1)
    }
}

@media (max-width:575.98px) {
    .content {
        margin: 33px 13px
    }
}

.avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: relative;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -95px
}

@media (min-width:992px) {
    .avatar {
        display: none
    }
}

.border {
    border-radius: 50%;
    border: 1px solid #fff;
    width: 70px;
    height: 70px;
    position: absolute;
    top: 0px;
    left: 0px
}

@media (min-width:992px) {
    .border {
        display: none
    }
}

.label {
    font-size: 14px;
    line-height: 145.4%;
    letter-spacing: 7px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 11px
}

@media (max-width:991.98px) {
    .label {
        font-size: 12px;
        letter-spacing: 3.8px;
        margin-top: 28px;
        margin-bottom: 4px
    }
}

.title {
    width: 250px;
    height: 43px;
    background-image: url(../../assets/digging_deeper.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 6px;
    margin-left: -20px
}

.subtitle {
    font-size: 31px;
    line-height: 39px;
    color: #fff;
    font-weight: 500;
    font-family: Arial
}

@media (max-width:991.98px) {
    .subtitle {
        font-size: 24px;
        line-height: 28px
    }
}

.name {
    font-family: Bebas Neue;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 34px;
    letter-spacing: 0;
    color: #fff;
    text-transform: uppercase
}

.action {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 40px;
    cursor: pointer;
    text-decoration: unset!important
}

.action:hover .circle {
    background: #b3daff
}

.action:hover .watch {
    color: hsla(0, 0%, 100%, .8)
}

@media (max-width:991.98px) {
    .action:hover .circle {
        background: hsla(0, 0%, 100%, 0)
    }
}

@media (max-width:991.98px) {
    .action {
        margin-top: 16px
    }
}

.circle {
    width: 46px;
    height: 46px;
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
    margin-right: 15px;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in;
    -webkit-animation: pulse_3rp4Y 3s ease-in infinite;
    animation: pulse_3rp4Y 3s ease-in infinite
}

.circle:hover {
    background: #b3daff
}

@media (max-width:991.98px) {
    .circle {
        -webkit-animation: none;
        animation: none;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        background: hsla(0, 0%, 100%, 0)
    }
}

.play {
    color: #2469c7;
    width: 13px;
    height: 10px;
    margin-left: 3px;
    margin-top: -1px
}

.icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1em;
    vertical-align: middle
}

.icon use {
    color: inherit;
    fill: currentColor
}

.icon.strokedG use {
    stroke: currentColor
}

.icon.hover-fill use,
.icon.nofill_1GHxw use {
    fill: none
}

.icon.hover-fill use:hover {
    fill: currentColor
}

.icon.active-fill use {
    fill: none
}

.icon.active-fill.is-active use {
    fill: currentColor
}

.icon.big {
    width: 2em;
    height: 2em
}

.icon.large {
    width: 3em;
    height: 3em
}

.watch {
    font-size: 13px;
    line-height: 15px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: Roboto;
    color: #fff;
    font-weight: 500;
    margin-bottom: 5px;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in
}

@media (max-width:991.98px) {
    .watch {
        margin-bottom: 0
    }
}

.speaker {
    width: 295px;
    height: 422px;
    -o-object-fit: contain;
    object-fit: contain;
    margin-right: 43px;
    margin-top: 4px
}

@media (max-width:991.98px) {
    .speaker {
        display: none
    }
}


@-webkit-keyframes pulse_3rp4Y {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    50% {
        -webkit-transform: scale(.85);
        transform: scale(.85)
    }
    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes pulse_3rp4Y {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    50% {
        -webkit-transform: scale(.85);
        transform: scale(.85)
    }
    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}
</style>