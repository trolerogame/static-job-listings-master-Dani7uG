import styled from 'styled-components'
import bgHeaderDesktop from '../../public/bg-header-desktop.svg'
import bgHeaderMobile from '../../public/bg-header-mobile.svg'
export const Header = styled.div`
    box-sizing: border-box;
    height:120px;
    width:100%;
    background:hsl(180, 29%, 50%) url(${bgHeaderMobile})  no-repeat;
    background-size: cover;
    position:relative;
    display: flex;
    justify-content: center;
    z-index:10;
    @media (min-width: 780px){
        background-image: url(${bgHeaderDesktop});
        height:200px;
    }
`

export const FilterStyle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    overflow-y: auto;
    height: 100px;
    width: 90%;
    border-radius: 5px;
    background:#fefefe;
    position:absolute;
    bottom:-30px;
    box-shadow: -2px 13px 57px -27px rgb(106,158,154);
        -webkit-box-shadow: -2px 13px 57px -27px rgb(106,158,154);
        -moz-box-shadow: -2px 13px 57px -27px rgb(106,158,154);
    @media (min-width: 768px) {
        width:745px;
    }
    @media (min-width: 820px){
        width:845px;
    }
    @media (min-width: 920px){
        width:945px;
    }
`
export const Clear = styled.button`
    border:none;
    outline:none;
    font-weight: 700;
    font-size:15px;
    background:none;
    color:hsl(180, 8%, 52%);
    padding:20px 20px 20px 0px;
    cursor:pointer;
    transition:all .1s linear;
    &:hover{
        text-decoration:underline;
        color:rgb(106,158,154);
    }
`

export const ContainFilterSkills = styled.div`
    display: grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:5px;
    @media (min-width:768px){
        grid-template-columns:repeat(8,1fr);   
    }
` 
export const FilterSkill = styled.div`
    display:flex;
    margin:20px;
    align-items:center;
`

export const FilterText = styled.p`
    font-size: 14px;
    background:hsl(180, 31%, 95%);
    color:rgb(106,158,154);
    font-weight: 700;
    border-radius: 0px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border:none;
    outline:none;
    padding:8px 5px;
    cursor:pointer;
    transition:all .1s linear;
    &:hover{
        color:hsl(180, 31%, 95%);
        background:rgb(106,158,154);
    }
`

export const FilterDelete = styled.button`
    border:none;
    outline:none;
    border-radius: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color:hsl(180, 14%, 20%);
    height:33px;
    width: 33px;
    color:#fefefe;
    font-size: 17px;
    font-weight: 700;
    cursor:pointer;
`