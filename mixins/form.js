export default {
    data: function() {
        return {
            inFlyToTheRegisterForm: false,
        }
    },
    methods: {
        send: function(id, values) {

        },
        goToRegister: function(scrollToCallback) {
            var thisObject = this;
            this.inFlyToTheRegisterForm = true;
            scrollToCallback(document.getElementById("section-enroll"), -50, 500, true, true, function() {
                thisObject.inFlyToTheRegisterForm = false;
                var firstNameElement = document.getElementById("reg-form-firstname");
                firstNameElement && firstNameElement.focus();
            })
        }
    },
    mounted: function() {}

}