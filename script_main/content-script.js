let consoleStyleNormal = "text-shadow: 1px 1px 2px black, 0 0 1em gray, 0 0 0.2em gray; background-color: gray; font-size: 16px; color: #ffffff";
let consoleStyleSuccess = "text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; background-color: gray; font-size: 16px; color: #ffffff";
let consoleStyleError = "text-shadow: 1px 1px 2px black, 0 0 1em red, 0 0 0.2em red; background-color: gray; font-size: 16px; color: #ffffff";

let isPopcatChanMounted = false;

function mainInjection(tutorialContainer) {
  if (window.location.href.indexOf('discord.com/channels/') > -1 && !isPopcatChanMounted) {
    console.log("%c[DISCORD-CHANNEL-COLLAPSER] Discord Channel Collapser is mounted.", consoleStyleSuccess);
    const sidebar = $("div[class^=content_] > div[class^=sidebar_]"); // 안보이게 할 사이드바
    tutorialContainer.eq(0).after(`
      <div class="tutorialContainer_popcatChan">
        <div class="listItem_popcatChan">
          <div class="popcatChan-collapse" />
        </div>
      </div>
    `);
    isPopcatChanMounted = true;
    const popcatChan = $(".popcatChan-collapse"); // 팝캣 버튼
    popcatChan.click(function (e) { 
      e.preventDefault();
      sidebar.animate({width: 'toggle'}, function() {
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

function monitorDiscordStatus() {
  const targetUrls = [
    "https://discord.com/api/v9/channels",
    // Add more URLs here if needed
  ];

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (targetUrls.some(url => entry.name.includes(url))) {
        console.log("%c[DISCORD-CHANNEL-COLLAPSER] Discord app detected.", consoleStyleSuccess);
        let vanilaTutorialContainer = document.querySelectorAll("div[class^=sidebar_] ul > div[class^=itemsContainer_] > div > div[class^=tutorialContainer_]");
        let tutorialContainer = $("div[class^=sidebar_] ul > div[class^=itemsContainer_] > div > div[class^=tutorialContainer_]"); // 팝캣 버튼을 배치할 위치
        console.log("%c[DISCORD-CHANNEL-COLLAPSER] Finding target element...", consoleStyleNormal);
        if (vanilaTutorialContainer.length > 0 && document.readyState == 'complete') {
          console.log("%c[DISCORD-CHANNEL-COLLAPSER] Target element found.", consoleStyleSuccess);
          mainInjection(tutorialContainer);
          observer.disconnect();
          console.log("%c[DISCORD-CHANNEL-COLLAPSER] Observer disconnected.", consoleStyleSuccess);
        }
      }
    }
  });

  observer.observe({entryTypes: ["resource"]});
}

monitorDiscordStatus();