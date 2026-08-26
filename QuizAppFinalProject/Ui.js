function  setupSidebarNav(){
   const navLinks = document.querySelectorAll("#sidebar-nav a");
  navLinks.forEach((navs)=>{
    navs.addEventListener("click" ,(event)=> {
        event.handleNavClick(navs);
        preventDefault();
        console.log("hello");
    })
  })
}

 setupSidebarNav();