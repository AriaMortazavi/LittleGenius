//Aria//
var index = 0;
//these are arrays for the changing questions
var silhouetteContent = [
    {
        questionNum: "Question 1",

        question_spot: "Which 2 silhouettes match?",

        q1_img1: "imgs/sil.q1.img1.png",
        q1_img2:"imgs/sil.q1.img2.png",
        q1_img3:"imgs/sil.q1.img3.png",

        a1_img1: "imgs/sil.a1.img1.png",
        a1_img2: "imgs/sil.a1.img2.png",
        a1_img3: "imgs/sil.a1.img3.png",   
        answer: 1,
    },

    {
        questionNum: "Question 2",

        question_spot: "This is where question 2 goes",

        q1_img1: "imgs/sil.q2.img1.png",
        q1_img2:"imgs/sil.q2.img2.png",
        q1_img3:"imgs/sil.q2.img3.png",

        a1_img1: "imgs/sil.a2.img1.png",
        a1_img2: "imgs/sil.a2.img2.png",
        a1_img3: "imgs/sil.a2.img3.png",   
        answer: 3,
    }
];

//function for when the page initially loads
function startSilhouette(){
    document.querySelector("#silhouette_questionNum").innerText = silhouetteContent[0].questionNum
    document.querySelector(".silhouette_question_spot").innerText = silhouetteContent[0].question_spot
    document.querySelector("#silhouette_q1_img1").style.backgroundImage = "url("+  silhouetteContent[0].q1_img1+")";
    document.querySelector("#silhouette_q1_img2").style.backgroundImage = "url("+ silhouetteContent[0].q1_img2+")";
    document.querySelector("#silhouette_q1_img3").style.backgroundImage = "url("+ silhouetteContent[0].q1_img3+")";
    document.querySelector("#silhouette_a1_img1").style.backgroundImage = "url("+  silhouetteContent[0].a1_img1+")";
    document.querySelector("#silhouette_a1_img2").style.backgroundImage = "url("+ silhouetteContent[0].a1_img2+")";
    document.querySelector("#silhouette_a1_img3").style.backgroundImage = "url("+  silhouetteContent[0].a1_img3+")";
}
startSilhouette();

function nextsilhouetteQuestion(number){
    if(number === silhouetteContent[index].answer){
    index ++;
    if (index >= silhouetteContent.length){
        document.querySelector("#main_completion").style.display = "flex",
        Confetti()
    }

    document.querySelector("#silhouette_questionNum").innerText = silhouetteContent[index].questionNum
    document.querySelector("#silhouette_q1_img1").style.backgroundImage = "url("+  silhouetteContent[index].q1_img1+")";
    document.querySelector("#silhouette_q1_img2").style.backgroundImage = "url("+ silhouetteContent[index].q1_img2+")";
    document.querySelector("#silhouette_q1_img3").style.backgroundImage = "url("+ silhouetteContent[index].q1_img3+")";
    document.querySelector("#silhouette_a1_img1").style.backgroundImage = "url("+  silhouetteContent[index].a1_img1+")";
    document.querySelector("#silhouette_a1_img2").style.backgroundImage = "url("+ silhouetteContent[index].a1_img2+")";
    document.querySelector("#silhouette_a1_img3").style.backgroundImage = "url("+  silhouetteContent[index].a1_img3+")";
}
}
function showPage3(){
    document.querySelector("#main_silhouette").style.display = "flex"
    }