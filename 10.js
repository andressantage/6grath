var a1=document.getElementById("a1");a1.addEventListener("click", f1);function f1(){var x="əˈbɒmɪnəbl̩";if(a1.innerHTML==="_______"){a1.innerHTML=x;}else{a1.innerHTML="_______";}}
var a2=document.getElementById("a2");a2.addEventListener("click", f2);function f2(){var x="ˈbəmb(ə)liNG";if(a2.innerHTML==="_______"){a2.innerHTML=x;}else{a2.innerHTML="_______";}}
var a3=document.getElementById("a3");a3.addEventListener("click", f3);function f3(){var x="ˈkɒnsɪkwəns";if(a3.innerHTML==="_______"){a3.innerHTML=x;}else{a3.innerHTML="_______";}}
var a4=document.getElementById("a4");a4.addEventListener("click", f4);function f4(){var x="dɪˈluːd";if(a4.innerHTML==="_______"){a4.innerHTML=x;}else{a4.innerHTML="_______";}}
var a5=document.getElementById("a5");a5.addEventListener("click", f5);function f5(){var x="dəʊl";if(a5.innerHTML==="_______"){a5.innerHTML=x;}else{a5.innerHTML="_______";}}
var a6=document.getElementById("a6");a6.addEventListener("click", f6);function f6(){var x="ɪnˈɡʌlf";if(a6.innerHTML==="_______"){a6.innerHTML=x;}else{a6.innerHTML="_______";}}
var a7=document.getElementById("a7");a7.addEventListener("click", f7);function f7(){var x="foɪl";if(a7.innerHTML==="_______"){a7.innerHTML=x;}else{a7.innerHTML="_______";}}
var a8=document.getElementById("a8");a8.addEventListener("click", f8);function f8(){var x="ˈfɔːmjʊleɪt";if(a8.innerHTML==="_______"){a8.innerHTML=x;}else{a8.innerHTML="_______";}}
var a9=document.getElementById("a9");a9.addEventListener("click", f9);function f9(){var x="ɪˈnɪʃətɪv; ɪˈnɪʃɪətɪv";if(a9.innerHTML==="_______"){a9.innerHTML=x;}else{a9.innerHTML="_______";}}
var a10=document.getElementById("a10");a10.addEventListener("click", f10);function f10(){var x="mɪˈmentəʊ";if(a10.innerHTML==="_______"){a10.innerHTML=x;}else{a10.innerHTML="_______";}}
var a11=document.getElementById("a11");a11.addEventListener("click", f11);function f11(){var x="ˌnɒnkənˈfɔːmɪst";if(a11.innerHTML==="_______"){a11.innerHTML=x;}else{a11.innerHTML="_______";}}
var a12=document.getElementById("a12");a12.addEventListener("click", f12);function f12(){var x="nəl and void";if(a12.innerHTML==="_______"){a12.innerHTML=x;}else{a12.innerHTML="_______";}}
var a13=document.getElementById("a13");a13.addEventListener("click", f13);function f13(){var x="ˌpænəˈrɑːmə";if(a13.innerHTML==="_______"){a13.innerHTML=x;}else{a13.innerHTML="_______";}}
var a14=document.getElementById("a14");a14.addEventListener("click", f14);function f14(){var x="pɒˈsterɪti";if(a14.innerHTML==="_______"){a14.innerHTML=x;}else{a14.innerHTML="_______";}}
var a15=document.getElementById("a15");a15.addEventListener("click", f15);function f15(){var x="praɪ";if(a15.innerHTML==="_______"){a15.innerHTML=x;}else{a15.innerHTML="_______";}}
var a16=document.getElementById("a16");a16.addEventListener("click", f16);function f16(){var x="ˌriːˈfɜːbɪʃ";if(a16.innerHTML==="_______"){a16.innerHTML=x;}else{a16.innerHTML="_______";}}
var a17=document.getElementById("a17");a17.addEventListener("click", f17);function f17(){var x="rɪˈzɔːsfəl; /-s/-";if(a17.innerHTML==="_______"){a17.innerHTML=x;}else{a17.innerHTML="_______";}}
var a18=document.getElementById("a18");a18.addEventListener("click", f18);function f18(){var x="ˈrɪɡərəs";if(a18.innerHTML==="_______"){a18.innerHTML=x;}else{a18.innerHTML="_______";}}
var a19=document.getElementById("a19");a19.addEventListener("click", f19);function f19(){var x="ˈsʌbsɪkwənt";if(a19.innerHTML==="_______"){a19.innerHTML=x;}else{a19.innerHTML="_______";}}
var a20=document.getElementById("a20");a20.addEventListener("click", f20);function f20(){var x="ʌnˈɜrɪŋ";if(a20.innerHTML==="_______"){a20.innerHTML=x;}else{a20.innerHTML="_______";}}


const recordButton = document.getElementById("recordButton");
const stopButton = document.getElementById("stopButton");
const playButton = document.getElementById("playButton");
const audio = document.getElementById("audio");

let mediaRecorder;
let chunks = [];

recordButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.addEventListener('dataavailable', event => {
        chunks.push(event.data);
      });

      mediaRecorder.addEventListener('stop', () => {
        const audioBlob = new Blob(chunks);
        const audioUrl = URL.createObjectURL(audioBlob);

        audio.src = audioUrl;
        chunks = [];
      });

      mediaRecorder.start();

      recordButton.disabled = true;
      stopButton.disabled = false;
      playButton.disabled = true;
    })
});

stopButton.addEventListener('click', () => {
  mediaRecorder.stop();

  recordButton.disabled = false;
  stopButton.disabled = true;
  playButton.disabled = false;
});

playButton.addEventListener('click', () => {
  audio.play();
});
