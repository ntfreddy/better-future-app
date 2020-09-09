<template>
  <div xs="12" class="col-lg-4" :class="$style.col">
    <div :id="id" :class="[$style.card,$style.item-0]">
      <div :class="$style.top">
        <div :class="$style.circle"></div>
            <a href="#pray-hands">
                <img :src="icon" alt="" width="53" height="54" class="icon" :class="[$style.icon, $style.image]" />
            </a>
      </div>
      <div>
        <div :class="$style.title">{{title}}</div>
        <div :class="$style.desc" >{{desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        props: ["id","title","desc", "icon"]
    };
</script>
<style module>
@media (max-width:991.98px) {
    .col {
        margin-bottom: 30px
    }
}

.card {
    width: 100%;
    min-height: 138px;
    height: 100%;
    border: 2px solid rgba(36, 105, 199, .6);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 16px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    cursor: pointer;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    padding: 30px 40px 60px
}

.card:hover {
    border-color: #2469c7;
    background: #2469c7
}

.card:hover .title {
    color: #fff
}

.card:hover .desc {
    color: hsla(0, 0%, 100%, .6)
}

.card:hover .circle {
    width: 80px;
    height: 80px;
    top: -17px;
    left: -13px
}

@media (max-width:991.98px) {
    .card {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 20px 35px
    }
}

.item-0 .circle {
    top: -33%;
    left: 7%
}

.top {
    margin-bottom: 37px;
    position: relative
}

@media (max-width:991.98px) {
    .top {
        margin-right: 38px;
        margin-bottom: 0
    }
}

.image {
    font-size: 52px;
    color: #2469c7;
    position: relative
}

.circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #f7f0e7;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transition: all .3s ease-in;
    transition: all .3s ease-in
}

.title {
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    margin-bottom: 13px;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    text-transform: uppercase;
    color: #333
}

@media (max-width:991.98px) {
    .title {
        font-size: 19px;
        line-height: 22px;
        margin-bottom: 8px;
        text-transform: unset
    }
}

.desc {
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 0, 0, .6);
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    width: 180px
}

@media (prefers-color-scheme:dark) {
    .circle {
        background-color: #2469c7
    }
    .image,
    .title {
        color: #fff
    }
    .desc {
        color: hsla(0, 0%, 100%, .6)
    }
}

.card:hover .circle {
    width: 80px;
    height: 80px;
    top: -17px;
    left: -13px
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

.icon.stroked_1yLoG use {
    stroke: currentColor
}

.icon.hover-fill_2F_u8 use,
.icon.nofill_1GHxw use {
    fill: none
}

.icon.hover-fill_2F_u8 use:hover {
    fill: currentColor
}

.icon.active-fill_1ZpLy use {
    fill: none
}

.icon.active-fill_1ZpLy.is-active_2JuBa use {
    fill: currentColor
}

.icon.big{
    width: 2em;
    height: 2em
}

.icon.large {
    width: 3em;
    height: 3em
}
</style>