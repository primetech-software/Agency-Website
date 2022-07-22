import styled from "styled-components";
import { HeadingH3,flexColumn,flexRow, } from "../cssHelper";
import {FiPlusCircle,FiMinusCircle} from "react-icons/fi";


export const Section = styled.section`
   width: 100vw;
    height: 100%;
    max-width:100%;
`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  max-width:1600px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  margin:5rem auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
  user-select: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
  } ;
`;

export const Faq = styled.div`
 width:100%;
 padding-top:30px;
 padding-bottom:30px;

`;
export const FaqsSection = styled.div`
width:90%;
${flexRow};
border-bottom:1px solid #c4c4c4;
display:flex;
align-items:center;
justify-content: space-between;
transition: all 0.2s ease-in-out;
margin:1rem 0;

@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexRow}
}
`;

export const LeftSection = styled.div`
width:100%;
${flexColumn}
@media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    width:90%;
}
`;

export const FaqIndex = styled.h1`
font-size:50px;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
}
`;
export const FaqQuestion = styled.div`
width:100%;
font-size:25px;
font-weight:600;
letter-spacing:0.8;
margin-top:15px;
display: flex;
align-items: center;
margin-bottom: 2px;
justify-content: space-between;
line-height:140%;
gap:1rem;
cursor: pointer;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    gap:8px;
}
`;
export const FaqAnswer = styled.p`
font-size:20px;
color:#656665;
margin-top:15px;
line-height:140%;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
}
`;
export const Icon = styled.p`
font-size: 40px;
background-color:#000;
padding: 5px 20px;
border-radius: 50%;
color:#fff;
@media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding: 1px 10px;
    margin-bottom:15px;
    font-size:25px;
}

`;

export const FaqHeader = styled.h2`
color: #0D0A19;
line-height:140%;
margin-top: 0 !important;
font-size: 60px;
margin-bottom: 2.5rem;
text-align: center;

@media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
  font-size: 33px;
}
@media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
  font-size: 25px;
}
`;

export const QuestionWrapper = styled.div`
margin-bottom:1rem;`

export const PlusIcon = styled(FiPlusCircle)`
font-size:24px;
min-width:25px;
min-height:25px;
max-width:25.01px;
max-height:25.01px;
margin-left:5px;
opacity:0.9;
color:#1D1A26;
`
export const MinusIcon = styled(FiMinusCircle)`
font-size:24px;
min-width:25px;
min-height:25px;
max-width:25.01px;
max-height:25.01px;
margin-left:5px;
opacity:0.9;
color:#1D1A26;
`