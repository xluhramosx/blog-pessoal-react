import React, { useContext } from "react";

import "./Home.css";
import ListaPostagens from "../../componentes/postagem/listaPostagens/ListaPostagens";

function Home() {
  return (
    <>
      <div className="bg-violet-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <button className="rounded bg-white text-violet-800 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://img.freepik.com/vetores-gratis/cabeca-de-pantera-negra-com-raiva-assustadora_225004-1577.jpg?w=360&t=st=1708543490~exp=1708544090~hmac=40c3f6a586dc0d791b126d7bfdd3504a50b82bf92174ce8b994d7c727ac0e5a9"
              alt=""
            />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
