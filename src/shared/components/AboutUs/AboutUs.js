import React from 'react';
import AboutUsImage from '../../assets/Icon/AboutUsImage.png';
import { MainContainer } from '../Components';
import { ContentWrapper } from './AboutUsStyle';

const AboutUs = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <div className="AboutUs">
          <div className="AboutUs__Content">
            <h3>TENTANG KAMI</h3>
            <p>
              Inovasi dan transformasi bagi kami adalah suatu keniscayaan,
              karena kami ingin meraih masa depan. Dari perusahaan pertambangan
              batu bara, kami ingin menjadi perusahaan energi kelas dunia,yang
              peduli lingkungan. Itulah visi kami.
            </p>
            <button>LIHAT SEMUA</button>
          </div>
          <img src={AboutUsImage} alt="AboutUsImage" />
        </div>
        <div className="Career">
          <h3>
            KARIR di <span>BUKIT ASAM</span>
          </h3>
          <div>
            <p>
              <span>Waspada penipuan</span>, Rekurtmen hanya akan diumumkan
              melalui situs resmi perusahaan & surat kabar nasional
            </p>
            <button>Klik Disini</button>
          </div>
        </div>
        <div className="Footer"></div>
      </ContentWrapper>
    </MainContainer>
  );
};

export default AboutUs;
