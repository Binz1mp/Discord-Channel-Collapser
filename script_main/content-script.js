let consoleStyleNormal = "text-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 0.2em gray; background-color: gray; font-size: 18px; color: #ffffff";
let consoleStyleSuccess = "text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; background-color: gray; font-size: 18px; color: #ffffff";
let consoleStyleError = "text-shadow: 1px 1px 2px black, 0 0 1em red, 0 0 0.2em red; background-color: gray; font-size: 18px; color: #ffffff";

function mainInjection(tutorialContainer) {
  if (window.location.href.indexOf('discord.com/channels/') > -1) {
    console.log("%c[DISCORD-CHANNEL-COLLAPSER] Discord Channel Collapser is WORKING", consoleStyleSuccess);
    const sidebar = $(".sidebar_ded4b5"); // 안보이게 할 사이드바
    tutorialContainer.after(`
      <div class="tutorialContainer__popcatChan">
        <div class="listItem__48528">
          <div class="popcatChan-collapse" />
        </div>
      </div>
    `);
    const popcatChan = $(".popcatChan-collapse"); // 팝캣 버튼
    popcatChan.click(function (e) { 
      e.preventDefault();
      sidebar.animate({width: 'toggle'}, function() {
        console.log(sidebar.css('display'));
        if (sidebar.css('display') === 'none') {
          localStorage.setItem("popcatSidebarState", "none");
        } else if (sidebar.css('display') === 'flex') {
          localStorage.setItem("popcatSidebarState", "flex");
        }
      });
    });
    if (
      window.location.href.indexOf('discord.com/channels/') > -1
      && localStorage.getItem('popcatSidebarState') === 'none'
    ) {
      sidebar.animate({width: 'toggle'});
    }
  }
};

let interval = setInterval(() => {
  let tutorialContainer = $(".tutorialContainer_b06ae6"); // 팝캣 버튼을 배치할 위치
  console.log("%c[DISCORD-CHANNEL-COLLAPSER] Finding target element...", consoleStyleNormal);
  if (tutorialContainer.length > 0) {
    console.log("%c[DISCORD-CHANNEL-COLLAPSER] Target element found.", consoleStyleSuccess);
    clearInterval(interval);
    mainInjection(tutorialContainer);
  }
}, 1000);
setTimeout(() => {
  let tutorialContainer = $(".tutorialContainer_b06ae6"); // 팝캣 버튼을 배치할 위치
  if (tutorialContainer.length === 0) {
    console.log("%c[DISCORD-CHANNEL-COLLAPSER] NO TARGET FOUND, ERROR", consoleStyleError);
  }
  clearInterval(interval);
}, 10000);