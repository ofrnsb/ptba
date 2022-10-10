import { useScroll } from '../../../controller/Utils/useScrollPosition';
import medsosIcon from '../../assets/Icon/medsosIcon.png';
import ptbaIcon from '../../assets/Icon/ptba-logo.svg';
import searchIcon from '../../assets/Icon/searchIcon.png';
import { NavContainer } from './navbarStyle';

const Navbar = () => {
  const { scrollPosition } = useScroll();
  return (
    <NavContainer scrollPosition={scrollPosition}>
      <section>
        <div>
          <img src={ptbaIcon} alt="PTBA LOGO" />
          <ul>
            <li>ID</li>
            <li>EN</li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <ul>
            <li>LAPORAN</li>
            <li>BERITA</li>
            <li>SDM</li>
            <img src={medsosIcon} alt="searchIcon" />
          </ul>
        </div>

        <div>
          <ul>
            <li>BERANDA</li>
            <li>TENTANG •</li>
            <li>BISNIS KAMI •</li>
            <li>TATA KELOLA •</li>
            <li>ESG •</li>
            <li>HUBUNGAN INVESTOR •</li>
            <img src={searchIcon} alt="searchIcon" />
          </ul>
        </div>
      </section>
    </NavContainer>
  );
};

export default Navbar;
