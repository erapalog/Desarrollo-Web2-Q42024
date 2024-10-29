import React from 'react';

interface PropertiesCard {
    title: string,
    content: string,
    icon?: JSX.Element
}

export default function CardOptionButtons ({title, content, icon}:PropertiesCard) {
    return (
        <main>
            <div>
                <button key={title}  type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                {icon}&nbsp;
                <b>{title}</b>: {content}
                </button>            
            </div>
        </main>
    );
}