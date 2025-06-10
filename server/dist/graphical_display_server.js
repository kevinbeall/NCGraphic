/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/home/scott/dev/web/graphicaldisplay/demo/benvie.install/server/dist/static";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../misc/lismore.ts":
/*!**************************!*\
  !*** ../misc/lismore.ts ***!
  \**************************/
/*! exports provided: LismoreEventNames, LismorePacket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LismoreEventNames", function() { return LismoreEventNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LismorePacket", function() { return LismorePacket; });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
 // for LismorePacket
var LismoreEventNames;
(function (LismoreEventNames) {
    LismoreEventNames[LismoreEventNames["No Device"] = 0] = "No Device";
    LismoreEventNames[LismoreEventNames["tetsto"] = 33] = "tetsto";
    LismoreEventNames[LismoreEventNames["abacus"] = 34] = "abacus";
    LismoreEventNames[LismoreEventNames["Reset"] = 128] = "Reset";
    LismoreEventNames[LismoreEventNames["Present"] = 129] = "Present";
    LismoreEventNames[LismoreEventNames["Accept"] = 130] = "Accept";
    LismoreEventNames[LismoreEventNames["Isolate"] = 131] = "Isolate";
    LismoreEventNames[LismoreEventNames["Speech"] = 132] = "Speech";
    LismoreEventNames[LismoreEventNames["Out Of Bed"] = 133] = "Out Of Bed";
    LismoreEventNames[LismoreEventNames["Attend"] = 134] = "Attend";
    LismoreEventNames[LismoreEventNames["Slave Reset"] = 135] = "Slave Reset";
    LismoreEventNames[LismoreEventNames["Call"] = 136] = "Call";
    LismoreEventNames[LismoreEventNames["Assistance"] = 137] = "Assistance";
    LismoreEventNames[LismoreEventNames["Emergency"] = 138] = "Emergency";
    LismoreEventNames[LismoreEventNames["Priority"] = 139] = "Priority";
    LismoreEventNames[LismoreEventNames["Attack"] = 140] = "Attack";
    LismoreEventNames[LismoreEventNames["Tamper"] = 141] = "Tamper";
    LismoreEventNames[LismoreEventNames["Intercom"] = 142] = "Intercom";
    LismoreEventNames[LismoreEventNames["Intercom Reset"] = 143] = "Intercom Reset";
    LismoreEventNames[LismoreEventNames["Catering"] = 144] = "Catering";
    LismoreEventNames[LismoreEventNames["Low Battery"] = 145] = "Low Battery";
    LismoreEventNames[LismoreEventNames["Bed Wet"] = 147] = "Bed Wet";
    LismoreEventNames[LismoreEventNames["Visit"] = 148] = "Visit";
    LismoreEventNames[LismoreEventNames["Priority 2"] = 149] = "Priority 2";
    LismoreEventNames[LismoreEventNames["Priority 3"] = 150] = "Priority 3";
    LismoreEventNames[LismoreEventNames["Priority 4"] = 151] = "Priority 4";
    LismoreEventNames[LismoreEventNames["Man Down"] = 152] = "Man Down";
    LismoreEventNames[LismoreEventNames["Toilet Call"] = 153] = "Toilet Call";
    LismoreEventNames[LismoreEventNames["Doctor Present"] = 154] = "Doctor Present";
    LismoreEventNames[LismoreEventNames["Bad SysX"] = 155] = "Bad SysX";
    LismoreEventNames[LismoreEventNames["Bad Address"] = 156] = "Bad Address";
    LismoreEventNames[LismoreEventNames["Bad Address Sync"] = 157] = "Bad Address Sync";
    LismoreEventNames[LismoreEventNames["Silent Speech"] = 158] = "Silent Speech";
    LismoreEventNames[LismoreEventNames["Display Setting"] = 159] = "Display Setting";
    LismoreEventNames[LismoreEventNames["PSU FAULT"] = 209] = "PSU FAULT";
    LismoreEventNames[LismoreEventNames["PSU OK=210"] = 210] = "PSU OK=210";
    LismoreEventNames[LismoreEventNames["Broadcast OK"] = 211] = "Broadcast OK";
    LismoreEventNames[LismoreEventNames["Disk Full"] = 216] = "Disk Full";
    LismoreEventNames[LismoreEventNames["Config Change"] = 217] = "Config Change";
    LismoreEventNames[LismoreEventNames["Device IO"] = 218] = "Device IO";
    LismoreEventNames[LismoreEventNames["LAN OK"] = 219] = "LAN OK";
    LismoreEventNames[LismoreEventNames["LAN Fault"] = 220] = "LAN Fault";
    LismoreEventNames[LismoreEventNames["Last Reset SW"] = 222] = "Last Reset SW";
    LismoreEventNames[LismoreEventNames["Alive Check"] = 223] = "Alive Check";
    LismoreEventNames[LismoreEventNames["Mains Failure"] = 226] = "Mains Failure";
    LismoreEventNames[LismoreEventNames["Mains OK"] = 227] = "Mains OK";
    LismoreEventNames[LismoreEventNames["Battery OK"] = 228] = "Battery OK";
    LismoreEventNames[LismoreEventNames["Battery Fail"] = 229] = "Battery Fail";
    LismoreEventNames[LismoreEventNames["Earth Fault"] = 230] = "Earth Fault";
    LismoreEventNames[LismoreEventNames["System Startup"] = 231] = "System Startup";
    LismoreEventNames[LismoreEventNames["System Broadcast"] = 232] = "System Broadcast";
    LismoreEventNames[LismoreEventNames["Network Reset"] = 233] = "Network Reset";
    LismoreEventNames[LismoreEventNames["Clock Update"] = 235] = "Clock Update";
    LismoreEventNames[LismoreEventNames["Despatch Event"] = 236] = "Despatch Event";
    LismoreEventNames[LismoreEventNames["Last Reset WDG"] = 237] = "Last Reset WDG";
    LismoreEventNames[LismoreEventNames["Last Reset MCLR"] = 238] = "Last Reset MCLR";
    LismoreEventNames[LismoreEventNames["Last Reset POR"] = 239] = "Last Reset POR";
})(LismoreEventNames || (LismoreEventNames = {}));
class LismorePacket {
    constructor(buffer) {
        this.name = "";
        this.supply = "";
        this.event_name = "";
        this.fromBuffer(buffer);
    }
    fromObject(config) {
        if (config) {
            if (config.hasOwnProperty("channel_id")) {
                this.channel_id = config.channel_id;
            }
            if (config.hasOwnProperty("address")) {
                this.address = config.address;
            }
            if (config.hasOwnProperty("event_id")) {
                this.event_id = config.event_id;
            }
            if (config.hasOwnProperty("user_id")) {
                this.user_id = config.user_id;
            }
            if (config.hasOwnProperty("name")) {
                this.name = config.name;
            }
            if (config.hasOwnProperty("supply")) {
                this.supply = config.supply;
            }
            if (config.hasOwnProperty("event_name")) {
                this.event_name = config.event_name;
            }
        }
        this.cleanupNames();
    }
    fromBuffer(buffer) {
        if (buffer) {
            try {
                const decoder = new util__WEBPACK_IMPORTED_MODULE_0__["TextDecoder"]("utf-8");
                if (buffer.byteLength >= 95) {
                    const view = new DataView(buffer);
                    this.channel_id = view.getUint8(9);
                    this.address = view.getUint8(13);
                    this.event_id = view.getUint8(15);
                    this.user_id = view.getUint8(17);
                    this.name = decoder.decode(buffer.slice(31, 45));
                    this.supply = decoder.decode(buffer.slice(63, 79));
                    this.event_name = decoder.decode(buffer.slice(79, 95));
                    this.cleanupNames();
                }
                else {
                    // console.warn("LismorePacket, Invalid packet buffer.");
                }
                // TODO validate here - maybe with an isValid() function
            }
            catch (e) {
                console.error("Exception during LismorePacket.fromBuffer", e);
            }
        }
    }
    toBuffer() {
        const ret = new Uint8Array(96);
        const view = new DataView(ret.buffer);
        var encoder = new util__WEBPACK_IMPORTED_MODULE_0__["TextEncoder"]();
        view.setUint8(9, this.channel_id);
        view.setUint8(13, this.address);
        view.setUint8(15, this.event_id);
        view.setUint8(17, this.user_id);
        const name_string = this.name.length < 14 ? this.name : this.name.substr(0, 14);
        const supply_string = this.supply.length < 14 ? this.supply : this.supply.substr(0, 14);
        const event_string = this.event_name.length < 14 ? this.event_name : this.event_name.substr(0, 14);
        const name = Buffer.from(name_string);
        const supply = Buffer.from(supply_string);
        const event_name = Buffer.from(event_string);
        ret.set(name, 31);
        ret.set(supply, 63);
        ret.set(event_name, 79);
        return Buffer.from(ret);
    }
    isTheSameDevice(packet) {
        if (!packet) {
            return false;
        }
        if (packet.channel_id != this.channel_id) {
            return false;
        }
        if (packet.address != this.address) {
            return false;
        }
        if (packet.supply != this.supply) {
            return false;
        }
        return true;
    }
    matches(packet) {
        if (!packet) {
            return false;
        }
        if (packet.channel_id != this.channel_id) {
            return false;
        }
        if (packet.address != this.address) {
            return false;
        }
        if (packet.event_id != this.event_id) {
            return false;
        }
        if (packet.user_id != this.user_id) {
            return false;
        }
        if (packet.name != this.name) {
            return false;
        }
        if (packet.supply != this.supply) {
            return false;
        }
        if (packet.event_name != this.event_name) {
            return false;
        }
        return true;
    }
    cleanupNames() {
        if (this.name) {
            this.name = this.name.replace(/[\u{0000} \u{0080}-\u{FFFF}]/gu, "").trim();
            if (this.name.length > 13) {
                this.name = this.name.substr(0, 14);
            }
        }
        if (this.supply) {
            this.supply = this.supply.replace(/[\u{0000} \u{0080}-\u{FFFF}]/gu, "").trim();
            if (this.supply.length > 13) {
                this.supply = this.supply.substr(0, 14);
            }
        }
        if (this.event_name) {
            this.event_name = this.event_name.replace(/[\u{0000} \u{0080}-\u{FFFF}]/gu, "").trim();
            if (this.event_name.length > 13) {
                this.event_name = this.event_name.substr(0, 14);
            }
        }
    }
}


/***/ }),

/***/ "../misc/loggable.ts":
/*!***************************!*\
  !*** ../misc/loggable.ts ***!
  \***************************/
/*! exports provided: Loggable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loggable", function() { return Loggable; });
class Loggable {
    constructor() {
        this.name = this.constructor.name;
    }
    log(...params) {
        console.log("[", this.dateTimeString(), "]", this.name, " : ", ...params);
    }
    warn(...params) {
        console.warn("[", this.dateTimeString(), "]", this.name, " : ", ...params);
    }
    error(...params) {
        console.error("[", this.dateTimeString(), "]", this.name, " : ", ...params);
    }
    dateTimeString() {
        return new Date().toLocaleString();
    }
}


/***/ }),

/***/ "../misc/socket.ts":
/*!*************************!*\
  !*** ../misc/socket.ts ***!
  \*************************/
/*! exports provided: SocketRequest, SocketResponse, SocketResponseResultTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketRequest", function() { return SocketRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketResponse", function() { return SocketResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketResponseResultTypes", function() { return SocketResponseResultTypes; });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../misc/tools.ts");

class SocketRequest {
    constructor(type, payload) {
        this.uid = Object(_tools__WEBPACK_IMPORTED_MODULE_0__["getUuid"])();
        this.type = type;
        this.payload = payload;
    }
}
class SocketResponse {
    constructor(request, result = SocketResponseResultTypes.fail, payload) {
        this.uid = Object(_tools__WEBPACK_IMPORTED_MODULE_0__["getUuid"])();
        this.request_uid = request ? request.uid : undefined;
        this.request_type = request ? request.type : undefined;
        this.result = result;
        this.payload = payload;
    }
}
var SocketResponseResultTypes;
(function (SocketResponseResultTypes) {
    SocketResponseResultTypes["file_related_error"] = "File Related Error";
    SocketResponseResultTypes["bad_parameters"] = "Bad Parameters";
    SocketResponseResultTypes["fail"] = "Fail";
    SocketResponseResultTypes["success"] = "Success";
    SocketResponseResultTypes["unknown"] = "Unknown Result";
    SocketResponseResultTypes["unknown_request"] = "Unknown Request";
    SocketResponseResultTypes["unknown_error"] = "Unknown Error";
})(SocketResponseResultTypes || (SocketResponseResultTypes = {}));


/***/ }),

/***/ "../misc/tools.ts":
/*!************************!*\
  !*** ../misc/tools.ts ***!
  \************************/
/*! exports provided: getUuid, getParentElementWithAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUuid", function() { return getUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentElementWithAttribute", function() { return getParentElementWithAttribute; });
function getUuid() {
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    // http://jsfiddle.net/jcward/7hyaC/3/
    var lut = [];
    for (var i = 0; i < 256; i++) {
        lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;
    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
        lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
        lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
        lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
}
function getParentElementWithAttribute(el, attribute_name) {
    if (el) {
        let parent_el = el.parentElement;
        while (!parent_el.hasAttribute(attribute_name)) {
            parent_el = parent_el.parentElement;
            if (!parent_el) {
                return undefined;
            }
        }
        return parent_el;
    }
    return undefined;
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: private, name, version, description, scripts, repository, author, license, devDependencies, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"private\":true,\"name\":\"injector\",\"version\":\"1.0.0\",\"description\":\"intercall udp packet injector\",\"scripts\":{\"build\":\"webpack --info-verbosity verbose\"},\"repository\":{\"type\":\"git\"},\"author\":\"\",\"license\":\"ISC\",\"devDependencies\":{\"@babel/core\":\"^7.0.0\",\"@babel/preset-env\":\"^7.0.0\",\"@types/express\":\"^4.17.1\",\"@types/fs-extra\":\"^8.1.0\",\"@types/webpack-env\":\"^1.13.6\",\"babel-loader\":\"^8.0.2\",\"clean-webpack-plugin\":\"^0.1.19\",\"css-loader\":\"^1.0.0\",\"dotenv-webpack\":\"^1.5.7\",\"extract-text-webpack-plugin\":\"^3.0.2\",\"html-webpack-plugin\":\"^3.2.0\",\"less-loader\":\"^4.1.0\",\"raw-loader\":\"^0.5.1\",\"style-loader\":\"^0.23.0\",\"svg-inline-loader\":\"^0.8.0\",\"ts-loader\":\"^5.0.0\",\"typescript\":\"^3.0.3\",\"webpack\":\"^4.17.2\",\"webpack-bundle-analyzer\":\"^3.5.2\",\"webpack-cli\":\"^3.3.10\",\"webpack-dashboard\":\"^2.0.0\",\"webpack-dev-server\":\"^3.8.2\"},\"dependencies\":{\"@types/lz-string\":\"^1.3.33\",\"@types/node\":\"^14.10.1\",\"@types/socket.io\":\"^2.1.11\",\"body-parser\":\"^1.19.0\",\"bufferstream\":\"^0.6.2\",\"dxf-parser\":\"^1.0.0-alpha.2\",\"express\":\"^4.17.1\",\"favicons-webpack-plugin\":\"^4.2.0\",\"fs-extra\":\"^8.1.0\",\"jsonwebtoken\":\"^8.5.1\",\"klaw-sync\":\"^6.0.0\",\"node-ts-uuid\":\"^1.0.5\",\"rxjs\":\"^6.5.3\",\"socket.io\":\"^2.3.0\",\"util\":\"^0.12.3\",\"web-push\":\"^3.4.2\",\"webpack-node-externals\":\"^1.7.2\",\"zip-a-folder\":\"^1.1.0\"}}");

/***/ }),

