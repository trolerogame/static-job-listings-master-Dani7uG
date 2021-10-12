import React from 'react'
import InfoComp from './InfoComp'
import NewFeatures from './NewFeatures'
import {
    WorkStyle,
    Position,
    Skill,
    ContainSkills,
    Logo,
    Hr,
    LogoInfoContain
    } from '../styles/styleListWork'
const Work = (data) => {
    const {
        featured,company,position,
        postedAt,contract,location,
        role,level,languages,
        tools,logo,filter,
        setFilter
        } = data
    
    const Skills = [role,level,...languages,...tools]

    const addFilter = item =>
        setFilter(Array.from(new Set([...filter,item])))

    return (
        <WorkStyle news={data.new} featured={featured}>
            <LogoInfoContain>
                <Logo src={logo}/>
                <div>
                    <NewFeatures NEW={data.new} featured={featured} company={company}/>
                    <Position>{position}</Position>
                    <InfoComp info={[postedAt,'',contract,'',location]}/>
                    <Hr/>
                </div>
            </LogoInfoContain>
            <ContainSkills>
                {Skills.map(skill =>
                    <Skill 
                        key={skill} 
                        onClick={() => addFilter(skill)}
                    >
                        {skill}
                    </Skill>
                )}
            </ContainSkills>
        </WorkStyle>
    )
}

export default Work
