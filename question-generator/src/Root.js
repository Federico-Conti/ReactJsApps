import { Route, Routes,Navigate } from "react-router-dom"
import App from "./App"
import Tutorial from "./pages/Tutorial"
import NavBar from './NavBar';

export function Root() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/pages/Tutorial.js" element={<Tutorial />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}