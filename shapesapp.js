//Aria//
var index = 0;
//these are arrays for the changing questions
var shapesContent = [
    {
        questionNum: "Question 1",

        question_spot: "This is where question 1 goes",

        q1_img1: "put a link to the image example 1 here",
        q1_img2:"put a link to the image example 2 here",
        q1_img3:"put a link to the image example 3 here",

        a1_img1: "Put a link to the answer image 1 here",
        a1_img2: "Put a link to the answer image 2 here",
        a1_img3: "Put a link to the answer image 3 here",   
        answer: 3,
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
        answer: 1,
    }
];

//function for when the page initially loads
function start(){

    document.querySelector("#questionNum").innerText = shapesContent[0].questionNum
    document.querySelector(".question_spot").innerText = shapesContent[0].question_spot
    document.querySelector("#q1_img1").innerText = shapesContent[0].q1_img1
    document.querySelector("#q1_img2").innerText = shapesContent[0].q1_img2
    document.querySelector("#q1_img3").innerText = shapesContent[0].q1_img3
    document.querySelector("#a1_img1").innerText = shapesContent[0].a1_img1
    document.querySelector("#a1_img2").innerText = shapesContent[0].a1_img2
    document.querySelector("#a1_img3").innerText = shapesContent[0].a1_img3
}
start();

function nextshapeQuestion(number){
    if(number === shapesContent[index].answer){
    index ++;
    if (index >= shapesContent.length){
        window.location.href = "completion.html";
    }

    document.querySelector("#questionNum").innerText = shapesContent[index].questionNum
    document.querySelector(".question_spot").innerText = shapesContent[index].question_spot
    document.querySelector("#q1_img1").innerText = shapesContent[index].q1_img1
    document.querySelector("#q1_img2").innerText = shapesContent[index].q1_img2
    document.querySelector("#q1_img3").innerText = shapesContent[index].q1_img3
    document.querySelector("#a1_img1").innerText = shapesContent[index].a1_img1
    document.querySelector("#a1_img2").innerText = shapesContent[index].a1_img2
    document.querySelector("#a1_img3").innerText = shapesContent[index].a1_img3
}
}