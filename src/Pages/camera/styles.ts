import styled from 'styled-components';

export const Container = styled.div`
    .App{
        min-height: 100vh;
        position: relative;
        background-color: #313131
    }
    .camera{
        position: relative;
    }
    .result{
        position:fixed;
        top: 0;
        left:100%;
        width: 100%;
        height:100%;
        display:flex;
        align-items: center;
        background-color:black;
        transition: 0.4s;
    }
    .result.hasPhoto{
        ledt:0;
    }
    video{
        width: 100%;
        max-width:100%;
        height:auto;
    }
    button{
        position: absolute;
        bottom: 20px;
        left:20px;

        appearance:none;
        boeder: none;
        outline: none;

        padding: 8px 16px;
        background-image: linear-gradient(to right, #844FFF 50%, #FF4F84 50%);
        background-position:0%;
        background-size:200%;
        color:#fff;
        font-size: 24px;
        font-width: 700;
        transition: 0.4s; 
        cursor: pointer;
    }
    button:hover{
        background-position: 100%;
    }
    canvas{
        width: 100%;
        height:auto;
    }
`;