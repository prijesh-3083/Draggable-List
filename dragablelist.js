const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("dragstart", ()=>{
        // item.classList.add("dragging");
        setTimeout(()=> item.classList.add("dragging"),0);//Adding dragging class to item after delay.
    });
    item.addEventListener("dragend", ()=>{
        item.classList.remove("dragging");//Removing dragging class from item on dragend event.
    })
});

const initSortableList = (e) =>{
    e.preventDefault();
    const draggingItem = sortableList.querySelector(".dragging");
    //Getting all items except currently dragging and making array of them.
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    //Finding the sibling after which the dragging item should be placed
    let nextSibling = siblings.find(sibling => { 
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    // console.log(nextSibling);

    //Getting the current dragging LI element(mimp).
    sortableList.insertBefore(draggingItem,nextSibling);
}

sortableList.addEventListener("dragover",initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());