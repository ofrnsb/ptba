import { Icon } from '../../assets/Components';
import { MainContainer } from '../Header/headerStyle';
import { ContentWrapper, LeftSlider } from './MainContentStyle';

const MainContent = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <LeftSlider>
          <li>
            <Icon size="60px" background={}/>
            Sistem Pengaduan
          </li>
          <li>
            <Icon size="60px" background={}/>E Procurement
          </li>
          <li>
            <Icon size="60px" background={}/>
            Laporan Tahunan
          </li>
          <li>
            <Icon size="60px" background={}/>
            Siaran Pers
          </li>
        </LeftSlider>
      </ContentWrapper>
    </MainContainer>
  );
};

export default MainContent;
