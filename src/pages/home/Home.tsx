import "./Home.css";
import ListaPostagens from "../../componentes/postagem/listaPostagens/ListaPostagens";
import ModalPostagem from "../../componentes/postagem/modalPostagem/ModalPostagem";

function Home() {
  return (
    <>
      <div className="bg-violet-950 flex justify-center">
        <div className="container grid grid-cols-2 text-violet-200">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className="rounded bg-violet-200 text-violet-950 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://img.freepik.com/fotos-premium/computador-e-maos-fecham_566707-3684.jpg?w=740"
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
