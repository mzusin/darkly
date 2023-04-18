const MOBILE_MENU_CLASS = 'darkly-show-m-menu';

export const openMobileMenu = () => {
    document.body.classList.add(MOBILE_MENU_CLASS);
};

export const closeMobileMenu = () => {
    document.body.classList.remove(MOBILE_MENU_CLASS);
};

export const toggleMobileMenu = () => {
    document.body.classList.toggle(MOBILE_MENU_CLASS);
};