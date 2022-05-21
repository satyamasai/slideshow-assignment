
let i=0;
let id;
slideshow();

function slideshow(){
    console.log("checked");
    let slideshow=document.querySelector("#slideshow");
var movies=[
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/475/1250475-h-d2dd77afa6ce",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3731/1123731-h-0cbfcdf4d0f0",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4515/1074515-h-e3467da993bd",
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5210/1165210-h-a72a0a95461e",
    "https://qqcdnpictest.mxplay.com/pic/e86bfb325e4f1f6fd506d7b6c4f3bb11/en/40x13/1600x520/test_pic1650348292269.webp",
    "https://qqcdnpictest.mxplay.com/pic/6bf72fab8964bfbccba21baf536e9ac1/en/40x13/1600x520/test_pic1652848884954.webp"
]
let image=document.createElement("img")
image.src=movies[0]
slideshow.append(image)
i=1
id=setInterval(function(){
if(i==movies.length){
    i=0
}
slideshow.innerHTML=null
//console.log(i)
let image=document.createElement("img")
image.src=movies[i]
// console.log(movies[i]);
i++

slideshow.append(image)

},3000)


}