/***/ "./src/defines.ts":
/*!************************!*\
  !*** ./src/defines.ts ***!
  \************************/
/*! exports provided: EHTTPReturn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EHTTPReturn", function() { return EHTTPReturn; });
var EHTTPReturn;
(function (EHTTPReturn) {
    EHTTPReturn[EHTTPReturn["unhandled"] = 0] = "unhandled";
    EHTTPReturn[EHTTPReturn["partial"] = 1] = "partial";
    EHTTPReturn[EHTTPReturn["handled"] = 2] = "handled";
    EHTTPReturn[EHTTPReturn["redirected"] = 3] = "redirected";
})(EHTTPReturn || (EHTTPReturn = {}));


/***/ }),

/***/ "./src/module.ts":
/*!***********************!*\
  !*** ./src/module.ts ***!
  \***********************/
/*! exports provided: ModuleEventType, Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleEventType", function() { return ModuleEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_loggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/loggable */ "../misc/loggable.ts");
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defines */ "./src/defines.ts");



var ModuleEventType;
(function (ModuleEventType) {
    ModuleEventType["nop"] = "nop";
    ModuleEventType["site_config_update"] = "site_config_update";
    ModuleEventType["save_display_data"] = "save_display_data";
    ModuleEventType["rx_udp_packet"] = "rx_udp_packet";
    ModuleEventType["error"] = "error";
})(ModuleEventType || (ModuleEventType = {}));
class Module extends _misc_loggable__WEBPACK_IMPORTED_MODULE_1__["Loggable"] {
    constructor() {
        super();
        this.module_name = this.constructor.name;
        this.events_out = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get ModuleName() { return this.module_name; }
    get Config() { return this.config; }
    set Config(config) { this.setConfig(config); }
    set IO(server) { this.setIOServer(server); }
    get IO() { return this.io_server; }
    get EventsIn() { return this.events_in; }
    set EventsIn(events_in) { this.setEventsIn(events_in); }
    ;
    get EventsOut() { return this.events_out; }
    eventFilter(event) {
        let ret = false;
        if (!event) {
            this.error("eventFilter", "null event");
        }
        else {
            if (event.source === this) {
                // this.log("eventFilter", "ignoring self emitted event");
            }
            else {
                if (!event.destination) {
                    // this.log("eventFilter", "accepting broadcast event");
                    ret = true;
                }
                else {
                    if (event.destination === this.ModuleName) {
                        // this.log("eventFilter", "accepting event for this module");
                        ret = true;
                    }
                    else {
                        // this.log("eventFilter", "rejecting event for", event.destination);
                    }
                }
            }
        }
        return ret;
    }
    start(events_in) {
        if (events_in) {
            this.EventsIn = events_in;
        }
    }
    handleHTMLRequest(request, response) {
        return _defines__WEBPACK_IMPORTED_MODULE_2__["EHTTPReturn"].unhandled;
    }
    handleIncomingEvent(event) {
    }
    onSocketConnection(socket) {
    }
    setIOServer(server) {
        this.io_server = server;
    }
    setConfig(config) {
        this.config = config;
    }
    setEventsIn(events_in) {
        this.events_in = events_in;
        this.events_in.subscribe(event => this.onIncomingEvent(event));
    }
    onIncomingEvent(event) {
        if (this.eventFilter(event)) {
            this.handleIncomingEvent(event);
        }
    }
    outputEvent(event_type, payload, destination) {
        if (this.events_out) {
            this.events_out.next({ event_type, payload, destination, source: this });
        }
    }
}


/***/ }),

/***/ "./src/modules/admin/admin.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/admin/admin.module.ts ***!
  \*******************************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return admin_module; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../misc/socket */ "../misc/socket.ts");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../module */ "./src/module.ts");

// import * as path from "path";

var klawSync = __webpack_require__(/*! klaw-sync */ "klaw-sync");


class AdminModule extends _module__WEBPACK_IMPORTED_MODULE_3__["Module"] {
    constructor() {
        super();
        this.module_name = "AdminModule";
    }
    get SiteConfigPath() {
        return Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "site", "site.json");
    }
    get AnimationConfigPath() {
        return Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "site", "animations.json");
    }
    setConfig(config) {
        super.setConfig(config);
        this.loadSiteConfig();
        this.loadSiteAnimations();
        this.loadDeviceIcons();
        this.outputEvent(_module__WEBPACK_IMPORTED_MODULE_3__["ModuleEventType"].site_config_update, this.site_config);
    }
    onSocketConnection(socket) {
        socket.on("admin", (request, callback) => {
            this.handleSocketRequest(request)
                .then((response) => {
                callback(response);
            })
                .catch((error) => {
                this.error("Error handleSocketRequest", error, request);
            });
        });
        socket.on("subscribe", (topic) => {
            socket.join(topic);
        });
    }
    handleSocketRequest(request) {
        return new Promise((resolve, reject) => {
            let response = undefined;
            switch (request.type) {
                default:
                    this.warn("unknown socket request", request);
                    reject(response);
                    break;
                case "request.admin.config":
                    resolve(this.handleRequestAdminConfig(request));
                    break;
                case "device.types.update":
                    resolve(this.handleDeviceTypesUpdateRequest(request));
                    break;
                case "display.save.config":
                    resolve(this.handleDisplaySaveConfig(request));
                    break;
            }
        });
    }
    handleDisplaySaveConfig(request) {
        return new Promise((resolve, reject) => {
            if (!request) {
                this.error("handleDisplaySaveConfig", "no request");
                reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponseResultTypes"].bad_parameters));
            }
            else {
                if (!request.payload) {
                    this.error("handleDisplaySaveConfig", "no request payload");
                    reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponseResultTypes"].bad_parameters));
                }
                else {
                    const config = request.payload;
                    if (!config.zones) {
                        this.error("handleDisplaySaveConfig", "no zones");
                        reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponseResultTypes"].bad_parameters));
                    }
                    else {
                        this.outputEvent(_module__WEBPACK_IMPORTED_MODULE_3__["ModuleEventType"].save_display_data, request.payload, "DisplayModule");
                        resolve(new _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponseResultTypes"].success));
                    }
                }
            }
        });
    }
    handleRequestAdminConfig(request) {
        return new Promise((resolve, reject) => {
            if (!request) {
                this.error("handleRequestAdminConfig", "no request");
                reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponseResultTypes"].bad_parameters));
            }
            else {
                if (!this.site_config) {
                    this.error("handleRequestAdminConfig", "no site config");
                    reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponseResultTypes"].bad_parameters));
                }
                else {
                    resolve(new _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponseResultTypes"].success, { config: this.site_config }));
                }
            }
        });
    }
    handleDeviceTypesUpdateRequest(request) {
        return new Promise((resolve, reject) => {
            if (!request) {
                reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponseResultTypes"].bad_parameters));
            }
            else {
                if (!request.payload) {
                    reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_2__["SocketResponseResultTypes"].bad_parameters));
                }
                else {
                    this.site_config.device_types = request.payload;
                    this.onSiteConfigUpdated();
                }
            }
        });
    }
    loadDeviceIcons() {
        const icon_root = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "device");
        try {
            let paths = klawSync(icon_root, { filter: (item) => item.path.endsWith(".svg") });
            if (paths) {
                const icons = [];
                paths.forEach((path) => {
                    const data = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(path.path);
                    if (data) {
                        icons.push(data.toString());
                    }
                });
                this.site_config.device_type_icons = icons;
                this.log(icons.length, "device icons loaded");
            }
        }
        catch (err) {
            this.error("loadDeviceIcons:", err);
        }
    }
    loadSiteConfig() {
        this.log("loadSiteConfig", "reading site config from ", this.SiteConfigPath);
        const site_json = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(this.SiteConfigPath);
        this.site_config = JSON.parse(site_json.toString());
        this.site_config.zones.forEach(zone => {
            try {
                const filepath = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "zones", zone.map_file);
                this.log("loadSiteConfig", "reading zone ", zone.display_name, "map data from", filepath);
                const map_data_buffer = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(filepath);
                this.log("read", map_data_buffer.length, "bytes");
                zone.map_data = map_data_buffer.toString();
            }
            catch (error) {
                this.error("Exception during load map file data", error);
            }
        });
    }
    loadSiteAnimations() {
        try {
            this.log("loadSiteAnimations", "reading", this.AnimationConfigPath);
            const animation_data_buffer = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(this.AnimationConfigPath);
            this.log("loadSiteAnimations", "read", animation_data_buffer.length, "bytes");
            this.site_config.animations = JSON.parse(animation_data_buffer.toString());
        }
        catch (error) {
            this.error("Exception thrown during animation read", error);
        }
    }
    saveSiteConfig() {
        return new Promise((resolve, reject) => {
            // we don't want the zone map data in our json, or the type icon data - it all gets loaded separately
            const modified_site = JSON.parse(JSON.stringify(this.site_config));
            modified_site.zones.forEach((zone) => {
                zone.map_data = "";
            });
            // modified_site.device_types.forEach(device_type => device_type.status = undefined);
            modified_site.device_type_icons = [];
            modified_site.animations = undefined;
            const site_json = JSON.stringify(modified_site);
            Object(fs__WEBPACK_IMPORTED_MODULE_0__["writeFile"])(this.SiteConfigPath, site_json, (error) => {
                if (error) {
                    reject("file write error: " + error);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    onSiteConfigUpdated() {
        this.saveSiteConfig()
            .then(result => {
            if (!result) {
                this.error("saveSiteConfig failed");
            }
            else {
                // update any clients?
            }
        })
            .catch(error => {
            this.error("exception during saveSiteConfig", error);
        });
    }
}
const admin_module = new AdminModule();



/***/ }),

/***/ "./src/modules/display/display.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/display/display.module.ts ***!
  \***********************************************/
/*! exports provided: Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return display_module; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zip_a_folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zip-a-folder */ "zip-a-folder");
/* harmony import */ var zip_a_folder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zip_a_folder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../misc/socket */ "../misc/socket.ts");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../module */ "./src/module.ts");

// import * as path from "path";




class DisplayModule extends _module__WEBPACK_IMPORTED_MODULE_4__["Module"] {
    constructor() {
        super();
        this.ongoing_events = [];
    }
    setConfig(config) {
        super.setConfig(config);
        this.loadSiteConfig();
    }
    onSocketConnection(socket) {
        socket.on("display", (request, callback) => {
            this.handleSocketRequest(request)
                .then((response) => {
                callback(response);
            })
                .catch((error) => {
                this.error("Error handleSocketRequest", error, request);
            });
        });
    }
    handleIncomingEvent(event) {
        switch (event.event_type) {
            default:
                // this.error("handleIncomingEvent", "unknown event", event.event_type);
                break;
            case _module__WEBPACK_IMPORTED_MODULE_4__["ModuleEventType"].save_display_data:
                this.handleSaveDataEvent(event);
                break;
            case _module__WEBPACK_IMPORTED_MODULE_4__["ModuleEventType"].rx_udp_packet:
                this.handleRxUdpPacket(event);
                break;
            case _module__WEBPACK_IMPORTED_MODULE_4__["ModuleEventType"].site_config_update:
                this.handleSiteConfigUpdate(event);
                break;
        }
    }
    handleSocketRequest(request) {
        return new Promise((resolve, reject) => {
            let response = undefined;
            switch (request.type) {
                default:
                    this.error("unknown socket request", request);
                    reject(response);
                    break;
                case "display.request.config":
                    resolve(this.handleRequestConfig(request));
                    break;
                case "display.request.events":
                    resolve(this.handleRequestEvents(request));
                    break;
            }
        });
    }
    handleRequestEvents(request) {
        return new Promise((resolve, reject) => {
            if (!request) {
                reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponseResultTypes"].bad_parameters));
            }
            else {
                this.log("handleRequestEvents", this.ongoing_events);
                resolve(new _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponseResultTypes"].success, this.ongoing_events));
            }
        });
    }
    handleRequestConfig(request) {
        return new Promise((resolve, reject) => {
            if (!request) {
                this.error("handleRequestConfig", "no request");
                reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponseResultTypes"].bad_parameters));
            }
            else {
                if (!this.site_config) {
                    this.error("handleRequestConfig", "no site config");
                    reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponseResultTypes"].bad_parameters));
                }
                else {
                    resolve(new _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponseResultTypes"].success, this.site_config));
                }
            }
        });
    }
    loadSiteConfig() {
        const site_config_path = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "site", "display.site.json");
        const site_json = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(site_config_path);
        this.site_config = JSON.parse(site_json.toString());
        this.site_config.zones.forEach(zone => {
            const zone_map_path = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "site", zone.map_file);
            try {
                zone.map_data = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(zone_map_path).toString();
            }
            catch (error) {
                this.error("loadSiteConfig", error);
            }
        });
        this.loadSiteAnimations();
    }
    loadSiteAnimations() {
        try {
            const filepath = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "site", "animations.json");
            this.log("loadSiteAnimations", "reading", filepath);
            const animation_data_buffer = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(filepath);
            this.log("loadSiteAnimations", "read", animation_data_buffer.length, "bytes");
            const animations = JSON.parse(animation_data_buffer.toString());
            this.site_config.animations = { end_events: animations.end_events, sequences: animations.sequences };
        }
        catch (error) {
            this.error("Exception thrown during animation read", error);
        }
    }
    saveSiteMaps() {
        this.site_config.zones.forEach(zone => {
            const zone_map_path = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "site", zone.map_file);
            try {
                Object(fs__WEBPACK_IMPORTED_MODULE_0__["writeFileSync"])(zone_map_path, zone.map_data);
                this.log("zone ", zone.display_name, "wrote", zone.map_data.length, "bytes to", zone_map_path);
            }
            catch (error) {
                this.error("loadSiteConfig", error);
            }
        });
    }
    handleSaveDataEvent(event) {
        const data = event.payload;
        if (!data) {
            this.error("handleSaveDataEvent", "no event payload");
        }
        else {
            if (!data.zones) {
                this.error("handleSaveDataEvent", "no event payload zones");
            }
            else {
                data.zones.forEach(zone => {
                    const zone_array = this.site_config.zones.filter(existing_zone => zone.display_name === existing_zone.display_name);
                    if (zone_array.length < 1) {
                        this.error("handleSaveDataEvent", "no existing zone for", zone.display_name);
                    }
                    else {
                        const existing_zone = zone_array[0];
                        existing_zone.map_data = zone.map_data;
                    }
                });
                this.saveSiteMaps();
                const site_path = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "site");
                const backup_path = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "backups");
                const timestamp = Math.round((new Date()).getTime() / 1000);
                const site_backup_path = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(backup_path, timestamp.toString() + "_site.zip");
                Object(zip_a_folder__WEBPACK_IMPORTED_MODULE_2__["zip"])(site_path, site_backup_path)
                    .then(() => {
                    const zones_path = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(this.Config.static_root, "zones");
                    const zones_backup_path = Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])(backup_path, timestamp.toString() + "_zones.zip");
                    Object(zip_a_folder__WEBPACK_IMPORTED_MODULE_2__["zip"])(zones_path, zones_backup_path)
                        .then(() => {
                        this.IO.sockets.in("display").emit('display.config.change', this.site_config);
                    })
                        .catch((error) => {
                        this.error("Error backing up data : ", error);
                    });
                })
                    .catch((error) => {
                    this.error("Error backing up data : ", error);
                });
            }
        }
    }
    handleSiteConfigUpdate(event) {
        if (!event) {
            this.error("handleSiteConfigUpdate", "no event");
        }
        else {
            if (!event.payload) {
                this.error("handleSiteConfigUpdate", "no event payload");
            }
            else {
                // currently we do nothing.
            }
        }
    }
    handleRxUdpPacket(event) {
        const packet = event.payload;
        if (!packet) {
            this.error("handleRxUdpPacket", "no packet");
        }
        else {
            if (packet.event_id < 0 || packet.event_id > 255) {
                this.error("handleRxUdpPacket", "no packet id", packet);
            }
            else {
                if (!this.site_config.animations) {
                    this.error("handleRxUdpPacket", "no animations");
                }
                else {
                    if (!this.site_config.animations.end_events) {
                        this.error("handleRxUdpPacket", "no end events");
                    }
                    else {
                        if (this.site_config.animations.end_events.includes(packet.event_id)) {
                            // this.log("handleRxUdpPacket", "this is an end event", packet, this.ongoing_events);
                            this.ongoing_events = this.ongoing_events.filter(ongoing_event => {
                                return !ongoing_event.isTheSameDevice(packet);
                            });
                            // this.log("handleRxUdpPacket", "new ongoing events", this.ongoing_events);
                        }
                        else {
                            this.site_config.animations.sequences.forEach(sequence => {
                                if (sequence.events.includes(packet.event_id)) {
                                    // this.log("handleRxUdpPacket", "this is an start event", packet, sequence, this.ongoing_events);
                                    this.ongoing_events = this.ongoing_events.filter(ongoing_event => {
                                        return !ongoing_event.isTheSameDevice(packet);
                                    });
                                    this.ongoing_events.push(packet);
                                    // this.log("handleRxUdpPacket", "new ongoing events", this.ongoing_events);
                                }
                            });
                        }
                    }
                }
            }
        }
    }
}
const display_module = new DisplayModule();



