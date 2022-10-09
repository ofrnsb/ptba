import { useChangeBackground } from '../../../controller/useChangeBackground';
import dropDownIcon from '../../assets/Icon/dropDownIcon.svg';
import leftIcon from '../../assets/Icon/leftIcon.svg';
import ptbaStock from '../../assets/Icon/ptbaStock.svg';
import rightIcon from '../../assets/Icon/rightIcon.svg';
import { Icon, MainContainer } from '../Components';
import Navbar from '../Navbar/Navbar';
import { Devider, HeaderStockWrapper, HeaderTitleWrapper } from './headerStyle';

const Header = () => {
  const { getLeft, getRight, backGround } = useChangeBackground();

  return (
    <MainContainer backgroundtype={backGround}>
      <Navbar />
      <HeaderTitleWrapper>
        <Icon
          background={leftIcon}
          size="30px"
          onClick={() => {
            getLeft();
          }}
        />
        <div className="Header-Title">
          <div>
            <h1>
              Untuk Ketahanan Energi Nasional dan Kesejahteraan Masyarakat
            </h1>
            <div className="devider">
              <Devider backgroundtype={backGround} />
              <Devider backgroundtype={backGround} />
              <Devider backgroundtype={backGround} />
            </div>
          </div>
          <p>Selengkapnya</p>
        </div>
        <Icon
          size="30px"
          background={rightIcon}
          onClick={() => {
            getRight();
          }}
        />
      </HeaderTitleWrapper>
      <HeaderStockWrapper>
        <Icon size="64px" background={dropDownIcon} />
        <img src={ptbaStock} alt="stock info" />
      </HeaderStockWrapper>
    </MainContainer>
  );
};

export default Header;
