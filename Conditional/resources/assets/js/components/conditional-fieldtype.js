import {EventBus} from "./EventBus.js";


Vue.component('conditional-fieldtype', {

    template: `
        <div>
            <toggle-fieldtype v-show="shouldShow('toggle')" :data.sync="data" :name="name" :config="config"></toggle-fieldtype>
            <suggest-fieldtype v-show="shouldShow('select')" :data.sync="data" :name="name" :config="selectConfig" ></suggest-fieldtype>
        <div>
    `,

    props: ['data', 'config', 'name'],

    data: function() {
        return {
            conditionsMet: false
        }
    },

    computed: {
        selectConfig: function() {
            return {
                type: "suggest",
                max_items: this.config.max_items,
                options: _.map(this.config.options, (text, value) => ({text: text, value: value}))
            }
        },
     },

    methods: {
        isType: function(type) {
            return this.config.sub_type === type
        },
        shouldShow(type) {
            return (this.isType(type) && (!this.config.show_conditions || this.conditionsMet))
        },
        sendData: function(value) {
            if (Array.isArray(value)) {
                EventBus.dataChanged(this.config.name, value[0]);
            } else {
                EventBus.dataChanged(this.config.name, value);
            }
        }
    },

    watch: {
        'data': function() {
            this.sendData(this.data);
         },
    },

    ready: function() {
        EventBus.$on('dataWasChanged', (caller, value) => {
            if (this.config.show_conditions && (this.config.show_conditions.field === caller)) {
                this.conditionsMet = this.config.show_conditions.value === value;
                if (this.conditionsMet) {
                    // send on this components data to those depending on it
                    this.sendData(this.data);
                } else {
                    // if this component is being hidden, send null so depending components hide
                    this.sendData(null);
                    this.data = null;
                }
            }
        });

        // gotta send the message on the next tick cuz not everything is loaded yet
        this.$nextTick(function() {
            // send the event on load so that visibilty is set on page load
            this.sendData(this.data);
        });
    }
});