/***/ }),

/***/ "./src/modules/static/static.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/static/static.module.ts ***!
  \*********************************************/
/*! exports provided: Static */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Static", function() { return static_module; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../module */ "./src/module.ts");
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../defines */ "./src/defines.ts");



class StaticModule extends _module__WEBPACK_IMPORTED_MODULE_1__["Module"] {
    constructor() {
        super();
        this.module_name = "Static";
    }
    handleHTMLRequest(request, response) {
        let ret = _defines__WEBPACK_IMPORTED_MODULE_2__["EHTTPReturn"].unhandled;
        if (request.path === "/") {
            const filepath = path__WEBPACK_IMPORTED_MODULE_0__["resolve"](this.Config.static_root, "display.html");
            response.sendFile(filepath);
            ret = _defines__WEBPACK_IMPORTED_MODULE_2__["EHTTPReturn"].handled;
        }
        if (request.path === "/injector") {
            const filepath = path__WEBPACK_IMPORTED_MODULE_0__["resolve"](this.Config.static_root, "injector.html");
            response.sendFile(filepath);
            ret = _defines__WEBPACK_IMPORTED_MODULE_2__["EHTTPReturn"].handled;
        }
        if (request.path === "/admin") {
            const filepath = path__WEBPACK_IMPORTED_MODULE_0__["resolve"](this.Config.static_root, "admin.html");
            response.sendFile(filepath);
            ret = _defines__WEBPACK_IMPORTED_MODULE_2__["EHTTPReturn"].handled;
        }
        return ret;
    }
}
const static_module = new StaticModule();



/***/ }),

/***/ "./src/modules/udp/udp.listener.ts":
/*!*****************************************!*\
  !*** ./src/modules/udp/udp.listener.ts ***!
  \*****************************************/
/*! exports provided: UDPListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UDPListener", function() { return UDPListener; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dgram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dgram */ "dgram");
/* harmony import */ var dgram__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dgram__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_loggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../misc/loggable */ "../misc/loggable.ts");
/* harmony import */ var _misc_lismore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../misc/lismore */ "../misc/lismore.ts");




const LISMORE_DUPLICATE_TIMEOUT = 500;
const LISMORE_BROADCAST_DESTINATION = "239.255.255.250";
// const LISMORE_BROADCAST_DESTINATION = "255.255.255.255";
class UDPListener extends _misc_loggable__WEBPACK_IMPORTED_MODULE_2__["Loggable"] {
    constructor(port) {
        super();
        this.port = port;
        this.packet_stream = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    get PacketStream() { return this.packet_stream; }
    start() {
        this.listenToUDP();
    }
    stop() {
        if (this.udp_socket) {
            this.udp_socket.close();
            this.udp_socket = undefined;
        }
    }
    listenToUDP() {
        this.udp_socket = dgram__WEBPACK_IMPORTED_MODULE_1__["createSocket"]("udp4");
        if (this.udp_socket) {
            this.udp_socket.on("error", (error) => {
                this.error("dgram.socket error ", error);
            });
            this.udp_socket.on("message", (message, remote) => {
                this.onMessage(message, remote);
            });
            this.udp_socket.on("listening", () => {
                const address = this.udp_socket.address();
                this.log("UDP Server listening on " + address.address + ":" + address.port);
            });
            this.udp_socket.bind(this.port);
        }
        else {
            this.error("Error starting udp socket");
        }
    }
    onMessage(message, remote) {
        const packet = new _misc_lismore__WEBPACK_IMPORTED_MODULE_3__["LismorePacket"](message.buffer);
        const timestamp = Date.now();
        if (this.last_lip_time && this.last_lip_packet) {
            const diff = timestamp - this.last_lip_time;
            if (diff <= LISMORE_DUPLICATE_TIMEOUT) {
                if (packet.matches(this.last_lip_packet)) {
                    // this.log("disregarding duplicate lismore packet");
                }
                else {
                    this.packet_stream.next(packet);
                }
            }
            else {
                this.last_lip_packet = packet;
                this.packet_stream.next(packet);
            }
        }
        else {
            this.packet_stream.next(packet);
        }
        this.last_lip_time = timestamp;
        this.last_lip_packet = packet;
    }
    broadcastPacket(packet) {
        const buffer = packet.toBuffer();
        this.broadcast(buffer);
    }
    broadcast(message) {
        console.log("broadcast", message);
        if (this.udp_socket) {
            console.log("broadcasting", message.toString());
            this.udp_socket.send(message, 0, message.length, this.port, LISMORE_BROADCAST_DESTINATION);
        }
    }
}


/***/ }),

/***/ "./src/modules/udp/udp.module.ts":
/*!***************************************!*\
  !*** ./src/modules/udp/udp.module.ts ***!
  \***************************************/
/*! exports provided: UDP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UDP", function() { return udp_module; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../module */ "./src/module.ts");
/* harmony import */ var _udp_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./udp.listener */ "./src/modules/udp/udp.listener.ts");
/* harmony import */ var _misc_lismore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../misc/lismore */ "../misc/lismore.ts");
/* harmony import */ var _misc_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../misc/socket */ "../misc/socket.ts");




class UDPModule extends _module__WEBPACK_IMPORTED_MODULE_0__["Module"] {
    constructor() {
        super();
        this.module_name = "UDP";
    }
    setConfig(config) {
        super.setConfig(config);
        let udp_port = this.Config.udp_port;
        if (udp_port) {
            this.udp = new _udp_listener__WEBPACK_IMPORTED_MODULE_1__["UDPListener"](udp_port);
            this.udp.PacketStream.subscribe(packet => this.onUdpPacket(packet));
            this.udp.start();
        }
    }
    onSocketConnection(socket) {
        socket.join("raw_packet");
        socket.off("injector", (request, callback) => { });
        socket.on("injector", (request, callback) => {
            this.handleSocketRequest(request)
                .then((response) => {
                callback(response);
            })
                .catch((error) => {
                this.error("Error handleSocketRequest", error, request);
            });
        });
    }
    handleSocketRequest(request) {
        return new Promise((resolve, reject) => {
            let response = undefined;
            switch (request.type) {
                default:
                    this.warn("unknown socket request", request);
                    reject(response);
                    break;
                case "injector.inject":
                    resolve(this.handleInjectionRequest(request));
                    break;
            }
        });
    }
    onUdpPacket(packet) {
        this.IO.sockets.in("raw_packet").emit('raw_packet', JSON.stringify(packet));
        this.log("received packet", packet.address, ":", packet.channel_id, ":", packet.supply, "  event [" + packet.event_id + "]", packet.event_name);
        this.outputEvent(_module__WEBPACK_IMPORTED_MODULE_0__["ModuleEventType"].rx_udp_packet, packet);
    }
    handleInjectionRequest(request) {
        return new Promise((resolve, reject) => {
            if (!request) {
                this.error("handleRequestAdminConfig", "no request");
                reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponseResultTypes"].bad_parameters));
            }
            else {
                if (!request.payload) {
                    this.error("handleRequestAdminConfig", "no request payload");
                    reject(new _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponseResultTypes"].bad_parameters));
                }
                else {
                    const packet = new _misc_lismore__WEBPACK_IMPORTED_MODULE_2__["LismorePacket"]();
                    packet.fromObject(request.payload);
                    this.log("broadcasting packet", packet.address, ":", packet.channel_id, ":", packet.supply, "  event [" + packet.event_id + "]", packet.event_name);
                    this.udp.broadcastPacket(packet);
                    resolve(new _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponse"](request, _misc_socket__WEBPACK_IMPORTED_MODULE_3__["SocketResponseResultTypes"].success));
                }
            }
        });
    }
}
const udp_module = new UDPModule();



/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defines */ "./src/defines.ts");
/* harmony import */ var _modules_static_static_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/static/static.module */ "./src/modules/static/static.module.ts");
/* harmony import */ var _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/admin/admin.module */ "./src/modules/admin/admin.module.ts");
/* harmony import */ var _modules_display_display_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/display/display.module */ "./src/modules/display/display.module.ts");
/* harmony import */ var _modules_udp_udp_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/udp/udp.module */ "./src/modules/udp/udp.module.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _misc_loggable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../misc/loggable */ "../misc/loggable.ts");
const package_json = __webpack_require__(/*! ../package.json */ "./package.json");
console.log("Admin server running...  version", package_json.version);

// import * as http from "http";










class AdminIndex extends _misc_loggable__WEBPACK_IMPORTED_MODULE_10__["Loggable"] {
}
const out = new AdminIndex;
const Config = require("./admin.json");
const default_config = {
    "http_port": "9090",
    "udp_port": 6345,
    "static_root": "./static",
    "config_version": "0.0.0"
};
let config = default_config;
try {
    const config_data = Object(fs__WEBPACK_IMPORTED_MODULE_9__["readFileSync"])('./admin.json', 'utf8');
    config = JSON.parse(config_data);
}
catch (error) {
    out.error("Error loading config", __dirname, process.cwd(), error);
}
const http_port = config.http_port ? config.http_port : 8000;
try {
    var app = express__WEBPACK_IMPORTED_MODULE_1__();
    app.set("port", http_port);
    app.use(express__WEBPACK_IMPORTED_MODULE_1__["static"](config.static_root));
    app.use(body_parser__WEBPACK_IMPORTED_MODULE_0__["json"]());
    app.all("*", (request, response) => {
        out.log("app.all call", request.url);
        const success = modules.filter(module => module.handleHTMLRequest(request, response) === _defines__WEBPACK_IMPORTED_MODULE_4__["EHTTPReturn"].handled);
        if (success && success.length > 0) {
            // log(success.length, "modules handled this(", request.url, ") request [", success.map(module => module.ModuleName).join(","), "]");
        }
        else {
            // log("no module found for request", request.url);
        }
    });
    let http = __webpack_require__(/*! http */ "http").Server(app);
    let io = __webpack_require__(/*! socket.io */ "socket.io")(http);
    const events_in = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    const modules = [_modules_static_static_module__WEBPACK_IMPORTED_MODULE_5__["Static"], _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["Admin"], _modules_display_display_module__WEBPACK_IMPORTED_MODULE_7__["Display"], _modules_udp_udp_module__WEBPACK_IMPORTED_MODULE_8__["UDP"]];
    modules.forEach(module => {
        module.EventsIn = events_in;
        module.IO = io;
        module.EventsOut.subscribe((event) => {
            events_in.next(event);
        });
    });
    // loading the config kicks things off, so make sure everyone has set themselves up first
    modules.forEach(module => {
        module.Config = config;
    });
    app.get("/", (req, res) => {
        const filepath = Object(path__WEBPACK_IMPORTED_MODULE_3__["resolve"])(config.static_root, "admin.html");
        res.sendFile(filepath);
    });
    io.on("connection", function (socket) {
        if (socket) {
            socket.removeAllListeners();
            out.log("a user connected", socket.handshake.address);
            socket.on('message', (msg) => {
                out.log('message : ', msg);
            });
            modules.forEach(m => m.onSocketConnection(socket));
        }
    });
    http.listen(http_port, function () {
        out.log("HTTP server listening on *:", http_port);
    });
}
catch (e) {
    out.error("Index Exception ", e);
}

