function initializePopUp(openBtnId, closeBtnId, popUpId) {
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);
    const popUp = document.getElementById(popUpId);

    // Проверяем, существует ли кнопка открытия
    if (openBtn) {
        openBtn.addEventListener('click', function(e) {
            e.preventDefault();
            popUp.classList.add('active');
        });
    }

    // Проверяем, существует ли кнопка закрытия
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            popUp.classList.remove('active');
        });
    }
}


// Вызовы функций для каждой страницы
document.addEventListener("DOMContentLoaded", function() {
    initializePopUp('editGenre', 'closedGenreBtnUp', 'genrepopUPContainer');
});

document.addEventListener("DOMContentLoaded", function() {
    // Вызов функции для страницы genre
    initializePopUp('addProducerButton', 'closedGenreBtnUp', 'producerPopupContainer');
});

// Обработчик для работы с вкладками
document.addEventListener("DOMContentLoaded", function() {
    const tabsBtn = document.querySelectorAll(".tabs-btn");
    const tabsItems = document.querySelectorAll(".gallery-tabs-cadr");

    // Функция для активации вкладки по умолчанию
    function activateDefaultTab() {
        // Устанавливаем индекс вкладки по умолчанию
        const defaultTabIndex = 0; // Например, первая вкладка

        // Активируем кнопку вкладки по умолчанию
        tabsBtn[defaultTabIndex].classList.add('active-tabs');
        
        // Активируем соответствующую вкладку
        tabsItems[defaultTabIndex].classList.add('active-tabs');
    }

    // Активируем вкладку по умолчанию при загрузке страницы
    activateDefaultTab();

    // Добавляем обработчики кликов для вкладок
    tabsBtn.forEach(function(item) {
        item.addEventListener("click", onTabClick.bind(null, item, tabsBtn, tabsItems));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tabsBtnProject = document.querySelectorAll(".tabs-btn-project");
    const tabsItemsProject = document.querySelectorAll(".project-desc-mat");

    // Функция для активации вкладки по умолчанию
    function activateDefaultTab() {
        // Проверяем, существуют ли элементы
        if (tabsBtnProject.length > 0 && tabsItemsProject.length > 0) {
            // Устанавливаем индекс вкладки по умолчанию
            const defaultTabIndex = 0; // Например, первая вкладка

            // Активируем кнопку вкладки по умолчанию
            tabsBtnProject[defaultTabIndex].classList.add('active-tabs');
            
            // Активируем соответствующую вкладку
            tabsItemsProject[defaultTabIndex].classList.add('active-tabs');
        }
    }

    activateDefaultTab();

    tabsBtnProject.forEach(function(item) {
        item.addEventListener("click", onTabClick.bind(null, item, tabsBtnProject, tabsItemsProject));
    });
});

function onTabClick(item, allBtns, allTabs) {
    const tabId = item.getAttribute("data-tab");
    const currentTab = document.querySelector(tabId);

    if (!item.classList.contains('active-tabs')) {
        allBtns.forEach(function(btn) {
            btn.classList.remove('active-tabs');
        });

        allTabs.forEach(function(tab) {
            tab.classList.remove('active-tabs');
        });

        item.classList.add('active-tabs');
        currentTab.classList.add('active-tabs');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-a, .profile-link");
    const currentUrl = window.location.href;

    navLinks.forEach(function(link) {
        if (link.hasAttribute("href")) {
            const href = link.getAttribute("href");
            if (currentUrl.includes(href)) {
                link.classList.add("active-link");
            }
        }
    });
});