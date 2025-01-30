import React from 'react';
import SkillCard from './SkillCard';

function Skills({ skills }) {
return (
    <div className="flex flex-wrap align-center justify-center max-w-5xl mx-auto mt-8">
        {skills.map((skill) => {
            return (
                <SkillCard key={skill.skillName} skillName={skill.skillName} skillIcon={skill.skillIcon} />
            );
        })}
    </div>
);
}

export default Skills;
