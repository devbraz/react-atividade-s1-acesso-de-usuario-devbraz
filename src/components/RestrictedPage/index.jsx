
function RestrictedPage({isLoggedIn, user, Login, Logout}) {

     return (

          isLoggedIn?

          <div className="box">
               <span>Bem-vindo {user}</span>
               <button onClick={Logout}>Sair</button>
          </div>

          :

          <div className="box">
               <span>Você não pode acessar essa página</span>
               <button onClick={Login}>Entrar</button>
          </div>

     )

}

export default RestrictedPage