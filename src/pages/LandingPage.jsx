import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { menuImage, coverImage, authImage, orderImage } from '@styles/images';

const Container = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  p {
    font-size: 2rem;
  }
`;

const Header = styled.header`
  background-color: #f8f9fa;
  padding: 20px 0;
`;

const Title = styled.h1`
  color: var(--color-brand-800);
`;

const Nav = styled.nav`
  margin-top: 20px;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: inline;
      margin-right: 20px;

      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
`;

const CoverImage = styled.section`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-brand-500);

  h2 {
    background-color: aliceblue;
    padding: 10px;
    transform: skew(-10deg);
  }

  p {
    background-color: aliceblue;
    padding: 10px;
    transform: skew(-10deg);
  }
`;

const Button = styled(Link)`
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

const Section = styled.section`
  padding: 50px 0;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  h3 {
    margin-top: 20px;
  }
`;

const FeatureImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
`;

const AboutSection = styled.section`
  background-color: #f8f9fa;
  padding: 50px 0;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const TeamMember = styled.div`
  margin-bottom: 20px;

  a {
    margin-right: 10px;
  }
`;

function LandingPage() {
  return (
    <Container>
      <Header>
        <Title>Restaurant Managment System</Title>
        <Nav>
          <ul>
            <li>
              <a href='#features'>Features</a>
            </li>
            <li>
              <a href='#about'>About Us</a>
            </li>
          </ul>
        </Nav>
      </Header>
      <CoverImage backgroundImage={coverImage}>
        <h2>Your Restaurant, Simplified</h2>
        <p>
          Streamline your operations, manage orders, and delight your customers
          with ease.
        </p>
        <Button to='/login'>Try It Now</Button>
      </CoverImage>
      <Section id='features'>
        <h2>Features</h2>
        <Feature>
          <FeatureImage src={authImage} alt='Authentication Feature' />

          <h3>Authentication</h3>
          <p>
            Secure authentication system to manage user access and permissions
            within the app.
          </p>
        </Feature>
        <Feature>
          <FeatureImage src={orderImage} alt='Order Management Feature' />
          <h3>Order Management</h3>
          <p>
            Efficiently manage orders from receipt to delivery, including order
            tracking and status updates.
          </p>
        </Feature>
        <Feature>
          <FeatureImage src={menuImage} alt='Menu Management Feature' />
          <h3>Menu Management</h3>
          <p>
            Customize and update your restaurant menu easily, including pricing,
            descriptions, and availability.
          </p>
        </Feature>
      </Section>
      <AboutSection id='about'>
        <h2>About Us</h2>
        <AboutContent>
          <p>
            Restaurant Managment System was inspired by the collective
            experiences of our team members in the restaurant industry. We
            understand the challenges faced by restaurant owners and managers in
            efficiently managing their operations while delivering exceptional
            service to their customers.
          </p>

          <br />

          <p>Created By:</p>
          <TeamMember>
            <p>Mohammed Shousha</p>
            <a href='https://www.linkedin.com/in/mohammed-m-shousha/'>
              LinkedIn
            </a>
            <a href='https://www.linkedin.com/in/mohammed-m-shousha/'>GitHub</a>
            <a href='https://portfolio-mohammed-shousha.vercel.app/'>
              Portfolio
            </a>
          </TeamMember>
          <p>
            Check out our project on GitHub:{' '}
            <a href='https://github.com/Mohammed-Shousha/restaurant-system'>
              Restaurant Managment System Repo
            </a>
          </p>
        </AboutContent>
      </AboutSection>
      <footer>
        <p>© 2024 Restaurant Managment System. All rights reserved.</p>
      </footer>
    </Container>
  );
}

export default LandingPage;
