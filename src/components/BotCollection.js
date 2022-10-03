import React from "react";
import BotCard from "./BotCard";

// Passing props
function BotCollection({bots, addBot, dischargeBot}) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
        <BotCard bot={bot} botCard={addBot} handleDischarge={dischargeBot}/>
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
