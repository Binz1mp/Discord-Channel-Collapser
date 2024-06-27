let consoleStyleNormal = "text-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 0.2em gray; background-color: gray; font-size: 18px; color: #ffffff";
let consoleStyleSuccess = "text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; background-color: gray; font-size: 18px; color: #ffffff";
let consoleStyleError = "text-shadow: 1px 1px 2px black, 0 0 1em red, 0 0 0.2em red; background-color: gray; font-size: 18px; color: #ffffff";

function mainInjection(tutorialContainer) {
  if (window.location.href.indexOf('discord.com/channels/') > -1) {
    console.log("%c[DISCORD-CHANNEL-COLLAPSER] Discord Channel Collapser is WORKING", consoleStyleSuccess);
    const sidebar = $("div[class^=content_] > div[class^=sidebar_]"); // 안보이게 할 사이드바
    tutorialContainer.eq(0).after(`
      <div class="tutorialContainer_popcatChan">
        <div class="listItem_popcatChan">
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
  let vanilaTutorialContainer = document.querySelectorAll("ul[data-list-id=guildsnav] > div[class^=scroller] > div[class^=tutorialContainer_]");
  let tutorialContainer = $("ul[data-list-id=guildsnav] > div[class^=scroller] > div[class^=tutorialContainer_]"); // 팝캣 버튼을 배치할 위치
  console.log("%c[DISCORD-CHANNEL-COLLAPSER] Finding target element...", consoleStyleNormal);
  if (vanilaTutorialContainer.length > 1 && document.readyState == 'complete') {
    console.log("%c[DISCORD-CHANNEL-COLLAPSER] Target element found.", consoleStyleSuccess);
    clearInterval(interval);
    mainInjection(tutorialContainer);
  }
}, 1000);
setTimeout(() => {
  let vanilaTutorialContainer = document.querySelectorAll("ul[data-list-id=guildsnav] > div[class^=scroller] > div[class^=tutorialContainer_]"); // 팝캣 버튼을 배치할 위치
  // let tutorialContainer = $("ul[data-list-id=guildsnav] > div[class^=scroller] > div[class^=tutorialContainer_]"); // 팝캣 버튼을 배치할 위치
  if (vanilaTutorialContainer.length === 0) {
    console.log("%c[DISCORD-CHANNEL-COLLAPSER] NO TARGET FOUND, ERROR", consoleStyleError);
  }
  clearInterval(interval);
}, 10000);