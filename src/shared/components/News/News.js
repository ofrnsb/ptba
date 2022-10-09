import React from 'react';
import { sliderData } from '../../../modals/sliderData2';
import { MainContainer } from '../Components';
import { ImageWrapper } from '../MainContent/MainContentStyle';
import { ContentWrapper, NewsSlider } from './NewStyle';
const News = () => {
  return (
    <MainContainer height="fit-content">
      <ContentWrapper>
        <div className="News">
          <h3>Berita</h3>
          <button>Selengkapnya</button>
        </div>
        <NewsSlider>
          {(sliderData || []).map((data, index) => (
            <div className="sliderWrapper" key={index}>
              <ImageWrapper
                className="image"
                background={data.background}
                alt={data.date}
              />
              <div className="sliderContent">
                <h3>
                  <img className="image" src={data.calendar} alt={data.date} />
                  {data.date}
                </h3>
                <p>{data.content}</p>
              </div>
            </div>
          ))}
        </NewsSlider>
      </ContentWrapper>
    </MainContainer>
  );
};

export default News;
