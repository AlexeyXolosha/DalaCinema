document.addEventListener("DOMContentLoaded", function() {
    // Скрипт для работы с вкладками
    const tabsBtn = document.querySelectorAll(".tabs-btn");
    const tabsItems = document.querySelectorAll(".gallery-tabs-cadr");

    tabsBtn.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active-tabs')) {
                tabsBtn.forEach(function(item) {
                    item.classList.remove('active-tabs');
                });

                tabsItems.forEach(function(item) {
                    item.classList.remove('active-tabs');
                });

                currentBtn.classList.add('active-tabs');
                currentTab.classList.add('active-tabs');
            }
        });
    }
    document.querySelector('.tabs-btn').click();
});

// Скрипт для добавления класса active-link активной ссылке в навигационном меню
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav-a"); // Получаем все ссылки в навигационном меню
    var currentUrl = window.location.href; // Получаем текущий URL страницы

    navLinks.forEach(function(link) {
        // Проверяем, есть ли у ссылки атрибут href
        if (link.hasAttribute("href")) {
            var href = link.getAttribute("href");
            // Проверяем, соответствует ли URL ссылки текущему URL страницы
            if (currentUrl.includes(href)) {
                link.classList.add("active-link"); // Добавляем класс active-link, если ссылка соответствует текущей странице
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".profile-link"); // Получаем все ссылки в навигационном меню
    var currentUrl = window.location.href; // Получаем текущий URL страницы

    navLinks.forEach(function(link) {
        // Проверяем, есть ли у ссылки атрибут href
        if (link.hasAttribute("href")) {
            var href = link.getAttribute("href");
            // Проверяем, соответствует ли URL ссылки текущему URL страницы
            if (currentUrl.includes(href)) {
                link.classList.add("active-link"); // Добавляем класс active-link, если ссылка соответствует текущей странице
            }
        }
    });
});

const openPopUp = document.getElementById('openBtnUP');
const closePoPUP = document.getElementById('closedBtnUp');
const popUP = document.querySelector('.pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUP.classList.add('active');

});

closePoPUP.addEventListener('click', () => {
    popUP.classList.remove('active');
});

const openPoPUPEDIT = document.getElementById('openPoPUPBtnEdit');
const closedPoPUP = document.getElementById('closedpopUPEdit');
const popUP_edit = document.querySelector('.pop_up_edit');

openPoPUPEDIT.addEventListener('click', function(e){
    e.preventDefault();
    popUP_edit.classList.add('active');

});

closedPoPUP.addEventListener('click', () => {
    popUP_edit.classList.remove('active');
});

