const panels = document.querySelectorAll('.panel');
makeInactive(0);
panels.forEach((panel, index) => {
    panel.addEventListener('click', () =>{
        removeActiveClassess()
        makeInactive(index)
        console.log(index)
        panel.classList.add('active')
    })
})

function removeActiveClassess(){
    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}


function makeInactive(current_index){
    panels.forEach((panel, index) => {
        if (current_index - 1 == index || current_index == index || current_index +1 == index){
            panel.classList.remove('inactive');
        }
        else{
            panel.classList.add('inactive')
        }
    })
}