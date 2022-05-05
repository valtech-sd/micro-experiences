import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col, Steps, Skeleton } from 'antd';
import axios from 'axios';

import Dalle from './assets/dalle.jpg';
import VoiceLogo from './assets/voice.png';
import VoiceLogo2 from './assets/voice-2.png';
import Gif from './assets/td-demo-1.gif';
import { Navbar, Footer } from './components';
import { COLORS, SIZES, FONT_SIZES } from './utils/global';
import './App.css';

const { Step } = Steps;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0;
`;

const Section = styled(Row)`
  padding: ${SIZES.xl} ${SIZES.xs};
  background-color: ${({ color }) => COLORS[color] || COLORS.white};
  height: ${({ color }) => (color === 'green' ? 'calc(100vh - 149.35px)' : 'auto')};
  align-content: center;
  width: 100%;
  margin-right: 0 !important;
  margin-left: 0 !important;

  @media (min-width: 992px) {
    padding: 100px;
  }
`;

const Column = styled(Col)`
  place-self: center;
`;

const Header = styled.h1`
  letter-spacing: 1px;
  margin-bottom: 0;
  line-height: 50px;
  font-size: ${FONT_SIZES.xl};

  font-weight: ${({ bold }) => (bold ? 'bold' : 'inherit')};
  transform: ${({ cursive }) => (cursive ? 'matrix(0.98, -0.19, 0.2, 0.98, 0, 0)' : 'none')};
  font-family: ${({ cursive }) => (cursive ? 'Betterworks' : 'inherit')};
  color: ${({ cursive }) => (cursive ? 'white' : 'black')};
  margin-top: ${({ cursive }) => (cursive ? `-${SIZES.lg}` : 0)};

  @media (min-width: 992px) {
    font-size: 70px;
    line-height: 90px;
  }

  @media (min-width: 1200px) {
    font-size: 90px;
    line-height: 90px;
  }
`;

const Title = styled.p`
  letter-spacing: 1px;
  margin: 50px 0 ${SIZES.xl};
  font-size: 24px;
  font-family: ${({ light }) => (light ? 'Futura Light' : 'Futura Std')};

  @media (min-width: 1200px) {
    font-size: ${FONT_SIZES.xl};
  }
`;

const Text = styled.p`
  letter-spacing: 1px;
  margin: ${SIZES.xl} 0;
  font-family: ${({ light }) => (light ? 'Futura Light' : 'Futura Std')};
  font-size: ${({ textAlign }) => (textAlign ? FONT_SIZES.md : FONT_SIZES.sm)};
  text-align: ${({ textAlign }) => textAlign || 'left'};

  @media (min-width: 1200px) {
    font-size: ${({ textAlign }) => (textAlign ? FONT_SIZES.lg : FONT_SIZES.md)};
  }
`;

const ImgContainer = styled.div`
  display: flex;
  place-content: center;
  margin-top: ${SIZES.lg};
`;

const GenArtContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Caption = styled.caption`
  text-align: center;
`;

const steps = [
  'Over time, the neural network is trained by enormous datasets of words and images',
  'Text prompt generated from APIs including movie characters, locations, and art styles',
  'Every hour, a new image is generated and displayed by the app',
];

function App() {
  const [generatedImage, setGeneratedImage] = useState({
    src: Dalle,
    alt: 'a cartoon of Mario sitting in a fire at dawn',
  });
  const [loading, setLoading] = useState(true);

  const voiceImages = [VoiceLogo, VoiceLogo2];
  const random = Math.floor(Math.random() * voiceImages.length);

  useEffect(() => {
    const getImage = async () => {
      try {
        const {
          data: { imageData },
        } = await axios.get('https://dalle-mini-ui-seven.vercel.app/api/latest-image');

        setGeneratedImage({
          src: imageData.src,
          alt: imageData.alt,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getImage();
  }, []);

  return (
    <Container>
      <Navbar />
      <Section gutter={50} color="green">
        <Column xs={24} sm={12}>
          <Header>Micro</Header>
          <Header>Connected</Header>
          <Header bold>Experiences</Header>
          <Header cursive>Experiences</Header>
        </Column>
        <Column xs={24} sm={12}>
          <Title light>It Starts with Experimentations</Title>
          <Text>
            We experiment around the connection of physical and digital worlds to create smart
            connected experiences. Here, you’ll find some of the proof of concepts and working
            experiments we are exploring.
          </Text>
        </Column>
      </Section>
      <Section gutter={50}>
        <Column xs={24} sm={12}>
          <Header>Generative</Header>
          <Header>
            Art with <strong>AI</strong>
          </Header>
          <Text>
            DALL·E is a trained neural network that creates images from text captions for a wide
            range of concepts expressible in natural language. We have built upon an open source
            version of DALL-E to create unique art from a variety of text prompts throughout the
            day.
          </Text>
          <Text light textAlign="center">
            How generative art works
          </Text>
          <Text>
            <Steps progressDot current={3} direction="vertical">
              {steps.map((step, index) => (
                <Step key={index} title={step} />
              ))}
            </Steps>
          </Text>
        </Column>
        <Column xs={24} sm={12}>
          <ImgContainer>
            {loading ? (
              <Skeleton.Image loading={loading} />
            ) : (
              <GenArtContainer>
                <img src={generatedImage.src} alt="Dalle Generated Art" width="100%" />
                {generatedImage.alt && <Caption>{generatedImage.alt}</Caption>}
              </GenArtContainer>
            )}
          </ImgContainer>
        </Column>
      </Section>
      <Section gutter={50} color="grey">
        <Column xs={24} sm={12}>
          <Header>Body</Header>
          <Header bold>Tracking</Header>
          <Header>Interaction</Header>
          <Text>
            Camera tracking is a process which involves capturing motion in real time and
            manipulating 3D interactive elements. We can track the skeletal body and control data
            points by recognizing movements through the camera's input sensors.
          </Text>
        </Column>
        <Column xs={24} sm={12}>
          <img src={Gif} alt="Vatelch Body Tracking Demo" width="100%" />
        </Column>
      </Section>
      <Section gutter={50}>
        <Column xs={24} sm={12}>
          <Header>Sound</Header>
          <Header bold>Activated</Header>
          <Header>Interaction</Header>
          <Text>
            This micro interaction uses ambient sound to control the visualization on the screen.
            The shape of the Valtech logo changes based on decoding different pitch levels.
          </Text>
        </Column>
        <Column xs={24} sm={12}>
          <img src={voiceImages[random]} alt="Valtech Voice Demo" width="100%" />
        </Column>
      </Section>
      <Section gutter={50} color="grey">
        <Column xs={24} sm={12}>
          <Header>3D</Header>
          <Header bold>Drawings</Header>
          <Header>Interaction</Header>
          <Text>Text goes here</Text>
        </Column>
        <Column xs={24} sm={12}>
          <Text>image goes here</Text>
        </Column>
      </Section>
      <Footer />
    </Container>
  );
}

export default App;
