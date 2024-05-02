import React from 'react';

function Contato(){
    return (
        
        <form>
            <label for="nome"> Nome: </label><br>
            <input type="text" id="nome" onkeyup="validaNome()">
            <div id="txtNome"></div>
            <br>
            <label for="email"> Email: </label><br>
            <input type="email" id="email" onkeyup="validaEmail()">
            <div id="txtEmail"></div>
            <br>
            <label for="assunto"> Assunto: </label><br>
            <textarea name="assunto" id="assunto" cols="30" rows="10" onkeyup="validaAssunto()"></textarea>
            <div id="txtAssunto"></div>
            <br>
            <br>
            <button onclick="enviar()">Enviar</button>
        </form>
        
  );
}
export default Contato;