import React from 'react'
import { FilterStyle,Clear,ContainFilterSkills,FilterSkill,FilterText,FilterDelete } from '../styles/styleHeader'
const Filter = ({filter,setFilter}) => {

    const delelteFitler = (itemDelete) => 
        setFilter(filter.filter(item => item != itemDelete)) 

    return (
        <FilterStyle>
            <ContainFilterSkills>
                {filter.length !== 0 && filter.map((fil,i) => 
                    <FilterSkill key={i} >
                        <FilterText>{fil}</FilterText>
                        <FilterDelete 
                            onClick={() => delelteFitler(fil)}
                        >
                            X
                        </FilterDelete>
                    </FilterSkill>
                )}
            </ContainFilterSkills>
            <Clear onClick={() => setFilter([])}>Clear</Clear>
        </FilterStyle>
    )
}

export default Filter
