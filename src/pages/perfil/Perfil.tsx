import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
function Perfil() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">
      <img
        src="https://img.freepik.com/vetores-gratis/cabeca-de-pantera-negra-com-raiva-assustadora_225004-1577.jpg?w=360&t=st=1708543490~exp=1708544090~hmac=40c3f6a586dc0d791b126d7bfdd3504a50b82bf92174ce8b994d7c727ac0e5a9"
        alt=""
      />
      <img
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
        className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
      />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-violet-500 text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.usuario}</p>
      </div>
    </div>
  );
}

export default Perfil;
