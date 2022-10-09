import circleIcon from '../../assets/Icon/circleIcon.png';
import Earth from '../../assets/Icon/Earth.svg';
import leftArrowIcon from '../../assets/Icon/leftArrowIcon.svg';
import RightArrow from '../../assets/Icon/rigthArrowIcon.svg';
import { Icon } from '../Components';
import { Container, ContentWrapper } from './FooterStyle';
const Footer = () => {
  return (
    <Container>
      <ContentWrapper>
        <Icon size="60px" background={leftArrowIcon} />
        <div className="Content">
          <div className="Content__Left">
            <h3>ESG</h3>
            <div>
              <h3>Kinerja Lingkungan</h3>
              <ul>
                <li>Kinerja Sosial</li>
                <li>Jinerja Ekonomi Tata Kelola</li>
              </ul>
            </div>
          </div>

          <div className="Content__Center">
            <Icon size="500px" background={Earth} />
          </div>

          <div className="Content__Right">
            <p>
              Upaya pengelolaan lingkungan dilakukan sesuai dengan komitmen
              Perusahaan dalam dokumen Rencana Pengelolaan Lingkungan dan
              Rencana Pemantauan Lingkungan serta dokumen Upaya Pengelolaan
              Lingkungan dan Upaya Pemantauan Lingkungan yang dituangkan dalam
              Rencana Kerja Tahunan Teknis dan Lingkungan
            </p>
            <button>Selengkapnya</button>
          </div>
        </div>

        <Icon size="60px" background={RightArrow} />
        <img src={circleIcon} alt="circleIcon" />
      </ContentWrapper>
    </Container>
  );
};

export default Footer;
