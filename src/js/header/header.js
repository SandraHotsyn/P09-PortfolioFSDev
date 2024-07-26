export function functionHeader() {
    const modalWindow = document.querySelector(".backdrop");
    const openMenuBtn = document.querySelector(".open-menu-btn");
    const closeModalBtn = document.querySelector(".modal-close-btn");
    const modalMenu = document.querySelector(".navi-modal-wrapper");

    const navigation = document.querySelector(".navi");
    const menu = document.querySelector(".menu");
    const itemsMenu = document.querySelector(".nav-wrapper");

    openMenuBtn.addEventListener("click", interactionModalWindow);
    closeModalBtn.addEventListener("click", interactionModalWindow);
    modalMenu.addEventListener("click", interactionModalWindow);

    menu.addEventListener("click", interactionMenu);
    itemsMenu.addEventListener("click", interactionMenu);


    function interactionModalWindow() {
        modalWindow.classList.toggle("is-open");
        document.body.classList.toggle("modal-open");
    }

    function interactionMenu() {
        navigation.classList.toggle("is-open");
    }
}
