<template>
    <div class="container" :class="$style.container">
        <div class="row justify-content-center">
            <div class="col-lg-12" :class="$style.column">
                <div :class="$style.logoInContainer"></div>
                    <div :class="$style.content">
                        <div :class="$style.list">
                            <MenuItem v-for="menuItem in menu.menuItems" :key="menuItem.text" :text="menuItem.text" :target="menuItem.target"/>
                        </div>
                    <div :class="$style.register" :data-target="menu.menuItemHightlight.target" v-on:click="menuItemClickedOn($event)">{{menu.menuItemHightlight.text}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuItem from "./MenuItem";

export default {
    components: {
        MenuItem
    },
    props: ["menu"],
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
.container {
    padding-top: 22px
}

@media (max-width:767.98px) {
    .container {
        padding: 0
    }
}


.column {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media (max-width:991.98px) {
    .column {
        display: none
    }
}

.logoInContainer {
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
    .logoInContainer {
        display: none
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .logoInContainer {
        width: 180px;
        margin-left: -30px
    }
}

.content {
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
    .content {
        width: 100%;
        min-height: 98px;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .content {
        padding: 0 25px
    }
}

.list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

@media (max-width:991.98px) {
    .list {
        display: none
    }
}

.register {
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
    .register {
        display: none
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .register {
        margin-left: 15px;
        padding: 7px 30px
    }
}
</style>