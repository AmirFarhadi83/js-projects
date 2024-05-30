'use strict'

const sidebarEl = document.querySelector('.sidebar')
const menuBtn=document.querySelector('.bx-menu')
const closeBtn = document.querySelector('.bx-x')

menuBtn.addEventListener('click', () => {
    sidebarEl.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    sidebarEl.style.display = 'none';
});