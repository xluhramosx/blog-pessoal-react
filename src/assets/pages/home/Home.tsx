import "./Home.css";

const Home = () => {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
            <div className="container grid grid-cols-2 text-white">
                <div className="flex flex-col gap-4 itens-center justify-center py-4">
                    <h2 className="text-5xl font-bold">Seja Bem-Vindo</h2>
                    <p className="text-xl">Expresse aqui seus pensamento e opiniões</p>
                    <div className="flex justify-around gap-4">
                        <button className="rounded bg-white text-blue-800 py-2 px-4">Ver Postagens</button>
                    </div>
                </div>
                <div className="flex justify-center">
                <img src="https://img.freepik.com/fotos-gratis/foto-de-baixo-angulo-do-hipnotizante-ceu-estrelado_181624-27925.jpg?w=740&t=st=1708356556~exp=1708357156~hmac=ace86fc7d382088c7ddc8033bec8f362556bf9b8ea41f9dad32030acd6957df9" alt="Constelação" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;