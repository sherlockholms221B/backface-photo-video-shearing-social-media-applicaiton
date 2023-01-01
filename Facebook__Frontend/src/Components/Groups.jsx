import React from 'react'
import { MdGroups } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { groupsLinks } from '../utils/links'
import { Active } from './index'
import { useGlobalContext } from '../Context/UseContext'

const Groups = ({ isMbar, barHarder, barContainer, roundedIcon }) => {
  const { dynamicLocation } = useGlobalContext()
  return (
    <>
      {groupsLinks.map(({ img, name }) => (
        <Link
          onMouseOver={(e) => {
            const element = e.target.getBoundingClientRect()
            dynamicLocation({
              left: element.right,
              center: (element.top + element.bottom) / 2,
            })
          }}
          to={`/backface/api/profile`}
          key={name}
          className={` ${
            !isMbar ? '' : 'pl-2'
          } relative  larg:dark:hover:bg-darkComplementry larg:hover:bg-primary hover:bg-inherit  mb-0.5 flex flex-row gap-2 items-center w-full py-2 rounded-md`}
        >
          <img
            onMouseOver={(e) => e.stopPropagation()}
            src={img}
            alt='profile'
            className='object-cover w-6 h-6 rounded-lg'
          />
          {isMbar && (
            <h3
              onMouseOver={(e) => e.stopPropagation()}
              className={`dark:text-white hidden larg:block text-md font-semibold text-gray-900 `}
            >
              {name}
            </h3>
          )}
        </Link>
      ))}
      <Link
        to={`?talling=${`groups`}`}
        className={` ${barContainer} ${!isMbar ? '' : 'larg:pl-1'}  p-0 py-2 `}
      >
        <p
          className={`${roundedIcon} ${
            !isMbar ? '' : 'larg:-ml-0 larg:p-2'
          } text-lg -ml-1 p-2 `}
        >
          <MdGroups />
        </p>
        {isMbar && <p className={barHarder}>Groups</p>}
        <Active queryTerm={`groups`} homeTerm={null} />
      </Link>
    </>
  )
}

export default Groups
