import React from "react";
import "./Calculadora.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import react, { useState } from "react";

export default function Calculadora() {
  const [num, setNum] = useState(0);
  const [Oldnum, setOldNum] = useState(0);
  const [Operador, setOperador] = useState(0);

  function InputNum(e) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function limpar() {
    setNum(0);
  }

  function porcentagem() {
    setNum(num / 100);
  }

  function trocaSinal() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function calculeiResultado() {
    if (setOperador === "/") {
      setNum(Oldnum / num);
    } else if (setOperador === "*") {
      setNum(Oldnum * num);
    } else if (setOperador === "+") {
      setNum(Oldnum + num);
    } else if (setOperador === "-") {
      setNum(Oldnum - num);
    }
      setNum(eval(Oldnum + Operador + num));
  }

  function operacao(e) {
    var operador = e.target.value;
    setOperador(operador);
    setOldNum(num);
    setNum(0);
  }

  //estilo

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="tela">
          <Box m={12} />
          <h1 className="resultado">{num}</h1>
          <button className="vermelho" onClick={limpar}>
            AC
          </button>
          <button onClick={trocaSinal}>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="laranja" onClick={operacao} value="+">
            +
          </button>

          <button className="cinza" onClick={InputNum} value={1}>
            1
          </button>
          <button className="cinza" onClick={InputNum} value={2}>
            2
          </button>
          <button className="cinza" onClick={InputNum} value={3}>
            3
          </button>
          <button className="laranja" onClick={operacao} value="-">
            -
          </button>

          <button className="cinza" onClick={InputNum} value={4}>
            4
          </button>
          <button className="cinza" onClick={InputNum} value={5}>
            5
          </button>
          <button className="cinza" onClick={InputNum} value={6}>
            6
          </button>
          <button className="laranja" onClick={operacao} value="*">
            x
          </button>

          <button className="cinza" onClick={InputNum} value={7}>
            7
          </button>
          <button className="cinza" onClick={InputNum} value={8}>
            8
          </button>
          <button className="cinza" onClick={InputNum} value={9}>
            9
          </button>
          <button className="laranja" onClick={operacao} value="/">
            /
          </button>

          <button className="cinza" onClick={InputNum} value={"."}>
            .
          </button>
          <button className="cinza" onClick={InputNum} value={0}>
            0
          </button>

          <button className="igual" onClick={calculeiResultado}>=</button>
        </div>
      </Container>
    </div>
  );
}
