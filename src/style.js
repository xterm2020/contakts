import styled from 'styled-components'

export const Listofposts = styled.div`
    width: 870px;
    height: 770px;
    border-radius: 40px;
    background: ${props => props.primary ? "#333348" : "palevioletred"};
`
export const Contakt = styled.div`
margin-left: 225px;
width: 1470px;
height: 770px;
justify-content: center;
display: flex;
flex-direction: column;
margin-right: 30px;
`
export const Row = styled.div`
  width: ${props => props.primary ? "570px" : "1470px"};
  display: flex;
  flex-direction: row
  `

export const Card = styled.div`  
  width: ${props => props.primary ? "270px" : "420px"};
  height: ${props => props.primary ? "265px" : "370px"};
  border-radius: 40px;
  justify-content: center;
  background-color: #333348;
  margin-right: 30px;
`
export const CartBody = styled.div`  
margin-left: ${props => props.primary ? "37px" : "86px"};
margin-top: 75px;
`
export const Description = styled.p`
  width: ${props => props.primary ? "75px" : "100px"};
  height: ${props => props.primary ? "92px" : "120px"};
  color: #EEEEEE;
  font-family: sora;
  font-weight: 400;
  font-size: ${props => props.primary ? "18px" : "16px"};
  line-height: ${props => props.primary ? "22.68px" : "24px"};
  font-style: normal;
  margin-bottom: 30px;
`

export const Details = styled.button`
color: #EEEEEE;
  font-family: sora;
  font-weight: 600;
  font-size: ${props => props.primary ? "18px" : "24px"};
  font-style: normal;
  line-height: ${props => props.primary ? "22.68px" : "30px"};
  margin-top: 75px;
  border-radius: 40px;
  width: ${props => props.primary ? "196px" : "248px"};
  height: ${props => props.primary ? "55px" : "70px"};
  background-color: #52519D;
  border: none;`

export const Itemtitle = styled.button`
width: 570px;
height: 45px;
margin-top: 10px;
background: transparent;
border-bottom: 3px #4C4c6a;
text-align: left;
font-family: Sora;
line-height:45,36px;
color:#FFFFFF;
`
export const Itembody = styled.p`
width: 570px;
height: 69px;
margin-top: 5px;
margin-bottom: 10px;
`