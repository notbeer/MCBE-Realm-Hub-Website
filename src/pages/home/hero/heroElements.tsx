import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Hero = styled.div`
    background: linear-gradient(to bottom, rgba(48, 48, 48, 0.4) 0%, rgba(48, 48, 48, 1) 100%), url(${process.env.PUBLIC_URL + '/images/home/home-bg-1.jpg'});
    background-size: cover;
    background-position: 50% 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110vh;
`;

export const HeroContent = styled.div`
    text-align: center;
`;
export const HeroTitle = styled.h1`
    color: #fff;
    font-weight: 400;
    font-size: 2.4rem;
    //margin-bottom: 1rem;
    &:after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 120px;
        padding-top: 1px;
        border-bottom: 2px solid #fdd25c;
    }
    @media (max-width: 960px) {
        font-size: 1.8rem;
        margin-bottom: 0.8rem;
        &:after {
            width: 90px;
        }
    }
    @media (max-width: 600px) {
        font-size: 1.6rem;
        margin-bottom: 0.8rem;
        &:after {
            width: 80px;
        }
    }
`;
export const HeroDescription = styled.p`
    color: #c7c7c7;
    font-size: 1.3rem;
    font-weight: 200;
    margin-bottom: 7rem;
    @media (max-width: 960px) {
        font-size: 1.1rem;
    }
    @media (max-width: 600px) {
        font-size: 1rem;
        max-width: 500px;
    }
`;

export const DownIcon = styled(ExpandMoreIcon)`
    color: #fff;
    line-height: 100px;
    font-size: 2rem;
`;