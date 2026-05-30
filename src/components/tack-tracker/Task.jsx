import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default  function Task ({worked, setWorked}) {

    const {id}= useParams();

    const currentTask = worked.find(item=>item.id === parseInt(id));

    return (
        <div className="p-5">
            <div className="text-black bg-white px-7 py-5 w-full rounded-[5px] relative">
                <h1 className="text-[24px] mb-8">{currentTask.text}</h1>

                <p className="text-[18px] max-w-[600px] mb-8">{currentTask.context}</p>
                <Link className="absolute right-7 top-5" to="/">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.06058" y1="0.353539" x2="24.0606" y2="23.3535" stroke="black"/>
                        <line y1="-0.5" x2="32.5269" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 23.707 0.707092)" stroke="black"/>
                    </svg>
                </Link>
            </div>


        </div>
    )
}