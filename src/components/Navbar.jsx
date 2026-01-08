import React from 'react'
import { navLinks, navIcons } from '#constants';
import dayjs from "dayjs";

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Rakesh's Portfolio</p>

                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({id,img}) =>(
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
                <time>
                    {dayjs().format('ddd MMM D h:mm A')}
                </time>
            </div>
        </nav>
    );
};
export default Navbar
