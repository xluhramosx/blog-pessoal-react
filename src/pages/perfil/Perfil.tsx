import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";
function Perfil() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "erro"
      );
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">
      <img
        src="https://img.freepik.com/fotos-premium/computador-e-maos-fecham_566707-3684.jpg?w=740"
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
