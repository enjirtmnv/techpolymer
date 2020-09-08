const preventScrollOnMobile = e => {
    if (!e.target.closest('.scrollable')) {
        e.preventDefault();
    }
};

document.addEventListener('touchmove', preventScrollOnMobile, { passive: false });