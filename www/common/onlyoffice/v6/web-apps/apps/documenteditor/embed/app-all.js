/*!
 * Copyright (C) Ascensio System SIA 2012-2023. All rights reserved
 *
 * https://www.onlyoffice.com/ 
 *
 * Version: 0.0.0 (build:0)
 */

if(void 0===Common)var Common={};if(Common.Locale=new function(){"use strict";var l10n=null,loadcallback,apply=!1,defLang="{{DEFAULT_LANG}}",currentLang=defLang,_4letterLangs=["pt-pt","zh-tw"],_applyLocalization=function(e){try{if(e&&(loadcallback=e),l10n){for(var t in l10n){var o=t.split(".");if(o&&o.length>2){for(var n=window,i=0;i<o.length-1;++i)void 0===n[o[i]]&&(n[o[i]]=new Object),n=n[o[i]];n&&(n[o[o.length-1]]=l10n[t])}}loadcallback&&loadcallback()}else apply=!0}catch(e){}},_get=function(prop,scope){var res="";return l10n&&scope&&scope.name&&(res=l10n[scope.name+"."+prop],!res&&scope.default&&(res=scope.default)),res||(scope?eval(scope.name).prototype[prop]:"")},_getCurrentLanguage=function(){return currentLang},_getDefaultLanguage=function(){return defLang},_getLoadedLanguage=function(){return loadedLang},_getUrlParameterByName=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null==t?"":decodeURIComponent(t[1].replace(/\+/g," "))},_requireLang=function(e){"string"!=typeof e&&(e=null);var t=e||_getUrlParameterByName("lang")||defLang,o=_4letterLangs.indexOf(t.replace("_","-").toLowerCase());t=o<0?t.split(/[\-_]/)[0]:_4letterLangs[o],currentLang=t,fetch("locale/"+t+".json?"+window.CP_urlArgs).then((function(e){if(!e.ok){if(o>=0)throw new Error("4letters error");if(currentLang=defLang,t!=defLang)return fetch("locale/"+defLang+".json");throw new Error("server error")}return e.json()})).then((function(e){if(e.json){if(!e.ok)throw new Error("server error");return e.json()}throw l10n=e,new Error("loaded")})).then((function(e){l10n=e||{},apply&&_applyLocalization()})).catch((function(e){return/4letters/.test(e)?setTimeout((function(){_requireLang(t.split(/[\-_]/)[0])}),0):!/loaded/.test(e)&&currentLang!=defLang&&defLang&&defLang.length<3?setTimeout((function(){_requireLang(defLang)}),0):(l10n=l10n||{},apply&&_applyLocalization(),void("loaded"==e.message||(currentLang=null,console.log("fetch error: "+e))))}))};if(window.fetch)_requireLang();else{var polyfills=["../vendor/fetch/fetch.umd"];window.Promise?require(polyfills,_requireLang):require(["../vendor/es6-promise/es6-promise.auto.min"],(function(){require(polyfills,_requireLang)}))}return{apply:_applyLocalization,get:_get,getCurrentLanguage:_getCurrentLanguage,getDefaultLanguage:_getDefaultLanguage}},void 0===window.Common&&(window.Common={}),Common.Gateway=new function(){var e=this,t=$(e),o={init:function(e){t.trigger("init",e)},openDocument:function(e){t.trigger("opendocument",e)},showMessage:function(e){t.trigger("showmessage",e)},applyEditRights:function(e){t.trigger("applyeditrights",e)},processSaveResult:function(e){t.trigger("processsaveresult",e)},processRightsChange:function(e){t.trigger("processrightschange",e)},refreshHistory:function(e){t.trigger("refreshhistory",e)},setHistoryData:function(e){t.trigger("sethistorydata",e)},setEmailAddresses:function(e){t.trigger("setemailaddresses",e)},setActionLink:function(e){t.trigger("setactionlink",e.url)},processMailMerge:function(e){t.trigger("processmailmerge",e)},downloadAs:function(e){t.trigger("downloadas",e)},processMouse:function(e){t.trigger("processmouse",e)},internalCommand:function(e){t.trigger("internalcommand",e)},resetFocus:function(e){t.trigger("resetfocus",e)},setUsers:function(e){t.trigger("setusers",e)},showSharingSettings:function(e){t.trigger("showsharingsettings",e)},setSharingSettings:function(e){t.trigger("setsharingsettings",e)},insertImage:function(e){t.trigger("insertimage",e)},setMailMergeRecipients:function(e){t.trigger("setmailmergerecipients",e)},setRevisedFile:function(e){t.trigger("setrevisedfile",e)},setFavorite:function(e){t.trigger("setfavorite",e)},requestClose:function(e){t.trigger("requestclose",e)},blurFocus:function(e){t.trigger("blurfocus",e)},grabFocus:function(e){t.trigger("grabfocus",e)}},n=function(e){window.parent&&window.JSON&&(e.frameEditorId=window.frameEditorId,window.parent.postMessage(window.JSON.stringify(e),"*"))},i=function(e){!function(e){if(e.origin===window.parentOrigin||e.origin===window.location.origin||"null"===e.origin&&("file://"===window.parentOrigin||"file://"===window.location.origin)){var t=e.data;if("[object String]"===Object.prototype.toString.apply(t)&&window.JSON){var n,i;try{n=window.JSON.parse(t)}catch(e){n=""}n&&(i=o[n.command])&&i.call(this,n.data)}}}(e)};return window.attachEvent?window.attachEvent("onmessage",i):window.addEventListener("message",i,!1),{appReady:function(){n({event:"onAppReady"})},requestEditRights:function(){n({event:"onRequestEditRights"})},requestHistory:function(){n({event:"onRequestHistory"})},requestHistoryData:function(e){n({event:"onRequestHistoryData",data:e})},requestRestore:function(e,t,o){n({event:"onRequestRestore",data:{version:e,url:t,fileType:o}})},requestEmailAddresses:function(){n({event:"onRequestEmailAddresses"})},requestStartMailMerge:function(){n({event:"onRequestStartMailMerge"})},requestHistoryClose:function(e){n({event:"onRequestHistoryClose"})},reportError:function(e,t){n({event:"onError",data:{errorCode:e,errorDescription:t}})},reportWarning:function(e,t){n({event:"onWarning",data:{warningCode:e,warningDescription:t}})},sendInfo:function(e){n({event:"onInfo",data:e})},setDocumentModified:function(e){n({event:"onDocumentStateChange",data:e})},internalMessage:function(e,t){n({event:"onInternalMessage",data:{type:e,data:t}})},updateVersion:function(){n({event:"onOutdatedVersion"})},downloadAs:function(e,t){n({event:"onDownloadAs",data:{url:e,fileType:t}})},requestSaveAs:function(e,t,o){n({event:"onRequestSaveAs",data:{url:e,title:t,fileType:o}})},collaborativeChanges:function(){n({event:"onCollaborativeChanges"})},requestRename:function(e){n({event:"onRequestRename",data:e})},metaChange:function(e){n({event:"onMetaChange",data:e})},documentReady:function(){n({event:"onDocumentReady"})},requestClose:function(){n({event:"onRequestClose"})},requestMakeActionLink:function(e){n({event:"onMakeActionLink",data:e})},requestUsers:function(){n({event:"onRequestUsers"})},requestSendNotify:function(e){n({event:"onRequestSendNotify",data:e})},requestInsertImage:function(e){n({event:"onRequestInsertImage",data:{c:e}})},requestMailMergeRecipients:function(){n({event:"onRequestMailMergeRecipients"})},requestCompareFile:function(){n({event:"onRequestCompareFile"})},requestSharingSettings:function(){n({event:"onRequestSharingSettings"})},requestCreateNew:function(){n({event:"onRequestCreateNew"})},pluginsReady:function(){n({event:"onPluginsReady"})},on:function(o,n){t.on(o,(function(t,o){n.call(e,o)}))}}},void 0===window.Common&&(window.Common={}),Common.component=Common.component||{},Common.Analytics=Common.component.Analytics=new function(){var e;return{initialize:function(t,o){if(void 0===t)throw"Analytics: invalid id.";if(void 0===o||"[object String]"!==Object.prototype.toString.apply(o))throw"Analytics: invalid category type.";e=o,$("head").append('<script type="text/javascript">var _gaq = _gaq || [];_gaq.push(["_setAccount", "'+t+'"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s);})();<\/script>')},trackEvent:function(t,o,n){if(void 0!==t&&"[object String]"!==Object.prototype.toString.apply(t))throw"Analytics: invalid action type.";if(void 0!==o&&"[object String]"!==Object.prototype.toString.apply(o))throw"Analytics: invalid label type.";if(void 0!==n&&("[object Number]"!==Object.prototype.toString.apply(n)||!isFinite(n)))throw"Analytics: invalid value type.";if("undefined"!=typeof _gaq){if("undefined"===e)throw"Analytics is not initialized.";_gaq.push(["_trackEvent",e,t,o,n])}}}},!window.common&&(window.common={}),common.localStorage=new function(){var e,t,o={};Common.Gateway.on("internalcommand",(function(e){"localstorage"==e.type&&(o=e.keys)}));var n=function(e,t,n){if(a)try{localStorage.setItem(e,t)}catch(e){}else o[e]=t,!0===n&&Common.Gateway.internalMessage("localstorage",{cmd:"set",keys:{name:t}})},i=function(e){return a?localStorage.getItem(e):void 0===o[e]?null:o[e]};try{var a=!!window.localStorage}catch(e){a=!1}return{getId:function(){return e},setId:function(t){e=t},getItem:i,getBool:function(e,t){var o=i(e);return t=t||!1,null!==o?0!=parseInt(o):t},setBool:function(e,t,o){n(e,t?1:0,o)},setItem:n,removeItem:function(e){a?localStorage.removeItem(e):delete o[e]},setKeysFilter:function(e){t=e},getKeysFilter:function(){return t},itemExists:function(e){return null!==i(e)},sync:function(){a||Common.Gateway.internalMessage("localstorage",{cmd:"get",keys:t})},save:function(){a||Common.Gateway.internalMessage("localstorage",{cmd:"set",keys:o})}}},!window.common&&(window.common={}),!common.utils&&(common.utils={}),common.utils=new function(){var e=navigator.userAgent.toLowerCase();return{openLink:function(e){e&&window.parent.APP.openURL(e)},dialogPrint:function(e,t){if($("#id-print-frame").remove(),e){var o=document.createElement("iframe");o.id="id-print-frame",o.style.display="none",o.style.visibility="hidden",o.style.position="fixed",o.style.right="0",o.style.bottom="0",document.body.appendChild(o),o.onload=function(){try{o.contentWindow.focus(),o.contentWindow.print(),o.contentWindow.blur(),window.focus()}catch(e){t.asc_DownloadAs(new Asc.asc_CDownloadOptions(Asc.c_oAscFileType.PDF))}},o.src=e}},htmlEncode:function(e){return $("<div/>").text(e).html()},fillUserInfo:function(e,t,o,n){var i=e||{};return i.anonymous=!i.id,!i.id&&(i.id=n),i.fullname=i.name?i.name:o,i.group&&(i.fullname=i.group.toString()+AscCommon.UserInfoParser.getSeparator()+i.fullname),i.guest=!i.name,i},fixedDigits:function(e,t,o){void 0===o&&(o="0");for(var n="",i=e.toString(),a=i.length;a<t;a++)n+=o;return n+i},getKeyByValue:function(e,t){for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t)return o},isMac:/macintosh|mac os x/.test(e)}},!window.common&&(window.common={}),!common.view&&(common.view={}),common.view.LoadMask=function(e){var t,o,n=e||$(document.body),i="",a=0,r=!1;return{show:function(){t&&o||(t=$('<div class="asc-loadmask-body" role="presentation" tabindex="-1"><i id="loadmask-spinner" class="asc-loadmask-image"></i><div class="asc-loadmask-title"></div></div>'),o=$('<div class="asc-loadmask"></div>')),$(".asc-loadmask-title",t).html(i),r||(r=!0,a=setTimeout((function(){n.append(o),n.append(t),t.css("min-width",$(".asc-loadmask-title",t).width()+105)}),500))},hide:function(){a&&(clearTimeout(a),a=0),o&&o.remove(),t&&t.remove(),o=t=null,r=!1},setTitle:function(e){if(i=e,n&&t){var o=$(".asc-loadmask-title",t);o.html(i),t.css("min-width",o.width()+105)}}}},!window.common&&(window.common={}),!common.view&&(common.view={}),common.view.modals=new function(){var e='<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="idm-title" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 id="idm-title" class="modal-title">{title}</h4></div><div class="modal-body">{body}</div><div class="modal-footer">{footer}</div></div></div></div>',t='<div class="share-link"><input id="id-short-url" class="form-control" type="text" readonly/></div><div class="share-buttons"><span class="svg big-facebook" data-name="facebook"></span><span class="svg big-twitter" data-name="twitter"></span><span class="svg big-email" data-name="email"></span><div class="autotest" id="email" style="display: none"></div></div>';return{create:function(o,n){var i;if(!n&&(n="body"),"share"==o){if(window.config&&window.config.btnsShare){let e=[];for(const t of Object.keys(config.btnsShare))e.push(`<span class="svg big-${t}" data-name="${t}"></span>`);if(e){let o=$(t);o.find(".autotest").prevAll().remove(),o.eq(1).prepend(e.join("")),t=$("<div>").append(o).html()}}i=$(e.replace(/\{title}/,this.txtShare).replace(/\{body}/,t).replace(/\{footer}/,'<button id="btn-copyshort" type="button" class="btn">'+this.txtCopy+"</button>")).appendTo(n).attr("id","dlg-share")}else"embed"==o&&(i=$(e.replace(/\{title}/,this.txtEmbed).replace(/\{body}/,'<div class="size-manual"><span class="caption">{width}:</span><input id="txt-embed-width" class="form-control input-xs" type="text" value="400px"><input id="txt-embed-height" class="form-control input-xs right" type="text" value="600px"><span class="right caption">{height}:</span></div><textarea id="txt-embed-url" rows="4" class="form-control" readonly></textarea>').replace(/\{width}/,this.txtWidth).replace(/\{height}/,this.txtHeight).replace(/\{footer}/,'<button id="btn-copyembed" type="button" class="btn">'+this.txtCopy+"</button>")).appendTo(n).attr("id","dlg-embed"));return i},txtWidth:"Width",txtHeight:"Height",txtShare:"Share Link",txtCopy:"Copy to clipboard",txtEmbed:"Embed"}},!window.common&&(window.common={}),!common.controller&&(common.controller={}),common.controller.modals=new function(){var e,t,o,n='<iframe allowtransparency="true" frameborder="0" scrolling="no" src="{embed-url}" width="{width}" height="{height}"></iframe>';function i(e,t){e.select(),document.execCommand("copy")||window.alert("Browser's error! Use keyboard shortcut [Ctrl] + [C]")}var a=function(){e=common.view.modals.create("share");var t=encodeURIComponent(o.shareUrl),n="mailto:?subject=I have shared a document with you: "+o.docTitle+"&body=I have shared a document with you: "+t;e.find("#btn-copyshort").on("click",i.bind(this,e.find("#id-short-url"))),e.find(".share-buttons > span").on("click",(function(e){if(window.config){const t=$(e.target).attr("data-name"),n=config.btnsShare[t];if(n&&n.getUrl)return void window.open(n.getUrl(o.shareUrl,o.docTitle),n.target||"",n.features||"menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600")}var i;switch($(e.target).attr("data-name")){case"facebook":i="https://www.facebook.com/sharer/sharer.php?u="+o.shareUrl+"&t="+encodeURI(o.docTitle),window.open(i,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");break;case"twitter":i="https://twitter.com/share?url="+t,o.docTitle&&(i+=encodeURIComponent("&text="+o.docTitle)),window.open(i,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");break;case"email":window.open(n,"_self")}})),e.find("#id-short-url").val(o.shareUrl),e.find(".share-buttons > #email.autotest").attr("data-test",n)};function r(){var e=t.find("#txt-embed-width"),i=t.find("#txt-embed-height"),a=parseInt(e.val()),r=parseInt(i.val());a<400&&(a=400),r<600&&(r=600),t.find("#txt-embed-url").text(n.replace("{embed-url}",o.embedUrl).replace("{width}",a).replace("{height}",r)),e.val(a+"px"),i.val(r+"px")}return{init:function(e){o=e},attach:function(s){s.share&&o.shareUrl&&(e||a(),$(s.share).on("click",(function(t){e.modal("show")}))),s.embed&&o.embedUrl&&(t||function(){var e=(t=common.view.modals.create("embed")).find("#txt-embed-url");e.text(n.replace("{embed-url}",o.embedUrl).replace("{width}",400).replace("{height}",600)),t.find("#btn-copyembed").on("click",i.bind(this,e)),t.find("#txt-embed-width, #txt-embed-height").on({keypress:function(e){13==e.keyCode&&r()},focusout:function(e){r()}})}(),$(s.embed).on("click",(function(e){t.modal("show")})))}}},!window.common&&(window.common={}),!common.view&&(common.view={}),common.view.SearchBar=new function(){var e='<div class="asc-window search-window" style="display: none;"><div class="body">{body}</div></div>';return{create:function(t){return!t&&(t="body"),$(e.replace(/\{body}/,'<input type="text" id="search-bar-text" placeholder="{textFind}" autocomplete="off"><div class="tools"><button id="search-bar-back" class="svg-icon search-arrow-up"></button><button id="search-bar-next" class="svg-icon search-arrow-down"></button><button id="search-bar-close" class="svg-icon search-close"></button></div>').replace(/\{textFind}/,this.textFind)).appendTo(t).attr("id","dlg-search")},disableNavButtons:function(e,t){var o=""===$("#search-bar-text").val()||!t;$("#search-bar-back").attr({disabled:o}),$("#search-bar-next").attr({disabled:o})},textFind:"Find"}},!window.common&&(window.common={}),!common.controller&&(common.controller={}),common.controller.SearchBar=new function(){var e,t,o,n,i,a,r={searchText:""},s=function(e){(e&&r.searchText!==e||!e&&r.newSearchText)&&(r.newSearchText=e,i=new Date,void 0===a&&(a=setInterval((function(){new Date-i<400||(r.searchText=r.newSearchText,""!==r.newSearchText?c():n.asc_endFindText(),clearInterval(a),a=void 0)}),10)))},c=function(e,t){var o=new AscCommon.CSearchSettings;return o.put_Text(r.searchText),o.put_MatchCase(!1),o.put_WholeWords(!1),!!n.asc_findText(o,"back"!=e)||(common.view.SearchBar.disableNavButtons(),!1)},l=function(e,t,o){t&&t.length>0&&("keydown"===e&&13===o.keyCode||"keydown"!==e)&&(r.searchText=t,c(e)&&a&&(clearInterval(a),a=void 0))},d=function(e,t){common.view.SearchBar.disableNavButtons(e,t)},u=function(e){r.isHighlightedResults!==e&&(n.asc_selectSearchingResults(e),r.isHighlightedResults=e)};return{init:function(e){o=e},setApi:function(e){(n=e)&&n.asc_registerCallback("asc_onSetSearchCurrent",d)},show:function(){if(e||(e=common.view.SearchBar.create(),"bottom"===o.toolbarDocked?e.css({right:"45px",bottom:"31px"}):e.css({right:"45px",top:"31px"}),(t=e.find("#search-bar-text")).on("input",(function(e){common.view.SearchBar.disableNavButtons(),s(t.val())})).on("keydown",(function(e){l("keydown",t.val(),e)})),e.find("#search-bar-back").on("click",(function(e){l("back",t.val())})),e.find("#search-bar-next").on("click",(function(e){l("next",t.val())})),e.find("#search-bar-close").on("click",(function(t){u(!1),e.hide()})),common.view.SearchBar.disableNavButtons()),!e.is(":visible")){u(!0);var i=n&&n.asc_GetSelectedText()||r.searchText;t.val(i),i.length>0&&s(i),e.show(),setTimeout((function(){t.focus(),t.select()}),10)}}}},void 0===DE)var DE={};DE.ApplicationView=new function(){var e,t;return{create:function(){(e=$("#box-tools button")).addClass("dropdown-toggle").attr("data-toggle","dropdown").attr("aria-expanded","true"),e.parent().append('<ul class="dropdown-menu pull-right"><li><a id="idt-download"><span class="mi-icon svg-icon download"></span>'+this.txtDownload+'</a></li><li><a id="idt-download-docx"><span class="mi-icon svg-icon download"></span>'+this.txtDownloadDocx+'</a></li><li><a id="idt-download-pdf"><span class="mi-icon"></span>'+this.txtDownloadPdf+'</a></li><li><a id="idt-print"><span class="mi-icon svg-icon print"></span>'+this.txtPrint+'</a></li><li class="divider"></li><li><a id="idt-search"><span class="mi-icon svg-icon search"></span>'+this.txtSearch+'</a></li><li class="divider"></li><li><a id="idt-share" data-toggle="modal"><span class="mi-icon svg-icon share"></span>'+this.txtShare+'</a></li><li><a id="idt-close" data-toggle="modal"><span class="mi-icon svg-icon go-to-location"></span>'+this.txtFileLocation+'</a></li><li class="divider"></li><li><a id="idt-embed" data-toggle="modal"><span class="mi-icon svg-icon embed"></span>'+this.txtEmbed+'</a></li><li><a id="idt-fullscreen"><span class="mi-icon svg-icon fullscr"></span>'+this.txtFullScreen+"</a></li></ul>")},tools:{get:function(t){return e.parent().find(t)}},getMenuForm:function(){return t||(t=$('<div id="menu-container-form" style="position: absolute; z-index: 10000;" data-value="prevent-canvas-click"><div class="dropdown-toggle" data-toggle="dropdown"></div><ul class="dropdown-menu" oo_editor_input="true" role="menu" style="right: 0; left: auto;max-height: 200px; overflow-y: auto;"></ul></div>'),$("#editor_sdk").append(t)),t},txtDownload:"Download",txtPrint:"Print",txtShare:"Share",txtEmbed:"Embed",txtFullScreen:"Full Screen",txtFileLocation:"Open file location",txtDownloadDocx:"Download as docx",txtDownloadPdf:"Download as pdf",txtSearch:"Search"}},DE.ApplicationController=new function(){var e,t,o,n,i,a,r,s,c,l,d,u={},m={},p={},g={},f=0,h=!1,w=[0,-10],v={},b=[],y=0,x=-256;if("undefined"==typeof isBrowserSupported||isBrowserSupported())return common.localStorage.setId("text"),common.localStorage.setKeysFilter("de-,asc.text"),common.localStorage.sync(),{create:function(){if(h)return e;e=this,h=!0,$(window).resize((function(){t&&t.Resize(),y=$("body").width()})),window.onbeforeunload=K;var o=!1;return $(document.body).on("show.bs.modal",".modal",(function(e){o=!0,t.asc_enableKeyEvents(!1)})).on("hidden.bs.modal",".modal",(function(e){o=!1,t.asc_enableKeyEvents(!0)})).on("hidden.bs.dropdown",".dropdown",(function(e){o||t.asc_enableKeyEvents(!0)})).on("blur","input, textarea",(function(e){o||/area_id/.test(e.target.id)||t.asc_enableKeyEvents(!0)})),$("#editor_sdk").on("click",(function(e){"canvas"==e.target.localName&&e.currentTarget.focus()})),window.flat_desine=!0,(t=new Asc.asc_docs_api({"id-view":"editor_sdk",embedded:!0}))&&(t.asc_registerCallback("asc_onError",G),t.asc_registerCallback("asc_onDocumentContentReady",P),t.asc_registerCallback("asc_onOpenDocumentProgress",O),t.asc_registerCallback("asc_onCountPages",C),t.asc_registerCallback("asc_onCurrentPage",A),Common.Gateway.on("init",_),Common.Gateway.on("opendocument",k),Common.Gateway.on("showmessage",N),Common.Gateway.appReady(),common.controller.SearchBar.setApi(t)),e},errorDefaultMessage:"Error code: %1",unknownErrorText:"Unknown error.",convertationTimeoutText:"Conversion timeout exceeded.",convertationErrorText:"Conversion failed.",downloadErrorText:"Download failed.",criticalErrorTitle:"Error",notcriticalErrorTitle:"Warning",scriptLoadError:"The connection is too slow, some of the components could not be loaded. Please reload the page.",errorFilePassProtect:"The file is password protected and cannot be opened.",errorAccessDeny:"You are trying to perform an action you do not have rights for.<br>Please contact your Document Server administrator.",errorUserDrop:"The file cannot be accessed right now.",unsupportedBrowserErrorText:"Your browser is not supported.",textOf:"of",downloadTextText:"Downloading document...",waitText:"Please, wait...",textLoadingDocument:"Loading document",txtClose:"Close",errorFileSizeExceed:"The file size exceeds the limitation set for your server.<br>Please contact your Document Server administrator for details.",errorUpdateVersionOnDisconnect:"Internet connection has been restored, and the file version has been changed.<br>Before you can continue working, you need to download the file or copy its content to make sure nothing is lost, and then reload this page.",textNext:"Next Field",textClear:"Clear All Fields",textSubmit:"Submit",textSubmited:"<b>Form submitted successfully</b><br>Click to close the tip.",errorSubmit:"Submit failed.",errorEditingDownloadas:"An error occurred during the work with the document.<br>Use the 'Download as...' option to save the file backup copy to your computer hard drive.",textGuest:"Guest",textAnonymous:"Anonymous",textRequired:"Fill all required fields to send form.",textGotIt:"Got it",errorForceSave:"An error occurred while saving the file. Please use the 'Download as' option to save the file to your computer hard drive or try again later.",txtEmpty:"(Empty)",txtPressLink:"Press %1 and click link",errorLoadingFont:"Fonts are not loaded.<br>Please contact your Document Server administrator.",errorTokenExpire:"The document security token has expired.<br>Please contact your Document Server administrator.",openErrorText:"An error has occurred while opening the file",textCtrl:"Ctrl"};function _(e){u=$.extend(u,e.config),p=$.extend(p,e.config.embedded),common.controller.modals.init(p),common.controller.SearchBar.init(p),"bottom"===p.toolbarDocked?($("#toolbar").addClass("bottom"),$("#editor_sdk").addClass("bottom"),$("#box-tools").removeClass("dropdown").addClass("dropup"),w[1]=-40):($("#toolbar").addClass("top"),$("#editor_sdk").addClass("top"),w[1]=40),u.canBackToFolder=!1!==u.canBackToFolder&&u.customization&&u.customization.goback&&(u.customization.goback.url||u.customization.goback.requestClose&&u.canRequestClose)}function k(n){if(m=n.doc){g=$.extend(g,m.permissions);var i=new Asc.asc_CDocInfo,a=new Asc.asc_CUserInfo,r=!("object"==typeof u.customization&&"object"==typeof u.customization.anonymous&&!1===u.customization.anonymous.request),s="object"==typeof u.customization&&"object"==typeof u.customization.anonymous&&"string"==typeof u.customization.anonymous.label&&""!==u.customization.anonymous.label.trim()?common.utils.htmlEncode(u.customization.anonymous.label):e.textGuest,c=r?common.localStorage.getItem("guest-username"):null,l=common.utils.fillUserInfo(u.user,u.lang,c?c+" ("+s+")":e.textAnonymous,common.localStorage.getItem("guest-id")||"uid-"+Date.now());l.anonymous&&common.localStorage.setItem("guest-id",l.id),a.put_Id(l.id),a.put_FullName(l.fullname),a.put_IsAnonymousUser(l.anonymous),i.put_Id(m.key),i.put_Url(m.url),i.put_DirectUrl(m.directUrl),i.put_Title(m.title),i.put_Format(m.fileType),i.put_VKey(m.vkey),i.put_UserInfo(a),i.put_CallbackUrl(u.callbackUrl),i.put_Token(m.token),i.put_Permissions(m.permissions),i.put_EncryptedInfo(u.encryptionKeys),i.put_Lang(u.lang),i.put_Mode(u.mode);var d=!u.customization||!1!==u.customization.macros;i.asc_putIsEnabledMacroses(!!d),d=!u.customization||!1!==u.customization.plugins,i.asc_putIsEnabledPlugins(!!d);var f=/^(?:(pdf|djvu|xps|oxps))$/.exec(m.fileType);f&&"string"==typeof f[1]&&(g.edit=g.review=!1),t&&(t.asc_registerCallback("asc_onGetEditorPermissions",B),t.asc_registerCallback("asc_onRunAutostartMacroses",W),t.asc_setDocInfo(i),t.asc_getEditorPermissions(u.licenseUrl,u.customerId),t.asc_enableKeyEvents(!0),Common.Analytics.trackEvent("Load","Start")),p.docTitle=m.title,(o=$("#title-doc-name")).text(p.docTitle||"")}}function C(t){f=t,$("#pages").text(e.textOf+" "+t)}function A(e){$("#page-number").val(e+1)}function E(t,o){var r="";switch(o){case Asc.c_oAscAsyncAction.Print:r=e.downloadTextText;break;case Asc.c_oAscAsyncAction.Submit:i=!1,a&&a.hide(),n.attr({disabled:!0}),n.css("pointer-events","none");break;case x:r=e.textLoadingDocument+"           ";break;default:r=e.waitText}t==Asc.c_oAscAsyncActionType.BlockInteraction&&(e.loadMask||(e.loadMask=new common.view.LoadMask),e.loadMask.setTitle(r),e.loadMask.show())}function S(t,o){o==Asc.c_oAscAsyncAction.Submit&&(n.removeAttr("disabled"),n.css("pointer-events","auto"),i||(a||(a=$('<div class="submit-tooltip" style="display:none;">'+e.textSubmited+"</div>"),$(document.body).append(a),a.on("click",(function(){a.hide()}))),a.show())),e.loadMask&&e.loadMask.hide()}function D(){e.isHideBodyTip=!0}function T(){e.isHideBodyTip&&d&&(d.tooltip("hide"),d=!1)}function F(t){if(t){var o=t.get_Type();if(o==Asc.c_oAscMouseMoveDataTypes.Hyperlink||o==Asc.c_oAscMouseMoveDataTypes.Form){e.isHideBodyTip=!1;var n=o==Asc.c_oAscMouseMoveDataTypes.Hyperlink?e.txtPressLink.replace("%1",common.utils.isMac?"⌘":e.textCtrl):t.get_FormHelpText();if(n.length>500&&(n=n.substr(0,500)+"..."),n=common.utils.htmlEncode(n),l||(l=$(".hyperlink-tooltip")).tooltip({container:"body",trigger:"manual"}),l.ttpos=[t.get_X(),t.get_Y()],d||(d=l.data("bs.tooltip").tip()),d.is(":visible"))d.find(".tooltip-inner").text(n);else{var i=l.data("bs.tooltip");i.options.title=n,i.show([-1e3,-1e3])}var a=d.height(),r=d.width();!y&&(y=$("body").width()),l.ttpos[1]-=a-w[1]+20,l.ttpos[0]+r+10>y?(l.ttpos[0]=y-r-5,l.ttpos[1]<0&&(l.ttpos[1]+=a+w[1]+20)):l.ttpos[1]<0&&(l.ttpos[1]=0,l.ttpos[0]+=20),d.css({left:l.ttpos[0],top:l.ttpos[1]})}}}function I(e,t){Common.Gateway.downloadAs(e,t)}function L(){!1!==g.print&&t.asc_Print(new Asc.asc_CDownloadOptions(null,$.browser.chrome||$.browser.safari||$.browser.opera||$.browser.mozilla&&$.browser.versionNumber>86))}function q(e){common.utils.dialogPrint(e,t)}function z(e){e?(n.removeAttr("disabled"),n.css("pointer-events","auto")):(n.attr({disabled:!0}),n.css("pointer-events","none"))}function R(o,n,i){switch(o.type){case Asc.c_oAscContentControlSpecificType.Picture:if(o.pr&&o.pr.get_Lock){var a=o.pr.get_Lock();if(a==Asc.c_oAscSdtLockType.SdtContentLocked||a==Asc.c_oAscSdtLockType.ContentLocked)return}t.asc_addImage(o),setTimeout((function(){t.asc_UncheckContentControlButtons()}),500);break;case Asc.c_oAscContentControlSpecificType.DropDownList:case Asc.c_oAscContentControlSpecificType.ComboBox:!function(o,n,i){var a=o.type,r=o.pr,l=a==Asc.c_oAscContentControlSpecificType.ComboBox?r.get_ComboBoxPr():r.get_DropDownListPr(),d=!!r.get_FormPr(),u=DE.ApplicationView.getMenuForm();s||((s=u.find("ul")).on("click","li",(function(e){var o=$(e.target).attr("value");o&&(o=parseInt(o),setTimeout((function(){-1!==o&&t.asc_SelectContentControlListItem(b[o],c.get_InternalId())}),1))})),$("#editor_sdk").on("click",(function(o){"canvas"==o.target.localName&&(e._preventClick?e._preventClick=!1:(s&&s.hide(),t.asc_UncheckContentControlButtons()))})));if(s.find("li").remove(),b=[],c=r,l){var m=0;if(d){var p=r.get_PlaceholderText();s.append('<li><a tabindex="-1" type="menuitem" style="opacity: 0.6" value="0">'+(""!==p.trim()?p:e.txtEmpty)+"</a></li>"),b.push("")}var g=l.get_ItemsCount();m=b.length;for(var f=0;f<g;f++)""===l.get_ItemValue(f)&&d||(s.append('<li><a tabindex="-1" type="menuitem" value="'+(f+m)+'">'+common.utils.htmlEncode(l.get_ItemDisplayText(f))+"</a></li>"),b.push(l.get_ItemValue(f)));!d&&b.length<1&&(s.append('<li><a tabindex="-1" type="menuitem" value="0">'+e.txtEmpty+"</a></li>"),b.push(-1))}u.css({left:n,top:i}),e._preventClick=!0,s.show()}(o,n,i)}}function M(){s&&s.hide(),t.asc_UncheckContentControlButtons()}function U(){$("#loading-mask").fadeOut("slow")}function P(){U(),S(Asc.c_oAscAsyncActionType.BlockInteraction,x);var o=u.customization&&u.customization.zoom?parseInt(u.customization.zoom):-2;-1==o?t.zoomFitToPage():-2==o?t.zoomFitToWidth():t.zoom(o>0?o:100);var i=$("#box-tools .divider"),a=$("#box-tools a").length;!1===g.print&&($("#idt-print").hide(),a--),p.saveUrl&&!1!==g.download&&!v.canFillForms||($("#idt-download").hide(),a--),v.canFillForms&&!1!==g.download||($("#idt-download-docx").hide(),$("#idt-download-pdf").hide(),a-=2),p.shareUrl&&!v.canFillForms||($("#idt-share").hide(),a--),u.canBackToFolder||($("#idt-close").hide(),a--),a<7&&($(i[0]).hide(),$(i[1]).hide()),p.embedUrl&&!v.canFillForms||($("#idt-embed").hide(),a--),p.fullscreenUrl||($("#idt-fullscreen").hide(),a--),a<1?$("#box-tools").addClass("hidden"):p.embedUrl&&!v.canFillForms||p.fullscreenUrl||$(i[2]).hide(),common.controller.modals.attach({share:"#idt-share",embed:"#idt-embed"}),t.asc_registerCallback("asc_onStartAction",E),t.asc_registerCallback("asc_onEndAction",S),t.asc_registerCallback("asc_onMouseMoveStart",D),t.asc_registerCallback("asc_onMouseMoveEnd",T),t.asc_registerCallback("asc_onMouseMove",F),t.asc_registerCallback("asc_onHyperlinkClick",common.utils.openLink),t.asc_registerCallback("asc_onDownloadUrl",I),t.asc_registerCallback("asc_onPrint",L),t.asc_registerCallback("asc_onPrintUrl",q),t.asc_registerCallback("sync_onAllRequiredFormsFilled",z),v.canFillForms&&(t.asc_registerCallback("asc_onShowContentControlsActions",R),t.asc_registerCallback("asc_onHideContentControlsActions",M),t.asc_SetHighlightRequiredFields(!0)),Common.Gateway.on("processmouse",j),Common.Gateway.on("downloadas",V),Common.Gateway.on("requestclose",H),DE.ApplicationView.tools.get("#idt-fullscreen").on("click",(function(){common.utils.openLink(p.fullscreenUrl)})),DE.ApplicationView.tools.get("#idt-download").on("click",(function(){p.saveUrl&&!1!==g.download&&common.utils.openLink(p.saveUrl),Common.Analytics.trackEvent("Save")})),DE.ApplicationView.tools.get("#idt-print").on("click",(function(){t.asc_Print(new Asc.asc_CDownloadOptions(null,$.browser.chrome||$.browser.safari||$.browser.opera||$.browser.mozilla&&$.browser.versionNumber>86)),Common.Analytics.trackEvent("Print")})),DE.ApplicationView.tools.get("#idt-close").on("click",(function(){u.customization&&u.customization.goback&&(u.customization.goback.requestClose&&u.canRequestClose?Common.Gateway.requestClose():u.customization.goback.url&&(!1!==u.customization.goback.blank?window.open(u.customization.goback.url,"_blank"):window.parent.location.href=u.customization.goback.url))}));var s=function(e){t.asc_DownloadAs(new Asc.asc_CDownloadOptions(e)),Common.Analytics.trackEvent("Save")};DE.ApplicationView.tools.get("#idt-download-docx").on("click",(function(){s(Asc.c_oAscFileType.DOCX)})),DE.ApplicationView.tools.get("#idt-download-pdf").on("click",(function(){s(Asc.c_oAscFileType.PDF)})),DE.ApplicationView.tools.get("#idt-search").on("click",(function(){common.controller.SearchBar.show()})),$("#id-btn-zoom-in").on("click",t.zoomIn.bind(this)),$("#id-btn-zoom-out").on("click",t.zoomOut.bind(this));var c,l=$("#page-number");if(l.on({keyup:function(e){if(13==e.keyCode){var o=parseInt($("#page-number").val());o>f&&(o=f),(o<2||isNaN(o))&&(o=1),t.goToPage(o-1),l.blur()}},focusin:function(e){l.removeClass("masked")},focusout:function(e){!l.hasClass("masked")&&l.addClass("masked")}}),$("#pages").on("click",(function(e){l.focus()})),v.canSubmitForms&&!t.asc_IsAllRequiredFormsFilled()){var d=$("#id-submit-group");if(n.attr({disabled:!0}),n.css("pointer-events","none"),common.localStorage.getItem("de-embed-hide-submittip"))d.attr("data-toggle","tooltip"),d.tooltip({title:e.textRequired,placement:"bottom"});else{var m=n.offset();r=$('<div class="required-tooltip bottom-left" style="display:none;"><div class="tip-arrow bottom-left"></div><div>'+e.textRequired+'</div><div class="close-div">'+e.textGotIt+"</div></div>"),$(document.body).append(r),r.css({top:m.top+n.height()+"px",left:m.left+n.outerWidth()/2-r.outerWidth()+"px"}),r.find(".close-div").on("click",(function(){r.hide(),t.asc_MoveToFillingForm(!0,!0,!0),common.localStorage.setItem("de-embed-hide-submittip",1),d.attr("data-toggle","tooltip"),d.tooltip({title:e.textRequired,placement:"bottom"})})),r.show()}}var h=!1;$(document).mousemove((function(e){$("#id-btn-zoom-in").fadeIn(),$("#id-btn-zoom-out").fadeIn(),h=!0,c||(c=setInterval((function(){h||($("#id-btn-zoom-in").fadeOut(),$("#id-btn-zoom-out").fadeOut(),clearInterval(c),c=void 0),h=!1}),2e3))})),Common.Gateway.documentReady(),Common.Analytics.trackEvent("Load","Complete")}function B(i){var a=i.asc_getLicenseType();v.canLicense=a===Asc.c_oLicenseResult.Success||a===Asc.c_oLicenseResult.SuccessLimit,v.canFillForms=!1,v.canSubmitForms=v.canLicense&&"object"==typeof u.customization&&!!u.customization.submitForm,v.canBranding=i.asc_getCustomization(),v.canBranding&&function(e){if(e&&e.logo){var t=$("#header-logo");(e.logo.image||e.logo.imageEmbedded)&&(t.html('<img src="'+(e.logo.image||e.logo.imageEmbedded)+'" style="max-width:100px; max-height:20px;"/>'),t.css({"background-image":"none",width:"auto",height:"auto"}),e.logo.imageEmbedded&&console.log("Obsolete: The 'imageEmbedded' parameter of the 'customization.logo' section is deprecated. Please use 'image' parameter instead.")),e.logo.url?t.attr("href",e.logo.url):void 0!==e.logo.url&&(t.removeAttr("href"),t.removeAttr("target"))}}(u.customization),t.asc_setViewMode(!v.canFillForms),n=$("#id-btn-submit"),v.canFillForms?($("#id-btn-next-field .caption").text(e.textNext),$("#id-btn-clear-fields .caption").text(e.textClear),$("#id-btn-prev-field").on("click",(function(){t.asc_MoveToFillingForm(!1)})),$("#id-btn-next-field").on("click",(function(){t.asc_MoveToFillingForm(!0)})),$("#id-btn-clear-fields").on("click",(function(){t.asc_ClearAllSpecialForms()})),v.canSubmitForms?(n.find(".caption").text(e.textSubmit),n.on("click",(function(){t.asc_SendForm()}))):n.hide(),t.asc_setRestriction(Asc.c_oAscRestrictionType.OnlyForms),t.asc_SetFastCollaborative(!0),t.asc_setAutoSaveGap(1)):($("#id-btn-prev-field").hide(),$("#id-btn-next-field").hide(),$("#id-btn-clear-fields").hide(),n.hide());var r=o.parent(),s=r.position().left,c=r.next().outerWidth();s<c?r.css("padding-left",c-s):r.css("padding-right",s-c),E(Asc.c_oAscAsyncActionType.BlockInteraction,x),t.asc_LoadDocument(),t.Resize()}function O(t){var o=(t.asc_getCurrentFont()+t.asc_getCurrentImage())/(t.asc_getFontsCount()+t.asc_getImagesCount());e.loadMask&&e.loadMask.setTitle(e.textLoadingDocument+": "+common.utils.fixedDigits(Math.min(Math.round(100*o),100),3,"  ")+"%")}function G(t,o,n){if(t==Asc.c_oAscError.ID.LoadingScriptError)return $("#id-critical-error-title").text(e.criticalErrorTitle),$("#id-critical-error-message").text(e.scriptLoadError),$("#id-critical-error-close").text(e.txtClose).off().on("click",(function(){window.location.reload()})),void $("#id-critical-error-dialog").css("z-index",20002).modal("show");var r;switch(U(),S(Asc.c_oAscAsyncActionType.BlockInteraction,x),t){case Asc.c_oAscError.ID.Unknown:r=e.unknownErrorText;break;case Asc.c_oAscError.ID.ConvertationTimeout:r=e.convertationTimeoutText;break;case Asc.c_oAscError.ID.ConvertationError:r=e.convertationErrorText;break;case Asc.c_oAscError.ID.ConvertationOpenError:r=e.openErrorText;break;case Asc.c_oAscError.ID.DownloadError:r=e.downloadErrorText;break;case Asc.c_oAscError.ID.ConvertationPassword:r=e.errorFilePassProtect;break;case Asc.c_oAscError.ID.UserDrop:r=e.errorUserDrop;break;case Asc.c_oAscError.ID.ConvertationOpenLimitError:r=e.errorFileSizeExceed;break;case Asc.c_oAscError.ID.UpdateVersion:r=e.errorUpdateVersionOnDisconnect;break;case Asc.c_oAscError.ID.AccessDeny:r=e.errorAccessDeny;break;case Asc.c_oAscError.ID.Submit:r=e.errorSubmit,i=!0,a&&a.hide();break;case Asc.c_oAscError.ID.EditingError:r=e.errorEditingDownloadas;break;case Asc.c_oAscError.ID.ForceSaveButton:case Asc.c_oAscError.ID.ForceSaveTimeout:r=e.errorForceSave;break;case Asc.c_oAscError.ID.LoadingFontError:r=e.errorLoadingFont;break;case Asc.c_oAscError.ID.KeyExpire:r=e.errorTokenExpire;break;default:r=e.errorDefaultMessage.replace("%1",t)}o==Asc.c_oAscError.Level.Critical?(Common.Gateway.reportError(t,r),$("#id-critical-error-title").text(e.criticalErrorTitle),$("#id-critical-error-message").html(r),$("#id-critical-error-close").text(e.txtClose).off().on("click",(function(){window.location.reload()}))):(Common.Gateway.reportWarning(t,r),$("#id-critical-error-title").text(e.notcriticalErrorTitle),$("#id-critical-error-message").html(r),$("#id-critical-error-close").text(e.txtClose).off().on("click",(function(){$("#id-critical-error-dialog").modal("hide")}))),$("#id-critical-error-dialog").modal("show"),Common.Analytics.trackEvent("Internal Error",t.toString())}function N(t){t&&(U(),$("#id-error-mask-title").text(e.criticalErrorTitle),$("#id-error-mask-text").text(t.msg),$("#id-error-mask").css("display","block"),Common.Analytics.trackEvent("External Error"))}function j(e){if("mouseup"==e.type){var o=document.getElementById("editor_sdk");if(o){var n=o.getBoundingClientRect();t.OnMouseUp(e.x-n.left,e.y-n.top)}}}function H(){Common.Gateway.requestClose()}function V(){!1!==g.download?t&&t.asc_DownloadAs(new Asc.asc_CDownloadOptions(Asc.c_oAscFileType.DOCX,!0)):Common.Gateway.reportError(Asc.c_oAscError.ID.AccessDeny,e.errorAccessDeny)}function W(){u.customization&&!1===u.customization.macros||t&&t.asc_runAutostartMacroses()}function K(){common.localStorage.save()}Common.Gateway.reportError(void 0,this.unsupportedBrowserErrorText)},Common.Locale.apply((function(){DE.ApplicationView.create(),DE.ApplicationController.create()}));