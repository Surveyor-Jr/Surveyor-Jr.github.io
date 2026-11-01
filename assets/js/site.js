'use strict';
document.documentElement.classList.add('js');
const menu=document.querySelector('.menu-toggle');
const nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
const filters=document.querySelectorAll('.filter');
const projects=document.querySelectorAll('.project');
document.querySelector('.filter-bar').hidden=false;
filters.forEach(button=>button.addEventListener('click',()=>{
  filters.forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});
  let count=0;
  projects.forEach(project=>{project.hidden=button.dataset.filter!=='all'&&project.dataset.category!==button.dataset.filter;if(!project.hidden)count++;});
  document.getElementById('filter-status').textContent=`${count} ${count===1?'project':'projects'} shown: ${button.textContent}.`;
}));
document.getElementById('year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){
  const links=[...nav.querySelectorAll('a')];
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{if(link.hash==='#'+entry.target.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -60% 0px'});
  links.forEach(link=>{const section=document.querySelector(link.hash);if(section)observer.observe(section);});
}
