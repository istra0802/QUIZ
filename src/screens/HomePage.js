import React from 'react';
import MovingButton from '../components/MovingButton';
import { Col, Row } from 'react-bootstrap';
import backgroundImage from '../images/bg_quiz.jpg';
import Header from '../components/Header';
import bell from '../json/bell.json'

export default function HomePage() {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.2,
          zIndex: 1,
        }}
      />
      <Row>
        <Col></Col>
        <Col md={3}>
          <div style={{ backgroundColor: '#0e0a5f', color: 'white', position: 'relative', zIndex: 2 }}>
            <Header/>
            <div>
              <h1>Quick Start!</h1>
              <p>Answer 2 questions and win upto 200 coins.</p>
            </div>
            <div>
              <div>
                <span>1</span>/<strong>2</strong>
                <p>Question</p>
              </div>
              <h3>Name the person who was also known as Deshbandhu.</h3>
              <ul>
                <li><button>S. Radhakrishnan</button></li>
                <li><button>G.K. Gokhale</button></li>
                <li><button>Chittaranjan Das</button></li>
                <li><button>Madan Mohan Malviya</button></li>
              </ul>
            </div>
            <div>
              <h4>#Fun Fact</h4>
              <p>With 170 wickets, Lasith Malinga has become the most wicket taker bowler in the History of IPL.</p>
            </div>
            <section>
              <h2>Play Quiz and Win Coins!</h2>
              <ul>
                <li>Get coins on the completion of each quiz.</li>
                <li>Upgrade your skills with our top quizzes.</li>
                <li>We have many top trending categories like Cricket, World, India, Business, loan, insurance & many more!</li>
                <li>Millions of quiz admirer like you showed trust on us.</li>
                <li>Challenge lakhs of players from across the world!</li>
              </ul>
            </section>
            <div>
              <img
                alt="Play Online Quiz Contest win Coin - AtmeQuiz"
                title="Play Online Quiz Contest win Coin - AtmeQuiz"
                loading="lazy"
                width="133"
                height="34"
                decoding="async"
                src="https://images.atmequiz.com/logo.png"
              />
              Made with <img title="Heart" alt="Heart" loading="lazy" width="12" height="11" decoding="async" src="https://images.atmequiz.com/heart-icon.svg" /> in India <img title="India Flag" alt="India Flag" loading="lazy" width="14" height="9" decoding="async" src="https://images.atmequiz.com/india-flag-icon.svg" />
            </div>
            <MovingButton />
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
