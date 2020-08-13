<template>
    <div class="container container_150oR">
        <div class="row justify-content-center">
            <div class="col-lg-12 column_81flN">
                <div class="logoInContainer_1csj4"></div>
                    <div class="content_39AhX">
                        <div class="list_1xenz">
                            <MenuItem v-for="menuItem in menu.menuItems" :key="menuItem" :text="menuItem.text" />
                        </div>
                    <div class="register_2g_Un">{{menu.hightlightedMenuItem.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuItem from "./MenuItem";

export default {
  name: "Header",
  components: {
    MenuItem
  },
  props: ["menu"]
};
</script>

<style>
.container_150oR {
    padding-top: 22px
}

@media (max-width:767.98px) {
    .container_150oR {
        padding: 0
    }
}


.column_81flN {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media (max-width:991.98px) {
    .column_81flN {
        display: none
    }
}

.logoInContainer_1csj4 {
    background: url(../../assets/unlocking-logo.svg);
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 202px;
    height: 98px;
    margin-left: -35px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media (max-width:991.98px) {
    .logoInContainer_1csj4 {
        display: none
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .logoInContainer_1csj4 {
        width: 180px;
        margin-left: -30px
    }
}

.content_39AhX {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative
}

@media (min-width:992px) {
    .content_39AhX {
        width: 100%;
        min-height: 98px;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .content_39AhX {
        padding: 0 25px
    }
}

.list_1xenz {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

@media (max-width:991.98px) {
    .list_1xenz {
        display: none
    }
}

.register_2g_Un {
    padding: 7px 24px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    border-radius: 40px;
    border: 2px solid #fff;
    margin-left: 30px;
    cursor: pointer;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media (max-width:991.98px) {
    .register_2g_Un {
        display: none
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .register_2g_Un {
        margin-left: 15px;
        padding: 7px 30px
    }
}
</style>