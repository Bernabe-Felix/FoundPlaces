!function($){"use strict";"undefined"!=typeof wpcf7&&null!==wpcf7&&(wpcf7=$.extend({cached:0,inputs:[]},wpcf7),$(function(){wpcf7.supportHtml5=function(){var a={},t=document.createElement("input");a.placeholder="placeholder"in t;return $.each(["email","url","tel","number","range","date"],function(e,i){t.setAttribute("type",i),a[i]="text"!==t.type}),a}(),$("div.wpcf7 > form").each(function(){var a=$(this);wpcf7.initForm(a),wpcf7.cached&&wpcf7.refill(a)})}),wpcf7.getId=function(a){return parseInt($('input[name="_wpcf7"]',a).val(),10)},wpcf7.initForm=function(a){var t=$(a);t.submit(function(a){"function"==typeof window.FormData&&(wpcf7.submit(t),a.preventDefault())}),$(".wpcf7-submit",t).after('<span class="ajax-loader"></span>'),wpcf7.toggleSubmit(t),t.on("click",".wpcf7-acceptance",function(){wpcf7.toggleSubmit(t)}),$(".wpcf7-exclusive-checkbox",t).on("click","input:checkbox",function(){var a=$(this).attr("name");t.find('input:checkbox[name="'+a+'"]').not(this).prop("checked",!1)}),$(".wpcf7-list-item.has-free-text",t).each(function(){var a=$(":input.wpcf7-free-text",this),t=$(this).closest(".wpcf7-form-control");$(":checkbox, :radio",this).is(":checked")?a.prop("disabled",!1):a.prop("disabled",!0),t.on("change",":checkbox, :radio",function(){$(".has-free-text",t).find(":checkbox, :radio").is(":checked")?a.prop("disabled",!1).focus():a.prop("disabled",!0)})}),wpcf7.supportHtml5.placeholder||$("[placeholder]",t).each(function(){$(this).val($(this).attr("placeholder")),$(this).addClass("placeheld"),$(this).focus(function(){$(this).hasClass("placeheld")&&$(this).val("").removeClass("placeheld")}),$(this).blur(function(){""===$(this).val()&&($(this).val($(this).attr("placeholder")),$(this).addClass("placeheld"))})}),wpcf7.jqueryUi&&!wpcf7.supportHtml5.date&&t.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:"yy-mm-dd",minDate:new Date($(this).attr("min")),maxDate:new Date($(this).attr("max"))})}),wpcf7.jqueryUi&&!wpcf7.supportHtml5.number&&t.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr("min"),max:$(this).attr("max"),step:$(this).attr("step")})}),$(".wpcf7-character-count",t).each(function(){var a=$(this),e=a.attr("data-target-name"),i=a.hasClass("down"),n=parseInt(a.attr("data-starting-value"),10),c=parseInt(a.attr("data-maximum-value"),10),s=parseInt(a.attr("data-minimum-value"),10),o=function(t){var e=$(t).val().length,o=i?n-e:e;a.attr("data-current-value",o),a.text(o),c&&c<e?a.addClass("too-long"):a.removeClass("too-long"),s&&e<s?a.addClass("too-short"):a.removeClass("too-short")};$(':input[name="'+e+'"]',t).each(function(){o(this),$(this).keyup(function(){o(this)})})}),t.on("change",".wpcf7-validates-as-url",function(){var a=$.trim($(this).val());a&&!a.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==a.indexOf(".")&&(a="http://"+(a=a.replace(/^\/+/,""))),$(this).val(a)})},wpcf7.submit=function(form){if("function"==typeof window.FormData){var $form=$(form);$(".ajax-loader",$form).addClass("is-active"),$("[placeholder].placeheld",$form).each(function(a,t){$(t).val("")}),wpcf7.clearResponse($form);var formData=new FormData($form.get(0)),detail={id:$form.closest("div.wpcf7").attr("id"),status:"init",inputs:[],formData:formData};$.each($form.serializeArray(),function(a,t){if("_wpcf7"==t.name)detail.contactFormId=t.value;else if("_wpcf7_version"==t.name)detail.pluginVersion=t.value;else if("_wpcf7_locale"==t.name)detail.contactFormLocale=t.value;else if("_wpcf7_unit_tag"==t.name)detail.unitTag=t.value;else if("_wpcf7_container_post"==t.name)detail.containerPostId=t.value;else if(t.name.match(/^_wpcf7_\w+_free_text_/)){var e=t.name.replace(/^_wpcf7_\w+_free_text_/,"");detail.inputs.push({name:e+"-free-text",value:t.value})}else t.name.match(/^_/)||detail.inputs.push(t)}),wpcf7.triggerEvent($form.closest("div.wpcf7"),"beforesubmit",detail);var ajaxSuccess=function(data,status,xhr,$form){detail.id=$(data.into).attr("id"),detail.status=data.status;var $message=$(".wpcf7-response-output",$form);switch(data.status){case"validation_failed":$.each(data.invalidFields,function(a,t){$(t.into,$form).each(function(){wpcf7.notValidTip(this,t.message),$(".wpcf7-form-control",this).addClass("wpcf7-not-valid"),$("[aria-invalid]",this).attr("aria-invalid","true")})}),$message.addClass("wpcf7-validation-errors"),$form.addClass("invalid"),wpcf7.triggerEvent(data.into,"invalid",detail);break;case"spam":$message.addClass("wpcf7-spam-blocked"),$form.addClass("spam"),$('[name="g-recaptcha-response"]',$form).each(function(){if(""===$(this).val()){var a=$(this).closest(".wpcf7-form-control-wrap");wpcf7.notValidTip(a,wpcf7.recaptcha.messages.empty)}}),wpcf7.triggerEvent(data.into,"spam",detail);break;case"mail_sent":$message.addClass("wpcf7-mail-sent-ok"),$form.addClass("sent"),data.onSentOk&&$.each(data.onSentOk,function(i,n){eval(n)}),wpcf7.triggerEvent(data.into,"mailsent",detail);break;case"mail_failed":case"acceptance_missing":default:$message.addClass("wpcf7-mail-sent-ng"),$form.addClass("failed"),wpcf7.triggerEvent(data.into,"mailfailed",detail)}wpcf7.refill($form,data),data.onSubmit&&$.each(data.onSubmit,function(i,n){eval(n)}),wpcf7.triggerEvent(data.into,"submit",detail),"mail_sent"==data.status&&$form.each(function(){this.reset()}),$form.find("[placeholder].placeheld").each(function(a,t){$(t).val($(t).attr("placeholder"))}),$message.html("").append(data.message).slideDown("fast"),$message.attr("role","alert"),$(".screen-reader-response",$form.closest(".wpcf7")).each(function(){var a=$(this);if(a.html("").attr("role","").append(data.message),data.invalidFields){var t=$("<ul></ul>");$.each(data.invalidFields,function(a,e){if(e.idref)var i=$("<li></li>").append($("<a></a>").attr("href","#"+e.idref).append(e.message));else i=$("<li></li>").append(e.message);t.append(i)}),a.append(t)}a.attr("role","alert").focus()})};$.ajax({type:"POST",url:wpcf7.apiSettings.getRoute("/contact-forms/"+wpcf7.getId($form)+"/feedback"),data:formData,dataType:"json",processData:!1,contentType:!1}).done(function(a,t,e){ajaxSuccess(a,t,e,$form),$(".ajax-loader",$form).removeClass("is-active")}).fail(function(a,t,e){var i=$('<div class="ajax-error"></div>').text(e.message);$form.after(i)})}},wpcf7.triggerEvent=function(a,t,e){var i=$(a),n=new CustomEvent("wpcf7"+t,{bubbles:!0,detail:e});i.get(0).dispatchEvent(n),i.trigger("wpcf7:"+t,e),i.trigger(t+".wpcf7",e)},wpcf7.toggleSubmit=function(a,t){var e=$(a),i=$("input:submit",e);void 0===t?e.hasClass("wpcf7-acceptance-as-validation")||(i.prop("disabled",!1),$("input:checkbox.wpcf7-acceptance",e).each(function(){var a=$(this);if(a.hasClass("wpcf7-invert")&&a.is(":checked")||!a.hasClass("wpcf7-invert")&&!a.is(":checked"))return i.prop("disabled",!0),!1})):i.prop("disabled",!t)},wpcf7.notValidTip=function(a,t){var e=$(a);if($(".wpcf7-not-valid-tip",e).remove(),$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(t).appendTo(e),e.is(".use-floating-validation-tip *")){var i=function(a){$(a).not(":hidden").animate({opacity:0},"fast",function(){$(this).css({"z-index":-100})})};e.on("mouseover",".wpcf7-not-valid-tip",function(){i(this)}),e.on("focus",":input",function(){i($(".wpcf7-not-valid-tip",e))})}},wpcf7.refill=function(a,t){var e=$(a),i=function(a,t){$.each(t,function(t,e){a.find(':input[name="'+t+'"]').val(""),a.find("img.wpcf7-captcha-"+t).attr("src",e);var i=/([0-9]+)\.(png|gif|jpeg)$/.exec(e);a.find('input:hidden[name="_wpcf7_captcha_challenge_'+t+'"]').attr("value",i[1])})},n=function(a,t){$.each(t,function(t,e){a.find(':input[name="'+t+'"]').val(""),a.find(':input[name="'+t+'"]').siblings("span.wpcf7-quiz-label").text(e[0]),a.find('input:hidden[name="_wpcf7_quiz_answer_'+t+'"]').attr("value",e[1])})};void 0===t?$.ajax({type:"GET",url:wpcf7.apiSettings.getRoute("/contact-forms/"+wpcf7.getId(e)+"/refill"),beforeSend:function(a){var t=e.find(':input[name="_wpnonce"]').val();t&&a.setRequestHeader("X-WP-Nonce",t)},dataType:"json"}).done(function(a,t,c){a.captcha&&i(e,a.captcha),a.quiz&&n(e,a.quiz)}):(t.captcha&&i(e,t.captcha),t.quiz&&n(e,t.quiz))},wpcf7.clearResponse=function(a){var t=$(a);t.removeClass("invalid spam sent failed"),t.siblings(".screen-reader-response").html("").attr("role",""),$(".wpcf7-not-valid-tip",t).remove(),$("[aria-invalid]",t).attr("aria-invalid","false"),$(".wpcf7-form-control",t).removeClass("wpcf7-not-valid"),$(".wpcf7-response-output",t).hide().empty().removeAttr("role").removeClass("wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked")},wpcf7.apiSettings.getRoute=function(a){var t=wpcf7.apiSettings.root;return t=t.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+a)})}(jQuery),function(){if("function"==typeof window.CustomEvent)return!1;function a(a,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(a,t.bubbles,t.cancelable,t.detail),e}a.prototype=window.Event.prototype,window.CustomEvent=a}();