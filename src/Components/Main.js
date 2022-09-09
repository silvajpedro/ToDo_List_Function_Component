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
  const checarTarefa = (id, index) => {
    listaDeTarefas.forEach((item) => {
      const linha = document.getElementById(item.id)
      if (item.id === id) {
        linha.style.textDecoration = "line-through red 3px"
      }
    })
  }

  const removerTarefa = (id) => {
    setListaDeTarefas(listaDeTarefas.filter((item) =>{
      return item.id !== id
    }))
  } 

  return (
    <>
      <GlobalStyle />
      <S.Main>
        <h1><i>ToDo List</i></h1>
        <span></span>
        <S.AddBox>
          <form onSubmit={(e)=> e.preventDefault()}>
          <S.InputBox  >
            <input maxlength="32" onChange={(e) => { setTarefas(e.target.value) }} value={tarefas} placeholder="Digite sua Tarefa" />
            <img src={removeTudo} style={listaDeTarefas.length > 1 ? { height: '7.5vh' } : { height: '0vh' }} alt="icone remover todas as tarefas" onClick={()=>{removerTudo()}} />
          </S.InputBox>
          <button onClick={() => {
            if (tarefas !== "") {
              setListaDeTarefas([...listaDeTarefas, tarefa])
              setTarefas('')
            }
          }}>Adicionar Tarefa</button>

          </form>
        </S.AddBox>
        <S.CaixaTarefas>
          {listaDeTarefas.map((item, index) => (
            <section key={index}>
              <p id={item.id}>{item.tarefa}</p>
              <div>
                <img className="checkImage" src={check} onClick={() => {checarTarefa(item.id)}} alt="Checar tarefa" />
                <img className="removeImage" src={remove} onClick={() =>{removerTarefa(item.id)}} alt="Remover tarefa" />
              </div>
            </section>
          ))}
        </S.CaixaTarefas>
      </S.Main>
    </>
  )
}