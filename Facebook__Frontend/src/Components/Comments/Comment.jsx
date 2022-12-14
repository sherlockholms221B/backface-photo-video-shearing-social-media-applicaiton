import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Comment = ({
  isComment,
  setIsComment,
  profileImage,
  comment,
  createdAt,
  creator,
}) => {
  return (
    <>
      {isComment && (
        <div className='flex flex-row flex-nowrap items-start pl-2 justify-start mt-2 mb-1  '>
          <Link to={`/backface/api/profile`} className='cousor-pointer mr-3 '>
            <img
              src={profileImage}
              alt='profile'
              className='object-cover w-8 h-8 rounded-full'
            />
          </Link>
          <div className='flex flex-col items-start gap-2  mid_small:w-3/4 w-[85%] rounded-lg dark:bg-darkComplementry bg-primary pt-2 pl-2 mid_small:pr-5 pr-3 shadow-lg'>
            <div className='flex flex-col items-start  w-full rounded-lg dark:bg-darkSecondary bg-primary py-2 pl-2 pr-5 shadow-lg'>
              <h2 className='capitalize text-md text-black-200 font-medium mb-1 cursor-pointer dark:text-heading_dark_white'>
                {creator}
              </h2>
              <p className='text-sm text-gray-600 dark:text-heading_dark_gray'>
                {comment}
              </p>
            </div>
            <p className='text-sm text-gray-500 ml-2 dark:text-heading_dark_white'>
              {moment(createdAt).fromNow()}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Comment
