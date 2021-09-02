import React, {Component} from "react"
import InfoPane from "./infoPane"
import FactionSelect from "./factionSelect"

class Main extends Component
{
    render()
    {
        return(
            <>
                <div className="container-fluid">
                    <div className="row mt-4">
                    <div className="col-3 d-none d-lg-block">
                            <FactionSelect />
                        </div>
                        <div className="col-lg-9 col-12">
                            <InfoPane />
                        </div>
                    </div>
                </div>
            </>
            )
    }
    
}
export default Main
