//    var fName = prompt("Please enter your first Name");
//    var lName = prompt("Please enter your last Name");
//    var Age = prompt("Please enter your age");
//    var Gender = prompt("Please enter your gender");

//    var data = {
//        fName: fName,
//        lName:lName,
//        age:Age,
//        gender:Gender,
//        fullname:function(){return(this.fName +" "+ this.lName)}
//    }

// for event
// alert("Name:"+data.fullname()+"\n"+"Age:"+data.age+"\n"+"Gender:"+data.gender);
// function handler1(){alert("This is Handler 1");}
// function handler2(){alert("THis is handler 2");}
// document.querySelector("a").addEventListener("click",handler2);

// change box z-index
// document.addEventListener('DOMContentLoaded', function () {});
document.querySelector("body").style.background = "url(" + localStorage.getItem("bground") + ")";
var handler = function () {
    // Searching for all boxes with class .top
    nodes = document.querySelectorAll('.top');
    nodes.forEach(function (node) {
        // removing the class .top from each node
        node.classList.remove('top');
    })
    // console.log(this)
    this.classList.add('top');
}
boxes = document.querySelectorAll('.box');
boxes.forEach(function (box) {
    console.log('box', box);
    box.addEventListener('click', handler);
})

//move the box
upkey = document.querySelectorAll('.fa-caret-up');
downkey = document.querySelectorAll('.fa-caret-down');
leftkey = document.querySelectorAll('.fa-caret-left');
rightkey = document.querySelectorAll('.fa-caret-right');

upkey.forEach(function (node) {
    node.addEventListener('click', function () {
        var target = this.parentNode;
        var curTop = getComputedStyle(target).top;
        var newTop = parseInt(curTop) - 10 + 'px';
        target.style.top = newTop;
    });
})
downkey.forEach(function (node) {
    node.addEventListener('click', function () {
        var target = this.parentNode;
        var curDown = getComputedStyle(target).top;
        var newDown = parseInt(curDown) + 10 + 'px';
        target.style.top = newDown;
    });
})
leftkey.forEach(function (node) {
    node.addEventListener('click', function () {
        var target = this.parentNode;
        var curLeft = getComputedStyle(target).left;
        var newLeft = parseInt(curLeft) - 10 + 'px';
        target.style.left = newLeft;
    });
})
rightkey.forEach(function (node) {
    node.addEventListener('click', function () {
        var target = this.parentNode;
        var curRight = getComputedStyle(target).left;
        var newRight = parseInt(curRight) + 10 + 'px';
        target.style.left = newRight;
    });
})
//close minimize maximize
close = document.querySelectorAll('.fa-window-close');
minimize = document.querySelectorAll('.fa-window-minimize');
maximize = document.querySelectorAll('.fa-window-maximize');
oriSize = document.querySelectorAll('.fa-compress-arrows-alt');


// close
close.forEach(function (node) {
    node.addEventListener('click', function () {
        var removeWin = document.getElementById("dropArea");
        removeWin.remove();
    });
})
// minimize
minimize.forEach(function (node) {
    node.addEventListener('click', function () {
        this.parentNode.style.width = '300px';
        this.parentNode.style.height = '20px';
        this.parentNode.style.top = '94%';
    });
})
// maximize
maximize.forEach(function (node) {
    node.addEventListener('click', function () {
        this.parentNode.style.width = '97vw';
        this.parentNode.style.height = '97vh';
        this.parentNode.style.top = '0%';
        this.parentNode.style.left = '1%';
        node.classList.toggle("hideMax");
        var defSize = document.getElementById("oriSize");
        // console.log(defSize);
        defSize.classList.toggle("showMax");
    });
})
//default size
oriSize.forEach(function (node) {
    node.addEventListener('click', function () {
        // document.querySelector('#dropArea').style='';
        document.querySelector('#dropArea').removeAttribute('style');//remove inline css
        node.classList.toggle("showMax");
        console.log(node);
        var defSize = document.getElementById("max");
        // console.log(defSize);
        defSize.classList.toggle("hideMax");
        // console.log(node);


    });
})
//make dragable

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    console.log(ev.dataTransfer.getData("text"));
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
}
//close
// var close= document.querySelectorAll('.fa-window-close');
// for()
// document.getElementById('close').addEventListener('click', function() {
//     this.parentNode.style.display = 'none';
// });

dragElement(document.getElementById("dropArea"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//change wallpaper
noContext = document.getElementById('body');
noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
    e.stopPropagation();
});
// on click
var menuDisplayed = false;
var menuBox = null;

window.addEventListener("contextmenu", function () {
    var left = arguments[0].clientX;
    var top = arguments[0].clientY;
    // console.log(arguments[0]);
    // console.log(top);
    menuBox = window.document.querySelector(".wallpaper");
    menuBox.style.left = left + "px";
    menuBox.style.top = top + "px";
    menuBox.style.display = "block";

    arguments[0].preventDefault();

    menuDisplayed = true;
}, false);

window.addEventListener("click", function () {
    if (menuDisplayed == true) {
        menuBox.style.display = "none";
    }
}, true);
//read file name nad show
document.querySelector(".list").addEventListener("click", function() {
    document.querySelector("#wallpaper").click();
   });
   document.querySelector(".body").style.background =
    "url(" + reader.result + ")";
   function previewFile() {
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();
   
    reader.onloadend = function() {
      Object.assign(document.querySelector(".body").style, {
        background: "url(" + reader.result + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      });
      localStorage.setItem("bground", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      alert("please choose a valid file");
    }
}


// clone tab
function cloneDiv() {   
    var oriDiv = document.getElementById("dropArea");
    var clnDiv = oriDiv.cloneNode(true);
    // console.log(clnDiv);
    
    var childDiv = document.body.appendChild(clnDiv);
    console.log(childDiv);
    childDiv.style.left = 10 + "px";
    childDiv.style.top = 10 + "px";
    
    }