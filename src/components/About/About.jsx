import {wrapper, container, divider, image, text_style, discription, divider_beans} from './About.module.scss';
import Divider  from '../Divider/Divider';

const About = ({imageSrcAbout, subtitle}) => {

	return (
		<section className={wrapper}>
			<div className={container}>
				<div className={image}><img src={imageSrcAbout} alt="about" /></div> 
				<div className={text_style}>
					<h3 className='subtitle'>{subtitle}</h3>
					<div className={divider_beans}><Divider color='black'/></div>
					<div className={discription}>
						<p>
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						</p>
						<p>
							<span>Afraid at highly months do things on at. Situation</span> 
							<span>recommend objection do intention</span>
							<span>so questions. </span>
							<span>As greatly removed calling pleased improve an.</span> 
							<span>Last ask him cold feel</span>
							<span>met spot shy want. Children me laughing we</span> 
							<span>prospect answered followed. At it went</span>
							<span>is song that held help face.</span>
						</p>
					</div>
				</div>
			</div>
			<div className={divider}></div>
		</section>
	)
}
export default About;