import Link from "next/link";
import { Fragment } from "react";

export default function Navigation(){
    return(
        <Fragment>
            <ul className="flex bg-red-300">
                <li className="mr-6 px-4 my-5 font-bold hover:text-white">
                    <Link href="/">To Do App</Link>
                </li>
                <li className="mr-6 px-4 my-5 font-bold hove:text-white">
                    <Link href="/add-to-do">Add To Do</Link>
                </li>
            </ul>
        </Fragment>
    )
}