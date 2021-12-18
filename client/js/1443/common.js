String.prototype.startsWith = function (str) { return (this.match("^" + str) == str) }
String.prototype.endsWith = function (str) { return (this.match(str + "$") == str) }
function ChangeBtnText(cntrl, text, tf) { DefaultText = cntrl.value; cntrl.value = text; setTimeout("ResetBtnText('" + cntrl.id + "','" + DefaultText + "')", 20000) }
function ResetBtnText(cntrlid, text) { document.getElementById(cntrlid).value = text }
function openWindow(url) { window.open(url, 'Mywin', 'status=yes,toolbar=no,menubar=no,resizable=yes,resize=yes,scrollbars=yes, height=750,width=900', false); window.focus() }
function CheckLength(txt, lbl, MaxChar) { if (txt.value.length > (MaxChar)) { var cont = txt.value; txt.value = cont.substring(0, (MaxChar)); return false } var a; if (txt.value.length <= MaxChar) { a = MaxChar - parseInt(txt.value.length); document.getElementById(lbl).innerHTML = a } else { a = MaxChar - parseInt(txt.value.length); document.getElementById(lbl).innerHTML = a; return false } }
function CheckAll(gridID, chkbox) { var elem = document.getElementById('Form1').elements || document.getElementById('form1').elements; for (var i = 0; i < elem.length; i++) { var e = document.getElementById('Form1').elements[i] || document.getElementById('form1').elements[i]; if ((e.name != 'checkall') && (e.type == 'checkbox') && (e.id.toUpperCase().startsWith(gridID.toUpperCase()))) { e.checked = chkbox.checked; HighlightRow(e); if (chkbox.checked) { $(e).parent().addClass("selected"); } else { $(e).parent().removeClass("selected"); } } } }
function HighlightRow(chk) { if (chk.checked == true) { $("#" + chk.id).parent().parent().parent().parent().addClass("dgSelect"); } else { $("#" + chk.id).parent().parent().parent().parent().removeClass("dgSelect"); } }
function CheckAllRadio(ctrl, childctrlid, gridID) { for (var i = 0; i < document.Form1.elements.length; i++) { var e = document.Form1.elements[i]; if ((e.type == 'radio') && (e.id.toUpperCase().startsWith(gridID.toUpperCase())) && (e.id.toUpperCase().includes(childctrlid.toUpperCase())) && (e.value == ctrl.value)) { e.checked = ctrl.checked; $(e).parent().addClass("selected"); } else if ((e.type == 'radio') && (e.id.toUpperCase().startsWith(gridID.toUpperCase())) && (e.id.toUpperCase().includes(childctrlid.toUpperCase())) && (e.value != ctrl.value)) { $(e).parent().removeClass("selected"); } } }
function FormatCSV(cssid) { if ($(cssid) != undefined) { $(cssid).blur(function () { var strValue = ""; strValue = $(cssid).val(); if ($.trim(strValue) == "" || $.trim(strValue).length <= 9) { return; } strValue = strValue.replace(/\n/g, ","); strValue = strValue.replace(/\s/g, ","); strValue = strValue.replace(/[&\/\\!@#+=()$~%^.'":*?<>{}|©]/g, ''); strValue = strValue.replace(/-/g, ''); strValue = strValue.replace(/_/g, ''); strValue = strValue.replace(/[\[\]']+/g, ''); strValue = strValue.replace(/,*$/g, ""); var MIDs = new Array(); MIDs = strValue.split(","); strValue = ""; for (i = 0; i < MIDs.length; i++) { if (MIDs[i].toString().length == 8) { strValue += MIDs[i].toString().replace(/\D/g, "") + ","; } else { if ($(cssid).attr("class").includes("its")) { strValue += MIDs[i].toString().substring(0, 7) + ","; } else if ($(cssid).attr('class').includes("num") == true) { strValue += MIDs[i].toString().replace(/\D/g, "") + ","; } else { strValue += MIDs[i].toString() + ","; } } } if ($(cssid).attr('class').includes("num") == false) { strValue = strValue.replace(/(\b(\w{1,7})\b(\W|$))/g, ""); } strValue = strValue.replace(/,,*/g, ","); var uniqueList = strValue.split(',').filter(function (item, i, allItems) { return i == allItems.indexOf(item); }).join(','); uniqueList = uniqueList.replace(/^,/g, ""); uniqueList = uniqueList.replace(/,*$/g, ""); if ($.trim(uniqueList) != "") { if ($(cssid).attr("class").includes("wq")) { uniqueList = "'" + uniqueList.replace(/,/g, "','") + "'"; } } $(cssid).val(uniqueList); }); } }
//window.document.body.defaultStatus=document.title;
function jQueryMsg(mHead, mMsg, typ, timer = 5) { timer = (timer * 1000); var IconName = 'info_outline'; var HeadCss = 'info'; if (typ != undefined) { if (typ == 1) { IconName = "info_outline"; HeadCss = "info"; } else if (typ == 2) { IconName = "done_all"; HeadCss = "done"; } else if (typ == 3) { IconName = "highlight_off"; HeadCss = "error"; } } var notice = '<div class="notice"><div class="notice-body"><i class="material-icons icon ' + HeadCss + '">' + IconName + '</i><h3 class="' + HeadCss + '">' + mHead + '</h3><p>' + mMsg + '</p></div><div class="notice-bottom"></div></div>'; if ($(notice) != null) { $(notice).purr({ fadeInSpeed: 200, fadeOutSpeed: 2000, removeTimer: timer }); }; if ($(notice) == null) { alert(mMsg); } }
function IsNumeric(strString) { var strValidChars = "0123456789"; var strChar; var blnResult = true; if (strString.length == 0) { return false; } for (i = 0; i < strString.length && blnResult == true; i++) { strChar = strString.charAt(i); if (strValidChars.indexOf(strChar) == -1) { blnResult = false; } } return blnResult; }
function ScrollToControl(ctrlID) { $("html, body").animate({ scrollTop: $("#" + ctrlID).position().top }, "slow"); }
function initializeCollapsible() { var collapsibles = document.querySelectorAll(".collapsible"); collapsibles.forEach((item) => item.addEventListener("click", function () { this.classList.toggle("collapsible--expanded"); })); }

//for solving ajax issues
function reBuildJS() {
    try {
        customRadio();
        customCheckbox();
        customDropDownListGroup();
        setDynamicCSS();
        setTextFit();
        FormatCSV(".csv");
        FormatCSV(".csv1");
        $('.tooltips').tooltip();
        $('.popovers').popover();
    }
    catch (err) {
        console.log("reBuildJS - " + err);
    }
}

$(window).load(function () {
    try {
        setDynamicCSS();
        setTextFit();
        configModal();
        FormatCSV(".csv");
        FormatCSV(".csv1");
        MenuSearchAutoComplete();
        initializeCollapsible();
        reBuildJS();
        //on resize reset dynamic css
        $(window).bind('resize', function () {
            setDynamicCSS();
            setTextFit();
        });
        setInterval(function () { checkSession(); checkInternet(); }, 3000); // 5sec       
    }
    catch (err) {
        console.log("window load - " + err);
    }
})

//Grouping in DropDownlist
function customDropDownListGroup() {
    var groups = {};
    $("select option[data-category]").each(function () {
        groups[$.trim($(this).attr("data-category"))] = true;
    });
    $.each(groups, function (c) {
        $("select option[data-category='" + c + "']").wrapAll('<optgroup label="' + c + '">');
    });
}

//Radio
function customRadio() {
    var radioButton = $('input[type=radio]');
    $(radioButton).each(function () {
        $(this).next('label').andSelf().wrapAll('<div class="radio"></div>'); //added mukati for proper css applying (wrap 2 control in a div)
        $(this).wrap("<span class='its-radio'></span>");
        if ($(this).is(':checked')) {
            $(this).parent().addClass("selected");
        }
    });
    $(radioButton).click(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass("selected");
        }
        var family = $(this).attr("name");
        $('input[name="' + family + '"]').not(this).parent().removeClass("selected");
    });
}

//Checkbox
function customCheckbox() {
    var checkBox = $('input[type=checkbox]');
    $(checkBox).each(function () {
        $(this).next('label').andSelf().wrapAll('<div class="checkbox"></div>'); //added mukati for proper css applying (wrap 2 control in a div)
        $(this).wrap("<span class='its-checkbox'></span>");
        if ($(this).is(':checked')) {
            $(this).parent().addClass("selected");
        }
    });
    $(checkBox).click(function () {
        $(this).parent().toggleClass("selected");
    });
}

//Custom CSS Manipulations on Window Resize
function setDynamicCSS() {
    var m = 0;
    var prev = null;
    var temp = [];
    $(".row-with-equal-cells > div[class*='col-']").each(function (i) {
        if (prev && $(this).offset().top == prev.offset().top) {
            $(this).css('height', 'auto');
            m = Math.max(m, $(this).height());
        } else {
            setElementsHeight(temp, m);
            temp = [];
            $(this).css('height', 'auto');
            m = $(this).height();
        }
        temp.push($(this));
        prev = $(this);
    });
    prev = null;
    setElementsHeight(temp, m);
}
function setElementsHeight(nodeArray, height) {
    $(nodeArray).each(function (i) {
        $(this).height(height);
    });
}

//function for textfit
var damping = 0;
function setTextFit() {
    $(".textfit").each(function (i) {
        var width = $(this)[0].offsetWidth
        var textWidth = $(this).textWidth();
        if ($(this).textWidth() >= (width)) {
            while ($(this).textWidth() > (width)) {
                var currentFontSize = $(this).css('font-size');
                $(this).css('font-size', (currentFontSize.split("px")[0] - 1));
                damping = 50;
            }
        } else if ($(this).textWidth() + damping < (width)) {
            $(this).css('font-size', "");
        }
    });
}
$.fn.textWidth = function () {
    var self = $(this);
    calculator = $('<span style="display: inline-block;" />');
    self.wrap(calculator);
    width = self.parent().width(); // parent = the calculator wrapper
    self.unwrap();
    return width;
};

//Model
var menuOpen = false;
var modalOpen = false;
function configModal() {
    $(".modal-custom").on("show.bs.modal", function (e) {
        modalOpen = true;
        $("html").addClass("modal-open");
    }).on("hidden.bs.modal", function (e) {
        modalOpen = false;
        console.log("scroll modal:" + modalOpen + " menu:" + menuOpen + ">" + (!modalOpen && !menuOpen));
        if (!modalOpen && !menuOpen) {
            $("html").removeClass("modal-open");
        }
    });
    $("#navbarCollapse").on("show.bs.collapse", function (e) {
        menuOpen = true;
        $("html").addClass("modal-open");
    }).on("hide.bs.collapse", function (e) {
        menuOpen = false;
        console.log("scroll modal:" + modalOpen + " menu:" + menuOpen + ">" + (!modalOpen && !menuOpen));
        if (!modalOpen && !menuOpen) {
            $("html").removeClass("modal-open");
        }
    });
}

//SetTextEmoji
function SetTextEmoji(divID) {
    var counter = 0;
    var data = ['<span class="blue">(o_o)</span>', '<span class="green">(˚0˚)</span>', '<span class="orange">(^-^)</span>', '<span class="pink">{0-0}</span>', '<span class="light-orange">(=x=)</span>', '<span class="red">(:0:)</span>', '<span class="grey">(>o<)</span>', '<span class="purple">(^o^)</span>', '<span class="light-blue">(*-*)</span>', '<span class="golden">{o-o}</span>', '<span class="light-green">(;-;)</span>', '<span class="pink">{^o^}</span>'];
    var $role = $('#' + divID)

    //repeat the passed function at the specified interval - it is in milliseconds
    setInterval(function () {
        $role.html(data[counter++]);
        //reset
        if (counter >= data.length) { counter = 0; }
    }, 15000) //15 sec
}

//CopyTextToClipboard
function CopyTextToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    jQueryMsg("Copied!", "Content has been successfully copied to clipboard", 2, 1);
}

function FormatDate(str) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], n = months.length, re = /(\d{2})-([a-z]{3})-(\d{4})/i, matches;
    while (n--) { months[months[n]] = n; } // map month names to their index :)
    matches = str.match(re); // extract date parts from string
    return new Date(matches[3], months[matches[2]], matches[1]);
}