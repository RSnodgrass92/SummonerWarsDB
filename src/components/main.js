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
                    <div className="col-3 d-none d-lg-block">
                            <SideBar />
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
