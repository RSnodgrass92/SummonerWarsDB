import React, {Component} from "react"
import InfoPane from "./infoPane"
import SideBar from "./sidebar"

class Main extends Component
{
    render()
    {
        return(
            <>
                <div className="container">
                    <div className="row mt-4">
                    <div className="col-3">
                            <SideBar />
                        </div>
                        <div className="col ">
                            <InfoPane />
                        </div>
                    </div>
                </div>
            </>
            )
    }
    
}
export default Main
