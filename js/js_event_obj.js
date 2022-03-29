'use strict';
const gnbUl=document.querySelector('.gnb>ul')
const gnbUlLi=document.querySelectorAll('.gnb>ul>li')
const aTags=document.querySelectorAll('.gnb>ul>li a')

// 이벤트 바인딩 ? 
// aTags[0].addEventListener('click',()=>{

//   console.log(event)
//   console.log(event.type)
//   console.log(`target ->`,event.target)
//   console.log(`currentTarget ->`,event.currentTarget)

// });

// gnbUlLi[0].addEventListener('click', (e)=>{
//   console.log(event)
//   console.log(event.type)
//   console.log(`target ->`,event.target)
//   console.log(`currentTarget ->`,event.currentTarget)
// });
// gnbUlLi[1].addEventListener('click', (e)=>{
//   console.log(event)
//   console.log(event.type)
//   console.log(`target ->`,event.target)
//   console.log(`currentTarget ->`,event.currentTarget)
// });
// gnbUlLi[2].addEventListener('click', (e)=>{
//   console.log(event)
//   console.log(event.type)
//   console.log(`target ->`,event.target)
//   console.log(`currentTarget ->`,event.currentTarget)
// });
// gnbUlLi[3].addEventListener('click', (e)=>{
//   console.log(event)
//   console.log(event.type)
//   console.log(`target ->`,event.target)
//   console.log(`currentTarget ->`,event.currentTarget)
// });
// gnbUlLi[4].addEventListener('click', (e)=>{
//   console.log(event)
//   console.log(event.type)
//   console.log(`target ->`,event.target)
//   console.log(`currentTarget ->`,event.currentTarget)
// });

// forEach문으로 gnbUlLi의 click 이벤트 적용
// gnbUlLi.forEach(el => el.addEventListener('click', (e)=>{
//   console.log(e)
//   console.log(e.type)
//   console.log(`target ->`, e.target)
//   console.log(`currentTarget ->`, e.currentTarget)
// }));

gnbUl.addEventListener('click',(e)=>{
  console.log(e)
  console.log(e.target)
  console.log(e.currentTarget)

  const eTarget= e.target;
  const eCTarget= e.currentTarget;

  gnbUlLi.forEach((el, idx)=>{
    // click -> 타겟이 li 같으면 실행
    if(el===e.target){
      console.log(`idx1 -> ${idx}`)
    }else{
      console.log(`idx2 -> ${idx}`)
    }
  });
});