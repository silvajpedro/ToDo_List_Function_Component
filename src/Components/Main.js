import React, { useState } from "react";
import * as S from "./Style.js"
import { createGlobalStyle } from "styled-components";
import removeTudo from "../assets/removetudo.png"

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  background-color: #2B2D42;
}
`
export default function Mainbox() {
  const [tarefas, setTarefas] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState([])
  const tarefa = { tarefa: tarefas, id: Date.now() };
  console.table(listaDeTarefas)
  return (
    <>
      <GlobalStyle />
      <S.Main>
        <h1><i>ToDo List</i></h1>
        <span></span>
        <S.AddBox>
          <S.InputBox>
            <input onChange={(e) => { setTarefas(e.target.value) }} value={tarefas} placeholder="Digite sua Tarefa" />
            <img src={removeTudo} />
          </S.InputBox>
          <button onClick={() => {
            if (tarefas !== "") {
              setListaDeTarefas([...listaDeTarefas, tarefa])
              setTarefas('')
            }
          }}>Adicionar Tarefa</button>
        </S.AddBox>
        <S.CaixaTarefas>
          {listaDeTarefas.map((item)=>(
            <div>
              <p>{item.tarefa}</p>
            </div>
              ))}
              </S.CaixaTarefas>
      </S.Main>
    </>
  )
}