import React from 'react';
import * as Style from './style';
import { FaAmericanSignLanguageInterpreting, FaCode, FaHeartO, FaSmileO } from 'react-icons/lib/fa';
import myself from '../../../images/aboutme_cover.jpg';
import { HR } from '../global/style';
import Container from '../global/Container';

const Aboutme = (props) => {
	return(
		< Container
			width="large"
			FirstTitle="Hello"
			SecondTitle={<React.Fragment>I am Oleg Tsymbal! <br /> And this is me in Kyiv. <FaSmileO /></React.Fragment>}
			history={props.history}
		>
			<Style.Banner>
				< img src={myself} alt="Me at Kyiv" />
			</Style.Banner>
			<Style.Intro>
				<div>
					<Style.Aboutme>
						<Style.Characteristic device={props.device}>
							<div><FaAmericanSignLanguageInterpreting />I&#39;m a team player</div>
							<div><FaCode />I got good skills</div>
							<div><FaHeartO />I am passionate in my job</div>
						</Style.Characteristic>
						I hold over 10 years of programming and devops\ops experience. <br />
						Love to work on some side projects related to web development, blockchain applications, 3D game development or Real Time Bidding platforms.
						<HR />
						I like bash and golang programming, and understand concepts of OOP. Also i interested in:
						<ul>
							<li>Containerisation: Kubernetes, Docker(Swarm)</li>
							<li>Microservices: 12factor app, REST(API), distributed database</li>
							<li>Infrastructure as code: Ansible, Git, Terraform, Kubernetes yaml\helm </li>
							<li>CI\CD: TravisCI, Jenkins, DroneCI, Kubernetes\Swarm deployment</li>
						</ul>
						I really love play football and I am fan Argentina's national team!
						<br />
						Thanks for reading!

					</Style.Aboutme>
				</div>
			</Style.Intro>
		</Container>
	);
}

export default Aboutme;
