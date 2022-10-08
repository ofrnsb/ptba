import {
  MainContainer,
  HeaderTitleWrapper,
  Icon,
} from '../shared/components/Component_S';
import Navbar from '../shared/components/Navbar/Navbar';
import leftIcon from '../shared/assets/Icon/leftIcon.svg';
import rightIcon from '../shared/assets/Icon/rightIcon.svg';
import backgroundImage from '../shared/assets/Icon/header-background.svg';
import backgroundImage2 from '../shared/assets/Icon/header-background2.svg';
import { useChangeBackground } from '../controller/useChangeBackground';

function App() {
  const { getLeft, getRight, backGround } = useChangeBackground();
  return (
    <div className="App">
      <MainContainer background={backGround}>
        <Navbar />
        <HeaderTitleWrapper>
          <Icon
            background={leftIcon}
            onClick={() => {
              getLeft();
            }}
          />
          <div className="Header-Title">
            <h1>
              Untuk Ketahanan Energi Nasional dan Kesejahteraan Masyarakat
            </h1>
            <p>Selengkapnya</p>
          </div>
          <Icon
            background={rightIcon}
            onClick={() => {
              getRight();
            }}
          />
        </HeaderTitleWrapper>
      </MainContainer>
    </div>
  );
}

export default App;
