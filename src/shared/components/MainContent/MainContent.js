import { sliderData } from '../../../modals/sliderData';
import epIcon from '../../assets/Icon/epIcon.svg';
import ltIcon from '../../assets/Icon/ltIcon.svg';
import spnIcon from '../../assets/Icon/spnIcon.svg';
import sprIcon from '../../assets/Icon/sprIcon.svg';
import { Icon } from '../Components';
import { MainContainer } from '../Header/headerStyle';
import { ContentWrapper, LeftSlider, RightSlider } from './MainContentStyle';

const MainContent = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <LeftSlider>
          <li>
            <Icon size="60px" background={spnIcon} />
            Sistem Pengaduan
          </li>
          <li>
            <Icon size="60px" background={epIcon} />E Procurement
          </li>
          <li>
            <Icon size="60px" background={ltIcon} />
            Laporan Tahunan
          </li>
          <li>
            <Icon size="60px" background={sprIcon} />
            Siaran Pers
          </li>
        </LeftSlider>
        <RightSlider>
          {(sliderData || []).map((data, index) => (
            <div className="sliderWrapper">
              <img src={data.background} alt={data.title} />
              <div>
                <h3>{data.title}</h3>
                <p>{data.content}</p>

                <p>selengkapnya</p>
              </div>
            </div>
          ))}
        </RightSlider>
      </ContentWrapper>
    </MainContainer>
  );
};

export default MainContent;
