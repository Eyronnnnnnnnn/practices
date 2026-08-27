  
  
  export function setupSidebarNav() {
      const navLinks = document.querySelectorAll("#sidebar-nav a");
      navLinks.forEach((navs) => {
        navs.addEventListener("click", (event) => {
          event.preventDefault();
          
        
        
          console.log("hellowoorld");
        });
      });
    }


