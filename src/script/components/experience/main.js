import React from "react"
import * as Style from "./style.js"
//import { Experiences, Softskills } from "./data"
import Experiences from "./data"
import Softskills from "./data-skill"
import Languageskills from "./data-language-skill"

import Contacts from "./data-contacts"
import Container from '../global/Container'

const Experience =(props)=>{
	return (
		<Container
			width="large"
			history={props.history}
			FirstTitle="Curriculum vitae"
			SecondTitle={<React.Fragment>Hello! I search an interesting job with hard but interesting tasks. I always enhance my English and technical skills and ready to relocate. If you search  responsible, communicable and industrious humans,  write to me.</React.Fragment>}
			ThirdTitle="You can find my contacts at end of the CV or on my website main page"

		>
		    <Style.Delimiter device={props.device}>
						<h1>Language skill</h1>
						<Style.HR />
		    </Style.Delimiter>

			<Style.Languageskills device={props.device}>
		    {
				Languageskills.map((language, index) => {
					return (
						<div key={index}>
						<div>
						<h1>{language.Language}</h1>
						<h3> {language.Langagelevel} </h3>
						</div>
						</div>
					);
			})
			}
		    </Style.Languageskills>
			<Style.Delimiter device={props.device}>
						<h1>Technical Skills</h1>
						<Style.HR />
		    </Style.Delimiter>
			<Style.Softskills device={props.device}>
		    {
				Softskills.map((softskill, index) => {
					return (
						<div key={index}>
						<div>
						<h1>{softskill.technologygroup}</h1>
						<h3> {softskill.technology} </h3>
						</div>
						</div>
					);
			})
			}
		    </Style.Softskills>

			<Style.Delimiter device={props.device}>
						<h1>Experience</h1>
						<Style.HR />
		    </Style.Delimiter>
			<Style.Timeline device={props.device}>
				{
					Experiences.map((experience, index)=>{
						return (
							<div key={index}>
								<div>
									<h2> <div>{experience.startDate} ─<br />{experience.endDate}</div> </h2>
									<h1>{experience.title}</h1>
									<h3>@ {experience.company}</h3>

								</div>
								<div>
									{
										experience.description.map((content, index)=><p key={index}>● {content}</p>)
									}
								</div>
								<div>
								<h3> GOALS: </h3>
								</div>
								<div>
									{
										experience.goals.map((content, index)=><p key={index}>✔ {content}</p>)
									}
								</div>
							</div>
						);
					})
				}
			</Style.Timeline>
			<Style.Delimiter device={props.device}>
						<h1>Contacts</h1>
						<Style.HR />
		    </Style.Delimiter>
			<Style.Contacts device={props.device}>
		    {
				Contacts.map((contact, index) => {
					return (
						<div key={index}>
						<div>
						<h1>{contact.contactprovider}</h1>
						<h3> {contact.contact} </h3>
						</div>
						</div>
					);
			})
			}
		    </Style.Contacts>
		</Container>
	);
};

export default Experience;
