document.addEventListener("DOMContentLoaded", () => {
   let doc = document;
   let toggleButton = doc.querySelector('.header__nav-toggle');
   let menuList = doc.querySelector('.nav');
   let menuListItem = doc.querySelectorAll('.nav__item');
   
   toggleButton.addEventListener('click', () => {
      if(!menuList.classList.contains('active-nav')){
         
         menuList.classList.add('active-nav');
         toggleButton.style.transform = 'rotate(90deg)'
         for(i = 0; i < menuListItem.length; i++){
            menuListItem[i].classList.add('active-nav-item');
            menuListItem[i].style.opacity = '1';
         }
      }else{
         
         toggleButton.style.transform = '';

         for(i = 0; i < menuListItem.length; i++){
            
            menuListItem[i].style.transition = 'all, 0.4s';
            menuListItem[i].style.opacity = '0';
            menuListItem[i].classList.remove('active-nav-item');
         }
         setTimeout( () =>{
            menuList.classList.remove('active-nav')
         }, 500);
      }
   });

   window.addEventListener('resize',  () => {
      console.log(1);
      if(doc.body.clientWidth >= 610){
         menuList.classList.remove('active-nav');
         toggleButton.style.transform = '';
         for(i = 0; i < menuListItem.length; i++){
            menuListItem[i].classList.remove('active-nav-item');
            menuListItem[i].style.opacity = '1';
         }
      }
   });
   
   
});


   
