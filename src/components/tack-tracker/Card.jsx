import {Link} from "react-router-dom";

export default function Card ({text, id}) {
    return (

            <div className="bg-white text-[18px] max-h-screen p-2 m-2 w-auto rounded-[5px] text-gray-700  hover:text-black">
                <Link to={`/task/${id}`}>
                    <p>{text}</p>
                </Link>
            </div>
    )
}
