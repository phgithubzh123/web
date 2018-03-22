/*public*/
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

/*topBar_left box*/
// addLoadEvent(function () {
//     var aLi = document.getElementById('select');
//     var aCity = document.getElementById('city');
//     var aTopBar_left_iteam = document.getElementById('topBar_left_iteam');
//     var aOnclick = aTopBar_left_iteam.getElementsByTagName('li');
//     var aPage = aTopBar_left_iteam.getElementsByTagName('a');
//     aLi.onmouseover = function () {
//         aLi.style.backgroundColor = "#FFF";
//         aTopBar_left_iteam.className = "topBar_left_iteam show";
//     };
//     aLi.onmouseout = function () {
//         aLi.style.backgroundColor = "";
//         aTopBar_left_iteam.className = "topBar_left_iteam hide";
//     };
//     for (var i = 0; i < aOnclick.length; i++) {
//         aOnclick[i].onmouseover = function () {
//             this.style.backgroundColor = "#F30213";
//         };
//         aOnclick[i].onmouseout = function () {
//             this.style.backgroundColor = "";
//         };
//         aPage[i].onclick = function () {
//             aCity.text = this.text;
//         };
//         aOnclick[i].onclick = function () {
//             aLi.style.backgroundColor = "";
//             aTopBar_left_iteam.className = "topBar_left_iteam hide";
//         };
//     }
// });

addLoadEvent(function () {
    var aLi = document.getElementById('select');
    var aCity = document.getElementById('city');
    var aTopBar_left_iteam = document.getElementById('topBar_left_iteam');
    var aOnclick = aTopBar_left_iteam.getElementsByTagName('li');
    var aPage = aTopBar_left_iteam.getElementsByTagName('a');
    var Timer = null;
    aCity.onmouseover = function () {
        aLi.style.backgroundColor = "#FFF";
        aTopBar_left_iteam.className = "topBar_left_iteam show";
    };
    aCity.onmouseout = aTopBar_left_iteam.onmouseout = function () {
        Timer = setTimeout(function () {
            aLi.style.backgroundColor = "";
            aTopBar_left_iteam.className = "topBar_left_iteam hide";
        }, 500);
    };
    aTopBar_left_iteam.onmouseover = function () {
        clearTimeout(Timer);
    };
    for (var i = 0; i < aPage.length; i++) {
        aOnclick[i].onmouseover = function () {
            this.style.backgroundColor = "#F30213";
        };
        aOnclick[i].onmouseout = function () {
            this.style.backgroundColor = "";
        };
        aPage[i].onclick = function () {
            aCity.text = this.text;
            aLi.style.backgroundColor = "";
            aTopBar_left_iteam.className = "topBar_left_iteam hide";
        }
    }
});
/*selected*/
addLoadEvent(function () {
    var oDiv = document.getElementById('shopList_item');
    var aDiv = oDiv.getElementsByTagName('div');
    var text = document.getElementById('text_left');
    var text_Div = text.getElementsByTagName('div');
    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].index = i;
        aDiv[i].onmouseover = function () {
            for (var i = 0; i < aDiv.length; i++) {
                text_Div[i].className = "text hide";
            }
            text_Div[this.index].className = "text show";
        };
    }
});

/*计时器*/
function dou(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}
addLoadEvent(function times() {
    var date = new Date();
    var oDiv = document.getElementById('Countdown');
    var aImg = oDiv.getElementsByTagName('img');
    var str = dou(date.getHours()) + dou(date.getMinutes()) + dou(date.getSeconds());
    for (var i = 0; i < aImg.length; i++) {
        aImg[i].src = "images/num" + str[i] + ".png";
    }
    setInterval(times, 1000)
});

/*滚动条*/
addLoadEvent(function () {
    var oDiv = document.getElementById('Scroll_box');
    var aUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oDiv.getElementsByTagName('li');
    aUl.innerHTML = aUl.innerHTML + aUl.innerHTML;
    aUl.style.width = aLi[0].offsetWidth * aLi.length + "px";

    function move() {
        if (aUl.offsetLeft < (-aUl.offsetWidth) / 2) {
            aUl.style.left = '0';
        }
        if (aUl.offsetLeft > 0) {
            aUl.style.left = -aUl.offsetWidth / 2 + "px";
        }
        aUl.style.left = aUl.offsetLeft - 2 + 'px';
    }

    var Timers = setInterval(move, 30);
    aUl.onmouseover = function () {
        clearInterval(Timers);
    };
    aUl.onmouseout = function () {
        Timers = setInterval(move, 30);
    };
});
