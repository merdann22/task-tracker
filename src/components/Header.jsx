import {Link} from 'react-router-dom';
import ProfileMenu from "./tack-tracker/ProfileMenu";

export default function Header() {
    return (
        <div className="lg:bg-[#0067A3] m-auto w-full">
            <div className="flex items-center px-5 py-2 justify-between w-full max-w-[1235px] mx-auto">
                <Link to="/profile"><h1 className="text-2xl text-white hidden lg:block">Awesome Kanban Board</h1></Link>
                <ProfileMenu/>
            </div>

        </div>
    );
}