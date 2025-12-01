import style from './header.module.scss';

const Header = () => {
  return (
    <header className={style}>
        <h1>Filmes VNW</h1>
        <nav>
            <a href="">Inicio</a>
            <a href="">Filmes</a>
        </nav>
    </header>
  )
}

export default Header
