import React, { useState } from "react";
import * as S from "./Style.js"
import { createGlobalStyle } from "styled-components";
import removeTudo from "../assets/removetudo.png"
import check from "../assets/add.png"
import remove from "../assets/remove.png"
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #2B2D42;
  
}
body::-webkit-scrollbar {
  width: 10px;               
}

body::-webkit-scrollbar-track {
  background: #000000;        
}

body::-webkit-scrollbar-thumb {
  background-color:#4DB876;  
  border-radius: 20px;       
}
`
export default function Mainbox() {
  const [tarefas, setTarefas] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState([])
  const tarefa = { tarefa: tarefas, id: Date.now() };
  console.table(listaDeTarefas)

  const removerTudo = () => {
    setListaDeTarefas(listaDeTarefas.filter((item) => item.listaDeTarefas))
  }
  return (
    <>
      <GlobalStyle />
      <S.Main>
        <h1><i>ToDo List</i></h1>
        <span></span>
        <S.AddBox>
          <S.InputBox>
            <input maxlength="32" onChange={(e) => { setTarefas(e.target.value) }} value={tarefas} placeholder="Digite sua Tarefa" />
            <img src={removeTudo} style={listaDeTarefas.length > 1 ? { height: '7.5vh' } : { height: '0vh' }} onClick={removerTudo} />
          </S.InputBox>
          <button onClick={() => {
            if (tarefas !== "") {
              setListaDeTarefas([...listaDeTarefas, tarefa])
              setTarefas('')
            }
          }}>Adicionar Tarefa</button>
        </S.AddBox>
        <S.CaixaTarefas>
          {listaDeTarefas.map((item) => (
            <section>
              <p>{item.tarefa}</p>
              <div>
              <img className="checkImage" src={check} alt="Checar tarefa" />
              <img className="removeImage" src={remove} alt="Remover tarefa"/>
              </div>
            </section>
          ))}
        </S.CaixaTarefas>
      </S.Main>
    </>
  )
}