Webcam.set({
width:270,
height:300,
image_format:'png',
png_quality:90
} 
);
Webcam.attach("#camera");

function snapshot(){

Webcam.snap(function(data_uri){

document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">"

});
}

console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('MobileNet',modelloaded);

function modelloaded(){
    console.log('model loaded');
}
function check(){
    image= document.getElementById('captured_image');
    classifier.classify(image,gotresult)
}
 function gotresult(error,result){
     
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("obj_name").innerHTML= result[0].label;
    }
    
 }