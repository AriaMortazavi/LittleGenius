//Aria//
var index = 0;
//these are arrays for the changing questions
var colorsContent = [
    {
        questionNum: "Question 1",

        question_spot: "This is where question 1 goes",
        
        q1_img1: "put a link to the image example 1 here",
        q1_img2:"put a link to the image example 2 here",
        q1_img3:"put a link to the image example 3 here",

        a1_img1: "Put a link to the answer image 1 here",
        a1_img2: "Put a link to the answer image 2 here",
        a1_img3: "Put a link to the answer image 3 here",   
        answer: 1,
    },

    {
        questionNum: "Question 2",

        question_spot: "This is where question 2 goes",

        q1_img1: "put a link to the image example 1 here",
        q1_img2:"put a link to the image example 2 here",
        q1_img3:"put a link to the image example 3 here",

        a1_img1: "Put a link to the answer image 1 here",
        a1_img2: "Put a link to the answer image 2 here",
        a1_img3: "Put a link to the answer image 3 here",   
        answer: 3,
    }
];

//function for when the page initially loads
function startColor(){
    // document.querySelector(".head").className="head" + paintings[0].pos
    document.querySelector("#colors_questionNum").innerText = colorsContent[0].questionNum
    document.querySelector(".colors_question_spot").innerText = colorsContent[0].question_spot
    document.querySelector("#colors_q1_img1").innerText = colorsContent[0].q1_img1
    document.querySelector("#colors_q1_img2").innerText = colorsContent[0].q1_img2
    document.querySelector("#colors_q1_img3").innerText = colorsContent[0].q1_img3
    document.querySelector("#colors_a1_img1").innerText = colorsContent[0].a1_img1
    document.querySelector("#colors_a1_img2").innerText = colorsContent[0].a1_img2
    document.querySelector("#colors_a1_img3").innerText = colorsContent[0].a1_img3
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
    document.querySelector("#colors_q1_img1").innerText = colorsContent[index].q1_img1
    document.querySelector("#colors_q1_img2").innerText = colorsContent[index].q1_img2
    document.querySelector("#colors_q1_img3").innerText = colorsContent[index].q1_img3
    document.querySelector("#colors_a1_img1").innerText = colorsContent[index].a1_img1
    document.querySelector("#colors_a1_img2").innerText = colorsContent[index].a1_img2
    document.querySelector("#colors_a1_img3").innerText = colorsContent[index].a1_img3
    }
}
function showPage1(){
document.querySelector("#main_colors").style.display = "flex"
}
