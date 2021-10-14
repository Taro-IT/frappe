import React from "react";
import { AppProps } from 'next/app';
import {AuthUserProvider} from "../context/AuthUserContext";
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'

import './styles.scss';

const navigation = [
  { name: 'Ordenes', icon: HomeIcon, href: '#', current: true },
  { name: 'Catalogo', icon: FolderIcon, href: '#', current: false },
  { name: 'Usuarios', icon: UsersIcon, href: '#', current: false },
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

const CinicaApp = ({ Component, pageProps }: AppProps) => (
  <div className="flex flex-col flex-grow border-r border-black pt-5 pb-4 bg-black overflow-y-auto">

    {/* Logo */}
      <div className="flex items-center flex-shrink-0 px-4 space-y-5">
        <img
          className="h-8 w-auto"
          src="/img/cinica-logo.png"
          alt="Workflow"
        />
      </div>

      {/* Content */}
      <div className="mt-5 flex-grow flex flex-col">

        {/* Item */}
        <nav className="flex-1 bg-black space-y-1" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-50 border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-3 py-2 text-sm font-medium border-l-4'
              )}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
);

export default CinicaApp;
