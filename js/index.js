titleMove();
// introMove();
makeTypoAnimation();
progressAnimation();
makeMove('move-right','0.7s',true)
makeMove('move-top','0.6s',false);
makeMove('ss-move','1s',false);
makeMove('interest-one','3s',true);
makeMove('ab-move-right','0.5s',true);
modalDS();
slideMake();

function titleMove(){
    const moonOne = document.querySelector('.moon-js')
    const cloudOne = document.querySelector('.cloud-js1')
    const cloudTwo = document.querySelector('.cloud-js2')

    // window.addEventListener('load',()=>{
    //     window.setTimeout(function(){
    //         moonOne.classList.add('moon-move');
    //     }, 2000);
    // });
    window.onload = function(){
        window.setTimeout(function(){
                moonOne.classList.add('moon-move');
                cloudOne.classList.add('cloud1-move');
                cloudTwo.classList.add('cloud2-move');

            }, 2000);
    }
}

// ================================================
// function introMove(){
//     const introText = document.querySelector('.intro-text');
//     const intro = document.getElementsByClassName('introduce-text');

//     for(let i=0; i<intro.length; i++){
//         intro[i].style.transitionDelay = `${i*0.2}s` 
//         // 0번째 intro에는 딜레이 없음 1번 0.2s 2번 0.4s
//         window.addEventListener('scroll',()=>{
//             // console.log(introText.getBoundingClientRect().top - window.innerHeight);
//             if(introText.getBoundingClientRect().top - window.innerHeight < 0){
//                 intro[i].classList.add('show');
//             }else{
//                 intro[i].classList.remove('show') ; 
//             }
//         })
//     }
// }


// =================================================================
function makeTypoAnimation(){

    let typoInterval;
    let typeCheck = true;
    const textcontent = "Hello \n I’m Dasom";
    const text = document.querySelector('.typing');
    
    function textTyping(){
        typeCheck = false;

        let i = 0;
        
        function typing(){
            let txt = textcontent[i++]; //한글자씩 더해줌
            // text.innerHTML += txt === "\n" ? "<br/>": txt; //변수 = 조건식 ? 값1 : 값2;
            //조건식을 판단하여 조건식이 참이면 값1, 조건식이 거짓이면 값2를 변수에 대입
            if(txt === "\n"){
                text.innerHTML += "<br/>";
            }else{
                text.innerHTML += txt;
            }

            if(i === textcontent.length){
                // text.textContent = "";
                // i = 0; //전체 콘텐츠 길이보다 i가 크면 콘텐츠 비우고 0으로
                clearInterval(typoInterval);
            }
        }
        typoInterval = setInterval(typing,100)
    }
    
    // textTyping();
    
    function typo(){
        const introText = document.querySelector('.intro-text');
        
        window.addEventListener('scroll',()=>{
            // console.log(introText.getBoundingClientRect().top - window.innerHeight);
            if(introText.getBoundingClientRect().top - window.innerHeight < 0){
                // intro[i].classList.add('show');
                // textTyping();
                if(typeCheck){
                    textTyping();
                }
            }else{
                clearInterval(typoInterval);
                typeCheck = true;
                text.textContent = "";
            }
        })
        
    }

    typo();
}


// ================================================
function progressAnimation(){
    const tools = document.querySelector('.tools');
    const bar = document.getElementsByClassName('bar')
    
     for(let i = 0; i<bar.length; i++){
        // window.addEventListener('load',()=>{
        //     bar[i].style.animationPlayState = 'paused';
        // });

        window.addEventListener('scroll',()=>{
            console.log(tools.getBoundingClientRect().top );

            if(bar[i].getBoundingClientRect().top - window.innerHeight< 0){
                bar[i].classList.add('play-animation');
            }else {
                bar[i].classList.remove('play-animation');

            }
        });

    }
}

// 다시 실행하는 법 play-animation이라는 클래스를 따로 만들어서
// 애니메이션 네임 넣어줌s


