import {Route, Routes} from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import {DataProvider} from "./context/DataContext.tsx";

import "./assets/scss/styles.scss";
import SensorsList from "./components/SensorsList.tsx";
import SensorDetail from "./components/SensorDetail.tsx";

function App() {

    return (
        <DataProvider>
            <Routes>
                <Route path="/" element={<PageLayout/>}>
                    <Route index element={<SensorsList/>}/>
                </Route>
                <Route path="/detail/:id" element={<PageLayout/>}>
                    <Route index element={<SensorDetail/>}/>
                </Route>
            </Routes>
        </DataProvider>
    )
}

export default App
