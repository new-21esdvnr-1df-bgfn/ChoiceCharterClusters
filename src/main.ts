/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import { EmbeddedWebsite } from "@workadventure/iframe-api-typings";
import { levelUp } from "@workadventure/quests";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(async() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    let webBussinesPoster01: EmbeddedWebsite;
    let webBussinesPoster02: EmbeddedWebsite;
    let webBussinesPoster03: EmbeddedWebsite;
    let webBussinesPoster04: EmbeddedWebsite;
    let webBussinesPoster05: EmbeddedWebsite;
    let webBussinesPoster06: EmbeddedWebsite;
    let webBussinesPoster07: EmbeddedWebsite;
    let webBussinesNamePlate01: EmbeddedWebsite;
    let webBussinesNamePlate02: EmbeddedWebsite;
    let webBussinesNamePlate03: EmbeddedWebsite;
    let webBussinesNamePlate04: EmbeddedWebsite;
    let webBussinesNamePlate05: EmbeddedWebsite;
    let webBussinesNamePlate06: EmbeddedWebsite;
    let webBussinesNamePlate07: EmbeddedWebsite;

    let webEngineeringNamePlate01: EmbeddedWebsite;
    let webEngineeringNamePlate02: EmbeddedWebsite;
    let webEngineeringNamePlate05: EmbeddedWebsite;
    let webEngineeringNamePlate06: EmbeddedWebsite;
    let webEngineeringNamePlate07: EmbeddedWebsite;

    let webHumanServicesNamePlate01: EmbeddedWebsite;
    let webHumanServicesNamePlate02: EmbeddedWebsite;
    let webHumanServicesNamePlate03: EmbeddedWebsite;
    let webHumanServicesNamePlate04: EmbeddedWebsite;
    let webHumanServicesNamePlate05: EmbeddedWebsite;
    let webHumanServicesNamePlate06: EmbeddedWebsite;
    let webHumanServicesNamePlate07: EmbeddedWebsite;

    try {
      webBussinesPoster01 = await WA.room.website.get('poster-1');
      webBussinesPoster01.visible = false;
      webBussinesPoster02 = await WA.room.website.get('poster-2');
      webBussinesPoster02.visible = false;
      webBussinesPoster03 = await WA.room.website.get('poster-3');
      webBussinesPoster03.visible = false;
      webBussinesPoster04 = await WA.room.website.get('poster-4');
      webBussinesPoster04.visible = false;
      webBussinesPoster05 = await WA.room.website.get('poster-5');
      webBussinesPoster05.visible = false;
      webBussinesPoster06 = await WA.room.website.get('poster-6');
      webBussinesPoster06.visible = false;
      webBussinesPoster07 = await WA.room.website.get('poster-7');
      webBussinesPoster07.visible = false;
      webBussinesNamePlate01 = await WA.room.website.get('name-plate-bsn-1');
      webBussinesNamePlate01.visible = false;
      webBussinesNamePlate02 = await WA.room.website.get('name-plate-bsn-2');
      webBussinesNamePlate02.visible = false;
      webBussinesNamePlate03 = await WA.room.website.get('name-plate-bsn-3');
      webBussinesNamePlate03.visible = false;
      webBussinesNamePlate04 = await WA.room.website.get('name-plate-bsn-4');
      webBussinesNamePlate04.visible = false;
      webBussinesNamePlate05 = await WA.room.website.get('name-plate-bsn-5');
      webBussinesNamePlate05.visible = false;
      webBussinesNamePlate06 = await WA.room.website.get('name-plate-bsn-6');
      webBussinesNamePlate06.visible = false;
      webBussinesNamePlate07 = await WA.room.website.get('name-plate-bsn-7');
      webBussinesNamePlate07.visible = false;
    } catch(err: any) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }

    try {
      webEngineeringNamePlate01 = await WA.room.website.get('name-plate-eng-1');
      webEngineeringNamePlate01.visible = false;
      webEngineeringNamePlate02 = await WA.room.website.get('name-plate-eng-2');
      webEngineeringNamePlate02.visible = false;
      webEngineeringNamePlate05 = await WA.room.website.get('name-plate-eng-5');
      webEngineeringNamePlate05.visible = false;
      webEngineeringNamePlate06 = await WA.room.website.get('name-plate-eng-6');
      webEngineeringNamePlate06.visible = false;
      webEngineeringNamePlate07 = await WA.room.website.get('name-plate-eng-7');
      webEngineeringNamePlate07.visible = false;
    } catch(err: any) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }

    try {
      webHumanServicesNamePlate01 = await WA.room.website.get('name-plate-hs-1');
      webHumanServicesNamePlate01.visible = false;
      webHumanServicesNamePlate02 = await WA.room.website.get('name-plate-hs-2');
      webHumanServicesNamePlate02.visible = false;
      webHumanServicesNamePlate03 = await WA.room.website.get('name-plate-hs-3');
      webHumanServicesNamePlate03.visible = false;
      webHumanServicesNamePlate04 = await WA.room.website.get('name-plate-hs-4');
      webHumanServicesNamePlate04.visible = false;
      webHumanServicesNamePlate05 = await WA.room.website.get('name-plate-hs-5');
      webHumanServicesNamePlate05.visible = false;
      webHumanServicesNamePlate06 = await WA.room.website.get('name-plate-hs-6');
      webHumanServicesNamePlate06.visible = false;
      webHumanServicesNamePlate07 = await WA.room.website.get('name-plate-hs-7');
      webHumanServicesNamePlate07.visible = false;
    } catch(err: any) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }


    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    // Julia CC custom 
    WA.room.onEnterLayer("floor").subscribe(() => {
        if(webBussinesPoster01) {
          webBussinesPoster01.visible = true;
        }
        if(webBussinesPoster02) {
          webBussinesPoster02.visible = true;
        }  
        if(webBussinesPoster03) {
          webBussinesPoster03.visible = true;
        }
        if(webBussinesPoster04) {
          webBussinesPoster04.visible = true;
        }
        if(webBussinesPoster05) {
          webBussinesPoster05.visible = true;
        }
        if(webBussinesPoster06) {
          webBussinesPoster06.visible = true;
        }
        if(webBussinesPoster07) {
          webBussinesPoster07.visible = true;
        }
        if(webBussinesPoster07) {
          webBussinesPoster07.visible = true;
        }
        if(webBussinesNamePlate01) {
          webBussinesNamePlate01.visible = true;
        }
        if(webBussinesNamePlate02) {
          webBussinesNamePlate02.visible = true;
        }
        if(webBussinesNamePlate03) {
          webBussinesNamePlate03.visible = true;
        }
        if(webBussinesNamePlate04) {
          webBussinesNamePlate04.visible = true;
        }
        if(webBussinesNamePlate05) {
          webBussinesNamePlate05.visible = true;
        }
        if(webBussinesNamePlate06) {
          webBussinesNamePlate06.visible = true;
        }
        if(webBussinesNamePlate07) {
          webBussinesNamePlate07.visible = true;
        }
      
        if(webEngineeringNamePlate01) {
          webEngineeringNamePlate01.visible = true;
        }
        if(webEngineeringNamePlate02) {
          webEngineeringNamePlate02.visible = true;
        }
        if(webEngineeringNamePlate05) {
          webEngineeringNamePlate05.visible = true;
        }
        if(webEngineeringNamePlate06) {
          webEngineeringNamePlate06.visible = true;
        }
        if(webEngineeringNamePlate07) {
          webEngineeringNamePlate07.visible = true;
        }
      
        if(webHumanServicesNamePlate01) {
          webHumanServicesNamePlate01.visible = true;
        }
        if(webHumanServicesNamePlate02) {
          webHumanServicesNamePlate02.visible = true;
        }
        if(webHumanServicesNamePlate03) {
          webHumanServicesNamePlate03.visible = true;
        }
        if(webHumanServicesNamePlate04) {
          webHumanServicesNamePlate04.visible = true;
        }
        if(webHumanServicesNamePlate05) {
          webHumanServicesNamePlate05.visible = true;
        }
        if(webHumanServicesNamePlate06) {
          webHumanServicesNamePlate06.visible = true;
        }
        if(webHumanServicesNamePlate07) {
          webHumanServicesNamePlate07.visible = true;
        }

        WA.room.hideLayer("roof");
        WA.room.hideLayer("roof-appear");
        WA.room.hideLayer("walls-bg-front");
        WA.room.hideLayer("sign");
      });
      
    WA.room.onLeaveLayer("floor").subscribe(() => {
        if(webBussinesPoster01) {
          webBussinesPoster01.visible = false;
        }
        if(webBussinesPoster02) {
          webBussinesPoster02.visible = false;
        }  
        if(webBussinesPoster03) {
          webBussinesPoster03.visible = false;
        }
        if(webBussinesPoster04) {
          webBussinesPoster04.visible = false;
        }
        if(webBussinesPoster05) {
          webBussinesPoster05.visible = false;
        }
        if(webBussinesPoster06) {
          webBussinesPoster06.visible = false;
        }
        if(webBussinesPoster07) {
          webBussinesPoster07.visible = false;
        }
        if(webBussinesPoster07) {
          webBussinesPoster07.visible = false;
        }
        if(webBussinesNamePlate01) {
          webBussinesNamePlate01.visible = false;
        }
        if(webBussinesNamePlate02) {
          webBussinesNamePlate02.visible = false;
        }
        if(webBussinesNamePlate03) {
          webBussinesNamePlate03.visible = false;
        }
        if(webBussinesNamePlate04) {
          webBussinesNamePlate04.visible = false;
        }
        if(webBussinesNamePlate05) {
          webBussinesNamePlate05.visible = false;
        }
        if(webBussinesNamePlate06) {
          webBussinesNamePlate06.visible = false;
        }
        if(webBussinesNamePlate07) {
          webBussinesNamePlate07.visible = false;
        }

        if(webEngineeringNamePlate01) {
          webEngineeringNamePlate01.visible = false;
        }
        if(webEngineeringNamePlate02) {
          webEngineeringNamePlate02.visible = false;
        }
        if(webEngineeringNamePlate05) {
          webEngineeringNamePlate05.visible = false;
        }
        if(webEngineeringNamePlate06) {
          webEngineeringNamePlate06.visible = false;
        }
        if(webEngineeringNamePlate07) {
          webEngineeringNamePlate07.visible = false;
        }
        
        if(webHumanServicesNamePlate01) {
          webHumanServicesNamePlate01.visible = false;
        }
        if(webHumanServicesNamePlate02) {
          webHumanServicesNamePlate02.visible = false;
        }
        if(webHumanServicesNamePlate03) {
          webHumanServicesNamePlate03.visible = false;
        }
        if(webHumanServicesNamePlate04) {
          webHumanServicesNamePlate04.visible = false;
        }
        if(webHumanServicesNamePlate05) {
          webHumanServicesNamePlate05.visible = false;
        }
        if(webHumanServicesNamePlate06) {
          webHumanServicesNamePlate06.visible = false;
        }
        if(webHumanServicesNamePlate07) {
          webHumanServicesNamePlate07.visible = false;
        }

        WA.room.showLayer("roof");
        WA.room.showLayer("walls-bg-front");
        WA.room.showLayer("facade-furniture-bg");
        WA.room.showLayer("sign");
      });
  
      WA.room.onEnterLayer("rooms_floor").subscribe(() => {
        if(webBussinesNamePlate01) {
          webBussinesNamePlate01.visible = false;
        }
        if(webBussinesNamePlate02) {
          webBussinesNamePlate02.visible = false;
        }
        if(webBussinesNamePlate03) {
          webBussinesNamePlate03.visible = false;
        }

        if(webEngineeringNamePlate01) {
          webEngineeringNamePlate01.visible = false;
        }
        if(webEngineeringNamePlate02) {
          webEngineeringNamePlate02.visible = false;
        }

        if(webHumanServicesNamePlate01) {
          webHumanServicesNamePlate01.visible = false;
        }
        if(webHumanServicesNamePlate02) {
          webHumanServicesNamePlate02.visible = false;
        }
        if(webHumanServicesNamePlate03) {
          webHumanServicesNamePlate03.visible = false;
        }

        WA.room.hideLayer("facade-furniture-fg");
        WA.room.hideLayer("facade");
        WA.room.hideLayer("facade-furniture-bg");
      });
      
    WA.room.onLeaveLayer("rooms_floor").subscribe(() => {
        if(webBussinesNamePlate01) {
          webBussinesNamePlate01.visible = true;
        }
        if(webBussinesNamePlate02) {
          webBussinesNamePlate02.visible = true;
        }
        if(webBussinesNamePlate03) {
          webBussinesNamePlate03.visible = true;
        }

        if(webEngineeringNamePlate01) {
          webEngineeringNamePlate01.visible = true;
        }
        if(webEngineeringNamePlate02) {
          webEngineeringNamePlate02.visible = true;
        }

        if(webHumanServicesNamePlate01) {
          webHumanServicesNamePlate01.visible = true;
        }
        if(webHumanServicesNamePlate02) {
          webHumanServicesNamePlate02.visible = true;
        }
        if(webHumanServicesNamePlate03) {
          webHumanServicesNamePlate03.visible = true;
        }

        WA.room.showLayer("facade-furniture-fg");
        WA.room.showLayer("facade");
        WA.room.showLayer("facade-furniture-bg");
      });



    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

     // Victor Quest

     WA.room.onEnterLayer("hercules-quest-1").subscribe( async () => {
      await levelUp("HERCULES_QUEST_1", 10);
      console.log('Quest works!');
      });  

    WA.room.onEnterLayer("hercules-quest-2").subscribe( async () => {
          await levelUp("HERCULES_QUEST_2", 10);
          console.log('Quest works!');
          });  

    WA.room.onEnterLayer("hercules-quest-3").subscribe( async () => {
          await levelUp("HERCULES_QUEST_3", 10);
          console.log('Quest works!');
          });          

    WA.room.onEnterLayer("hercules-quest-4").subscribe( async () => {
          await levelUp("HERCULES_QUEST_4", 10);
          console.log('Quest works!');
          });       
          
    WA.room.onEnterLayer("hercules-quest-5").subscribe( async () => {
          await levelUp("HERCULES_QUEST_5", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-6").subscribe( async () => {
          await levelUp("HERCULES_QUEST_6", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-7").subscribe( async () => {
          await levelUp("HERCULES_QUEST_7", 10);
          console.log('Quest works!');
          });
  
    WA.room.onEnterLayer("hercules-quest-8").subscribe( async () => {
          await levelUp("HERCULES_QUEST_8", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-9").subscribe( async () => {
            await levelUp("HERCULES_QUEST_9", 10);
            console.log('Quest works!');
            });
    
    WA.room.onEnterLayer("hercules-quest-10").subscribe( async () => {
          await levelUp("HERCULES_QUEST_10", 10);
          console.log('Quest works!');
          });

    WA.room.onEnterLayer("hercules-quest-11").subscribe( async () => {
      await levelUp("HERCULES_QUEST_11", 10);
      console.log('Quest works!');
      });

    WA.room.onEnterLayer("hercules-quest-12").subscribe( async () => {
        await levelUp("HERCULES_QUEST_12", 10);
        console.log('Quest works!');
        });

        // Victor Popup

      WA.room.onEnterLayer('hercules-quest-1').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-1","Labors of Hercules\n1. The Nemean Lion",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-1').subscribe(closePopup)
  
        WA.room.onEnterLayer('hercules-quest-2').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-2","Labors of Hercules\n2. The Lernaean Hydra",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-2').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-3').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-3","Labors of Hercules\n3. The Hind of Ceryneia",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-3').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-4').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-4","Labors of Hercules\n4. The Erymanthian Boar",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-4').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-5').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-5","Labors of Hercules\n5. The Augean Stables",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-5').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-6').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-6","Labors of Hercules\n6. The Stymphalian Birds",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-6').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-7').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-7","Labors of Hercules\n7. The Cretan Bull",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-7').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-8').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-8","Labors of Hercules\n8. The Horses of Diomedes",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-8').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-9').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-9","Labors of Hercules\n9. The Belt of Hippolyte",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-9').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-10').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-10","Labors of Hercules\n10. Geryon's Cattle",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-10').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-11').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-11","Labors of Hercules\n11. The Apples of the Hesperides",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-11').subscribe(closePopup)  
  
        WA.room.onEnterLayer('hercules-quest-12').subscribe(() => {
        currentPopup = WA.ui.openPopup("hercules-banner-12","Labors of Hercules\n12. Cerberus",[]);
    })
    WA.room.onLeaveLayer('hercules-quest-12').subscribe(closePopup)

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
//////// Tracking Ping Script

async function sendPlayerData(firstPing: boolean) {
    const WEBHOOK_URL = "https://apps.taskmagic.com/api/v1/webhooks/fAMWFBR7C00th7adAaD5g";
    const { uuid: id, name } = WA.player;
    if (!id || !name) {
      console.error("Invalid player data");
      return;
    }
    const roomId = WA.room.id;
    const timestamp = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })).getTime();
    const payload = { id, name, roomId, firstPing, timestamp };
    const fetchWithTimeout = (url: string, options: RequestInit, timeout = 5000): Promise<Response> =>
      Promise.race([
        fetch(url, options),
        new Promise<Response>((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), timeout)
        ),
      ]);
    try {
      const response = await fetchWithTimeout(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
WA.onInit().then(() => {
    if (WA.player.tags.includes("bot")) return;
    let firstPing = true;
    sendPlayerData(firstPing);
    firstPing = false;
    setInterval(() => {
        sendPlayerData(firstPing);
    }, 300000);
});
//// End of Tracking Ping Script
export {};
