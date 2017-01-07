'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.ConnectReplyMessage=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _common=require('../common');function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}// +-------------------------------------------+
// |  HTTP/1.1 200 Connection established\r\n  |
// |  \r\n                                     |
// +-------------------------------------------+
var ConnectReplyMessage=exports.ConnectReplyMessage=function(_Message){_inherits(ConnectReplyMessage,_Message);function ConnectReplyMessage(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,ConnectReplyMessage);var _this=_possibleConstructorReturn(this,(ConnectReplyMessage.__proto__||Object.getPrototypeOf(ConnectReplyMessage)).call(this));var fields=_extends({VERSION:Buffer.from('HTTP/1.1'),STATUS:Buffer.from('200'),PHRASE:Buffer.from('Connection established')},options);_this.VERSION=fields.VERSION;_this.STATUS=fields.STATUS;_this.PHRASE=fields.PHRASE;return _this}_createClass(ConnectReplyMessage,[{key:'toBuffer',value:function toBuffer(){return Buffer.from([].concat(_toConsumableArray(this.VERSION),[32],_toConsumableArray(this.STATUS),[32],_toConsumableArray(this.PHRASE),[13,10,13,10]))}}]);return ConnectReplyMessage}(_common.Message);