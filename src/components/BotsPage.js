import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //(start here with your code for step one)

  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  // Fetch request
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(bots => setBots(bots))
  }, []);

  // Func. to add bot
  function addBotToArmy(botData){
    if(!botArmy.find(bot => bot === botData)){
      const selectBot = bots.find(bot => bot === botData)
      setBotArmy([...botArmy, selectBot])
    } 
  }

  // Func. to release bot 
  function releaseBotFromArmy(botData){
    if(botArmy.find((bot) => bot === botData)){
      const relBots = bots.filter(bot => bot !== botData)
      const relBotArmy = botData.filter(bot => bot !== botData)
  
      setBots(relBots)
      setBotArmy(relBotArmy)
  
      fetch(`http://localhost:8002/bots/${botData.id}`, {
        method: "DELETE"
      })
    }
  }

  // Func. to discharge bot
  function dischargeBot(botData) {
    const botList = botArmy.filter((bot)=> bot !== botData)
    setBotArmy(botList)
  }

  return (
    <div>
      <YourBotArmy 
      botArmy={botArmy} 
      removeBot={dischargeBot}
      dischargeBot={releaseBotFromArmy} />
      <BotCollection
      bots={bots}
      addBot={addBotToArmy}
      dischargeBot={releaseBotFromArmy} />
    </div>
  )
}

export default BotsPage;
