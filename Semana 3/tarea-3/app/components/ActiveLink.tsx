'use client';

import Link from 'next/link';
//import { usePathname } from 'next/navigation';
import React from 'react';

interface PropertiesLink {
    path: string,
    text: string
    icon?: JSX.Element
}

export default function ActiveLink ({path, text, icon}:PropertiesLink) {
    //const pathName = usePathname;
    //console.info(pathName);
    return (
        <div>
            <Link key={path} href={path} className="lock py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
            {icon}&nbsp;
            {text}
            </Link>
        </div>
    );
}