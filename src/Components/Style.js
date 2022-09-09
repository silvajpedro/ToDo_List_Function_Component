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
@media (min-width: 1700px) {
 font-size: 50px;
}
}
span{
  position: relative;
  top: -19.5vh;
  background-color: #4DB876;
  width: 16.2vw;
  height: 0.6vh;
  border-radius:5px;
  transition: ease-in-out 0.5s;
}
@media (min-width: 1700px) {
  span{
    top:-19vh;
    width: 17vw;
  }
}
`
export const AddBox = styled.div`
position: relative;
top: -16vh;
width: 46vw;
height: 20vh;
button{
    box-shadow: 2px 2px;
    font-size: 22px;
    height: 6.5vh;
    width: 28vw;
    border-radius:5px;
    background-color: #4DB876;
    cursor: pointer;
    font-weight: 700;
    &:hover{
        transform: scale(106%);
    }
}
@media (min-width: 1700px) {
 height:25vh ;
 button{
  position: relative;
  top: 1.5vh;
  height: 8vh;
  font-size: 24px;
 }
}
form{
 display: flex;
 align-items: center;
 flex-direction: column;
}
`
export const InputBox = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 44vw;
height: 11vh;
input{
  position: relative;
  left: 1.3vw;
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
        color: #ffff;
    }
    &:focus{
      border: none;
      outline: solid #4DB876 3px;
    }
    @media (min-width: 1700px) {
      height: 9.5vh;
      &::placeholder{
        font-size: 28px;
    }
    }
}
img{
    position: relative;
    left: 1vw;
    height: 8vh;
    cursor: pointer;
    transition: ease-in-out 0.5s;
    @media (min-width: 1700px) {
      height: 9.5vh;
    }
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
export const CaixaTarefas = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
position: absolute;
top: 52vh;
width:50%;
gap: 14px;
section{
  position: relative;
  border-radius:5px;
  display: flex;
  height: 14vh;
  width: 48vw;
  background-color: #262626;
  transition: ease-in-out 0.5s;
  &:hover{
    background-color: #414041;
  }
}
p{
  width: 50vw;
  display: flex;
  align-items: center;
  height: 13vh;
  color: white;
  font-size: 32px;
  padding-left: 10px;
  @media (min-width: 1700px) {
    font-size: 36px;
    }
}
div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  right: 0.5vw;
  width: 8.5vw;
}
.checkImage, .removeImage{
  position: relative;
  z-index: 10;
  height: 8.4vh;
  cursor: pointer;
  transition: ease-in-out 0.5s;
  top: 0.2vh;
  &:hover{
   top:-0.5vh;
   height:8.6vh;
  }
}
.checkImage{
  left: -0.3vw;
}
`