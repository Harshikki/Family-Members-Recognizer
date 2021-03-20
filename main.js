Webcam.set({
    width: 350,
    height: 350,
    image_format: 'jpg',
    jpg_quality: 90
});
   
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/model.json',modelLoaded)

function modelLoaded(){
    console.log("Model Loaded");
}