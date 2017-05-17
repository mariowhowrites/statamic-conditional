/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar EventBus = exports.EventBus = new Vue({\n    methods: {\n        dataChanged: function dataChanged(caller, value) {\n            this.$emit('dataWasChanged', caller, value);\n        }\n    }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvRXZlbnRCdXMuanM/MjBjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbnZhciBFdmVudEJ1cyA9IGV4cG9ydHMuRXZlbnRCdXMgPSBuZXcgVnVlKHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGRhdGFDaGFuZ2VkOiBmdW5jdGlvbiBkYXRhQ2hhbmdlZChjYWxsZXIsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkYXRhV2FzQ2hhbmdlZCcsIGNhbGxlciwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9FdmVudEJ1cy5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("'use strict';\n\nvar _EventBus = __webpack_require__(0);\n\nVue.component('conditional-fieldtype', {\n\n    template: '\\n        <div>\\n            <toggle-fieldtype v-show=\"shouldShow(\\'toggle\\')\" :data.sync=\"data\" :name=\"name\" :config=\"config\"></toggle-fieldtype>\\n            <suggest-fieldtype v-show=\"shouldShow(\\'select\\')\" :data.sync=\"data\" :name=\"name\" :config=\"selectConfig\" ></suggest-fieldtype>\\n        <div>\\n    ',\n\n    props: ['data', 'config', 'name'],\n\n    data: function data() {\n        return {\n            conditionsMet: false\n        };\n    },\n\n    computed: {\n        selectConfig: function selectConfig() {\n            return {\n                type: \"suggest\",\n                max_items: this.config.max_items,\n                options: _.map(this.config.options, function (text, value) {\n                    return { text: text, value: value };\n                })\n            };\n        }\n    },\n\n    methods: {\n        isType: function isType(type) {\n            return this.config.sub_type === type;\n        },\n        shouldShow: function shouldShow(type) {\n            return this.isType(type) && (!this.config.show_conditions || this.conditionsMet);\n        },\n\n        sendData: function sendData(value) {\n            if (Array.isArray(value)) {\n                _EventBus.EventBus.dataChanged(this.config.name, value[0]);\n            } else {\n                _EventBus.EventBus.dataChanged(this.config.name, value);\n            }\n        }\n    },\n\n    watch: {\n        'data': function data() {\n            this.sendData(this.data);\n        }\n    },\n\n    ready: function ready() {\n        var _this = this;\n\n        _EventBus.EventBus.$on('dataWasChanged', function (caller, value) {\n            if (_this.config.show_conditions && _this.config.show_conditions.field === caller) {\n                _this.conditionsMet = _this.config.show_conditions.value === value;\n                if (_this.conditionsMet) {\n                    // send on this components data to those depending on it\n                    _this.sendData(_this.data);\n                } else {\n                    // if this component is being hidden, send null so depending components hide\n                    _this.sendData(null);\n                    _this.data = null;\n                }\n            }\n        });\n\n        // gotta send the message on the next tick cuz not everything is loaded yet\n        this.$nextTick(function () {\n            // send the event on load so that visibilty is set on page load\n            this.sendData(this.data);\n        });\n    }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29uZGl0aW9uYWwtZmllbGR0eXBlLmpzPzc1NjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX0V2ZW50QnVzID0gcmVxdWlyZSgnLi9FdmVudEJ1cy5qcycpO1xuXG5WdWUuY29tcG9uZW50KCdjb25kaXRpb25hbC1maWVsZHR5cGUnLCB7XG5cbiAgICB0ZW1wbGF0ZTogJ1xcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8dG9nZ2xlLWZpZWxkdHlwZSB2LXNob3c9XCJzaG91bGRTaG93KFxcJ3RvZ2dsZVxcJylcIiA6ZGF0YS5zeW5jPVwiZGF0YVwiIDpuYW1lPVwibmFtZVwiIDpjb25maWc9XCJjb25maWdcIj48L3RvZ2dsZS1maWVsZHR5cGU+XFxuICAgICAgICAgICAgPHN1Z2dlc3QtZmllbGR0eXBlIHYtc2hvdz1cInNob3VsZFNob3coXFwnc2VsZWN0XFwnKVwiIDpkYXRhLnN5bmM9XCJkYXRhXCIgOm5hbWU9XCJuYW1lXCIgOmNvbmZpZz1cInNlbGVjdENvbmZpZ1wiID48L3N1Z2dlc3QtZmllbGR0eXBlPlxcbiAgICAgICAgPGRpdj5cXG4gICAgJyxcblxuICAgIHByb3BzOiBbJ2RhdGEnLCAnY29uZmlnJywgJ25hbWUnXSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25kaXRpb25zTWV0OiBmYWxzZVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzZWxlY3RDb25maWc6IGZ1bmN0aW9uIHNlbGVjdENvbmZpZygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdWdnZXN0XCIsXG4gICAgICAgICAgICAgICAgbWF4X2l0ZW1zOiB0aGlzLmNvbmZpZy5tYXhfaXRlbXMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogXy5tYXAodGhpcy5jb25maWcub3B0aW9ucywgZnVuY3Rpb24gKHRleHQsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHRleHQ6IHRleHQsIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaXNUeXBlOiBmdW5jdGlvbiBpc1R5cGUodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnN1Yl90eXBlID09PSB0eXBlO1xuICAgICAgICB9LFxuICAgICAgICBzaG91bGRTaG93OiBmdW5jdGlvbiBzaG91bGRTaG93KHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVHlwZSh0eXBlKSAmJiAoIXRoaXMuY29uZmlnLnNob3dfY29uZGl0aW9ucyB8fCB0aGlzLmNvbmRpdGlvbnNNZXQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNlbmREYXRhOiBmdW5jdGlvbiBzZW5kRGF0YSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgX0V2ZW50QnVzLkV2ZW50QnVzLmRhdGFDaGFuZ2VkKHRoaXMuY29uZmlnLm5hbWUsIHZhbHVlWzBdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX0V2ZW50QnVzLkV2ZW50QnVzLmRhdGFDaGFuZ2VkKHRoaXMuY29uZmlnLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICAnZGF0YSc6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmREYXRhKHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVhZHk6IGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9FdmVudEJ1cy5FdmVudEJ1cy4kb24oJ2RhdGFXYXNDaGFuZ2VkJywgZnVuY3Rpb24gKGNhbGxlciwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jb25maWcuc2hvd19jb25kaXRpb25zICYmIF90aGlzLmNvbmZpZy5zaG93X2NvbmRpdGlvbnMuZmllbGQgPT09IGNhbGxlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbmRpdGlvbnNNZXQgPSBfdGhpcy5jb25maWcuc2hvd19jb25kaXRpb25zLnZhbHVlID09PSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29uZGl0aW9uc01ldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIG9uIHRoaXMgY29tcG9uZW50cyBkYXRhIHRvIHRob3NlIGRlcGVuZGluZyBvbiBpdFxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZW5kRGF0YShfdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIGNvbXBvbmVudCBpcyBiZWluZyBoaWRkZW4sIHNlbmQgbnVsbCBzbyBkZXBlbmRpbmcgY29tcG9uZW50cyBoaWRlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNlbmREYXRhKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kYXRhID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGdvdHRhIHNlbmQgdGhlIG1lc3NhZ2Ugb24gdGhlIG5leHQgdGljayBjdXogbm90IGV2ZXJ5dGhpbmcgaXMgbG9hZGVkIHlldFxuICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBzZW5kIHRoZSBldmVudCBvbiBsb2FkIHNvIHRoYXQgdmlzaWJpbHR5IGlzIHNldCBvbiBwYWdlIGxvYWRcbiAgICAgICAgICAgIHRoaXMuc2VuZERhdGEodGhpcy5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9jb25kaXRpb25hbC1maWVsZHR5cGUuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ }
/******/ ]);