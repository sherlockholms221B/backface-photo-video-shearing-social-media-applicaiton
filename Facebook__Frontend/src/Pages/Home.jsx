import React, { useEffect, useReducer } from 'react'
import { MdOutlineFacebook } from 'react-icons/md'

import { SideBar, Feeds, Advertisment } from '../Components/index'
import { useGlobalContext } from '../Context/UseContext'
import reducer from '../Reducers/GReducer'

const Home = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const { isLoading, setIsLoading, location } = useGlobalContext()

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  })
  return (
    <>
      {isLoading ? (
        <div className='dark:bg-darkPrimary bg-white text-center flex flex-col items-center justify-center w-screen h-screen'>
          <p className=' text-8xl text-blue-500'>
            <MdOutlineFacebook />
          </p>
          <p className='text-md text-gray-500 absolute bottom-12 '>from</p>
          <h3 className='text-xl text-blue-500 absolute bottom-6 font-extrabold '>
            @santus
          </h3>
        </div>
      ) : (
        <div
          style={{ paddingTop: `${location.height}px` }}
          className=' dark:bg-darkPrimary relative overflow-hidden h-[100vh] w-[100vw] black bg-primary'
          onClick={() => {
            dispatch({
              type: 'come',
              payload: { name: 'chirstsanctus', level: '100 level' },
            })
          }}
        >
          <div className='flex items-strech justify-center mid_small:justify-between w-[100vw] h-[100%]'>
            <div className=' hidden small:flex dark:border-r dark:xl:border-0 dark:border-borderDark  dark:bg-darkSecondary overflow-hidden hover:overflow-auto w-max  bg-white pt-4 pl-2 pr-2  larg:w-[300px] larg:bg-inherit dark:larg:bg-darkPrimary '>
              <SideBar />
            </div>
            <Feeds isNot={true} />
            <Advertisment />
          </div>
        </div>
      )}
    </>
  )
}

export default Home
