//Aria//
var index = 0;
//these are arrays for the changing questions
var colorsContent = [
    {
        questionNum: "Question 1",

        question_spot: "Based on the top 3 images, which of the bottom 3 colour combinations are correct?",
        
        q1_img1:"imgs/ex1.png",
        q1_img2:"imgs/ex2.png",
        q1_img3:"imgs/ex3.png",

        a1_img1: "imgs/a1.png",
        a1_img2: "imgs/a2.png",
        a1_img3: "imgs/a3.png",   
        answer: 1,
    },

    {
        questionNum: "Question 2",

        question_spot: "Which shape has a rectangle with the same color?",

        q1_img1:"imgs/color.q2.img1.png",
        q1_img2:"imgs/color.q2.img2.png",
        q1_img3:"imgs/color.q2.img3.png",

        a1_img1: "imgs/color.a2.img1.png",
        a1_img2: "imgs/color.a2.img2.png",
        a1_img3: "imgs/color.a2.img3.png",  
        answer: 3,
    }
];

//function for when the page initially loads
function startColor(){
    document.querySelector("#colors_questionNum").innerText = colorsContent[0].questionNum
    document.querySelector(".colors_question_spot").innerText = colorsContent[0].question_spot;
    document.querySelector("#colors_q1_img1").style.backgroundImage = "url("+  colorsContent[0].q1_img1+ ")";
    document.querySelector("#colors_q1_img2").style.backgroundImage = "url("+  colorsContent[0].q1_img2+ ")";
    document.querySelector("#colors_q1_img3").style.backgroundImage = "url("+  colorsContent[0].q1_img3+")";
    document.querySelector("#colors_a1_img1").style.backgroundImage = "url("+  colorsContent[0].a1_img1+")";
    document.querySelector("#colors_a1_img2").style.backgroundImage = "url("+  colorsContent[0].a1_img2+")";
    document.querySelector("#colors_a1_img3").style.backgroundImage = "url("+  colorsContent[0].a1_img3+")";
}
startColor();

function nextColorQuestion(number){
    if(number === colorsContent[index].answer){
    index ++;
    if (index >= colorsContent.length){
        document.querySelector("#main_completion").style.display = "flex",
        Confetti()
    }
    document.querySelector("#colors_questionNum").innerText = colorsContent[index].questionNum
    document.querySelector(".colors_question_spot").innerText = colorsContent[index].question_spot
    document.querySelector("#colors_q1_img1").style.backgroundImage = "url("+  colorsContent[index].q1_img1+ ")";
    document.querySelector("#colors_q1_img2").style.backgroundImage = "url("+  colorsContent[index].q1_img2+ ")";
    document.querySelector("#colors_q1_img3").style.backgroundImage = "url("+  colorsContent[index].q1_img3+")";
    document.querySelector("#colors_a1_img1").style.backgroundImage = "url("+  colorsContent[index].a1_img1+")";
    document.querySelector("#colors_a1_img2").style.backgroundImage = "url("+  colorsContent[index].a1_img2+")";
    document.querySelector("#colors_a1_img3").style.backgroundImage = "url("+  colorsContent[index].a1_img3+")";
    }
}
function showPage1(){
document.querySelector("#main_colors").style.display = "flex"
}
