import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIcon} alt='Ícone da aplicação' />
      <nav className='flex items-center gap-5'>
        <NavLink className='text-zinc-300' href='/eventos'>
          Eventos
        </NavLink>
        <NavLink href='/participantes'>Participantes</NavLink>
      </nav>
    </div>
  );
}

