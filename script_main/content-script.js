let consoleStyle = "text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; font-size: 40px; background-color: white; color: #181818"
function mainInjection() {
  if (window.location.href.indexOf('discord.com/channels/') > -1) {
    console.log("%cDiscord Channel Collapser is WORKING", consoleStyle);
    const injectElement = document.createElement('div');
    injectElement.classList.add('collapseParent');
    let collapseButton = document.getElementsByClassName("popcatChan-collapse");
    const targetStuff = document.querySelector(".sidebar_ded4b5"); // 사이드바
    // let messageItems = document.getElementsByClassName('cozy-VmLDNB wrapper-30-Nkg'); // 유저들의 메시지
    // let avatarImgs = document.getElementsByClassName('avatar-2e8lTP'); // 유저들의 프로필 사진
    injectElement.innerHTML = '<div class="popcatChan-collapse" alt=""></div>';
    const insertbeforestuff = document.querySelector(".tutorialContainer__890ea"); // 팝캣 버튼을 배치할 위치
    if (document.querySelector(".scroller__3d071.none__51a8f.scrollerBase_dc3aa9")) {
      console.log("before_____operated");
      document.querySelector(".scroller__3d071.none__51a8f.scrollerBase_dc3aa9").insertBefore(injectElement, insertbeforestuff);
      console.log("after_____operated");
    }
    for (i = 0; i < collapseButton.length; i++) {
      collapseButton[i].addEventListener("click", function () {
        if (window.location.href.indexOf('discord.com/channels/') > -1 && targetStuff.style.display === "flex") {
          targetStuff.style.display = "none";
          localStorage.setItem("sidebar_ded4b5", 'display_none');
          // for (let i = 0; i < avatarImgs.length; i++) { avatarImgs[i].style.display = "none"; }
          // for (let i = 0; i < messageItems.length; i++) { messageItems[i].style.paddingLeft = "15px"; }
        } else {
            targetStuff.style.display = "flex";
            localStorage.setItem("sidebar_ded4b5", 'display_flex');
            // for (let i = 0; i < avatarImgs.length; i++) { avatarImgs[i].style.display = "initial"; }
            // for (let i = 0; i < messageItems.length; i++) { messageItems[i].style.paddingLeft = "72px"; }
          }
        }
      )
    }
    if (window.location.href.indexOf('discord.com/channels/') > -1 &&targetStuff && collapseButton && localStorage.getItem('sidebar_ded4b5') === 'display_none') {
      targetStuff.style.display = "none";
      // for (let i = 0; i < avatarImgs.length; i++) { avatarImgs[i].style.display = "none";  }
      // for (let i = 0; i < messageItems.length; i++) { messageItems[i].style.paddingLeft = "15px"; }
    } else if (window.location.href.indexOf('discord.com/channels/') > -1 &&targetStuff && collapseButton && localStorage.getItem('sidebar_ded4b5') === 'display_flex') {
      targetStuff.style.display = "flex";
      // for (let i = 0; i < avatarImgs.length; i++) { avatarImgs[i].style.display = "initial"; }
      // for (let i = 0; i < messageItems.length; i++) { messageItems[i].style.paddingLeft = "72px"; }
    } else {
        console.log("Now you are in the lobby. which means there's no button to modify now.");
      }
  }
};
setTimeout(mainInjection, 5000);