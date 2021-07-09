import Header from "../compts/Header/Header";
import {Route} from "react-router-dom";
import Authorize from "../compts/Authorization/Authorize";
import Registration from "../compts/Registration/Registration";
import TeachersPage from "../teachers/TeachersPage";

const FirstPage = () => {
    return (
        <div>
            <Header/>
            <div className="App">
                <Route path="/authorization" component={Authorize}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/mainPage" component={TeachersPage}/>
            </div>
        </div>
    )
}

export default FirstPage
