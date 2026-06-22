/* ============================================================
   HESTER ASPHALT — HOME PAGE BEHAVIOR
   Hero video management + before/after comparison slider
   ============================================================ */

/* Pause the hero video when off-screen or on data-saver connections */
function hesterHeroVideo() 
{

  var video = document.querySelector(".hero-video");

  if (!video) return;

  var conn = navigator.connection;

  if (conn && (conn.saveData || /2g/.test(conn.effectiveType || ""))) 
    {
    
      video.removeAttribute("autoplay");
    
      video.pause();
    
      return;
  
    }
  
  if ("IntersectionObserver" in window) 
  {
    
    new IntersectionObserver(function (entries) 
    {
  
      entries.forEach(function (e) 
      {
    
        if (e.isIntersecting) { video.play().catch(function () {}); }
    
        else { video.pause(); }
  
      });

    }, 
    
    { threshold: 0.1 }).observe(video);
  
  }

}

document.addEventListener("DOMContentLoaded", function () 
{

  hesterHeroVideo();

});
