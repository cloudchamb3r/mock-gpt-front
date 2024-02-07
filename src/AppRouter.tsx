import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MockGpt } from "./MockGpt";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MockGpt/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export {AppRouter};