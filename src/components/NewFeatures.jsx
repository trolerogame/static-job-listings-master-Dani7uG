import React from 'react'
import {Company,Label,ContainnewFeatures,} from '../styles/styleListWork'

const NewFeatures = ({company,NEW,featured}) =>
    <ContainnewFeatures>
        <Company>{company}</Company>
        {NEW && <Label color='rgb(106,158,154)'>NEW!</Label>}
        {featured && <Label color='#111'>FEATURED</Label>}
    </ContainnewFeatures>

export default NewFeatures
