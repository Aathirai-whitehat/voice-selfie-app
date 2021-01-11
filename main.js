var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();  

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
        speak();
        takingselfie();
    }
}

function speak(){
    var speech=window.speechSynthesis
    var speakdata="taking your selfie in 5 seconds";
    var saythis=new SpeechSynthesisUtterance(speakdata);
    speech.speak(saythis);
    Webcam.attach(camera);
    setTimeout(function(){
        takingselfie();
        save();
    },5000);
}

Webcam.set({
    width:300,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});
camera=document.getElementById("camera")

function takingselfie(){
    Webcam.snap(function(selfie){
      document.getElementById("result").innerHTML= '<img id="selfie_result" src="'+selfie+'">';
    })
}

function save(){
    anchor=document.getElementById("link");
    image=document.getElementById("selfie_result").src;
    anchor.href=image;
    anchor.click();
}

