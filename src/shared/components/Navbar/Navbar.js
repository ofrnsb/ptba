import { Nav_Container } from './navbarStyle';
import ptbaIcon from '../../assets/Icon/ptba-logo.svg';

const Navbar = () => {
  return (
    <Nav_Container>
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
          </ul>
        </div>
        <div>
          <ul>
            <li>BERANDA</li>
            <li>TENTANG</li>
            <li>BISNIS KAMI</li>
            <li>TATA KELOLA</li>
            <li>ESG</li>
            <li>HUBUNGAN INVESTOR</li>
          </ul>
        </div>
      </section>
    </Nav_Container>
  );
};

export default Navbar;
