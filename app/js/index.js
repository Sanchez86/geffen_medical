function setHeightVacancySection(e){$section=$(e);var t=0;$section.each(function(e,c){$(c).height("auto");var i=$(c).height();t=i>t?i:t}),$(window).width()<992||$section.height(t)}function validate(e){errorMsg="required",$(e+' input[type="tel"]').keyup(function(){var e=$(this),t=e.nextAll(".error-msg"),c=/^[\d- ]+$/,i=e.val();null==c.exec(i)?(e.val(i.slice(0,-1)),errorMsg="incorrect phone"):errorMsg="",errorMsg?(e.css({borderColor:"red"}),t.text(errorMsg)):(e.css({borderColor:"transparent"}),t.text(""))}),$(e+" input").blur(function(){var e=$(this),t=e.val(),c=e.nextAll(".error-msg");if(e.prop("required")&&""==t?(e.removeClass("full"),errorMsg="required"):(e.addClass("full"),errorMsg=""),"email"==e.attr("type")&&""!=t){null==/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.exec(t)&&(errorMsg="incorrect email")}"tel"==e.attr("type")&&""!=t&&t.length<6&&(errorMsg="incorrect phone"),errorMsg?(e.css({borderColor:"red"}),c.text(errorMsg)):(e.css({borderColor:"#cccccc"}),c.text(""))})}function checkInput(){$("input").blur(function(){var e=$(this);""==e.val()?e.removeClass("full"):e.addClass("full")})}function initEvents(){checkInput(),setTimeout(function(){setHeightVacancySection(".description-vacancy h3"),setHeightVacancySection(".description-vacancy p"),setHeightVacancySection(".list-section.first ul"),setHeightVacancySection(".list-section.second ul"),setHeightVacancySection(".list-section.second p"),setHeightVacancySection(".email-section")},100),$(window).on("load",function(){}),$(window).resize(function(){setHeightVacancySection(".description-vacancy h3"),setHeightVacancySection(".description-vacancy p"),setHeightVacancySection(".list-section.first ul"),setHeightVacancySection(".list-section.second ul"),setHeightVacancySection(".list-section.second p"),setHeightVacancySection(".email-section")})}initEvents();