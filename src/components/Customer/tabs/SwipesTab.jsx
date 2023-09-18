import React from "react";
import './stylesheets/tabs.css'
import InputCom from "../../Helpers/InputCom";
import Advanced from "../../Tinder/advanced";

export default function SwipesTab() {
  return (
    <>
      <div className="relative w-full overflow-x-auto sm:rounded-lg orders">
        <h2>Swipes</h2>
        <Advanced/>
      </div>
    </>
  );
}
