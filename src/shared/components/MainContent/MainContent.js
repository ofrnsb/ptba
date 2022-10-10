import { useGetWidth, useResize } from '../../../controller/Utils/useGetWidth';
import { UseScrollSlider } from '../../../controller/Utils/useSlider';

import { sliderData } from '../../../modals/sliderData';
import bisnisLogo from '../../assets/Icon/bisnisLogo.svg';
import epIcon from '../../assets/Icon/epIcon.svg';
import ltIcon from '../../assets/Icon/ltIcon.svg';
import minusIcon from '../../assets/Icon/minusIcon.svg';
import plusIcon from '../../assets/Icon/plusIcon.svg';
import spnIcon from '../../assets/Icon/spnIcon.svg';
import sprIcon from '../../assets/Icon/sprIcon.svg';
import { Icon, MainContainer } from '../Components';

import circleIcon from '../../assets/Icon/circleIconGray.png';
import {
  ContentWrapper,
  Hamburger,
  ImageWrapper,
  PBisnis,
  Slider,
} from './MainContentStyle';

const MainContent = () => {
  const { width } = useResize();
  const { itemSlider, sliderWrapper } = useGetWidth();
  const { sliderIndex, getScrollSlider } = UseScrollSlider(
    width,
    sliderWrapper
  );
  return (
    <MainContainer>
      <img className="circleIcon" src={circleIcon} alt="circle Icon" />
      <ContentWrapper>
        <Slider>
          <div className="sliderLeft">
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
          </div>

          <div
            className="sliderRight"
            ref={sliderWrapper}
            onScroll={() => {
              getScrollSlider();
            }}
          >
            {(sliderData || []).map((data, index) => (
              <div className="sliderWrapper" key={index} ref={itemSlider}>
                <ImageWrapper
                  className="image"
                  background={data.background}
                  alt={data.title}
                />
                <div className="sliderContent">
                  <h3>{data.title}</h3>
                  <p>{data.content}</p>
                  <button>selengkapnya</button>
                </div>
              </div>
            ))}
            <div className="Hamburger">
              {(sliderData || []).map((data, index) => (
                <Hamburger key={index} imageindex={sliderIndex}></Hamburger>
              ))}
            </div>
          </div>
        </Slider>
        <PBisnis>
          <h3>PENGEMBANGAN BISNIS </h3>
          <p>
            Pengembangan bisnis kami terdiri Generik (Tambang & Infrastruktur),
            pengembangan bisnis pembangkit, hilirisasi batubara dan bisnis
            pendukung
          </p>
          <div className="detail">
            <Icon
              className="detail__icon"
              size="420px"
              background={bisnisLogo}
            />
            <div className="detail__content">
              <h4>
                GENERIK <Icon size="20px" background={plusIcon} />
              </h4>
              <h4>
                Pembangkit <Icon size="20px" background={minusIcon} />
              </h4>
              <p>
                Pengembangan bisnis pembangkit listrik (Investasi, Engineering,
                Procurement, Construction (EPC), Operation & Maintenance (O&M))
                dalam lingkup nasional & regional, serta pengembangan kompetensi
                perusahaan di bidang kelistrikan, melalui investasi dan kerja
                sama strategis untuk pengembangan pembangkit & usaha EPC dan
                O&M.
              </p>
              <button>Selengkapnya</button>
              <p className="benefisiasi">
                BENEFISIASI <Icon size="20px" background={plusIcon} />
              </p>
            </div>
          </div>
        </PBisnis>
        <h2 className="Running_Text">
          Learn, grow become the leaders of Future Energy
        </h2>
      </ContentWrapper>
    </MainContainer>
  );
};

export default MainContent;
