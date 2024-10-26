import React from 'react';

interface PropertiesCard {
    title: string,
    content: string,
    icon: string
}

export default function CardOptionButtons ({title, content, icon}:PropertiesCard) {
    return (
        <main>
            <div>
                <button key={title}  type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d={icon}/>
                </svg>
                <b>{title}</b>: {content}
                </button>            
            </div>
        </main>
    );
}