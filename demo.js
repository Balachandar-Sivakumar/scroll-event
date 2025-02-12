let nav = document.querySelector('nav'),
    list = document.querySelector('nav>ul');

window.onscroll=function(){scroll()}

function scroll(){
    if(document.documentElement.scrollTop > 1){return nav.classList.add('active'),list.classList.add('active')}
    nav.classList.remove('active'),list.classList.remove('active');
}

let lis = document.querySelectorAll('nav>ul>li'),
    scroller = document.querySelectorAll('.scroll');
 
   lis.forEach((ele,ind)=>{
      ele.addEventListener('click',()=>{
        return ind==0 ? window.scrollTo(0,0) : ind==1 ? window.scrollTo(0,650): ind ==2? window.scrollTo(0,1150):window.scrollTo(0,2050);
      })

      let btn = document.querySelector('.banner>button').addEventListener('click',()=>{
        window.scrollTo(0,2050);
      })
   })

