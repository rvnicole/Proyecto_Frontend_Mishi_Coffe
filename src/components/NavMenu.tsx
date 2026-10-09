import { Link } from "react-router-dom";
import Filters from "./Filters";

export default function NavMenu() {
    return (
        <nav className="sticky top-0 z-40 w-full p-3">
            <div className="flex justify-between items-center bg-bg-nav/60 backdrop-blur-sm py-3 px-5 rounded-lg md:rounded-full flex-col md:flex-row">
                <h1 className="text-text-primary text-xl font-bold">
                    <Link to="/">Mishi Coffe</Link>
                </h1>

                <Filters />

                <div>
                    User
                </div>
            </div>
        </nav>
    )
}