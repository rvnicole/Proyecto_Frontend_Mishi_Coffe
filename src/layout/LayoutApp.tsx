import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";

export default function LayoutApp() {
    return (
        <div>
            <NavMenu />

            <main className="p-3">
                <Outlet />
            </main>
        </div>
    )
}