// =====================================================
function makeMove(className,time,delayCheck){
    const nameCon = document.getElementsByClassName(className);

    for(let i=0; i<nameCon.length; i++){
        window.addEventListener('scroll',()=>{
            if(nameCon[i].getBoundingClientRect().top - window.innerHeight < 0){
                nameCon[i].classList.add('show');
                nameCon[i].style.transitionDuration = time;
                if(delayCheck){
                    nameCon[i].style.transitionDelay = `${i*0.2}s`;
                }
            }else{
                nameCon[i].classList.remove('show');
                nameCon[i].style.transitionDuration = time;
                nameCon[i].style.transitionDelay = `0s`;
            }
        })
    }
}

// =======================================================



// ====================================================모달창
// open-lush누르면 모달이 뜨는데 처음엔 사진의 맨위부터 뜨다가
// close 버튼 누르고 다시 누르면  사진의 맨 밑부터 떠용ㅠㅠ
// 그리고 모달창 끄면 웹사이트가 맨 위 섹션부터 다시 시작해요

function modalDS(){
    const modal = document.getElementsByClassName('modal');
    const openLush = document.getElementsByClassName('open-lush')
    const openPaws = document.getElementsByClassName('open-paws')
    const closeLush = document.querySelector('.lush-but')
    const closePaws = document.querySelector('.paws-but')

    // console.log(window.scrollY)
    // if (window.scrollY) {
    //     window.scroll(0, 0);
    //   }

    const openModalLush = (e)=> {
        console.log(e);
        e.preventDefault();
        //기획서 여는 버튼이 a 태그라서 기존페이지가 맨위로 올라가는거라서 디폴트값 없애줌
        modal[0].classList.remove('modal-hidden');
        modal[0].scroll(0, 0);
        // =============모달 끄고 다시켰을때 맨 위부터 나오게
    }
    
    const closeModalLush = ()=> {
        modal[0].classList.add('modal-hidden');
    }

    // https://kuzuro.blogspot.com/2018/12/js.html
    // https://www.codeit.kr/community/threads/31861

    const openModalPaws = (e)=> {
        e.preventDefault();
        modal[1].classList.remove('modal-hidden');
        modal[1].scroll(0, 0);
    }
    
    const closeModalPaws = ()=> {
        modal[1].classList.add('modal-hidden');
    }
    
    window.addEventListener('click',(e)=>{
        console.log(e);

        const nowTarget = e.target;
        if(nowTarget.classList.contains('modal')){
            nowTarget.classList.add('modal-hidden');
        }
    }) //모달창 외의 백그라운드 눌렀을때 꺼지도록
    // target은 이벤트가 발생한 바로 그 요소를 직접 가리키고 
    // currentTarget은 이벤트 리스너(EventListener)를 가진 요소를 가리킴


    for(var i = 0; i < openLush.length; i++){
        openLush[i].addEventListener("click",openModalLush);
    }
    closeLush.addEventListener("click",closeModalLush);
    
    for(var i = 0; i < openPaws.length; i++){
        openPaws[i].addEventListener("click",openModalPaws);
    }
    closePaws.addEventListener("click",closeModalPaws);

}

// =======================================

function slideMake(){
    const arrow = document.getElementsByClassName('arrow');
    const pofol = document.getElementsByClassName('pofol');
    const pofolContent = document.getElementsByClassName('pofol-content');
   
    let index = 0; //지금 몇페이지인지 0은 첫번재 페이지


    for(let i = 0; i<arrow.length; i++){
        arrow[i].addEventListener('click',(e)=>{
            e.preventDefault();
        });
    }

    function slideOn(){
        for(let i = 0; i<pofol.length; i++){
            pofol[i].classList.remove('on');
            pofolContent[i].classList.remove('on');
        }
        pofol[index].classList.add('on');
        pofolContent[index].classList.add('on');
    }
    
    slideOn();

    arrow[1].addEventListener('click',()=>{
        index++;
        // index++ -> index = index + 1;
        
        if(index > pofol.length-1){
            index = 0;

        }
        
        slideOn();
    })

    arrow[0].addEventListener('click',()=>{
        index--;
        
        if(index < 0){
            index = pofol.length-1;
        }

        slideOn();
    })
}




