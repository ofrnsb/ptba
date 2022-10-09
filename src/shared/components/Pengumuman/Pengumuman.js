import { sliderData3 } from '../../../modals/sliderData3';
import { MainContainer } from '../Components';
import { ContentWrapper } from './PengumumanStyle';
const Pengumuman = () => {
  return (
    <MainContainer backgroundtype="forest">
      <ContentWrapper>
        <div className="profileSlider">
          <h1>CANT</h1>
          <h1>FIND</h1>
          <h1>THE</h1>
          <h1>PICTURE</h1>
        </div>
        <div className="pengumanSlider">
          <h3>PENGUMUMAN</h3>
          {(sliderData3 || {}).map((data, index) => (
            <div className="pengumanSlider__content">
              <img src={data.background} />
              <div>
                <div className="date">
                  <img src={data.calendar} />
                  <p>{data.date}</p>
                </div>
                <p>{data.content}</p>
              </div>
            </div>
          ))}
          <button>LIHAT SEMUA</button>
        </div>
      </ContentWrapper>
    </MainContainer>
  );
};

export default Pengumuman;
