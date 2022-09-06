import styled from "styled-components";

export const Main = styled.main`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 99vh;
h1{
    font-family:"Permanent Marker", sans-serif;
    position: relative;
    top: -20vh;
    color: #ffff;
    font-size: 40px;
    animation: shine 1.2s ease-in-out infinite alternate;
    @keyframes shine {
  from {
    text-shadow: 0 0 2px white, 0 0 4px gray, 0 0 6px white, 0 0 8px gray, 0 0 10px white, 0 0 12px gray, 0 0 14px white;
  } to {
    text-shadow: 0 0 4px white, 0 0 8px gray, 0 0 12px white, 0 0 16px gray, 0 0 20px white, 0 0 24px gray, 0 0 28px white;
  }
}
transition: ease-in-out 0.5s;
&:hover, :hover + span{
  transform: scale(105%);
}
}
span{
  position: relative;
  top: -23vh;
  background-color: #4DB876;
  width: 16.2vw;
  height: 0.6vh;
  border-radius:5px;
  transition: ease-in-out 0.5s;
}
`
export const AddBox = styled.div`
position: relative;
top: -20vh;
display: flex;
flex-direction: column;
align-items: center;
width: 46vw;
height: 20vh;
border: solid;
button{
    box-shadow: 2px 2px;
    font-size: 22px;
    height: 6.5vh;
    width: 28vw;
    border-radius:5px;
    background-color: #4DB876;
    cursor: pointer;
    &:hover{
        transform: scale(106%);
    }
}
`
export const InputBox = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 44vw;
height: 11vh;
input{
    height: 50px;
    padding-left: 10px;
    width: 38vw;
    border-radius: 10px;
    border:none;
    background-color: #262626;
    color:#ffff;
    font-size: 25px;
    outline: solid #4DB876 0px;
    transition: ease-in-out 0.2s;
    &::placeholder{
        font-size: 26px;
        color: #ffff;
    }
    &:focus{
      border: none;
      outline: solid #4DB876 3px;
    }
}
img{
    position: relative;
    cursor: pointer;
    height: 8vh;
    &:hover{
      animation: Select 0.5s linear 0s infinite normal none;
      @keyframes Select {
        0%{
          top: 0vh;
          transform: rotate(0deg);
        }
        50%{
          top: -0.2vh;
          transform: rotate(5deg);
        }
        100%{
          transform: rotate(-5deg);
          top:0vh;
        }
      }
    }
}
`