function ClearMsg() { if (document.getElementById('lblmsg')) { setInterval("ClearLabel()", 60000); } }
function ClearLabel() { if (document.getElementById('lblmsg')) { document.getElementById('lblmsg').innerHTML = ""; } }
window.document.body.defaultStatus = document.title; window.onload = function () { ClearMsg(); };
function ChangeBtnText(cntrl, text, tf) { cntrl.value = text; }
function jQueryMsg(mHead, mMsg, typ) { var IconName = 'info_outline'; var HeadCss = 'info'; if (typ != undefined) { if (typ == 1) { IconName = "info_outline"; HeadCss = "info"; } else if (typ == 2) { IconName = "done_all"; HeadCss = "done"; } else if (typ == 3) { IconName = "highlight_off"; HeadCss = "error"; } } var notice = '<div class="notice"><div class="notice-body"><i class="material-icons icon ' + HeadCss + '">' + IconName + '</i><h3 class="' + HeadCss + '">' + mHead + '</h3><p>' + mMsg + '</p></div><div class="notice-bottom"></div></div>'; if ($(notice) != null) { $(notice).purr({ fadeInSpeed: 200, fadeOutSpeed: 2000, removeTimer: 50000 }); }; if ($(notice) == null) { alert(mMsg); }; }
$(window).load(function () {
    $('[data-toggle="tooltip"]').tooltip({ container: 'body' });
})
function IsNumeric(strString) { var strValidChars = "0123456789"; var strChar; var blnResult = true; if (strString.length == 0) { return false; } for (i = 0; i < strString.length && blnResult == true; i++) { strChar = strString.charAt(i); if (strValidChars.indexOf(strChar) == -1) { blnResult = false; } } return blnResult; }
function CheckNumeric() {
    if (document.getElementById("txtUserName").value.length > 0 && document.getElementById("txtUserName").value.length < 9) {
        if (IsNumeric(document.getElementById("txtUserName").value) == false) {
            document.getElementById("txtUserName").focus();
            jQueryMsg('Invalid ITS ID!', 'Enter valid ITS ID to proceed further.')
        }
        else {
            document.getElementById("txtLat").value = "";
            document.getElementById("txtLon").value = "";
        }
    }
}
function TogglePasswordEye() {
    var passwordInput = document.getElementById("txtPassword");
    var toggle_show = document.getElementById("showeye");
    var toggle_hide = document.getElementById("hideeye");

    if (passwordInput.type === 'password') {
        passwordInput.type = "text";
        toggle_hide.style.display = "block";
        toggle_show.style.display = "none";
    } else {
        passwordInput.type = "password";
        toggle_hide.style.display = "none";
        toggle_show.style.display = "block";
    }
}
customCheckbox();
function customCheckbox() {
    var checkBox = $('input[type=checkbox]');
    $(checkBox).each(function () {
        $(this).next('label').andSelf().wrapAll('<div class="checkbox"></div>');

        $(this).wrap("<span class='its-checkbox'></span>");
        if ($(this).is(':checked')) {
            $(this).parent().addClass("selected");
        }
    });
    $(checkBox).click(function () {
        $(this).parent().toggleClass("selected");
    });
}