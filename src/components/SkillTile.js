import React from 'react'

const SkillTile = ({skilllist}) => {
    const skills=skilllist.map(skill=>(
        <li key={skill} className="text-gray-900 uppercase font-sans font-light hover:text-white border border-gray-800 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            {skill}
        </li>
    ))
  return (
    <>{skills}</>
  )
}

export default SkillTile