import React from 'react';
import { Link } from 'react-router-dom';
import * as Style from './style';
import { FaGithubSquare, FaLinkedinSquare, FaFacebookSquare, FaGooglePlusSquare, FaEnvelopeSquare, FaSteamSquare } from 'react-icons/lib/fa';
import myself from '../../../images/me.jpg';

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {init: false, expand: false};
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({init : true})
    }, 500)

    setTimeout(()=>{
      this.setState({expand : true})
      window.scrollTo(0, 0);
    }, 800)

    this.props.blur(false);
  }

  componentWillUnmount() {
    this.setState({
      init: false,
      expand: false
    });
    this.props.blur(true);
  }

  render() {
    return(
      <Style.IndexContainer device={this.props.device} active={this.state.init} >
        <Style.Icon>
          <img src={myself} alt="My selfie"/>
        </Style.Icon>
        <Style.Intro expand={this.state.expand} device={this.props.device}>
          <h1>Oleg Tsymbal</h1>
          <Style.HR />
          <h2>Passionate Programmer / serious-minded DevOps </h2>
        </Style.Intro>
        <Style.Links device={this.props.device}>
          <Link to="/aboutme"><Style.Link firstLink={true}>About Me</Style.Link></Link>
          <Link to="/experience"><Style.Link>Resume</Style.Link></Link>
          <Link to="/projects"><Style.Link>Projects</Style.Link></Link>
          <Link to="/blog"><Style.Link lastLink={true}>Blog</Style.Link></Link>
        </Style.Links>
        <Style.SocialIcon device={this.props.device}>
          <a rel="noopener" aria-label="github" name="github" href="https://github.com/dzirg44" target="_blank"><FaGithubSquare /></a>
          <a rel="noopener" aria-label="linkedin" name="linkedin" href="https://www.linkedin.com/in/oleg-tsymbal" target="_blank"><FaLinkedinSquare /></a>
          <a rel="noopener" aria-label="facebook" name="facebook" href="https://www.facebook.com/olegtsym44" target="_blank"><FaFacebookSquare /></a>
          <a rel="noopener" aria-label="googleplus" name="googleplus" href="https://plus.google.com/112189882839201305849" target="_blank"><FaGooglePlusSquare /></a>
          <a rel="noopener" aria-label="email" name="email" href="mailto:dzirg44@gmail.com" target="_blank"><FaEnvelopeSquare /></a>
          <a rel="noopener" aria-label="steam" name="steam" href="https://steamcommunity.com/id/dzirg44/" target="_blank"><FaSteamSquare /></a>
        </Style.SocialIcon>
      </Style.IndexContainer>

    );
  }
}
