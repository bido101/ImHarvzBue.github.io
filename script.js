// Small interactive enhancements
document.addEventListener('DOMContentLoaded',()=>{
  // set year
  const y=document.getElementById('year');if(y) y.textContent=new Date().getFullYear();

  // smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const target=document.querySelector(a.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });
});
