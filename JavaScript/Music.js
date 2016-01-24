// JavaScript Document
var x = 0
Music = new Array()
<!-- [Step1]: 这里可以按序增加播放的Midi音乐 -->
Music[1] = "   Music01.mid"
Music[2] = "   Music02.mid"
Music[3] = "   Music03.mid"


function MidiMusicList(){
<!-- [Step2]: 在此能够设置文本框的缺省文本 -->
document.MidiMusic.typein.value=" 请按键选择 Midi 格式的音乐 "
}

function PlayMusic(){
<!-- [Step3]: 这里可以更改Midi音乐所在的绝对位置 -->
if (x != 0){location.href='Music0'+x+'.mid'}
}

function FirstMusic(){
x=1;document.MidiMusic.typein.value=Music [x]
}

function EndMusic(){
x=Music.length-1;document.MidiMusic.typein.value=Music [x]
}

function PrevoiusMusic(){
if (x>1){ x--;document.MidiMusic.typein.value=Music [x];}
}

function NextMusic(){
var max= Music.length-1
if (x<max){ x++;document.MidiMusic.typein.value=Music [x];}
}