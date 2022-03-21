// import images from 'imageList.js';

// console.log(images);
// draw()
// var ctx2 = document.getElementById("myCanvas").getContext('2d');
// console.log(ctx2);

// function scaleToFit(img){
//     // get the scale
//     var scale = Math.min(640 / img.width, 380 / img.height);
//     // get the top left position of the image
//     var x = (640 / 2) - (640 / 2) * scale;
//     var y = (380 / 2) - (380 / 2) * scale;
//     ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
// }

console.log(images);
// console.log('images/'+images[1]);
// var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();

// img1.src='images/image1.png';
img2.src='images/image2.png';
img3.src='images/image3.jpg';
img4.src='images/image4.jpg';
// function setup(){

// }

// window.onload= function(){
//     console.log("ok")
//     var ctx = document.getElementById("myCanvas").getContext('2d');
//     // console.log(ctx);
//     var img1 = new Image();
//     img1.onload = function(){
//     console.log("image loaded")
//     //     scaleToFit(img);
//     //     ctx.drawImage(img, 10, 10);
//     var scale = Math.min(640 / img1.width, 380 / img1.height);
//     console.log(img1.width);
//     console.log(img1.height);
//     console.log(scale);
//     // get the top left position of the image
//     var x = (640 / 2) - (img1.width / 2) * scale;
//     var y = (380 / 2) - (img1.height / 2) * scale;
//     ctx.fillStyle = "#ffffff";
//     ctx.fillRect(0, 0, 640, 380);
//     ctx.drawImage(img1, x, y, img1.width * scale, img1.height * scale);
//     // ctx.fillStyle = "#ffffff";
//     // ctx.fillRect(10, 10, 640, 380);
//     };
//     img1.src='images/image1.png';
// }

var showCanvas = null;
var showCanvasCtx = null;
var img = new Image();
var currentImage = 0;
var IMAGE_DELAY = 750; 


window.onload = function(){

    showCanvas = document.getElementById('myCanvas');
    showCanvasCtx = showCanvas.getContext('2d');



    slideShow();
    // setInterval(switchImage, IMAGE_DELAY);
}

var image_x = 640; //640/4=160
var count = 0;

function slideShow() {
   
    // console.log("2:"+IMAGE_DELAY);
    console.log("image_x:"+image_x)
    var scale = Math.min(640 / img.width, 380 / img.height);
    var x = (640 / 2) - (img.width / 2) * scale;
    var y = (380 / 2) - (img.height / 2) * scale;
    // console.log("x:"+ x);
    // console.log("y:"+ y);
    // update();
    showCanvasCtx.fillStyle = "rgba(255,255,255,0.6)";
    showCanvasCtx.fillRect(image_x-160, 0, 640, 380);
    // console.log("black");
    showCanvasCtx.drawImage(img, image_x, y, img.width * scale, img.height * scale);
    image_x =image_x-160;
    // if (image_x <= 0){
    //     console.log("full image")
    //     showCanvasCtx.fillStyle = "#ffffff";
    //     showCanvasCtx.fillRect(0, 0, 640, 380);
    //     image_x = x;
    //     showCanvasCtx.drawImage(img, image_x, y, img.width * scale, img.height * scale);
    // }

    // console.log("image_x:"+image_x);
    console.log(count);
    if (count==4){
        console.log("full image")
        showCanvasCtx.fillStyle = "#ffffff";
        showCanvasCtx.fillRect(0, 0, 640, 380);
        image_x = x;
        showCanvasCtx.drawImage(img, image_x, y, img.width * scale, img.height * scale);
        count = 0;
        currentImage++;
        console.log("change image")
        if (currentImage >= images.length){
            currentImage=0;
        }
    }
    count++;
    if(image_x == x){
        image_x = 640;
        // console.log("return to x=426")
    }
    // console.log("image");
    // ctx.fillStyle = "#ffffff";
    // ctx.fillRect(10, 10, 640, 380);
    // requestAnimationFrame(switchImage);
    img.setAttribute('src','images/'+images[currentImage]);

}


var timeInterval = setInterval(slideShow, IMAGE_DELAY);

function stop(){
    console.log("stop");
    clearInterval(timeInterval);
    // IMAGE_DELAY = 100000000;
    // console.log(IMAGE_DELAY);
}

function resume(){
    console.log("resume");
    timeInterval = setInterval(slideShow, IMAGE_DELAY);
}

function switchImage(){
    // scale = Math.min(640 / img.width, 380 / img.height);
    // x = (640 / 2) - (img.width / 2) * scale;
    count=4;
    image_x = 0 ;
    // currentImage++;
    console.log("currentImage2:"+currentImage);
    console.log("image_x2:"+image_x);
    slideShow()
}
