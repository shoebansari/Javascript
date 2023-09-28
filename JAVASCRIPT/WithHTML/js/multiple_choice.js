let questions = [
    { que: 'What is the Capital of India?', a: 'Delhi', b: 'Mumbai', c: 'Lucknow', d: 'Chennai', correct: 'a' }, 
    { que: 'Where is the Bollywood?', a: 'Delhi', b: 'Mumbai', c: 'Lucknow', d: 'Chennai', correct: 'b' },
    { que: 'Who is the President of America?', a: 'Obama', b: 'Kendy', c: 'Biden', d: 'Macron', correct: 'c' },
    { que: 'Who is the President of India?', a: 'Pratibha Patil', b: 'APJ Kalam', c: 'Hamid Ansaro', d: 'Murmur', correct: 'd' }
    ]

let que = document.getElementById('que')
let option1 = document.getElementById('option2')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')

let optionInputs = document.querySelectorAll('.options')

let index = 0
const loadData=()=>{
    console.log('question[0].que', optionInputs);
    que.innerText = questions[index].que;
    optionInputs[0].nextElementSibling.innerHTML =  questions[index].a;
    optionInputs[1].nextElementSibling.innerHTML =  questions[index].b;
    optionInputs[2].nextElementSibling.innerHTML =  questions[index].c;
    optionInputs[3].nextElementSibling.innerHTML =  questions[index].d;
    index++;
}

loadData();


const onSubmit = ()=>{
    console.log(optionInputs)
    optionInputs.forEach((input)=>{
        if(input.checked){
            console.log('Yes')
        }
        else{
            console.log('NO')
        }
    })
}