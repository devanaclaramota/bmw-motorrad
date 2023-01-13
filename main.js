
     let btn = document.querySelector('.openNav')
     btn.addEventListener('click',menu);
     function menu(){
     let nav =  document.querySelector('.menu')
     nav.classList.toggle('ativar')
     }
  
     function openTab(idtab){
          let content = document.querySelectorAll('.tab-menu-album');
          for(i=0; i < content.length;i++){
               content[i].style.display = 'none'
          }
          document.getElementById(idtab).style.display = 'block';
          


     }
   