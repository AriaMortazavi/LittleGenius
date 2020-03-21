//Aria//
var index = 0;
//these are arrays for the changing questions
var shapesContent = [
    {
        questionNum: "Question 1",

        question_spot: "This is where question 1 goes",

        q1_img1:"imgs/shape.q1.img1.png",
        q1_img2:"imgs/shape.q1.img2.png",
        q1_img3:"imgs/shape.q1.img3.png",

        a1_img1: "imgs/shape.a1.img1.png",
        a1_img2: "imgs/shape.a1.img2.png",
        a1_img3: "imgs/shape.a1.img3.png",   
        answer: 3,
    },

    {
        questionNum: "Question 2",

        question_spot: "This is where question 2 goes",

        q1_img1: "imgs/shape.q2.img1.png",
        q1_img2:"imgs/shape.q2.img2.png",
        q1_img3:"imgs/shape.q2.img3.png",

        a1_img1: "imgs/shape.a2.img1.png",
        a1_img2: "imgs/shape.a2.img2.png",
        a1_img3: "imgs/shape.a2.img3.png",   
        answer: 1,
    }
];

//function for when the page initially loads
function start(){

    document.querySelector("#shapes_questionNum").innerText = shapesContent[0].questionNum
    document.querySelector(".shapes_question_spot").innerText = shapesContent[0].question_spot
    document.querySelector("#shapes_q1_img1").style.backgroundImage = "url ("+ shapesContent[0].q1_img1+ ")";
    document.querySelector("#shapes_q1_img2").style.backgroundImage = "url ("+ shapesContent[0].q1_img2+ ")";
    document.querySelector("#shapes_q1_img3").style.backgroundImage = "url ("+ shapesContent[0].q1_img3+ ")";

    document.querySelector("#shapes_a1_img1").style.backgroundImage= 'url ('+ shapesContent[0].a1_img1 + ')';
    document.querySelector("#shapes_a1_img2").style.backgroundImage= "url ("+  shapesContent[0].a1_img2+ ")";
    document.querySelector("#shapes_a1_img3").style.backgroundImage= "url ("+  shapesContent[0].a1_img3+ ")";
}
start();
function nextshapeQuestion(number){
    if(number === shapesContent[index].answer){
    index ++;
    if (index >= shapesContent.length){
        document.querySelector("#main_completion").style.display = "flex",
        Confetti()
    }
    document.querySelector("#shapes_questionNum").innerText = shapesContent[index].questionNum
    document.querySelector(".shapes_question_spot").innerText = shapesContent[index].question_spot
    document.querySelector("#shapes_q1_img1").style.backgroundImage = "url ("+shapesContent[index].q1_img1 + ")";
    document.querySelector("#shapes_q1_img2").style.backgroundImage= "url ("+ shapesContent[index].q1_img2+ ")";
    document.querySelector("#shapes_q1_img3").style.backgroundImage= "url ("+ shapesContent[index].q1_img3+ ")";

    document.querySelector("#shapes_a1_img1").style.backgroundImage= "url ("+ shapesContent[index].a1_img1+ ")";
    document.querySelector("#shapes_a1_img2").style.backgroundImage = "url ("+ shapesContent[index].a1_img2+ ")";
    document.querySelector("#shapes_a1_img3").style.backgroundImage = "url ("+shapesContent[index].a1_img3+ ")";

}
}
function showPage2(){
    document.querySelector("#main_shapes").style.display = "flex"
    }