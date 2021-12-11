const icon = document.querySelectorAll(".icon-menu")[0];
const sidebar = document.querySelectorAll('.sidebar')[0];
const content = document.querySelectorAll('.content')[0];

addEventListener('resize', () =>{
    if (document.body.clientWidth >= 900){
        if(sidebar.classList.contains('left-sidebar')){
            sidebar.classList.remove('left-sidebar');
            content.classList.remove('left-content');
        }
    }
})

icon.addEventListener('click', ()=>{
    if(sidebar.classList.contains('left-sidebar')){
        sidebar.classList.remove('left-sidebar');
        content.classList.remove('left-content');
    } else {
        sidebar.classList.add('left-sidebar');
        content.classList.add('left-content');
    }
})