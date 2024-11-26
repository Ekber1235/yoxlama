let main = document.querySelectorAll('.clickable');

document.querySelector('.clickable').classList.add('clicked');

main.forEach(item => {
    item.addEventListener('click', () => {
        main.forEach(i => {
            i.classList.remove('clicked');
        });

        item.classList.add('clicked');
    });
});

let main2 = document.querySelectorAll('.clickable2');

document.querySelector('.clickable2').classList.add('clicked');

main2.forEach(item => {
    item.addEventListener('click', () => {
        main2.forEach(i => {
            i.classList.remove('clicked');
        });

        item.classList.add('clicked');
    });
});

 function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
 }

 function  hiddenSidebar(){
     const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='none'
 }


 const listItems = document.querySelectorAll('.li5');
        
 listItems.forEach(item => {
     const sublist = item.querySelector('.home-2');
     
     item.addEventListener('click', () => {
        
         document.querySelectorAll('.home-2').forEach(list => list.style.display = 'none');
         
         
         if (sublist.style.display !== 'block') {
             sublist.style.display = 'block';
         }
     });
 });