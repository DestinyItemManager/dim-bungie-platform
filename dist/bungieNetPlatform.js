(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _endpoints = require("./endpoints");

var _endpoints2 = _interopRequireWildcard(_endpoints);

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var createRequests = function createRequests(host, lib, method) {
  var template = _import2["default"].template(method.url);

  lib[method.name] = function (params, headers) {
    //params = await Promise.resolve(params);

    if (!_import2["default"].isObject(params)) {
      throw new Error("Argument must be an Object containing: " + method.required.join(", ") + ".");
    }

    return {
      url: host + template(params),
      headers: headers,
      body: {}
    };
  };

  return lib;
};

var bungieNetPlatformApi = function bungieNetPlatformApi() {
  var host = arguments[0] === undefined ? "https://www.bungie.net/Platform/" : arguments[0];

  return _endpoints2["default"].reduce(createRequests.bind(null, host), {});
};

exports["default"] = bungieNetPlatformApi;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./endpoints":3}],2:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _endpoints = require("./bungieNetPlatform");

var _endpoints2 = _interopRequireWildcard(_endpoints);

angular.module("dimBungieNetPlatform", []);

angular.module("dimBungieNetPlatform").constant("dimBungieNetPlatform.config", config);

var config = _endpoints2["default"]();

},{"./bungieNetPlatform":1}],3:[function(require,module,exports){
(function (global){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _import = (typeof window !== "undefined" ? window._ : typeof global !== "undefined" ? global._ : null);

var _import2 = _interopRequireWildcard(_import);

var get = [{
  name: "Search",
  url: "Destiny/SearchDestinyPlayer/${ membershipType }/${ name }/",
  required: ["membershipType", "name"]
}, {
  name: "GetBungieNetUser",
  url: "User/GetBungieNetUser",
  required: []
}, {
  name: "GetMembershipId",
  url: "Destiny/${ membershipType }/GetMembershipIdByDisplayName/${ displayName }",
  required: ["membershipType", "displayName"]
}, {
  name: "Account",
  url: "Destiny/${ membershipType }/Account/${ membershipId }",
  required: ["membershipType", "membershipId"]
}, {
  name: "Character",
  url: "Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/?definitions=false",
  required: ["membershipType", "membershipId", "characterId"]
}, {
  name: "Vault",
  url: "Destiny/${ membershipType }/MyAccount/Vault/?definitions=false",
  required: ["membershipType", "membershipId", "characterId"]
}, {
  name: "Activities",
  url: "Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Activities",
  required: ["membershipType", "membershipId", "characterId"]
}, {
  name: "Inventory",
  url: "Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Inventory",
  required: ["membershipType", "membershipId", "characterId"]
}, {
  name: "Progression",
  url: "Destiny/${ membershipType }/Account/${ membershipId }/Character/${ characterId }/Progression",
  required: ["membershipType", "membershipId", "characterId"]
}];

var post = [{
  name: "EquipItem",
  url: "Destiny/EquipItem",
  required: ["characterId", "itemId", "membershipType"]
}, {
  name: "TransferItem",
  url: "Destiny/TransferItem",
  required: ["characterId", "itemId", "itemReferenceHash", "membershipType"]
}].map(function (obj) {
  return _import2["default"].extend(obj, {
    options: {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  });
});

var endpoints = [].concat(get, post);

exports["default"] = endpoints;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[2]);
