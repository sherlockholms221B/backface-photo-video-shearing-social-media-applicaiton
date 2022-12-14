import React from 'react'

import { useGlobalContext } from '../Context/UseContext'

const MegWrapper = (Component) =>
  function HOC() {
    const {
      createPostState,
      addToYourState,
      postAudienceState,
      tagPeopleState,
      notificationState,
      messageState,
      profileState,
      settingsState,
      displayState,
      feedbackState,
      supportState,
    } = useGlobalContext()
    return (
      <>
        {(createPostState ||
          addToYourState ||
          postAudienceState ||
          feedbackState ||
          tagPeopleState) && (
          <div className='flex justify-center items-center absolute top-0 backdrop-blur-sm right-0  z-30 h-screen w-screen'>
            <div
              className={`w-520 ml-6 h-max bg-white dark:bg-darkSecondary rounded-lg shadow-black `}
            >
              <Component />
            </div>
          </div>
        )}
        {(messageState ||
          notificationState ||
          profileState ||
          settingsState ||
          displayState ||
          supportState) && (
          <div className='absolute bottom-0 mid_small:bottom-auto mid_small:top-10 mid_small:right-10 z-20 mid_small:rounded-lg rounded-b-lg w-full mid_small:w-[380px] bg-white dark:bg-darkSecondary shadow-lg border-2 dark:border-borderDark mid_small:border-0'>
            <div
              className={`${
                profileState
                  ? 'min-w-210 w-full mid_small:w-[380px] h-fit rounded-lg p-4 overflow-hidden'
                  : 'min-w-210 w-full mid_small:w-[380px] h-fit rounded-lg overflow-hidden'
              }`}
            >
              <Component />
            </div>
          </div>
        )}
      </>
    )
  }

export default MegWrapper
