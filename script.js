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
document.addEventListener('DOMContentLoaded', function () {

    var handler = function () {
        // Searching for all boxes with class .top
        nodes = document.querySelectorAll('.top');
        nodes.forEach(function (node) {
            // removing the class .top from each node
            node.classList.remove('top');
        })
        console.log(this)
        this.classList.add('top');
    }
    boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        console.log('box', box)
        box.addEventListener('click', handler)
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

    //make dragable
    var dragBox = document.querySelector("#box");
    var dragToMain = document.querySelector("#mainBox");


});