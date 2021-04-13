function duplicateMenu () {
    
    //Get all the anchors in the top menu

    let bottomLI = document.getElementById('smallNavArea');

    let topList = document.querySelectorAll('ul#primaryNavigation li a');

    //Create new list items for the bottom of the page

    let newList = document.createElement('ul');

    topList.forEach(menuItem => {

        let newLI = document.createElement('li');
        let newLink = document.createElement('a');
        newLink.setAttribute('href', menuItem.getAttribute('href'));

        //Copy textContent from upper menu to new menu

        newLink.textContent = menuItem;
        

        bottomLI.appendChild(newList);
        newList.appendChild(newLI);
        newLI.appendChild(newLink);
    })

}

duplicateMenu();