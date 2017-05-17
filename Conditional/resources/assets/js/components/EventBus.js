
export const EventBus = new Vue({
    methods: {
        dataChanged(caller, value) {
            this.$emit('dataWasChanged', caller, value);
        },
    }
});
