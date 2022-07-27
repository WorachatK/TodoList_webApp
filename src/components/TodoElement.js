import styled from "styled-components";
 
export const Container = styled.div`
    background-image: url(${({ theme }) => theme.bgd});
    background-repeat: no-repeat;
    background-size: contain;
    height: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 600px){
        background-image: url(${({ theme }) => theme.bgm});
    }
`
export const Wrapper = styled.div`
    width: 500px;

    @media (max-width: 600px){
        width: 100%;
        padding: 0 20px;
    }
    
`
export const Navbar = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;

    @media (max-width: 600px){
        margin-top: 30px;
    }
`
export const Icon = styled.h1`
    
`
export const ChangeTheme = styled.img`
    cursor: pointer;
    height: 100%;
`

export const TodoContainer = styled.div`
    margin-top: 50px;

    @media (max-width: 600px){
        margin-top: 30px;
    }
`
export const AddContainer = styled.div`
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 60px;
    background-color: ${({theme})=>theme.background};
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 10px 20px;

    @media (max-width: 600px){
        height: 50px;
    }
`
export const Check = styled.div`
    border: 2px solid hsl(234, 39%, 85%);
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
    background: ${({completed})=>completed ? (({theme})=>theme.checkcolor):('')};

    @media (max-width: 600px){
        height: 25px;
        width: 25px;
    }

`
export const CheckIcon = styled.img`

`
export const ListInput = styled.input`
    background-color: ${({theme})=>theme.background};
    border: none;
    height: 100%;
    width: 100%;
    color: ${({theme})=>theme.text};
    font-size: 25px;
    outline: none;

    @media (max-width: 600px){
        font-size: 18px;
    }
`
export const ListContainer = styled.div`
    margin-top: 50px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: auto;
    background-color: ${({theme})=>theme.background};
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 600px){
        margin-top: 30px;
    }
`
export const ListItem = styled.div`
    padding: 15px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`
export const TextList = styled.div`
    font-size: 18px;
    height: 100%;
    cursor: pointer;

    color: ${({completed})=> completed ? ({theme})=>theme.hr :''};
    text-decoration: ${({completed})=> completed ? 'line-through':''};
    text-decoration-color: ${({theme})=>theme.text2};
    

    @media (max-width: 600px){
        font-size: 15px;
    }
`
export const CrossIcon = styled.img`
    display: flex;
    justify-self: flex-end;
    cursor: pointer;

    @media (max-width: 600px){
        height: 12px;
        width: 12px;
    }
`
export const Hr = styled.div`
    height: 0.1px;
    width: 100%;
    background-color: ${({theme})=>theme.hr};
`

export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    padding: 10px 20px;
    color: ${({theme})=>theme.text2};
`
export const ItemNumber = styled.div``
export const StatusContainer = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 600px){
        display: none;
    }
`
export const StatusMobile = styled.div`
    color: ${({theme})=>theme.text2};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 50px;
    background-color: ${({theme})=>theme.background};
    border-radius: 10px;
    display: none;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 10px 20px;
    margin-top: 30px;

    @media (max-width: 600px){
        display: flex;
    }
`
export const Status = styled.div`
    cursor: pointer;
    color: ${({status})=> status ? ({theme})=>theme.brightblue:''};

    &:hover{
        color: ${({theme})=>theme.text};
    }
`
export const ClearList = styled.div`
    cursor: pointer;

    &:hover{
        color: ${({theme})=>theme.text};
    }
    @media (max-width: 600px){
        font-size: 15px;
    }
`