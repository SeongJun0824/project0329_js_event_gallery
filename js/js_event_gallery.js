'use strict';

const bUl = document.querySelector('.bottom-con>ul')

const bLi = document.querySelectorAll('.bottom-con>ul>li')

const bLiImg = document.querySelectorAll('.bottom-con>ul>li img')

const topCon = document.querySelector('.top-con')

// forEach click이벤트 바인딩
bLi.forEach((el, idx) => {
  el.addEventListener('click', (e) => {
    const eTarget = e.target;
    const eCTaget = e.currentTarget;
    console.log(`taget ->`, eTarget)
    console.log(`currentTaget ->`, eCTaget)

    bLiImg.forEach((el2,idx2)=>{
      if(eTarget===el2){
        // 선택객체의 src값 get
        const imgSrc = eTarget.getAttribute('src');
        // 선택객체의 alt값 get
        const imgAlt = eTarget.getAttribute('alt');
        
        // console.log(`imgSrc ->`, imgSrc);
        // console.log(`imgAlt ->`, imgAlt);
        console.log(`idx ->`, idx); // <---- index*****()
    
        const topConImg=topCon.children[0]; // topCon 첫번째 자식(img)
        const topConImgTxt=topCon.children[1]; // topCon 두번째 자식(img-txt)

        topConImg.setAttribute('src',imgSrc);
        topConImg.setAttribute('alt',imgAlt);

        topConImgTxt.innerText=imgAlt
        
        el2.classList.add('on')
      }else{
        el2.classList.remove('on')
      }
    });
  });
});