
window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar'),
    sidebarItem = document.querySelectorAll('.sidebar_item'),
    burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        sidebar.classList.toggle('sidebar_active');
    });

    sidebarItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            sidebar.classList.toggle('sidebar_active');
        })
    })
})