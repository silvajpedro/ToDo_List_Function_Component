import React, { useState } from "react";
import * as S from "./Style.js"
import removeTudo from "../assets/removetudo.png"
import check from "../assets/add.png"
import remove from "../assets/remove.png"

export default function Mainbox() {
  const [tarefas, setTarefas] = useState("");
  const [listaDeTarefas, setListaDeTarefas] = useState([])
  const tarefa = { tarefa: tarefas, id: Date.now() };
  console.table(listaDeTarefas)

  const removerTudo = () => {
    setListaDeTarefas(listaDeTarefas.filter((item) => item.listaDeTarefas))
    setTarefas('')
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
    setListaDeTarefas(listaDeTarefas.filter((item) => {
      return item.id !== id
    }))
  }
  return (
    <>
      <S.GlobalStyle />
      <S.Main>
        <h1><i>ToDo List</i></h1>
        <span></span>
        <S.AddBox>
          <form onSubmit={(e) => e.preventDefault()}>
            <S.InputBox  >
              <input maxlength="32" onChange={(e) => { setTarefas(e.target.value) }} value={tarefas} placeholder="Digite sua Tarefa" />
              <img src={removeTudo} style={listaDeTarefas.length > 1 ? { height: '7.5vh' } : { height: '0vh' }} alt="icone remover todas as tarefas" onClick={() => { removerTudo() }} />
            </S.InputBox>
            <button onClick={() => {
              if (tarefas !== "") {
                setListaDeTarefas([...listaDeTarefas, tarefa])
                setTarefas('')
              } else {
                const Msg = document.querySelector('.mensagemVazia')
                Msg.style.display = 'flex'
                setTimeout(() => {
                  Msg.style.display = "none"
                }, 4000)
              }
            }}>Adicionar Tarefa</button>
          </form>
        </S.AddBox>
        <S.CaixaTarefas>
          {listaDeTarefas.map((item, index) => (
            <section key={index}>
              <p id={item.id}>{item.tarefa}</p>
              <div>
                <img className="checkImage" src={check} onClick={() => { checarTarefa(item.id) }} alt="Checar tarefa" />
                <img className="removeImage" src={remove} onClick={() => { removerTarefa(item.id) }} alt="Remover tarefa" />
              </div>
            </section>
          ))}
          <S.MsgVazia className="mensagemVazia"><i>Sua lista não pode ficar vazia</i></S.MsgVazia>
        </S.CaixaTarefas>
      </S.Main>
    </>
  )
}