/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "dgram":
/*!************************!*\
  !*** external "dgram" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dgram");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "klaw-sync":
/*!****************************!*\
  !*** external "klaw-sync" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("klaw-sync");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "zip-a-folder":
/*!*******************************!*\
  !*** external "zip-a-folder" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zip-a-folder");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL21pc2MvbGlzbW9yZS50cyIsIndlYnBhY2s6Ly8vLi4vbWlzYy9sb2dnYWJsZS50cyIsIndlYnBhY2s6Ly8vLi4vbWlzYy9zb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4uL21pc2MvdG9vbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlZmluZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hZG1pbi9hZG1pbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvZGlzcGxheS9kaXNwbGF5Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9zdGF0aWMvc3RhdGljLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy91ZHAvdWRwLmxpc3RlbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL3VkcC91ZHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZ3JhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrbGF3LXN5bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6aXAtYS1mb2xkZXJcIiJdLCJuYW1lcyI6W10sIm1hcHBp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QUMsT0FBTyxDQUFDLENBQUM7UUFHaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEYsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEYsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkcsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxlQUFlLENBQUMsTUFBcUI7UUFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdEMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNNLE9BQU8sQ0FBQyxNQUFxQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDOUIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxPQUFPLEtBQUss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LElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHO1FBQzNGLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHO1FBQ3JHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDL0YsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsRUFB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LENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0NBRU47QUFBQyxPQUFPLENBQUMsRUFBRTtJQUNSLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDcEM7Ozs7Ozs7Ozs7Ozs7QUN6SEQsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiZ3JhcGhpY2FsX2Rpc3BsYXlfc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvaG9tZS9zY290dC9kZXYvd2ViL2dyYXBoaWNhbGRpc3BsYXkvZGVtby9iZW52aWUuaW5zdGFsbC9zZXJ2ZXIvZGlzdC9zdGF0aWNcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyLnRzXCIpO1xuIiwiaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiOyAvLyBmb3IgTGlzbW9yZVBhY2tldFxuXG5cbmV4cG9ydCBlbnVtIExpc21vcmVFdmVudE5hbWVzIHtcbiAgICBcIk5vIERldmljZVwiID0gMCxcbiAgICBcInRldHN0b1wiID0gMzMsXG4gICAgXCJhYmFjdXNcIiA9IDM0LFxuICAgIFwiUmVzZXRcIiA9IDEyOCxcbiAgICBcIlByZXNlbnRcIiA9IDEyOSxcbiAgICBcIkFjY2VwdFwiID0gMTMwLFxuICAgIFwiSXNvbGF0ZVwiID0gMTMxLFxuICAgIFwiU3BlZWNoXCIgPSAxMzIsXG4gICAgXCJPdXQgT2YgQmVkXCIgPSAxMzMsXG4gICAgXCJBdHRlbmRcIiA9IDEzNCxcbiAgICBcIlNsYXZlIFJlc2V0XCIgPSAxMzUsXG4gICAgXCJDYWxsXCIgPSAxMzYsXG4gICAgXCJBc3Npc3RhbmNlXCIgPSAxMzcsXG4gICAgXCJFbWVyZ2VuY3lcIiA9IDEzOCxcbiAgICBcIlByaW9yaXR5XCIgPSAxMzksXG4gICAgXCJBdHRhY2tcIiA9IDE0MCxcbiAgICBcIlRhbXBlclwiID0gMTQxLFxuICAgIFwiSW50ZXJjb21cIiA9IDE0MixcbiAgICBcIkludGVyY29tIFJlc2V0XCIgPSAxNDMsXG4gICAgXCJDYXRlcmluZ1wiID0gMTQ0LFxuICAgIFwiTG93IEJhdHRlcnlcIiA9IDE0NSxcbiAgICBcIkJlZCBXZXRcIiA9IDE0NyxcbiAgICBcIlZpc2l0XCIgPSAxNDgsXG4gICAgXCJQcmlvcml0eSAyXCIgPSAxNDksXG4gICAgXCJQcmlvcml0eSAzXCIgPSAxNTAsXG4gICAgXCJQcmlvcml0eSA0XCIgPSAxNTEsXG4gICAgXCJNYW4gRG93blwiID0gMTUyLFxuICAgIFwiVG9pbGV0IENhbGxcIiA9IDE1MyxcbiAgICBcIkRvY3RvciBQcmVzZW50XCIgPSAxNTQsXG4gICAgXCJCYWQgU3lzWFwiID0gMTU1LFxuICAgIFwiQmFkIEFkZHJlc3NcIiA9IDE1NixcbiAgICBcIkJhZCBBZGRyZXNzIFN5bmNcIiA9IDE1NyxcbiAgICBcIlNpbGVudCBTcGVlY2hcIiA9IDE1OCxcbiAgICBcIkRpc3BsYXkgU2V0dGluZ1wiID0gMTU5LFxuICAgIFwiUFNVIEZBVUxUXCIgPSAyMDksXG4gICAgXCJQU1UgT0s9MjEwXCIsXG4gICAgXCJCcm9hZGNhc3QgT0tcIiA9IDIxMSxcbiAgICBcIkRpc2sgRnVsbFwiID0gMjE2LFxuICAgIFwiQ29uZmlnIENoYW5nZVwiID0gMjE3LFxuICAgIFwiRGV2aWNlIElPXCIgPSAyMTgsXG4gICAgXCJMQU4gT0tcIiA9IDIxOSxcbiAgICBcIkxBTiBGYXVsdFwiID0gMjIwLFxuICAgIFwiTGFzdCBSZXNldCBTV1wiID0gMjIyLFxuICAgIFwiQWxpdmUgQ2hlY2tcIiA9IDIyMyxcbiAgICBcIk1haW5zIEZhaWx1cmVcIiA9IDIyNixcbiAgICBcIk1haW5zIE9LXCIgPSAyMjcsXG4gICAgXCJCYXR0ZXJ5IE9LXCIgPSAyMjgsXG4gICAgXCJCYXR0ZXJ5IEZhaWxcIiA9IDIyOSxcbiAgICBcIkVhcnRoIEZhdWx0XCIgPSAyMzAsXG4gICAgXCJTeXN0ZW0gU3RhcnR1cFwiID0gMjMxLFxuICAgIFwiU3lzdGVtIEJyb2FkY2FzdFwiID0gMjMyLFxuICAgIFwiTmV0d29yayBSZXNldFwiID0gMjMzLFxuICAgIFwiQ2xvY2sgVXBkYXRlXCIgPSAyMzUsXG4gICAgXCJEZXNwYXRjaCBFdmVudFwiID0gMjM2LFxuICAgIFwiTGFzdCBSZXNldCBXREdcIiA9IDIzNyxcbiAgICBcIkxhc3QgUmVzZXQgTUNMUlwiID0gMjM4LFxuICAgIFwiTGFzdCBSZXNldCBQT1JcIiA9IDIzOSxcbn1cblxuXG5leHBvcnQgY2xhc3MgTGlzbW9yZVBhY2tldCB7XG4gICAgcHVibGljIGNoYW5uZWxfaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgYWRkcmVzczogbnVtYmVyO1xuICAgIHB1YmxpYyBldmVudF9pZDogbnVtYmVyO1xuICAgIHB1YmxpYyB1c2VyX2lkOiBudW1iZXI7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgc3VwcGx5OiBzdHJpbmc7XG4gICAgcHVibGljIGV2ZW50X25hbWU6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihidWZmZXI/OiBBcnJheUJ1ZmZlcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnN1cHBseSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZXZlbnRfbmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZnJvbUJ1ZmZlcihidWZmZXIpO1xuICAgIH1cbiAgICBwdWJsaWMgZnJvbU9iamVjdChjb25maWc/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImNoYW5uZWxfaWRcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxfaWQgPSBjb25maWcuY2hhbm5lbF9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJhZGRyZXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzID0gY29uZmlnLmFkZHJlc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwiZXZlbnRfaWRcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50X2lkID0gY29uZmlnLmV2ZW50X2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcInVzZXJfaWRcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJfaWQgPSBjb25maWcudXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwic3VwcGx5XCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdXBwbHkgPSBjb25maWcuc3VwcGx5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcImV2ZW50X25hbWVcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50X25hbWUgPSBjb25maWcuZXZlbnRfbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFudXBOYW1lcygpO1xuICAgIH1cbiAgICBwdWJsaWMgZnJvbUJ1ZmZlcihidWZmZXI/OiBBcnJheUJ1ZmZlcik6IHZvaWQge1xuICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgdXRpbC5UZXh0RGVjb2RlcihcInV0Zi04XCIpO1xuICAgICAgICAgICAgICAgIGlmIChidWZmZXIuYnl0ZUxlbmd0aCA+PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbF9pZCA9IHZpZXcuZ2V0VWludDgoOSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IHZpZXcuZ2V0VWludDgoMTMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50X2lkID0gdmlldy5nZXRVaW50OCgxNSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcl9pZCA9IHZpZXcuZ2V0VWludDgoMTcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2UoMzEsIDQ1KSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwcGx5ID0gZGVjb2Rlci5kZWNvZGUoYnVmZmVyLnNsaWNlKDYzLCA3OSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50X25hbWUgPSBkZWNvZGVyLmRlY29kZShidWZmZXIuc2xpY2UoNzksIDk1KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhbnVwTmFtZXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJMaXNtb3JlUGFja2V0LCBJbnZhbGlkIHBhY2tldCBidWZmZXIuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUT0RPIHZhbGlkYXRlIGhlcmUgLSBtYXliZSB3aXRoIGFuIGlzVmFsaWQoKSBmdW5jdGlvblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFeGNlcHRpb24gZHVyaW5nIExpc21vcmVQYWNrZXQuZnJvbUJ1ZmZlclwiLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b0J1ZmZlcigpOiBCdWZmZXIge1xuICAgICAgICBjb25zdCByZXQ6IFVpbnQ4QXJyYXkgPSBuZXcgVWludDhBcnJheSg5Nik7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcocmV0LmJ1ZmZlcik7XG4gICAgICAgIHZhciBlbmNvZGVyID0gbmV3IHV0aWwuVGV4dEVuY29kZXIoKTtcbiAgICAgICAgdmlldy5zZXRVaW50OCg5LCB0aGlzLmNoYW5uZWxfaWQpO1xuICAgICAgICB2aWV3LnNldFVpbnQ4KDEzLCB0aGlzLmFkZHJlc3MpO1xuICAgICAgICB2aWV3LnNldFVpbnQ4KDE1LCB0aGlzLmV2ZW50X2lkKTtcbiAgICAgICAgdmlldy5zZXRVaW50OCgxNywgdGhpcy51c2VyX2lkKTtcblxuXG4gICAgICAgIGNvbnN0IG5hbWVfc3RyaW5nID0gdGhpcy5uYW1lLmxlbmd0aCA8IDE0ID8gdGhpcy5uYW1lIDogdGhpcy5uYW1lLnN1YnN0cigwLCAxNCk7XG4gICAgICAgIGNvbnN0IHN1cHBseV9zdHJpbmcgPSB0aGlzLnN1cHBseS5sZW5ndGggPCAxNCA/IHRoaXMuc3VwcGx5IDogdGhpcy5zdXBwbHkuc3Vic3RyKDAsIDE0KTtcbiAgICAgICAgY29uc3QgZXZlbnRfc3RyaW5nID0gdGhpcy5ldmVudF9uYW1lLmxlbmd0aCA8IDE0ID8gdGhpcy5ldmVudF9uYW1lIDogdGhpcy5ldmVudF9uYW1lLnN1YnN0cigwLCAxNCk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBCdWZmZXIuZnJvbShuYW1lX3N0cmluZyk7XG4gICAgICAgIGNvbnN0IHN1cHBseSA9IEJ1ZmZlci5mcm9tKHN1cHBseV9zdHJpbmcpO1xuICAgICAgICBjb25zdCBldmVudF9uYW1lID0gQnVmZmVyLmZyb20oZXZlbnRfc3RyaW5nKTtcblxuICAgICAgICByZXQuc2V0KG5hbWUsIDMxKTtcbiAgICAgICAgcmV0LnNldChzdXBwbHksIDYzKTtcbiAgICAgICAgcmV0LnNldChldmVudF9uYW1lLCA3OSk7XG4gICAgICAgIHJldHVybiBCdWZmZXIuZnJvbShyZXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1RoZVNhbWVEZXZpY2UocGFja2V0OiBMaXNtb3JlUGFja2V0KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghcGFja2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhY2tldC5jaGFubmVsX2lkICE9IHRoaXMuY2hhbm5lbF9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWNrZXQuYWRkcmVzcyAhPSB0aGlzLmFkZHJlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFja2V0LnN1cHBseSAhPSB0aGlzLnN1cHBseSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgbWF0Y2hlcyhwYWNrZXQ6IExpc21vcmVQYWNrZXQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCFwYWNrZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFja2V0LmNoYW5uZWxfaWQgIT0gdGhpcy5jaGFubmVsX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhY2tldC5hZGRyZXNzICE9IHRoaXMuYWRkcmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWNrZXQuZXZlbnRfaWQgIT0gdGhpcy5ldmVudF9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYWNrZXQudXNlcl9pZCAhPSB0aGlzLnVzZXJfaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFja2V0Lm5hbWUgIT0gdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhY2tldC5zdXBwbHkgIT0gdGhpcy5zdXBwbHkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFja2V0LmV2ZW50X25hbWUgIT0gdGhpcy5ldmVudF9uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGVhbnVwTmFtZXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZS5yZXBsYWNlKC9bXFx1ezAwMDB9IFxcdXswMDgwfS1cXHV7RkZGRn1dL2d1LCBcIlwiKS50cmltKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lLmxlbmd0aCA+IDEzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnN1YnN0cigwLCAxNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3VwcGx5KSB7XG4gICAgICAgICAgICB0aGlzLnN1cHBseSA9IHRoaXMuc3VwcGx5LnJlcGxhY2UoL1tcXHV7MDAwMH0gXFx1ezAwODB9LVxcdXtGRkZGfV0vZ3UsIFwiXCIpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cHBseS5sZW5ndGggPiAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VwcGx5ID0gdGhpcy5zdXBwbHkuc3Vic3RyKDAsIDE0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ldmVudF9uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50X25hbWUgPSB0aGlzLmV2ZW50X25hbWUucmVwbGFjZSgvW1xcdXswMDAwfSBcXHV7MDA4MH0tXFx1e0ZGRkZ9XS9ndSwgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnRfbmFtZS5sZW5ndGggPiAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRfbmFtZSA9IHRoaXMuZXZlbnRfbmFtZS5zdWJzdHIoMCwgMTQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJcbmV4cG9ydCBjbGFzcyBMb2dnYWJsZSB7XG4gICAgcHJvdGVjdGVkIG5hbWU6IHN0cmluZztcblxuXG4gICAgcHVibGljIGxvZyguLi5wYXJhbXM6IGFueVtdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW1wiLCB0aGlzLmRhdGVUaW1lU3RyaW5nKCksIFwiXVwiLCB0aGlzLm5hbWUsIFwiIDogXCIsIC4uLnBhcmFtcyk7XG4gICAgfVxuICAgIHB1YmxpYyB3YXJuKC4uLnBhcmFtczogYW55W10pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW1wiLCB0aGlzLmRhdGVUaW1lU3RyaW5nKCksIFwiXVwiLCB0aGlzLm5hbWUsIFwiIDogXCIsIC4uLnBhcmFtcyk7XG4gICAgfVxuICAgIHB1YmxpYyBlcnJvciguLi5wYXJhbXM6IGFueVtdKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIsIHRoaXMuZGF0ZVRpbWVTdHJpbmcoKSwgXCJdXCIsIHRoaXMubmFtZSwgXCIgOiBcIiwgLi4ucGFyYW1zKTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gKHRoaXMuY29uc3RydWN0b3IgYXMgYW55KS5uYW1lO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBkYXRlVGltZVN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBnZXRVdWlkIH0gZnJvbSBcIi4vdG9vbHNcIlxuZXhwb3J0IGNsYXNzIFNvY2tldFJlcXVlc3Qge1xuICAgIHB1YmxpYyB1aWQ6IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXlsb2FkOiBhbnk7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IodHlwZT86IHN0cmluZywgcGF5bG9hZD86IGFueSkge1xuICAgICAgICB0aGlzLnVpZCA9IGdldFV1aWQoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFNvY2tldFJlc3BvbnNlIHtcbiAgICBwdWJsaWMgdWlkOiBzdHJpbmc7XG4gICAgcHVibGljIHJlc3VsdDogU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcztcbiAgICBwdWJsaWMgcmVxdWVzdF91aWQ6IHN0cmluZztcbiAgICBwdWJsaWMgcmVxdWVzdF90eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIHBheWxvYWQ6IGFueTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihyZXF1ZXN0OiBTb2NrZXRSZXF1ZXN0LCByZXN1bHQgPSBTb2NrZXRSZXNwb25zZVJlc3VsdFR5cGVzLmZhaWwsIHBheWxvYWQ/OiBhbnkpIHtcbiAgICAgICAgdGhpcy51aWQgPSBnZXRVdWlkKCk7XG4gICAgICAgIHRoaXMucmVxdWVzdF91aWQgPSByZXF1ZXN0ID8gcmVxdWVzdC51aWQgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucmVxdWVzdF90eXBlID0gcmVxdWVzdCA/IHJlcXVlc3QudHlwZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGVudW0gU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcyB7XG4gICAgZmlsZV9yZWxhdGVkX2Vycm9yID0gXCJGaWxlIFJlbGF0ZWQgRXJyb3JcIixcbiAgICBiYWRfcGFyYW1ldGVycyA9IFwiQmFkIFBhcmFtZXRlcnNcIixcbiAgICBmYWlsID0gXCJGYWlsXCIsXG5cblxuICAgIHN1Y2Nlc3MgPSBcIlN1Y2Nlc3NcIixcblxuXG4gICAgdW5rbm93biA9IFwiVW5rbm93biBSZXN1bHRcIixcbiAgICB1bmtub3duX3JlcXVlc3QgPSBcIlVua25vd24gUmVxdWVzdFwiLFxuICAgIHVua25vd25fZXJyb3IgPSBcIlVua25vd24gRXJyb3JcIlxuXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VXVpZCgpIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDUwMzQvY3JlYXRlLWd1aWQtdXVpZC1pbi1qYXZhc2NyaXB0XG4gICAgLy8gaHR0cDovL2pzZmlkZGxlLm5ldC9qY3dhcmQvN2h5YUMvMy9cbiAgICB2YXIgbHV0ID0gW107IGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHsgbHV0W2ldID0gKGkgPCAxNiA/ICcwJyA6ICcnKSArIChpKS50b1N0cmluZygxNik7IH1cblxuICAgIHZhciBkMCA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcbiAgICB2YXIgZDEgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG4gICAgdmFyIGQyID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuICAgIHZhciBkMyA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcbiAgICByZXR1cm4gbHV0W2QwICYgMHhmZl0gKyBsdXRbZDAgPj4gOCAmIDB4ZmZdICsgbHV0W2QwID4+IDE2ICYgMHhmZl0gKyBsdXRbZDAgPj4gMjQgJiAweGZmXSArICctJyArXG4gICAgICAgIGx1dFtkMSAmIDB4ZmZdICsgbHV0W2QxID4+IDggJiAweGZmXSArICctJyArIGx1dFtkMSA+PiAxNiAmIDB4MGYgfCAweDQwXSArIGx1dFtkMSA+PiAyNCAmIDB4ZmZdICsgJy0nICtcbiAgICAgICAgbHV0W2QyICYgMHgzZiB8IDB4ODBdICsgbHV0W2QyID4+IDggJiAweGZmXSArICctJyArIGx1dFtkMiA+PiAxNiAmIDB4ZmZdICsgbHV0W2QyID4+IDI0ICYgMHhmZl0gK1xuICAgICAgICBsdXRbZDMgJiAweGZmXSArIGx1dFtkMyA+PiA4ICYgMHhmZl0gKyBsdXRbZDMgPj4gMTYgJiAweGZmXSArIGx1dFtkMyA+PiAyNCAmIDB4ZmZdO1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnRXaXRoQXR0cmlidXRlKGVsOiBIVE1MRWxlbWVudCwgYXR0cmlidXRlX25hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAoZWwpIHtcbiAgICAgICAgbGV0IHBhcmVudF9lbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHdoaWxlICghcGFyZW50X2VsLmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVfbmFtZSkpIHtcbiAgICAgICAgICAgIHBhcmVudF9lbCA9IHBhcmVudF9lbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCFwYXJlbnRfZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJlbnRfZWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuXG4iLCJleHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XG4gICAgaHR0cF9wb3J0OiBzdHJpbmc7XG4gICAgdWRwX3BvcnQ6IG51bWJlcixcblxuICAgIHN0YXRpY19yb290OiBzdHJpbmc7XG5cbiAgICBjb25maWdfdmVyc2lvbjogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBlbnVtIEVIVFRQUmV0dXJuIHtcbiAgICB1bmhhbmRsZWQgPSAwLFxuICAgIHBhcnRpYWwsXG4gICAgaGFuZGxlZCxcbiAgICByZWRpcmVjdGVkLFxuXG59XG5cbiIsImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgU2VydmVyLCBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvXCI7XG5cbmltcG9ydCB7IExvZ2dhYmxlIH0gZnJvbSBcIi4uLy4uL21pc2MvbG9nZ2FibGVcIjtcblxuaW1wb3J0IHsgRUhUVFBSZXR1cm4sIENvbmZpZyB9IGZyb20gXCIuL2RlZmluZXNcIjtcblxuZXhwb3J0IGVudW0gTW9kdWxlRXZlbnRUeXBlIHtcbiAgICBub3AgPSBcIm5vcFwiLFxuICAgIHNpdGVfY29uZmlnX3VwZGF0ZSA9IFwic2l0ZV9jb25maWdfdXBkYXRlXCIsXG4gICAgc2F2ZV9kaXNwbGF5X2RhdGEgPSBcInNhdmVfZGlzcGxheV9kYXRhXCIsXG5cbiAgICByeF91ZHBfcGFja2V0ID0gXCJyeF91ZHBfcGFja2V0XCIsXG4gICAgZXJyb3IgPSBcImVycm9yXCJcbn1cbmV4cG9ydCB0eXBlIE1vZHVsZUV2ZW50UGF5bG9hZCA9IE9iamVjdDtcbmV4cG9ydCBpbnRlcmZhY2UgSU1vZHVsZUV2ZW50IHtcbiAgICBldmVudF90eXBlOiBNb2R1bGVFdmVudFR5cGU7XG4gICAgc291cmNlOiBNb2R1bGU7Ly9tb2R1bGUgZW1pdHRpbmcgdGhpcyBldmVudFxuICAgIGRlc3RpbmF0aW9uPzogc3RyaW5nOy8vIGEgbW9kdWxlIG5hbWUgb3Igbm90aGluZyBmb3IgYSBicm9hZGNhc3RcbiAgICBwYXlsb2FkPzogTW9kdWxlRXZlbnRQYXlsb2FkO1xufVxuXG5leHBvcnQgY2xhc3MgTW9kdWxlIGV4dGVuZHMgTG9nZ2FibGUge1xuXG4gICAgcHJvdGVjdGVkIG1vZHVsZV9uYW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQ29uZmlnO1xuICAgIHByb3RlY3RlZCBpb19zZXJ2ZXI6IFNlcnZlcjtcblxuICAgIHByb3RlY3RlZCBldmVudHNfaW46IFN1YmplY3Q8SU1vZHVsZUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZXZlbnRzX291dDogU3ViamVjdDxJTW9kdWxlRXZlbnQ+O1xuXG5cbiAgICBwdWJsaWMgZ2V0IE1vZHVsZU5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubW9kdWxlX25hbWU7IH1cblxuICAgIHB1YmxpYyBnZXQgQ29uZmlnKCk6IENvbmZpZyB7IHJldHVybiB0aGlzLmNvbmZpZzsgfVxuICAgIHB1YmxpYyBzZXQgQ29uZmlnKGNvbmZpZzogQ29uZmlnKSB7IHRoaXMuc2V0Q29uZmlnKGNvbmZpZyk7IH1cblxuICAgIHB1YmxpYyBzZXQgSU8oc2VydmVyOiBTZXJ2ZXIpIHsgdGhpcy5zZXRJT1NlcnZlcihzZXJ2ZXIpOyB9XG4gICAgcHVibGljIGdldCBJTygpOiBTZXJ2ZXIgeyByZXR1cm4gdGhpcy5pb19zZXJ2ZXI7IH1cblxuICAgIHB1YmxpYyBnZXQgRXZlbnRzSW4oKTogU3ViamVjdDxJTW9kdWxlRXZlbnQ+IHsgcmV0dXJuIHRoaXMuZXZlbnRzX2luOyB9XG4gICAgcHVibGljIHNldCBFdmVudHNJbihldmVudHNfaW46IFN1YmplY3Q8SU1vZHVsZUV2ZW50PikgeyB0aGlzLnNldEV2ZW50c0luKGV2ZW50c19pbik7IH07XG5cbiAgICBwdWJsaWMgZ2V0IEV2ZW50c091dCgpOiBPYnNlcnZhYmxlPElNb2R1bGVFdmVudD4geyByZXR1cm4gdGhpcy5ldmVudHNfb3V0OyB9XG5cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2R1bGVfbmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgdGhpcy5ldmVudHNfb3V0ID0gbmV3IFN1YmplY3Q8SU1vZHVsZUV2ZW50PigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBldmVudEZpbHRlcihldmVudDogSU1vZHVsZUV2ZW50KTogYm9vbGVhbiB7IC8vIHJldHVybiB0cnVlIGlmIHRoZSBuYW1lIG1hdGNoZXMgb3IgaWYgdGhlIGdvYWwgaXMgdW5kZWZpbmVkL2ZhbHNlXG4gICAgICAgIGxldCByZXQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcImV2ZW50RmlsdGVyXCIsIFwibnVsbCBldmVudFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZyhcImV2ZW50RmlsdGVyXCIsIFwiaWdub3Jpbmcgc2VsZiBlbWl0dGVkIGV2ZW50XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50LmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9nKFwiZXZlbnRGaWx0ZXJcIiwgXCJhY2NlcHRpbmcgYnJvYWRjYXN0IGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kZXN0aW5hdGlvbiA9PT0gdGhpcy5Nb2R1bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZyhcImV2ZW50RmlsdGVyXCIsIFwiYWNjZXB0aW5nIGV2ZW50IGZvciB0aGlzIG1vZHVsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZyhcImV2ZW50RmlsdGVyXCIsIFwicmVqZWN0aW5nIGV2ZW50IGZvclwiLCBldmVudC5kZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoZXZlbnRzX2luPzogU3ViamVjdDxJTW9kdWxlRXZlbnQ+KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudHNfaW4pIHtcbiAgICAgICAgICAgIHRoaXMuRXZlbnRzSW4gPSBldmVudHNfaW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGhhbmRsZUhUTUxSZXF1ZXN0KHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UpOiBFSFRUUFJldHVybiB7XG4gICAgICAgIHJldHVybiBFSFRUUFJldHVybi51bmhhbmRsZWQ7XG4gICAgfVxuICAgIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0V2ZW50KGV2ZW50OiBJTW9kdWxlRXZlbnQpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Tb2NrZXRDb25uZWN0aW9uKHNvY2tldDogU29ja2V0KTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0SU9TZXJ2ZXIoc2VydmVyOiBTZXJ2ZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pb19zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRDb25maWcoY29uZmlnOiBDb25maWcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEV2ZW50c0luKGV2ZW50c19pbjogU3ViamVjdDxJTW9kdWxlRXZlbnQ+KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnRzX2luID0gZXZlbnRzX2luO1xuICAgICAgICB0aGlzLmV2ZW50c19pbi5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5vbkluY29taW5nRXZlbnQoZXZlbnQpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uSW5jb21pbmdFdmVudChldmVudDogSU1vZHVsZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50RmlsdGVyKGV2ZW50KSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVJbmNvbWluZ0V2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdXRwdXRFdmVudChldmVudF90eXBlOiBNb2R1bGVFdmVudFR5cGUsIHBheWxvYWQ6IE1vZHVsZUV2ZW50UGF5bG9hZCwgZGVzdGluYXRpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzX291dCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNfb3V0Lm5leHQoeyBldmVudF90eXBlLCBwYXlsb2FkLCBkZXN0aW5hdGlvbiwgc291cmNlOiB0aGlzIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBTdWJqZWN0LCB0aW1lciwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5pbXBvcnQgeyByZWFkRmlsZSwgcmVhZEZpbGVTeW5jLCB3YXRjaEZpbGUsIHdyaXRlRmlsZSB9IGZyb20gXCJmc1wiO1xuLy8gaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgcmVzb2x2ZSBhcyByZXNvbHZlX3BhdGggfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiIC8vXG5cbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxudmFyIGtsYXdTeW5jID0gcmVxdWlyZSgna2xhdy1zeW5jJyk7XG5cblxuXG5pbXBvcnQgeyBTaXRlQ29uZmlnLCBab25lQ29uZmlnLCBab25lc0Zvck1hcEZpbGUsIElEaXNwbGF5U2l0ZUNvbmZpZywgSURpc3BsYXlab25lQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21pc2MvY29uZmlnXCI7XG5pbXBvcnQgeyBTb2NrZXRSZXF1ZXN0LCBTb2NrZXRSZXNwb25zZSwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXNjL3NvY2tldFwiO1xuXG5pbXBvcnQgeyBNb2R1bGUsIE1vZHVsZUV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9kZWZpbmVzXCJcblxuXG5jbGFzcyBBZG1pbk1vZHVsZSBleHRlbmRzIE1vZHVsZSB7XG4gICAgcHJvdGVjdGVkIHNpdGVfY29uZmlnOiBTaXRlQ29uZmlnO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2R1bGVfbmFtZSA9IFwiQWRtaW5Nb2R1bGVcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IFNpdGVDb25maWdQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiByZXNvbHZlX3BhdGgodGhpcy5Db25maWcuc3RhdGljX3Jvb3QsIFwic2l0ZVwiLCBcInNpdGUuanNvblwiKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IEFuaW1hdGlvbkNvbmZpZ1BhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVfcGF0aCh0aGlzLkNvbmZpZy5zdGF0aWNfcm9vdCwgXCJzaXRlXCIsIFwiYW5pbWF0aW9ucy5qc29uXCIpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXRDb25maWcoY29uZmlnOiBDb25maWcpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuc2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICAgIHRoaXMubG9hZFNpdGVDb25maWcoKTtcbiAgICAgICAgdGhpcy5sb2FkU2l0ZUFuaW1hdGlvbnMoKTtcbiAgICAgICAgdGhpcy5sb2FkRGV2aWNlSWNvbnMoKTtcbiAgICAgICAgdGhpcy5vdXRwdXRFdmVudChNb2R1bGVFdmVudFR5cGUuc2l0ZV9jb25maWdfdXBkYXRlLCB0aGlzLnNpdGVfY29uZmlnKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvblNvY2tldENvbm5lY3Rpb24oc29ja2V0OiBTb2NrZXQpOiB2b2lkIHtcbiAgICAgICAgc29ja2V0Lm9uKFwiYWRtaW5cIiwgKHJlcXVlc3Q6IFNvY2tldFJlcXVlc3QsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNvY2tldFJlcXVlc3QocmVxdWVzdClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJFcnJvciBoYW5kbGVTb2NrZXRSZXF1ZXN0XCIsIGVycm9yLCByZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgc29ja2V0Lm9uKFwic3Vic2NyaWJlXCIsICh0b3BpYzogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBzb2NrZXQuam9pbih0b3BpYyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBoYW5kbGVTb2NrZXRSZXF1ZXN0KHJlcXVlc3Q6IFNvY2tldFJlcXVlc3QpOiBQcm9taXNlPFNvY2tldFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTb2NrZXRSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBTb2NrZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN3aXRjaCAocmVxdWVzdC50eXBlKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuKFwidW5rbm93biBzb2NrZXQgcmVxdWVzdFwiLCByZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJlcXVlc3QuYWRtaW4uY29uZmlnXCI6XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5oYW5kbGVSZXF1ZXN0QWRtaW5Db25maWcocmVxdWVzdCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJkZXZpY2UudHlwZXMudXBkYXRlXCI6XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5oYW5kbGVEZXZpY2VUeXBlc1VwZGF0ZVJlcXVlc3QocmVxdWVzdCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJkaXNwbGF5LnNhdmUuY29uZmlnXCI6XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5oYW5kbGVEaXNwbGF5U2F2ZUNvbmZpZyhyZXF1ZXN0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFuZGxlRGlzcGxheVNhdmVDb25maWcocmVxdWVzdDogU29ja2V0UmVxdWVzdCk6IFByb21pc2U8U29ja2V0UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFNvY2tldFJlc3BvbnNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiaGFuZGxlRGlzcGxheVNhdmVDb25maWdcIiwgXCJubyByZXF1ZXN0XCIpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgU29ja2V0UmVzcG9uc2UocmVxdWVzdCwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcy5iYWRfcGFyYW1ldGVycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcXVlc3QucGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiaGFuZGxlRGlzcGxheVNhdmVDb25maWdcIiwgXCJubyByZXF1ZXN0IHBheWxvYWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgU29ja2V0UmVzcG9uc2UocmVxdWVzdCwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcy5iYWRfcGFyYW1ldGVycykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZzogSURpc3BsYXlTaXRlQ29uZmlnID0gcmVxdWVzdC5wYXlsb2FkIGFzIElEaXNwbGF5U2l0ZUNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maWcuem9uZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJoYW5kbGVEaXNwbGF5U2F2ZUNvbmZpZ1wiLCBcIm5vIHpvbmVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBTb2NrZXRSZXNwb25zZShyZXF1ZXN0LCBTb2NrZXRSZXNwb25zZVJlc3VsdFR5cGVzLmJhZF9wYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dEV2ZW50KE1vZHVsZUV2ZW50VHlwZS5zYXZlX2Rpc3BsYXlfZGF0YSwgcmVxdWVzdC5wYXlsb2FkLCBcIkRpc3BsYXlNb2R1bGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBTb2NrZXRSZXNwb25zZShyZXF1ZXN0LCBTb2NrZXRSZXNwb25zZVJlc3VsdFR5cGVzLnN1Y2Nlc3MpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZVJlcXVlc3RBZG1pbkNvbmZpZyhyZXF1ZXN0OiBTb2NrZXRSZXF1ZXN0KTogUHJvbWlzZTxTb2NrZXRSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U29ja2V0UmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJoYW5kbGVSZXF1ZXN0QWRtaW5Db25maWdcIiwgXCJubyByZXF1ZXN0XCIpO1xuXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBTb2NrZXRSZXNwb25zZShyZXF1ZXN0LCBTb2NrZXRSZXNwb25zZVJlc3VsdFR5cGVzLmJhZF9wYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaXRlX2NvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiaGFuZGxlUmVxdWVzdEFkbWluQ29uZmlnXCIsIFwibm8gc2l0ZSBjb25maWdcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgU29ja2V0UmVzcG9uc2UocmVxdWVzdCwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcy5iYWRfcGFyYW1ldGVycykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IFNvY2tldFJlc3BvbnNlKHJlcXVlc3QsIFNvY2tldFJlc3BvbnNlUmVzdWx0VHlwZXMuc3VjY2VzcywgeyBjb25maWc6IHRoaXMuc2l0ZV9jb25maWcgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhbmRsZURldmljZVR5cGVzVXBkYXRlUmVxdWVzdChyZXF1ZXN0OiBTb2NrZXRSZXF1ZXN0KTogUHJvbWlzZTxTb2NrZXRSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U29ja2V0UmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgU29ja2V0UmVzcG9uc2UocmVxdWVzdCwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcy5iYWRfcGFyYW1ldGVycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcXVlc3QucGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IFNvY2tldFJlc3BvbnNlKHJlcXVlc3QsIFNvY2tldFJlc3BvbnNlUmVzdWx0VHlwZXMuYmFkX3BhcmFtZXRlcnMpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpdGVfY29uZmlnLmRldmljZV90eXBlcyA9IHJlcXVlc3QucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNpdGVDb25maWdVcGRhdGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGxvYWREZXZpY2VJY29ucygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWNvbl9yb290ID0gcmVzb2x2ZV9wYXRoKHRoaXMuQ29uZmlnLnN0YXRpY19yb290LCBcImRldmljZVwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBwYXRocyA9IGtsYXdTeW5jKGljb25fcm9vdCwgeyBmaWx0ZXI6IChpdGVtOiBhbnkpID0+IGl0ZW0ucGF0aC5lbmRzV2l0aChcIi5zdmdcIikgfSk7XG4gICAgICAgICAgICBpZiAocGF0aHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICAgICAgICAgIHBhdGhzLmZvckVhY2goKHBhdGg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVhZEZpbGVTeW5jKHBhdGgucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29ucy5wdXNoKGRhdGEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNpdGVfY29uZmlnLmRldmljZV90eXBlX2ljb25zID0gaWNvbnM7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2coaWNvbnMubGVuZ3RoLCBcImRldmljZSBpY29ucyBsb2FkZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcImxvYWREZXZpY2VJY29uczpcIiwgZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBsb2FkU2l0ZUNvbmZpZygpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmxvZyhcImxvYWRTaXRlQ29uZmlnXCIsIFwicmVhZGluZyBzaXRlIGNvbmZpZyBmcm9tIFwiLCB0aGlzLlNpdGVDb25maWdQYXRoKTtcbiAgICAgICAgY29uc3Qgc2l0ZV9qc29uID0gcmVhZEZpbGVTeW5jKHRoaXMuU2l0ZUNvbmZpZ1BhdGgpO1xuICAgICAgICB0aGlzLnNpdGVfY29uZmlnID0gSlNPTi5wYXJzZShzaXRlX2pzb24udG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuc2l0ZV9jb25maWcuem9uZXMuZm9yRWFjaCh6b25lID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZXBhdGggPSByZXNvbHZlX3BhdGgodGhpcy5Db25maWcuc3RhdGljX3Jvb3QsIFwiem9uZXNcIiwgem9uZS5tYXBfZmlsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2coXCJsb2FkU2l0ZUNvbmZpZ1wiLCBcInJlYWRpbmcgem9uZSBcIiwgem9uZS5kaXNwbGF5X25hbWUsIFwibWFwIGRhdGEgZnJvbVwiLCBmaWxlcGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwX2RhdGFfYnVmZmVyID0gcmVhZEZpbGVTeW5jKGZpbGVwYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZyhcInJlYWRcIiwgbWFwX2RhdGFfYnVmZmVyLmxlbmd0aCwgXCJieXRlc1wiKTtcbiAgICAgICAgICAgICAgICB6b25lLm1hcF9kYXRhID0gbWFwX2RhdGFfYnVmZmVyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiRXhjZXB0aW9uIGR1cmluZyBsb2FkIG1hcCBmaWxlIGRhdGFcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBsb2FkU2l0ZUFuaW1hdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmxvZyhcImxvYWRTaXRlQW5pbWF0aW9uc1wiLCBcInJlYWRpbmdcIiwgdGhpcy5BbmltYXRpb25Db25maWdQYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbl9kYXRhX2J1ZmZlciA9IHJlYWRGaWxlU3luYyh0aGlzLkFuaW1hdGlvbkNvbmZpZ1BhdGgpO1xuICAgICAgICAgICAgdGhpcy5sb2coXCJsb2FkU2l0ZUFuaW1hdGlvbnNcIiwgXCJyZWFkXCIsIGFuaW1hdGlvbl9kYXRhX2J1ZmZlci5sZW5ndGgsIFwiYnl0ZXNcIik7XG4gICAgICAgICAgICB0aGlzLnNpdGVfY29uZmlnLmFuaW1hdGlvbnMgPSBKU09OLnBhcnNlKGFuaW1hdGlvbl9kYXRhX2J1ZmZlci50b1N0cmluZygpKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJFeGNlcHRpb24gdGhyb3duIGR1cmluZyBhbmltYXRpb24gcmVhZFwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHNhdmVTaXRlQ29uZmlnKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGUgem9uZSBtYXAgZGF0YSBpbiBvdXIganNvbiwgb3IgdGhlIHR5cGUgaWNvbiBkYXRhIC0gaXQgYWxsIGdldHMgbG9hZGVkIHNlcGFyYXRlbHlcbiAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkX3NpdGU6IFNpdGVDb25maWcgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2l0ZV9jb25maWcpKTtcbiAgICAgICAgICAgIG1vZGlmaWVkX3NpdGUuem9uZXMuZm9yRWFjaCgoem9uZTogWm9uZUNvbmZpZykgPT4ge1xuICAgICAgICAgICAgICAgIHpvbmUubWFwX2RhdGEgPSBcIlwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBtb2RpZmllZF9zaXRlLmRldmljZV90eXBlcy5mb3JFYWNoKGRldmljZV90eXBlID0+IGRldmljZV90eXBlLnN0YXR1cyA9IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBtb2RpZmllZF9zaXRlLmRldmljZV90eXBlX2ljb25zID0gW107XG4gICAgICAgICAgICBtb2RpZmllZF9zaXRlLmFuaW1hdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb25zdCBzaXRlX2pzb24gPSBKU09OLnN0cmluZ2lmeShtb2RpZmllZF9zaXRlKTtcbiAgICAgICAgICAgIHdyaXRlRmlsZSh0aGlzLlNpdGVDb25maWdQYXRoLCBzaXRlX2pzb24sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJmaWxlIHdyaXRlIGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uU2l0ZUNvbmZpZ1VwZGF0ZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2F2ZVNpdGVDb25maWcoKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwic2F2ZVNpdGVDb25maWcgZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBhbnkgY2xpZW50cz9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiZXhjZXB0aW9uIGR1cmluZyBzYXZlU2l0ZUNvbmZpZ1wiLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIHNjaG9vbCdzIG91dFxufVxuXG5cblxuY29uc3QgYWRtaW5fbW9kdWxlID0gbmV3IEFkbWluTW9kdWxlKCk7XG5leHBvcnQgeyBhZG1pbl9tb2R1bGUgYXMgQWRtaW4gfVxuIiwiaW1wb3J0IHsgU3ViamVjdCwgdGltZXIsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIlxuaW1wb3J0IHsgcmVhZEZpbGUsIHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xuLy8gaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgcmVzb2x2ZSBhcyByZXNvbHZlX3BhdGggfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgU2VydmVyLCBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvXCJcblxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyB6aXAgfSBmcm9tICd6aXAtYS1mb2xkZXInO1xuXG5cbmltcG9ydCB7IFNvY2tldFJlcXVlc3QsIFNvY2tldFJlc3BvbnNlLCBTb2NrZXRSZXNwb25zZVJlc3VsdFR5cGVzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21pc2Mvc29ja2V0XCJcbmltcG9ydCB7IFNpdGVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWlzYy9jb25maWdcIjtcbmltcG9ydCB7IExpc21vcmVQYWNrZXQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWlzYy9saXNtb3JlXCI7XG5cblxuXG5cbmltcG9ydCB7IElEaXNwbGF5U2l0ZUNvbmZpZywgSURpc3BsYXlBbmltYXRpb25zIH0gZnJvbSBcIi4vZGVmaW5lc1wiO1xuXG5pbXBvcnQgeyBNb2R1bGUsIElNb2R1bGVFdmVudCwgTW9kdWxlRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL21vZHVsZVwiO1xuaW1wb3J0IHsgQ29uZmlnLCBFSFRUUFJldHVybiB9IGZyb20gXCIuLi8uLi9kZWZpbmVzXCJcblxuXG5jbGFzcyBEaXNwbGF5TW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBwcm90ZWN0ZWQgc2l0ZV9jb25maWc6IElEaXNwbGF5U2l0ZUNvbmZpZztcbiAgICBwcml2YXRlIG9uZ29pbmdfZXZlbnRzOiBBcnJheTxMaXNtb3JlUGFja2V0PjtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub25nb2luZ19ldmVudHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0Q29uZmlnKGNvbmZpZzogQ29uZmlnKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnNldENvbmZpZyhjb25maWcpO1xuICAgICAgICB0aGlzLmxvYWRTaXRlQ29uZmlnKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU29ja2V0Q29ubmVjdGlvbihzb2NrZXQ6IFNvY2tldCk6IHZvaWQge1xuICAgICAgICBzb2NrZXQub24oXCJkaXNwbGF5XCIsIChyZXF1ZXN0OiBTb2NrZXRSZXF1ZXN0LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTb2NrZXRSZXF1ZXN0KHJlcXVlc3QpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiRXJyb3IgaGFuZGxlU29ja2V0UmVxdWVzdFwiLCBlcnJvciwgcmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBoYW5kbGVJbmNvbWluZ0V2ZW50KGV2ZW50OiBJTW9kdWxlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5ldmVudF90eXBlKSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZXJyb3IoXCJoYW5kbGVJbmNvbWluZ0V2ZW50XCIsIFwidW5rbm93biBldmVudFwiLCBldmVudC5ldmVudF90eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW9kdWxlRXZlbnRUeXBlLnNhdmVfZGlzcGxheV9kYXRhOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU2F2ZURhdGFFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE1vZHVsZUV2ZW50VHlwZS5yeF91ZHBfcGFja2V0OlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUnhVZHBQYWNrZXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIE1vZHVsZUV2ZW50VHlwZS5zaXRlX2NvbmZpZ191cGRhdGU6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTaXRlQ29uZmlnVXBkYXRlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgaGFuZGxlU29ja2V0UmVxdWVzdChyZXF1ZXN0OiBTb2NrZXRSZXF1ZXN0KTogUHJvbWlzZTxTb2NrZXRSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U29ja2V0UmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogU29ja2V0UmVzcG9uc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlcXVlc3QudHlwZSkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJ1bmtub3duIHNvY2tldCByZXF1ZXN0XCIsIHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGlzcGxheS5yZXF1ZXN0LmNvbmZpZ1wiOlxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuaGFuZGxlUmVxdWVzdENvbmZpZyhyZXF1ZXN0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkaXNwbGF5LnJlcXVlc3QuZXZlbnRzXCI6XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5oYW5kbGVSZXF1ZXN0RXZlbnRzKHJlcXVlc3QpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgaGFuZGxlUmVxdWVzdEV2ZW50cyhyZXF1ZXN0OiBTb2NrZXRSZXF1ZXN0KTogUHJvbWlzZTxTb2NrZXRSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8U29ja2V0UmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgU29ja2V0UmVzcG9uc2UocmVxdWVzdCwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcy5iYWRfcGFyYW1ldGVycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZyhcImhhbmRsZVJlcXVlc3RFdmVudHNcIiwgdGhpcy5vbmdvaW5nX2V2ZW50cyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgU29ja2V0UmVzcG9uc2UocmVxdWVzdCwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcy5zdWNjZXNzLCB0aGlzLm9uZ29pbmdfZXZlbnRzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuICAgIHByb3RlY3RlZCBoYW5kbGVSZXF1ZXN0Q29uZmlnKHJlcXVlc3Q6IFNvY2tldFJlcXVlc3QpOiBQcm9taXNlPFNvY2tldFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTb2NrZXRSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcImhhbmRsZVJlcXVlc3RDb25maWdcIiwgXCJubyByZXF1ZXN0XCIpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgU29ja2V0UmVzcG9uc2UocmVxdWVzdCwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcy5iYWRfcGFyYW1ldGVycykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2l0ZV9jb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcImhhbmRsZVJlcXVlc3RDb25maWdcIiwgXCJubyBzaXRlIGNvbmZpZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBTb2NrZXRSZXNwb25zZShyZXF1ZXN0LCBTb2NrZXRSZXNwb25zZVJlc3VsdFR5cGVzLmJhZF9wYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgU29ja2V0UmVzcG9uc2UocmVxdWVzdCwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcy5zdWNjZXNzLCB0aGlzLnNpdGVfY29uZmlnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBsb2FkU2l0ZUNvbmZpZygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2l0ZV9jb25maWdfcGF0aCA9IHJlc29sdmVfcGF0aCh0aGlzLkNvbmZpZy5zdGF0aWNfcm9vdCwgXCJzaXRlXCIsIFwiZGlzcGxheS5zaXRlLmpzb25cIik7XG4gICAgICAgIGNvbnN0IHNpdGVfanNvbiA9IHJlYWRGaWxlU3luYyhzaXRlX2NvbmZpZ19wYXRoKTtcbiAgICAgICAgdGhpcy5zaXRlX2NvbmZpZyA9IEpTT04ucGFyc2Uoc2l0ZV9qc29uLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLnNpdGVfY29uZmlnLnpvbmVzLmZvckVhY2goem9uZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB6b25lX21hcF9wYXRoID0gcmVzb2x2ZV9wYXRoKHRoaXMuQ29uZmlnLnN0YXRpY19yb290LCBcInNpdGVcIiwgem9uZS5tYXBfZmlsZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHpvbmUubWFwX2RhdGEgPSByZWFkRmlsZVN5bmMoem9uZV9tYXBfcGF0aCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcImxvYWRTaXRlQ29uZmlnXCIsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubG9hZFNpdGVBbmltYXRpb25zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGxvYWRTaXRlQW5pbWF0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVwYXRoID0gcmVzb2x2ZV9wYXRoKHRoaXMuQ29uZmlnLnN0YXRpY19yb290LCBcInNpdGVcIiwgXCJhbmltYXRpb25zLmpzb25cIik7XG4gICAgICAgICAgICB0aGlzLmxvZyhcImxvYWRTaXRlQW5pbWF0aW9uc1wiLCBcInJlYWRpbmdcIiwgZmlsZXBhdGgpO1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uX2RhdGFfYnVmZmVyID0gcmVhZEZpbGVTeW5jKGZpbGVwYXRoKTtcbiAgICAgICAgICAgIHRoaXMubG9nKFwibG9hZFNpdGVBbmltYXRpb25zXCIsIFwicmVhZFwiLCBhbmltYXRpb25fZGF0YV9idWZmZXIubGVuZ3RoLCBcImJ5dGVzXCIpO1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uczogSURpc3BsYXlBbmltYXRpb25zID0gSlNPTi5wYXJzZShhbmltYXRpb25fZGF0YV9idWZmZXIudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLnNpdGVfY29uZmlnLmFuaW1hdGlvbnMgPSB7IGVuZF9ldmVudHM6IGFuaW1hdGlvbnMuZW5kX2V2ZW50cywgc2VxdWVuY2VzOiBhbmltYXRpb25zLnNlcXVlbmNlcyB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiRXhjZXB0aW9uIHRocm93biBkdXJpbmcgYW5pbWF0aW9uIHJlYWRcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBzYXZlU2l0ZU1hcHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2l0ZV9jb25maWcuem9uZXMuZm9yRWFjaCh6b25lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHpvbmVfbWFwX3BhdGggPSByZXNvbHZlX3BhdGgodGhpcy5Db25maWcuc3RhdGljX3Jvb3QsIFwic2l0ZVwiLCB6b25lLm1hcF9maWxlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgd3JpdGVGaWxlU3luYyh6b25lX21hcF9wYXRoLCB6b25lLm1hcF9kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZyhcInpvbmUgXCIsIHpvbmUuZGlzcGxheV9uYW1lLCBcIndyb3RlXCIsIHpvbmUubWFwX2RhdGEubGVuZ3RoLCBcImJ5dGVzIHRvXCIsIHpvbmVfbWFwX3BhdGgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwibG9hZFNpdGVDb25maWdcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBwcm90ZWN0ZWQgaGFuZGxlU2F2ZURhdGFFdmVudChldmVudDogSU1vZHVsZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRhdGE6IElEaXNwbGF5U2l0ZUNvbmZpZyA9IGV2ZW50LnBheWxvYWQgYXMgSURpc3BsYXlTaXRlQ29uZmlnO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJoYW5kbGVTYXZlRGF0YUV2ZW50XCIsIFwibm8gZXZlbnQgcGF5bG9hZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZGF0YS56b25lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJoYW5kbGVTYXZlRGF0YUV2ZW50XCIsIFwibm8gZXZlbnQgcGF5bG9hZCB6b25lc1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS56b25lcy5mb3JFYWNoKHpvbmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB6b25lX2FycmF5ID0gdGhpcy5zaXRlX2NvbmZpZy56b25lcy5maWx0ZXIoZXhpc3Rpbmdfem9uZSA9PiB6b25lLmRpc3BsYXlfbmFtZSA9PT0gZXhpc3Rpbmdfem9uZS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoem9uZV9hcnJheS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiaGFuZGxlU2F2ZURhdGFFdmVudFwiLCBcIm5vIGV4aXN0aW5nIHpvbmUgZm9yXCIsIHpvbmUuZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nX3pvbmUgPSB6b25lX2FycmF5WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3Rpbmdfem9uZS5tYXBfZGF0YSA9IHpvbmUubWFwX2RhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTaXRlTWFwcygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpdGVfcGF0aCA9IHJlc29sdmVfcGF0aCh0aGlzLkNvbmZpZy5zdGF0aWNfcm9vdCwgXCJzaXRlXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2t1cF9wYXRoID0gcmVzb2x2ZV9wYXRoKHRoaXMuQ29uZmlnLnN0YXRpY19yb290LCBcImJhY2t1cHNcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l0ZV9iYWNrdXBfcGF0aCA9IHJlc29sdmVfcGF0aChiYWNrdXBfcGF0aCwgdGltZXN0YW1wLnRvU3RyaW5nKCkrXCJfc2l0ZS56aXBcIik7XG4gICAgICAgICAgICAgICAgemlwKHNpdGVfcGF0aCwgc2l0ZV9iYWNrdXBfcGF0aClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHpvbmVzX3BhdGggPSByZXNvbHZlX3BhdGgodGhpcy5Db25maWcuc3RhdGljX3Jvb3QsIFwiem9uZXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB6b25lc19iYWNrdXBfcGF0aCA9IHJlc29sdmVfcGF0aChiYWNrdXBfcGF0aCwgdGltZXN0YW1wLnRvU3RyaW5nKCkrXCJfem9uZXMuemlwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgemlwKHpvbmVzX3BhdGgsIHpvbmVzX2JhY2t1cF9wYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5JTy5zb2NrZXRzLmluKFwiZGlzcGxheVwiKS5lbWl0KCdkaXNwbGF5LmNvbmZpZy5jaGFuZ2UnLCB0aGlzLnNpdGVfY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcik9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcIkVycm9yIGJhY2tpbmcgdXAgZGF0YSA6IFwiLGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcIkVycm9yIGJhY2tpbmcgdXAgZGF0YSA6IFwiLGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYW5kbGVTaXRlQ29uZmlnVXBkYXRlKGV2ZW50OiBJTW9kdWxlRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFldmVudCkge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcImhhbmRsZVNpdGVDb25maWdVcGRhdGVcIiwgXCJubyBldmVudFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZXZlbnQucGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJoYW5kbGVTaXRlQ29uZmlnVXBkYXRlXCIsIFwibm8gZXZlbnQgcGF5bG9hZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3VycmVudGx5IHdlIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBoYW5kbGVSeFVkcFBhY2tldChldmVudDogSU1vZHVsZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhY2tldCA9IGV2ZW50LnBheWxvYWQgYXMgTGlzbW9yZVBhY2tldDtcbiAgICAgICAgaWYgKCFwYWNrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJoYW5kbGVSeFVkcFBhY2tldFwiLCBcIm5vIHBhY2tldFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwYWNrZXQuZXZlbnRfaWQgPCAwIHx8IHBhY2tldC5ldmVudF9pZCA+IDI1NSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJoYW5kbGVSeFVkcFBhY2tldFwiLCBcIm5vIHBhY2tldCBpZFwiLCBwYWNrZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2l0ZV9jb25maWcuYW5pbWF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiaGFuZGxlUnhVZHBQYWNrZXRcIiwgXCJubyBhbmltYXRpb25zXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zaXRlX2NvbmZpZy5hbmltYXRpb25zLmVuZF9ldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJoYW5kbGVSeFVkcFBhY2tldFwiLCBcIm5vIGVuZCBldmVudHNcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaXRlX2NvbmZpZy5hbmltYXRpb25zLmVuZF9ldmVudHMuaW5jbHVkZXMocGFja2V0LmV2ZW50X2lkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9nKFwiaGFuZGxlUnhVZHBQYWNrZXRcIiwgXCJ0aGlzIGlzIGFuIGVuZCBldmVudFwiLCBwYWNrZXQsIHRoaXMub25nb2luZ19ldmVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25nb2luZ19ldmVudHMgPSB0aGlzLm9uZ29pbmdfZXZlbnRzLmZpbHRlcihvbmdvaW5nX2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFvbmdvaW5nX2V2ZW50LmlzVGhlU2FtZURldmljZShwYWNrZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9nKFwiaGFuZGxlUnhVZHBQYWNrZXRcIiwgXCJuZXcgb25nb2luZyBldmVudHNcIiwgdGhpcy5vbmdvaW5nX2V2ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2l0ZV9jb25maWcuYW5pbWF0aW9ucy5zZXF1ZW5jZXMuZm9yRWFjaChzZXF1ZW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5ldmVudHMuaW5jbHVkZXMocGFja2V0LmV2ZW50X2lkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2coXCJoYW5kbGVSeFVkcFBhY2tldFwiLCBcInRoaXMgaXMgYW4gc3RhcnQgZXZlbnRcIiwgcGFja2V0LCBzZXF1ZW5jZSwgdGhpcy5vbmdvaW5nX2V2ZW50cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25nb2luZ19ldmVudHMgPSB0aGlzLm9uZ29pbmdfZXZlbnRzLmZpbHRlcihvbmdvaW5nX2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIW9uZ29pbmdfZXZlbnQuaXNUaGVTYW1lRGV2aWNlKHBhY2tldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25nb2luZ19ldmVudHMucHVzaChwYWNrZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2coXCJoYW5kbGVSeFVkcFBhY2tldFwiLCBcIm5ldyBvbmdvaW5nIGV2ZW50c1wiLCB0aGlzLm9uZ29pbmdfZXZlbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2Nob29sJ3Mgb3V0XG59XG5cblxuY29uc3QgZGlzcGxheV9tb2R1bGUgPSBuZXcgRGlzcGxheU1vZHVsZSgpO1xuZXhwb3J0IHsgZGlzcGxheV9tb2R1bGUgYXMgRGlzcGxheSB9XG4iLCJpbXBvcnQgeyBTdWJqZWN0LCB0aW1lciwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiXG5pbXBvcnQgeyB3cml0ZUZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSBcIi4uLy4uL21vZHVsZVwiO1xuaW1wb3J0IHsgRUhUVFBSZXR1cm4gfSBmcm9tIFwiLi4vLi4vZGVmaW5lc1wiXG5cblxuY2xhc3MgU3RhdGljTW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kdWxlX25hbWUgPSBcIlN0YXRpY1wiO1xuICAgIH1cblxuXG4gICAgcHVibGljIGhhbmRsZUhUTUxSZXF1ZXN0KHJlcXVlc3Q6IGV4cHJlc3MuUmVxdWVzdCwgcmVzcG9uc2U6IGV4cHJlc3MuUmVzcG9uc2UpOiBFSFRUUFJldHVybiB7XG4gICAgICAgIGxldCByZXQgPSBFSFRUUFJldHVybi51bmhhbmRsZWQ7XG4gICAgICAgIGlmIChyZXF1ZXN0LnBhdGggPT09IFwiL1wiKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlcGF0aCA9IHBhdGgucmVzb2x2ZSh0aGlzLkNvbmZpZy5zdGF0aWNfcm9vdCwgXCJkaXNwbGF5Lmh0bWxcIik7XG4gICAgICAgICAgICByZXNwb25zZS5zZW5kRmlsZShmaWxlcGF0aCk7XG4gICAgICAgICAgICByZXQgPSBFSFRUUFJldHVybi5oYW5kbGVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1ZXN0LnBhdGggPT09IFwiL2luamVjdG9yXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVwYXRoID0gcGF0aC5yZXNvbHZlKHRoaXMuQ29uZmlnLnN0YXRpY19yb290LCBcImluamVjdG9yLmh0bWxcIik7XG4gICAgICAgICAgICByZXNwb25zZS5zZW5kRmlsZShmaWxlcGF0aCk7XG4gICAgICAgICAgICByZXQgPSBFSFRUUFJldHVybi5oYW5kbGVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1ZXN0LnBhdGggPT09IFwiL2FkbWluXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVwYXRoID0gcGF0aC5yZXNvbHZlKHRoaXMuQ29uZmlnLnN0YXRpY19yb290LCBcImFkbWluLmh0bWxcIik7XG4gICAgICAgICAgICByZXNwb25zZS5zZW5kRmlsZShmaWxlcGF0aCk7XG4gICAgICAgICAgICByZXQgPSBFSFRUUFJldHVybi5oYW5kbGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cblxuICAgIC8vIHNjaG9vbCdzIG91dFxufVxuXG5cblxuY29uc3Qgc3RhdGljX21vZHVsZSA9IG5ldyBTdGF0aWNNb2R1bGUoKTtcbmV4cG9ydCB7IHN0YXRpY19tb2R1bGUgYXMgU3RhdGljIH1cbiIsImltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgKiBhcyBkZ3JhbSBmcm9tIFwiZGdyYW1cIjtcblxuaW1wb3J0IHsgTG9nZ2FibGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWlzYy9sb2dnYWJsZVwiO1xuaW1wb3J0IHsgTGlzbW9yZVBhY2tldCB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXNjL2xpc21vcmVcIjtcblxuXG5jb25zdCBMSVNNT1JFX0RVUExJQ0FURV9USU1FT1VUID0gNTAwO1xuY29uc3QgTElTTU9SRV9CUk9BRENBU1RfREVTVElOQVRJT04gPSBcIjIzOS4yNTUuMjU1LjI1MFwiO1xuLy8gY29uc3QgTElTTU9SRV9CUk9BRENBU1RfREVTVElOQVRJT04gPSBcIjI1NS4yNTUuMjU1LjI1NVwiO1xuXG5leHBvcnQgY2xhc3MgVURQTGlzdGVuZXIgZXh0ZW5kcyBMb2dnYWJsZSB7XG4gICAgcHJpdmF0ZSBwb3J0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSB1ZHBfc29ja2V0OiBkZ3JhbS5Tb2NrZXQ7XG4gICAgcHJpdmF0ZSBsYXN0X2xpcF90aW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBsYXN0X2xpcF9wYWNrZXQ6IExpc21vcmVQYWNrZXQ7XG5cbiAgICBwcml2YXRlIHBhY2tldF9zdHJlYW06IFN1YmplY3Q8TGlzbW9yZVBhY2tldD47XG5cblxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBvcnQ6IG51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBvcnQgPSBwb3J0O1xuICAgICAgICB0aGlzLnBhY2tldF9zdHJlYW0gPSBuZXcgU3ViamVjdDxMaXNtb3JlUGFja2V0PigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgUGFja2V0U3RyZWFtKCk6IE9ic2VydmFibGU8TGlzbW9yZVBhY2tldD4geyByZXR1cm4gdGhpcy5wYWNrZXRfc3RyZWFtOyB9XG5cblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5saXN0ZW5Ub1VEUCgpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMudWRwX3NvY2tldCkge1xuICAgICAgICAgICAgdGhpcy51ZHBfc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnVkcF9zb2NrZXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGxpc3RlblRvVURQKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVkcF9zb2NrZXQgPSBkZ3JhbS5jcmVhdGVTb2NrZXQoXCJ1ZHA0XCIpO1xuICAgICAgICBpZiAodGhpcy51ZHBfc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnVkcF9zb2NrZXQub24oXCJlcnJvclwiLCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJkZ3JhbS5zb2NrZXQgZXJyb3IgXCIsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnVkcF9zb2NrZXQub24oXCJtZXNzYWdlXCIsIChtZXNzYWdlOiBCdWZmZXIsIHJlbW90ZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk1lc3NhZ2UobWVzc2FnZSwgcmVtb3RlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnVkcF9zb2NrZXQub24oXCJsaXN0ZW5pbmdcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3M6IGFueSA9IHRoaXMudWRwX3NvY2tldC5hZGRyZXNzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2coXCJVRFAgU2VydmVyIGxpc3RlbmluZyBvbiBcIiArIGFkZHJlc3MuYWRkcmVzcyArIFwiOlwiICsgYWRkcmVzcy5wb3J0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnVkcF9zb2NrZXQuYmluZCh0aGlzLnBvcnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcihcIkVycm9yIHN0YXJ0aW5nIHVkcCBzb2NrZXRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHVibGljIG9uTWVzc2FnZShtZXNzYWdlOiBCdWZmZXIsIHJlbW90ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhY2tldCA9IG5ldyBMaXNtb3JlUGFja2V0KG1lc3NhZ2UuYnVmZmVyKTtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdF9saXBfdGltZSAmJiB0aGlzLmxhc3RfbGlwX3BhY2tldCkge1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdF9saXBfdGltZTtcbiAgICAgICAgICAgIGlmIChkaWZmIDw9IExJU01PUkVfRFVQTElDQVRFX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFja2V0Lm1hdGNoZXModGhpcy5sYXN0X2xpcF9wYWNrZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9nKFwiZGlzcmVnYXJkaW5nIGR1cGxpY2F0ZSBsaXNtb3JlIHBhY2tldFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhY2tldF9zdHJlYW0ubmV4dChwYWNrZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0X2xpcF9wYWNrZXQgPSBwYWNrZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWNrZXRfc3RyZWFtLm5leHQocGFja2V0KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYWNrZXRfc3RyZWFtLm5leHQocGFja2V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RfbGlwX3RpbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIHRoaXMubGFzdF9saXBfcGFja2V0ID0gcGFja2V0O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGJyb2FkY2FzdFBhY2tldChwYWNrZXQ6IExpc21vcmVQYWNrZXQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gcGFja2V0LnRvQnVmZmVyKCk7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0KGJ1ZmZlcik7XG4gICAgfVxuICAgIHByaXZhdGUgYnJvYWRjYXN0KG1lc3NhZ2U6IEJ1ZmZlcik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcImJyb2FkY2FzdFwiLCBtZXNzYWdlKTtcbiAgICAgICAgaWYgKHRoaXMudWRwX3NvY2tldCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJicm9hZGNhc3RpbmdcIiwgbWVzc2FnZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMudWRwX3NvY2tldC5zZW5kKG1lc3NhZ2UsIDAsIG1lc3NhZ2UubGVuZ3RoLCB0aGlzLnBvcnQsIExJU01PUkVfQlJPQURDQVNUX0RFU1RJTkFUSU9OKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFN1YmplY3QsIHRpbWVyLCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIlxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCJcbmltcG9ydCB7IHdyaXRlRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBNb2R1bGUsIE1vZHVsZUV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9tb2R1bGVcIjtcbmltcG9ydCB7IFVEUExpc3RlbmVyIH0gZnJvbSBcIi4vdWRwLmxpc3RlbmVyXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vZGVmaW5lc1wiXG5pbXBvcnQgeyBMaXNtb3JlUGFja2V0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL21pc2MvbGlzbW9yZVwiO1xuaW1wb3J0IHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pb1wiIC8vXG5pbXBvcnQgeyBTb2NrZXRSZXF1ZXN0LCBTb2NrZXRSZXNwb25zZSwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXNjL3NvY2tldFwiO1xuXG5cbmNsYXNzIFVEUE1vZHVsZSBleHRlbmRzIE1vZHVsZSB7XG4gICAgcHJpdmF0ZSB1ZHA6IFVEUExpc3RlbmVyO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2R1bGVfbmFtZSA9IFwiVURQXCI7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgc2V0Q29uZmlnKGNvbmZpZzogQ29uZmlnKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnNldENvbmZpZyhjb25maWcpO1xuICAgICAgICBsZXQgdWRwX3BvcnQgPSB0aGlzLkNvbmZpZy51ZHBfcG9ydDtcbiAgICAgICAgaWYgKHVkcF9wb3J0KSB7XG4gICAgICAgICAgICB0aGlzLnVkcCA9IG5ldyBVRFBMaXN0ZW5lcih1ZHBfcG9ydCk7XG4gICAgICAgICAgICB0aGlzLnVkcC5QYWNrZXRTdHJlYW0uc3Vic2NyaWJlKHBhY2tldCA9PiB0aGlzLm9uVWRwUGFja2V0KHBhY2tldCkpO1xuICAgICAgICAgICAgdGhpcy51ZHAuc3RhcnQoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uU29ja2V0Q29ubmVjdGlvbihzb2NrZXQ6IFNvY2tldCk6IHZvaWQge1xuICAgICAgICBzb2NrZXQuam9pbihcInJhd19wYWNrZXRcIik7XG5cbiAgICAgICAgc29ja2V0Lm9mZihcImluamVjdG9yXCIsIChyZXF1ZXN0OiBTb2NrZXRSZXF1ZXN0LCBjYWxsYmFjazogYW55KSA9PiB7IH0pO1xuICAgICAgICBzb2NrZXQub24oXCJpbmplY3RvclwiLCAocmVxdWVzdDogU29ja2V0UmVxdWVzdCwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU29ja2V0UmVxdWVzdChyZXF1ZXN0KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcIkVycm9yIGhhbmRsZVNvY2tldFJlcXVlc3RcIiwgZXJyb3IsIHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVTb2NrZXRSZXF1ZXN0KHJlcXVlc3Q6IFNvY2tldFJlcXVlc3QpOiBQcm9taXNlPFNvY2tldFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTb2NrZXRSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBTb2NrZXRSZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHN3aXRjaCAocmVxdWVzdC50eXBlKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuKFwidW5rbm93biBzb2NrZXQgcmVxdWVzdFwiLCByZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImluamVjdG9yLmluamVjdFwiOlxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuaGFuZGxlSW5qZWN0aW9uUmVxdWVzdChyZXF1ZXN0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25VZHBQYWNrZXQocGFja2V0OiBMaXNtb3JlUGFja2V0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuSU8uc29ja2V0cy5pbihcInJhd19wYWNrZXRcIikuZW1pdCgncmF3X3BhY2tldCcsIEpTT04uc3RyaW5naWZ5KHBhY2tldCkpO1xuICAgICAgICB0aGlzLmxvZyhcInJlY2VpdmVkIHBhY2tldFwiLCBwYWNrZXQuYWRkcmVzcywgXCI6XCIsIHBhY2tldC5jaGFubmVsX2lkLCBcIjpcIiwgcGFja2V0LnN1cHBseSwgXCIgIGV2ZW50IFtcIiArIHBhY2tldC5ldmVudF9pZCArIFwiXVwiLCBwYWNrZXQuZXZlbnRfbmFtZSk7XG4gICAgICAgIHRoaXMub3V0cHV0RXZlbnQoTW9kdWxlRXZlbnRUeXBlLnJ4X3VkcF9wYWNrZXQsIHBhY2tldCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVJbmplY3Rpb25SZXF1ZXN0KHJlcXVlc3Q6IFNvY2tldFJlcXVlc3QpOiBQcm9taXNlPFNvY2tldFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxTb2NrZXRSZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcImhhbmRsZVJlcXVlc3RBZG1pbkNvbmZpZ1wiLCBcIm5vIHJlcXVlc3RcIik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBTb2NrZXRSZXNwb25zZShyZXF1ZXN0LCBTb2NrZXRSZXNwb25zZVJlc3VsdFR5cGVzLmJhZF9wYXJhbWV0ZXJzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghcmVxdWVzdC5wYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJoYW5kbGVSZXF1ZXN0QWRtaW5Db25maWdcIiwgXCJubyByZXF1ZXN0IHBheWxvYWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgU29ja2V0UmVzcG9uc2UocmVxdWVzdCwgU29ja2V0UmVzcG9uc2VSZXN1bHRUeXBlcy5iYWRfcGFyYW1ldGVycykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhY2tldDogTGlzbW9yZVBhY2tldCA9IG5ldyBMaXNtb3JlUGFja2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHBhY2tldC5mcm9tT2JqZWN0KHJlcXVlc3QucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nKFwiYnJvYWRjYXN0aW5nIHBhY2tldFwiLCBwYWNrZXQuYWRkcmVzcywgXCI6XCIsIHBhY2tldC5jaGFubmVsX2lkLCBcIjpcIiwgcGFja2V0LnN1cHBseSwgXCIgIGV2ZW50IFtcIiArIHBhY2tldC5ldmVudF9pZCArIFwiXVwiLCBwYWNrZXQuZXZlbnRfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWRwLmJyb2FkY2FzdFBhY2tldChwYWNrZXQpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBTb2NrZXRSZXNwb25zZShyZXF1ZXN0LCBTb2NrZXRSZXNwb25zZVJlc3VsdFR5cGVzLnN1Y2Nlc3MpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNjaG9vbCdzIG91dFxufVxuXG5cblxuY29uc3QgdWRwX21vZHVsZSA9IG5ldyBVRFBNb2R1bGUoKTtcbmV4cG9ydCB7IHVkcF9tb2R1bGUgYXMgVURQIH1cbiIsImNvbnN0IHBhY2thZ2VfanNvbiA9IHJlcXVpcmUoXCIuLi9wYWNrYWdlLmpzb25cIik7XG5cbmNvbnNvbGUubG9nKFwiQWRtaW4gc2VydmVyIHJ1bm5pbmcuLi4gIHZlcnNpb25cIiwgcGFja2FnZV9qc29uLnZlcnNpb24pO1xuXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gXCJib2R5LXBhcnNlclwiO1xuLy8gaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0ICogYXMgc29ja2V0aW8gZnJvbSBcInNvY2tldC5pb1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgbWVyZ2UgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IHsgQ29uZmlnLCBFSFRUUFJldHVybiB9IGZyb20gXCIuL2RlZmluZXNcIjtcbmltcG9ydCB7IE1vZHVsZSwgSU1vZHVsZUV2ZW50LCBNb2R1bGVFdmVudFR5cGUgfSBmcm9tIFwiLi9tb2R1bGVcIjtcblxuXG5pbXBvcnQgeyBTaXRlQ29uZmlnIH0gZnJvbSBcIi4uLy4uL21pc2MvY29uZmlnXCI7XG5cbmltcG9ydCB7IFN0YXRpYyB9IGZyb20gXCIuL21vZHVsZXMvc3RhdGljL3N0YXRpYy5tb2R1bGVcIjtcbmltcG9ydCB7IEFkbWluIH0gZnJvbSBcIi4vbW9kdWxlcy9hZG1pbi9hZG1pbi5tb2R1bGVcIjtcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXkvZGlzcGxheS5tb2R1bGVcIjtcbmltcG9ydCB7IFVEUCB9IGZyb20gXCIuL21vZHVsZXMvdWRwL3VkcC5tb2R1bGVcIjtcblxuaW1wb3J0IHtyZWFkRmlsZVN5bmN9IGZyb20gXCJmc1wiXG5cblxuaW1wb3J0IHsgTG9nZ2FibGUgfSBmcm9tIFwiLi4vLi4vbWlzYy9sb2dnYWJsZVwiO1xuY2xhc3MgQWRtaW5JbmRleCBleHRlbmRzIExvZ2dhYmxlIHtcbn1cblxuY29uc3Qgb3V0ID0gbmV3IEFkbWluSW5kZXg7XG5cbi8vIGNvbnN0IGNvbmZpZzogQ29uZmlnID0gcmVxdWlyZShcIi4vYWRtaW4uanNvblwiKTtcblxuY29uc3QgZGVmYXVsdF9jb25maWc6Q29uZmlnID0ge1xuICAgIFwiaHR0cF9wb3J0XCI6IFwiOTA5MFwiLFxuICAgIFwidWRwX3BvcnRcIjogNjM0NSxcblxuICAgIFwic3RhdGljX3Jvb3RcIjogXCIuL2Rpc3Qvc3RhdGljXCIsXG5cblxuICAgIFwiY29uZmlnX3ZlcnNpb25cIjogXCIwLjAuMFwiXG59XG5cbmxldCBjb25maWc6Q29uZmlnID0gZGVmYXVsdF9jb25maWc7XG50cnl7XG4gICAgY29uc3QgY29uZmlnX2RhdGEgPSByZWFkRmlsZVN5bmMoJy4vZGlzdC9hZG1pbi5qc29uJywgJ3V0ZjgnKTtcbiAgICBjb25maWcgPSBKU09OLnBhcnNlKGNvbmZpZ19kYXRhKTtcbn0gY2F0Y2goZXJyb3Ipe1xuICAgIG91dC5lcnJvcihcIkVycm9yIGxvYWRpbmcgY29uZmlnXCIsX19kaXJuYW1lLHByb2Nlc3MuY3dkKCksZXJyb3IpO1xufVxuXG5jb25zdCBodHRwX3BvcnQgPSBjb25maWcuaHR0cF9wb3J0ID8gY29uZmlnLmh0dHBfcG9ydCA6IDgwMDA7XG5cblxudHJ5IHtcblxuXG4gICAgdmFyIGFwcCA9IGV4cHJlc3MoKTtcbiAgICBhcHAuc2V0KFwicG9ydFwiLCBodHRwX3BvcnQpO1xuICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoY29uZmlnLnN0YXRpY19yb290KSk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5cbiAgICBhcHAuYWxsKFwiKlwiLCAocmVxdWVzdDogZXhwcmVzcy5SZXF1ZXN0LCByZXNwb25zZTogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgICAgICBvdXQubG9nKFwiYXBwLmFsbCBjYWxsXCIsIHJlcXVlc3QudXJsKTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IG1vZHVsZXMuZmlsdGVyKG1vZHVsZSA9PiBtb2R1bGUuaGFuZGxlSFRNTFJlcXVlc3QocmVxdWVzdCwgcmVzcG9uc2UpID09PSBFSFRUUFJldHVybi5oYW5kbGVkKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgc3VjY2Vzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBsb2coc3VjY2Vzcy5sZW5ndGgsIFwibW9kdWxlcyBoYW5kbGVkIHRoaXMoXCIsIHJlcXVlc3QudXJsLCBcIikgcmVxdWVzdCBbXCIsIHN1Y2Nlc3MubWFwKG1vZHVsZSA9PiBtb2R1bGUuTW9kdWxlTmFtZSkuam9pbihcIixcIiksIFwiXVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxvZyhcIm5vIG1vZHVsZSBmb3VuZCBmb3IgcmVxdWVzdFwiLCByZXF1ZXN0LnVybCk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgbGV0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKS5TZXJ2ZXIoYXBwKTtcbiAgICBsZXQgaW8gPSByZXF1aXJlKFwic29ja2V0LmlvXCIpKGh0dHApO1xuXG5cbiAgICBjb25zdCBldmVudHNfaW4gPSBuZXcgU3ViamVjdDxJTW9kdWxlRXZlbnQ+KCk7XG5cbiAgICBjb25zdCBtb2R1bGVzOiBBcnJheTxNb2R1bGU+ID0gW1N0YXRpYywgQWRtaW4sIERpc3BsYXksIFVEUF07XG4gICAgbW9kdWxlcy5mb3JFYWNoKG1vZHVsZSA9PiB7XG4gICAgICAgIG1vZHVsZS5FdmVudHNJbiA9IGV2ZW50c19pbjtcbiAgICAgICAgbW9kdWxlLklPID0gaW87XG4gICAgICAgIG1vZHVsZS5FdmVudHNPdXQuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzX2luLm5leHQoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgLy8gbG9hZGluZyB0aGUgY29uZmlnIGtpY2tzIHRoaW5ncyBvZmYsIHNvIG1ha2Ugc3VyZSBldmVyeW9uZSBoYXMgc2V0IHRoZW1zZWx2ZXMgdXAgZmlyc3RcbiAgICBtb2R1bGVzLmZvckVhY2gobW9kdWxlID0+IHtcbiAgICAgICAgbW9kdWxlLkNvbmZpZyA9IGNvbmZpZztcblxuICAgIH0pO1xuICAgIGFwcC5nZXQoXCIvXCIsIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZXBhdGggPSByZXNvbHZlKGNvbmZpZy5zdGF0aWNfcm9vdCwgXCJhZG1pbi5odG1sXCIpO1xuICAgICAgICByZXMuc2VuZEZpbGUoZmlsZXBhdGgpO1xuICAgIH0pO1xuXG4gICAgaW8ub24oXCJjb25uZWN0aW9uXCIsIGZ1bmN0aW9uKHNvY2tldDogYW55KSB7XG4gICAgICAgIGlmIChzb2NrZXQpIHtcbiAgICAgICAgICAgIHNvY2tldC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIG91dC5sb2coXCJhIHVzZXIgY29ubmVjdGVkXCIsIHNvY2tldC5oYW5kc2hha2UuYWRkcmVzcyk7XG4gICAgICAgICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCAobXNnOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBvdXQubG9nKCdtZXNzYWdlIDogJywgbXNnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtb2R1bGVzLmZvckVhY2gobSA9PiBtLm9uU29ja2V0Q29ubmVjdGlvbihzb2NrZXQpKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cblxuXG4gICAgaHR0cC5saXN0ZW4oaHR0cF9wb3J0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgb3V0LmxvZyhcIkhUVFAgc2VydmVyIGxpc3RlbmluZyBvbiAqOlwiLCBodHRwX3BvcnQpO1xuICAgIH0pO1xuXG59IGNhdGNoIChlKSB7XG4gICAgb3V0LmVycm9yKFwiSW5kZXggRXhjZXB0aW9uIFwiLCBlKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRncmFtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrbGF3LXN5bmNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInppcC1hLWZvbGRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9