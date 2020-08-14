<template>
  <div xs="12" class="col-lg-4 col_ecetJ">
    <div :id="id" class="card_2sjRH item-0_5Y_Vc">
      <div class="top_1aI4o">
        <div class="circle_33t-c"></div>
        <!--svg viewBox="0 0 53 54" class="icon icon--pray-hands icon_2SKlE image_3yEvF">
          <use xlink:href="#pray-hands">#shadow-root (closed)</use>
        </svg-->
            <a href="#pray-hands">
                <img :src="icon" alt="" width="53" height="54" class="icon icon_2SKlE image_3yEvF" />
            </a>
      </div>
      <div>
        <div class="title_1Gsa9">{{title}}</div>
        <div class="desc_2y2rj" >{{desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "Action",
        props: ["id","title","desc", "icon"]
    };
</script>
<style scoped>
@media (max-width:991.98px) {
    .col_ecetJ {
        margin-bottom: 30px
    }
}

.card_2sjRH {
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

.card_2sjRH:hover {
    border-color: #2469c7;
    background: #2469c7
}

.card_2sjRH:hover .title_1Gsa9 {
    color: #fff
}

.card_2sjRH:hover .desc_2y2rj {
    color: hsla(0, 0%, 100%, .6)
}

.card_2sjRH:hover .circle_33t-c {
    width: 80px;
    height: 80px;
    top: -17px;
    left: -13px
}

@media (max-width:991.98px) {
    .card_2sjRH {
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

.item-0_5Y_Vc .circle_33t-c {
    top: -33%;
    left: 7%
}

.top_1aI4o {
    margin-bottom: 37px;
    position: relative
}

@media (max-width:991.98px) {
    .top_1aI4o {
        margin-right: 38px;
        margin-bottom: 0
    }
}

.image_3yEvF {
    font-size: 52px;
    color: #2469c7;
    position: relative
}

.circle_33t-c {
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

.title_1Gsa9 {
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
    .title_1Gsa9 {
        font-size: 19px;
        line-height: 22px;
        margin-bottom: 8px;
        text-transform: unset
    }
}

.desc_2y2rj {
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 0, 0, .6);
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    width: 180px
}

@media (prefers-color-scheme:dark) {
    .circle_33t-c {
        background-color: #2469c7
    }
    .image_3yEvF,
    .title_1Gsa9 {
        color: #fff
    }
    .desc_2y2rj {
        color: hsla(0, 0%, 100%, .6)
    }
}

.card_2sjRH:hover .circle_33t-c {
    width: 80px;
    height: 80px;
    top: -17px;
    left: -13px
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
</style>