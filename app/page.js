"use client";

import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [segmento, setSegmento] = useState("");
  const [cidade, setCidade] = useState("");
  const [descricao, setDescricao] = useState("");
  const [gerado, setGerado] = useState(false);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#09090f",
      color: "white",
      padding: "30px 20px",
      fontFamily: "Arial"
    }}>
      <h1 style={{color:"#a78bfa"}}>
        LeadForge AI
      </h1>

      <p style={{color:"#aaa", marginBottom:30}}>
        Crie sites profissionais para seus clientes.
      </p>

      <section style={{
        maxWidth:600,
        margin:"auto",
        background:"#171722",
        padding:24,
        borderRadius:16
      }}>
        <h2>Novo projeto</h2>

        <input placeholder="Nome da empresa"
          value={nome}
          onChange={e=>setNome(e.target.value)}
        />

        <input placeholder="Segmento"
          value={segmento}
          onChange={e=>setSegmento(e.target.value)}
        />

        <input placeholder="Cidade"
          value={cidade}
          onChange={e=>setCidade(e.target.value)}
        />

        <textarea placeholder="Descrição da empresa"
          value={descricao}
          onChange={e=>setDescricao(e.target.value)}
        />

        <button onClick={()=>setGerado(true)}>
          Gerar meu site
        </button>

        {gerado && (
          <div style={{
            marginTop:25,
            padding:20,
            background:"#252538",
            borderRadius:12
          }}>
            <h2>{nome || "Nome da empresa"}</h2>
            <p>{segmento} {cidade && " • "+cidade}</p>
            <p>{descricao || "Descrição do negócio"}</p>
            <p>Prévia do seu novo site.</p>
          </div>
        )}
      </section>

      <style jsx>{`
        input, textarea {
          display:block;
          width:100%;
          padding:14px;
          margin-top:15px;
          border-radius:8px;
          border:1px solid #444;
          background:#10101a;
          color:white;
        }
        textarea { min-height:100px; }
        button {
          margin-top:20px;
          width:100%;
          padding:15px;
          background:#7c3aed;
          color:white;
          border:0;
          border-radius:8px;
          font-weight:bold;
        }
      `}</style>
    </main>
  );
          }
