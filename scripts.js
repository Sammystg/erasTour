//Function to toggle between lists
function toggleList(listName, button) {
    //Remove the 'active' class from all buttons
    const buttons = document.querySelectorAll('.listOptions button');
    buttons.forEach(btn => btn.classList.remove('active'));

    //Add the 'active' class to the clicked button
    button.classList.add('active');

    //HIde all lists except the one with the specified listName
    const lists = document.querySelectorAll('ul');
    lists.forEach(list => {
        if (list.classList.contains(listName)) {
            list.style.display  = 'block';
        } else {
            list.style.display = 'none';
        }
    });
}

//Initially show the 'surprise' list and set the corresponding butotn as active
toggleList('surprise', document.querySelector('.listOptions button.active'));