import { useState } from "react";

import "../../bootstrap.min.css"
// import "../../font-awesome-all.min.css"
import "../../charts.min.css"
import "../../datatables.min.css"
import "../../jvector-map.css"
import "../../slickslider.min.css"
import "../../jquery-ui.css"
import "../../reset.css"
import "../../style.css"
// import "../../style.css"


export default function DashboardLayout({ children, childrenClasses }) {
 
  return (
    <>

      {/* <div className="w-full overflow-x-hidden"> */}
      {children && children}
        {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}
