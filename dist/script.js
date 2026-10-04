(() => {
'use strict';
const cinema=document.querySelector('.cinema-scroll'),stage=document.querySelector('.stage');
const gallery=document.querySelector('.gallery-stage'),frames=[...document.querySelectorAll('.frame')];
const captions=frames.map(frame=>frame.querySelector('.frame-caption'));
const backgroundCredits=[...document.querySelectorAll('.gallery-background-credit span')];
const backgrounds=[...document.querySelectorAll('.gallery-back')],dots=[...document.querySelectorAll('.gallery-dots button')];
const header=document.querySelector('.site-header'),previous=document.getElementById('previous'),next=document.getElementById('next');
const counter=document.getElementById('current-frame'),live=document.getElementById('gallery-live');
const intro=document.querySelector('.intro-copy'),bottom=document.querySelector('.hero-bottom');
const names=['Нойшванштайн','Эйлен-Донан','Шильон'],reduced=matchMedia('(prefers-reduced-motion: reduce)');
const clamp=(v,min=0,max=1)=>Math.min(max,Math.max(min,v)),ease=v=>v*v*(3-2*v);
let active=-1,pending=false,smooth=scrollY,geometry={};
function measure(){const heroRun=parseFloat(getComputedStyle(cinema).getPropertyValue('--hero-run')),total=cinema.offsetHeight-stage.offsetHeight;geometry={top:cinema.offsetTop,heroRun,galleryTop:cinema.offsetTop+heroRun,galleryRun:total-heroRun};requestTick();}
function select(index){index=clamp(index,0,frames.length-1);scrollTo({top:geometry.galleryTop+geometry.galleryRun*index/(frames.length-1),behavior:reduced.matches?'instant':'smooth'});}
function update(){pending=false;const target=scrollY;smooth=reduced.matches?target:smooth+(target-smooth)*.15;
const progress=clamp((smooth-geometry.top)/geometry.heroRun),exit=ease(clamp(progress/.48)),split=Math.pow(ease(clamp((progress-.2)/.76)),1.3),cutout=ease(clamp((progress-.12)/.13)),original=1-ease(clamp((progress-.2)/.23)),enter=ease(clamp((progress-.76)/.24));
cinema.style.setProperty('--hero-exit',exit.toFixed(4));cinema.style.setProperty('--scene-scale',(1+progress*.22).toFixed(4));cinema.style.setProperty('--original-opacity',original.toFixed(4));cinema.style.setProperty('--cutout-opacity',(cutout*(1-ease(clamp((progress-.94)/.06)))).toFixed(4));cinema.style.setProperty('--split',split.toFixed(4));cinema.style.setProperty('--gallery-enter',enter.toFixed(4));
const ready=progress>.76;gallery.classList.toggle('is-ready',ready);gallery.inert=!ready;intro.inert=exit>.98;bottom.inert=exit>.98;header.classList.toggle('is-gallery',progress>.7);
const position=clamp((smooth-geometry.galleryTop)/geometry.galleryRun)*(frames.length-1),selected=Math.round(position),visual=reduced.matches?selected:position;
frames.forEach((frame,i)=>{const incoming=clamp(visual-(i-1)),covered=clamp(visual-i),visible=i===0||visual>i-1,shift=i===0?-covered*7:(1-ease(incoming))*100-covered*7;frame.style.visibility=visible?'visible':'hidden';frame.style.zIndex=String(i+1);frame.style.transform=`translate3d(${shift}%,0,0)`;captions[i].style.transform=`translate3d(${-shift}%,0,0)`;frame.inert=i!==selected;frame.setAttribute('aria-hidden',i===selected?'false':'true');backgrounds[i].style.clipPath=`inset(0 0 0 ${i===0?0:(1-ease(incoming))*100}%)`;});
if(active!==selected){active=selected;counter.textContent=String(active+1);dots.forEach((dot,i)=>{dot.classList.toggle('is-active',i===active);if(i===active)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current');});frames.forEach((frame,i)=>frame.classList.toggle('is-active',i===active));backgroundCredits.forEach((credit,i)=>credit.hidden=i!==active);previous.disabled=active===0;next.disabled=active===frames.length-1;live.textContent=`${names[active]}, ${active+1} из ${frames.length}`;}
if(Math.abs(target-smooth)>.12)requestTick();}
function requestTick(){if(!pending){pending=true;requestAnimationFrame(update);}}
addEventListener('scroll',requestTick,{passive:true});addEventListener('resize',measure,{passive:true});reduced.addEventListener('change',requestTick);
document.querySelectorAll('[data-frame]').forEach(control=>control.addEventListener('click',e=>{e.preventDefault();select(Number(control.dataset.frame));}));document.querySelectorAll('a[href="#gallery"]').forEach(link=>{if(!link.hasAttribute('data-frame'))link.addEventListener('click',e=>{e.preventDefault();select(0);});});document.querySelector('.explore').addEventListener('click',()=>select(0));previous.addEventListener('click',()=>select(active-1));next.addEventListener('click',()=>select(active+1));
addEventListener('keydown',e=>{if(scrollY<geometry.galleryTop-40||scrollY>geometry.galleryTop+geometry.galleryRun+40||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();select(active+(e.key==='ArrowRight'?1:-1));}});
let start=null;gallery.addEventListener('touchstart',e=>{start={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});gallery.addEventListener('touchend',e=>{if(!start)return;const dx=e.changedTouches[0].clientX-start.x,dy=e.changedTouches[0].clientY-start.y;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)select(active+(dx<0?1:-1));start=null;},{passive:true});measure();
})();

