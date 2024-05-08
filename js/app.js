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


document.addEventListener("DOMContentLoaded", function() {
    const tabsBtn = document.querySelectorAll(".tabs-btn");
    const tabsItems = document.querySelectorAll(".gallery-tabs-cadr");

    function activateDefaultTab() {
        const defaultTabIndex = 0; 

        tabsBtn[defaultTabIndex].classList.add('active-tabs');
        
        tabsItems[defaultTabIndex].classList.add('active-tabs');
    }

    activateDefaultTab();

    tabsBtn.forEach(function(item) {
        item.addEventListener("click", onTabClick.bind(null, item, tabsBtn, tabsItems));
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tabsBtnProject = document.querySelectorAll(".tabs-btn-project");
    const tabsItemsProject = document.querySelectorAll(".project-desc-mat");

    function activateDefaultTab() {
        if (tabsBtnProject.length > 0 && tabsItemsProject.length > 0) {
            const defaultTabIndex = 0; 
            
            tabsBtnProject[defaultTabIndex].classList.add('active-tabs');
            
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

