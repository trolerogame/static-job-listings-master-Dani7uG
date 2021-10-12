import React from 'react'
import { Circle,Info,ContainInfo } from '../styles/styleListWork'
const InfoComp = ({info}) => 
    <ContainInfo>
        {info.map((item,i) => 
            item === '' ? <Circle key={i}/> : <Info key={i}>{item}</Info>
        )}
    </ContainInfo>

export default InfoComp
