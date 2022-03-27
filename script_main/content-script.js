function loadingremover() {
  if (window.location.href.indexOf('discord.com/channels/') > -1) {
    const loadingStuff = document.querySelector(".container-2RRFHK.fixClipping-3GOd_d");
    console.log("before_____loadingremover");
    loadingStuff.style.display = "none";
    console.log("after_____loadingremover");
  }
}
setTimeout(loadingremover,500);

function mainInjection() {
  if (window.location.href.indexOf('discord.com/channels/') > -1) {
    const injectElement = document.createElement('div');
    injectElement.classList.add('collapseParent');
    let collapseButton = document.getElementsByClassName("popcatChan-collapse");
    const targetStuff = document.querySelector(".sidebar-1tnWFu");
    var i;
    injectElement.innerHTML = '<div class="popcatChan-collapse" alt=""></div>';
    const insertbeforestuff = document.querySelector(".tutorialContainer-1pL9QS");
    if (document.querySelector(".scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt")) {
      console.log("before_____operated");
      document.querySelector(".scroller-3X7KbA.none-2-_0dP.scrollerBase-_bVAAt").insertBefore(injectElement, insertbeforestuff);
      console.log("after_____operated");
    } else {
      console.log("Hello!");
      }
      for (i = 0; i < collapseButton.length; i++) {
        collapseButton[i].addEventListener("click", function () {
          if (window.location.href.indexOf('discord.com/channels/') > -1 && targetStuff.style.display === "flex") {
            targetStuff.style.display = "none";
            localStorage.setItem("sidebar-1tnWFu", 'display_none');
            // document.querySelector(".popcatChan-collapse").textContent = 'Open';
          } else {
              targetStuff.style.display = "flex";
                localStorage.setItem("sidebar-1tnWFu", 'display_flex');
                // document.querySelector(".popcatChan-collapse").textContent = 'Close';
            }
          }
        )
      }
    if (window.location.href.indexOf('discord.com/channels/') > -1 &&targetStuff && collapseButton && localStorage.getItem('sidebar-1tnWFu') === 'display_none') {
      targetStuff.style.display = "none";
      // document.querySelector(".popcatChan-collapse").textContent = 'Open';
      }
    else if (window.location.href.indexOf('discord.com/channels/') > -1 &&targetStuff && collapseButton && localStorage.getItem('sidebar-1tnWFu') === 'display_flex') {
      targetStuff.style.display = "flex";
      // document.querySelector(".popcatChan-collapse").textContent = 'Close';
    } else {
        console.log("Now you are in the lobby. which means there's no button to modify now.");
      }
  }
};
setTimeout(mainInjection,3000);
