function Cabecalho(){
return(
    <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="index.html">logomarca</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">Início</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Suporte</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="produtos.html">Produtos</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Outra coisa
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Não sabemos ainda</a></li>
                            <li><a className="dropdown-item" href="#">E também não</a></li>
                            <li><hr className="dropdown-divider"/></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Procurar" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Procurar</button>
                </form>
            </div>
        </div>
    </nav>
    </div>
)
}
export default Cabecalho