import styled,{css} from 'styled-components';


export const ListWorkContainer = styled.ul`
    margin:0 40px 0 40px;
    padding:0;
    padding-top:50px;
    position:relative;
    z-index:1000;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const WorkStyle = styled.li`
    position:relative;
    border-radius:5px;
    width:100%;
    margin:20px;
    padding:20px;
    list-style: none;
    background:hsl(180, 52%, 96%);
    ${props => props.news && props.featured && css`
        border-left: 5px solid rgb(106,158,154);
    `}
    box-shadow: -2px 13px 57px -27px rgb(106,158,154);
        -webkit-box-shadow: -2px 13px 57px -27px rgb(106,158,154);
        -moz-box-shadow: -2px 13px 57px -27px rgb(106,158,154);
    
    @media (min-width: 768px) {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        margin:20px 0;
        width:700px;
    }
    @media (min-width: 820px){
        width:800px;
    }
    @media (min-width: 920px){
        width:900px;
    }
`

export const Company = styled.p`
    color:rgb(106,158,154);
    font-weight: 700;
    margin-right: 10px;
`
export const ContainnewFeatures = styled.div`
    display:flex;
    align-items: center;
    font-size: 15px;
`
export const Label = styled.span`
    font-size:12px;
    color:#fff;
    background-color:${props => props.color};
    border-radius:30px;
    padding:0 10px;
    padding-top:4px;
    height:20px;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin:0 5px;
`

export const Position = styled.p`
    font-size:16px;
    font-weight: 700;
`
export const ContainInfo = styled.div`
    display:flex;
    align-items: center;
    margin-bottom:25px;
`
export const Info = styled.p`
    font-size: 13px;
    color: hsl(180, 8%, 52%);
    margin:0 8px;
`
export const Circle = styled.span`
    border-radius: 50%;
    background-color:hsl(180,8%, 52%);
    width:4px;
    height: 4px;
`
export const Hr = styled.hr`
    @media (min-width: 768px){
        display:none;
    }
`

export const ContainSkills = styled.div`
    margin-top:15px;
    display:grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    @media (min-width: 768px) {
        display:flex;
        flex-direction: row;
    }
`

export const Skill = styled.button`
    background:hsl(180, 31%, 95%);
    color:rgb(106,158,154);
    font-weight: 700;
    border-radius: 5px;
    border:none;
    outline:none;
    padding:5px;
    cursor:pointer;
    transition:all .1s linear;
    &:hover{
        color:hsl(180, 31%, 95%);
        background:rgb(106,158,154);
    }
`
export const LogoInfoContain = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
`
export const Logo = styled.img`
    position: absolute;
    top:-25px;
    width: 50px;
    height: 50px;
    @media (min-width: 768px) {
        position:relative;
        top:0;
        width: 100px;
        height: 100px;
        margin:0 20px 0 0;
    }
`