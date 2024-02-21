import { Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponente
  

  return (
    <>
     <div className='w-full bg-violet-800 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
            <div className='hover:underline'>Postagens</div>
            <Link to='/temas' className='hover:underline'>Temas</Link>
              <div className='hover:underline'>Cadastrar tema</div>
              <div className='hover:underline'>Perfil</div>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar