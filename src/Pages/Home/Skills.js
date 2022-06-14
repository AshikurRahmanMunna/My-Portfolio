import React, { useEffect, useState } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('skills.json')
        .then(res => res.json())
        .then(data => setSkills(data))
    }, [])
    return (
        <div id='skills'>
            <h2 className='text-5xl lg:mt-0 mt-10 text-white text-center mb-4 border-b-secondary font-raleway font-bold'>Ski<span className='text-primary'>lls</span></h2>
            <div className='grid lg:grid-cols-6 grid-cols-2 gap-4 container px-6 mx-auto lg:px-12'>
                {
                    skills.map(skill => <Skill key={skill.id} skill={skill} />)
                }
            </div>
        </div>
    );
};

export default Skills;