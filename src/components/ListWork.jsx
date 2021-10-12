import React from 'react'
import { ListWorkContainer } from '../styles/styleListWork'
import Work from './Work'
const ListWork = ({data,filter,setFilter}) => {
    const filterSkills = item => {
        const {role,level,languages,tools} = item
        let filterPass = true
        let skills = [role,level,...languages,...tools]
        for(let i of filter) {
            if(!skills.includes(i)){
                filterPass = false
                break
            }
        }
        return filter.length !== 0 ? filterPass : item
    }

    return (
        <ListWorkContainer>
            {data.filter(filterSkills).map(work => 
                <Work 
                    key={work.id} 
                    {...work}
                    filter={filter}
                    setFilter={setFilter}
                />
            )}
        </ListWorkContainer>
    )
}

export default ListWork
