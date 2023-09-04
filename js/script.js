let mainImage = document.getElementById("myPic");
let coderDiv = document.getElementById("coderDiv");
let designerDiv = document.getElementById("designerDiv");
let coderImage = document.getElementById("codepic");
let designerImage = document.getElementById("designerpic");
let imageDiv = document.getElementById("imageDiv");
// titles
let coderTitle = document.getElementById("coderTitle");
let designerTitle = document.getElementById("designerTitle");
// spans
let coderSpan = document.getElementById("coderSpan");
let designerSpan = document.getElementById("designerSpan");

coderDiv.addEventListener("mouseover",changeCoderImage)
coderDiv.addEventListener("mouseleave",changeImageDefault)
designerDiv.addEventListener("mouseover",changeDesignerImage)
designerDiv.addEventListener("mouseleave",changeImageDefault)


function changeImageDefault(){
    designerImage.style.opacity = 0;
    coderImage.style.opacity = 0;
    designerSpan.style.opacity = 0;
    coderSpan.style.opacity = 0;
    coderDiv.style.opacity = 100;
    designerTitle.style.opacity = 100;
    mainImage.style.opacity = 100;
    imageDiv.style.transform = "translateX(0%)";
}

function changeCoderImage(){
    mainImage.style.opacity = 0;
    designerImage.style.opacity = 0;
    designerSpan.style.opacity = 0;
    designerTitle.style.opacity = 0;
    coderDiv.style.opacity = 100;
    coderSpan.style.opacity = 100;
    coderImage.style.opacity = 100;

    imageDiv.style.transform = "translateX(-20%)";
    
}

function changeDesignerImage(){
    mainImage.style.opacity = 0;
    coderImage.style.opacity = 0;
    coderDiv.style.opacity = 0;
    coderSpan.style.opacity = 0;

    designerTitle.style.opacity = 100;
    designerSpan.style.opacity = 100;
    designerImage.style.opacity = 100;
    imageDiv.style.transform = "translateX(20%)";
}


// animate progress bar
let skillsSection = document.querySelector("#skillsSection");
let allSpans = document.querySelectorAll(".skillprogress span");



function progressbar(){
    console.log("scrolling");

    if(window.scrollY >= skillsSection.offsetTop || window.scrollY >= 800){
        console.log("section :"+skillsSection.offsetTop);
        console.log("Scroll Y :"+window.scrollY);
        allSpans.forEach(span => {
            span.style.width = span.dataset.width;
        });
        }
}
let frontWorks = document.querySelectorAll('[work-group="frontWork"]');
let graphicWorks = document.querySelectorAll('[work-group="graphicWork"]');



let allWorksCheck = document.getElementById("allwork");
    let FrontWorksCheck = document.getElementById("FrontWorks");
    let GraphicWorksCheck = document.getElementById("GraphicWork");
function chooseWork(){
if (allWorksCheck.checked== true){
    frontWorks.forEach(frontwork => {
        frontwork.classList.remove("hiddenDiv");
    });

    graphicWorks.forEach(graphicwork => {
        graphicwork.classList.remove("hiddenDiv");
    });
}

if (FrontWorksCheck.checked== true){
    frontWorks.forEach(frontwork => {
        frontwork.classList.remove("hiddenDiv");
    });

    graphicWorks.forEach(graphicwork => {
        graphicwork.classList.add("hiddenDiv");
    });
}

if (GraphicWorksCheck.checked== true){
    frontWorks.forEach(frontwork => {
        frontwork.classList.add("hiddenDiv");
    });

    graphicWorks.forEach(graphicwork => {
        graphicwork.classList.remove("hiddenDiv");
    });
}
}

let root = document.documentElement;
let lightSwitch = document.getElementById("DarkLight");
let darkButton = document.getElementById("darkButton");
let darkDiv = document.getElementById("DarkSwitch");
let logo =  document.getElementsByClassName('logo');
// function RunTogether(){
//     if (lightSwitch.checked==true){
//         darkButton.checked=true;
//     }
//     else if(lightSwitch.checked==false)
//     darkButton.checked=false;
//     // else if(darkButton.checked==true)
//     // lightSwitch.checked=true;
 
//     // else if(darkButton.checked==false)
//     // lightSwitch.checked=false;

    
// }

function darkMode() {
    if (lightSwitch.checked){
    for(let i=0 ;i<logo.length;i++ ){
        logo[i].style.filter="invert(100%)";
    };
    root.style.setProperty('--mymaincolor', "#10cab7");
    root.style.setProperty('--navBarBG', "#1e1e1e");
    root.style.setProperty('--section-background', "#F6f6f6");
    root.style.setProperty('--hoverBG', "#fafafa");
    root.style.setProperty('--paragraph-color', "#fff");
    root.style.setProperty('--navBarBG', "#1e1e1e");
    root.style.setProperty('--secondBG', "#1a1a1a");
    root.style.setProperty('--mainHover', "#f8f8f8");
    root.style.setProperty('--TitleColor', "#fff");
    root.style.setProperty('--perctColor', "#000");
    root.style.setProperty('--mainTitle', "#fff");
    root.style.setProperty('--secondcolor', "#2c4755");
    root.style.setProperty('--thirdBG', "#2c4755");
    root.style.setProperty('--navBarFont', "#fff");
    root.style.setProperty('--mainFontColor', "#fff");
    root.style.setProperty('--navBarBG', "#1e1e1e");
    root.style.setProperty('--paragraph-color', "#fff");
    root.style.setProperty('--perctBgColor', "#fff");
    root.style.setProperty('--IconColor', "#fff");
    root.style.setProperty('--cardTitleBorderColor', "#fff");
    root.style.setProperty('--cardTitleColor', "#fff");
    root.style.setProperty('--subtitleColor', "#86e4db");
    root.style.setProperty('--secondcolor', "white");
    }
else{
    
    for(let i=0 ;i<logo.length;i++ ){
        logo[i].style.filter="invert(0%)";
    };
    root.style.removeProperty('--mymaincolor');
    root.style.removeProperty('--navBarBG');
    root.style.removeProperty('--section-background');
    root.style.removeProperty('--hoverBG');
    root.style.removeProperty('--paragraph-color');
    root.style.removeProperty('--navBarBG');
    root.style.removeProperty('--secondBG');
    root.style.removeProperty('--mainHover');
    root.style.removeProperty('--TitleColor');
    root.style.removeProperty('--perctColor');
    root.style.removeProperty('--mainTitle');
    root.style.removeProperty('--secondcolor');
    root.style.removeProperty('--thirdBG');
    root.style.removeProperty('--navBarFont');
    root.style.removeProperty('--mainFontColor');
    root.style.removeProperty('--navBarBG');
    root.style.removeProperty('--paragraph-color');
    root.style.removeProperty('--perctBgColor');
    root.style.removeProperty('--IconColor');
    root.style.removeProperty('--cardTitleBorderColor');
    root.style.removeProperty('--cardTitleColor');
    root.style.removeProperty('--subtitleColor');
    root.style.removeProperty('--secondcolor');
}

}

function showDarkButton(){
    if( window.scrollY >= 270){
        darkDiv.classList.add("darkButton");
        darkDiv.classList.remove("DarkSwitch");
    }
    else{
        darkDiv.classList.remove("darkButton");
        darkDiv.classList.add("DarkSwitch");
    }
}
window.onscroll = function(){
    showDarkButton();
    progressbar();
} 
window.onload = function(){
    showDarkButton();
    progressbar();
}

