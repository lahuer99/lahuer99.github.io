import React from 'react'
import SkillEl from './SkillEl';
import SkillTile from './SkillTile';

const Skills = () => {
    const skillist=['Java', 'J2EE','Spring MVC', 'Spring Boot', 'ReactJs', 'SQL', 'MongoDB','Javascript', 'Tomcat','Servlets','JSP', 'Maven', 'NodeJs', 'Powershell', 'Python', 'CSS3', 'Vim'];
  return (
    <div className='mx-auto max-w-screen-xl h-screen flex flex-col justify-center snap-center font-mono' id='skills'>
        <div className='text-gray-900 font-semibold text-4xl uppercase mx-auto'>Skills</div>
        <p className="text-center text-purple-700 font-extrabold text-3xl my-0 py-0">
        ____
      </p>
        <ul className='flex flex-row justify-center align-top flex-wrap mx-auto my-6 max-w-md'>
            {/* <SkillEl skillist={skillist}/> */}
            <SkillTile skilllist={skillist}/>
        </ul>
    </div>
  )
}

export default Skills