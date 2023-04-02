import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];
    return (
        <div className=' bg-slate-400'>
            <div onClick={()=>setOpen(!open)} className=' md:hidden p-2'>
            <span  >{
                open === true ? 
                <XMarkIcon className="w-10 text-slate-900"></XMarkIcon>:
                <Bars3Icon className="w-10 text-slate-900" /> 

            }

            </span>

            </div>
            <ul className={`text-2xl absolute md:static duration-700 font-semibold p-5 md:flex justify-center gap-6 w-full  bg-slate-400 ${open ? 'top-12' : '-top-96' }`}>
                {
                    routes.map(route => <Link
                    key={route.id}
                    route = {route}
                    ></Link> )
                }
            </ul>
        </div>
    );
};

export default Navbar;