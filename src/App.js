import { useState, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import optionsObj from './components/tsParticlesOptions';
import data from './components/data';

export default function App() {
	//particles
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async engine => {
			await loadFull(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options = useMemo(() => optionsObj, []);

	if (init)
		return (
			<div className="App">
				<Background>
					<Particles id="tsparticles" options={options}></Particles>
				</Background>
				<LinkTree wrapperStyle={data.styles?.wrapperStyle}>
					<Profile
						profileStyle={data.styles?.profileStyle}
						userNameStyle={data.styles?.nameStyle}
						userProfessionStyle={data.styles?.professionStyle}
					></Profile>
					<AccordionContainer
						accordionStyle={data.styles?.accordionStyle}
						accordionHeaderStyle={data.styles?.accordionHeaderStyle}
						accordionContentStyle={data.styles?.accordionContentStyle}
					></AccordionContainer>
				</LinkTree>
			</div>
		);
}

function LinkTree({ children, wrapperStyle }) {
	return (
		<div className="wrapper" style={wrapperStyle}>
			<div className="container">{children}</div>
		</div>
	);
}

function AccordionContainer({
	accordionStyle,
	accordionHeaderStyle,
	accordionContentStyle,
}) {
	const [curr, setCurr] = useState(null);

	function onClickHandler(i) {
		curr === i ? setCurr(null) : setCurr(i);
	}
	return (
		<div className="accordions">
			{data.projects.map((el, i) => (
				<Accordion
					accordionStyle={accordionStyle}
					accordionHeaderStyle={accordionHeaderStyle}
					accordionContentStyle={accordionContentStyle}
					data={el}
					key={el.title}
					isOpen={curr === i}
					onClick={() => onClickHandler(i)}
				></Accordion>
			))}
		</div>
	);
}

function Profile({ profileStyle, userNameStyle, userProfessionStyle }) {
	return (
		<div className="profile" style={profileStyle}>
			<User
				userNameStyle={userNameStyle}
				userProfessionStyle={userProfessionStyle}
			/>
			<Contacts />
		</div>
	);
}

function User({ userNameStyle, userProfessionStyle }) {
	return (
		<>
			{data.user.logo}
			<h1 className="username" style={userNameStyle}>
				Arthur Negosanu
			</h1>
			<h3 className="occupation" style={userProfessionStyle}>
				Software Developer
			</h3>
		</>
	);
}

function Contacts() {
	const [isCopied, setIsCopied] = useState(false);

	function copyToClipboard(text) {
		navigator.clipboard
			.writeText(text)
			.then(setIsCopied(true))
			.finally(setTimeout(() => setIsCopied(false), 2000));
	}

	return (
		<>
			<div className="contacts">
				{data.user.contacts.map((contact, i) => (
					<Link
						key={i}
						href={contact.link || null}
						onClick={() =>
							contact.text ? copyToClipboard(contact.text) : null
						}
					>
						{contact.icon}
					</Link>
				))}
			</div>
			<span className={isCopied ? '' : 'hidden'}>
				E-mail copied to clipboard
			</span>
		</>
	);
}

function Background({ children }) {
	return <div className="particles-container">{children}</div>;
}

function Accordion({
	data,
	isOpen,
	onClick,
	accordionStyle,
	accordionHeaderStyle,
	accordionContentStyle,
}) {
	return (
		<div className="accordion" style={accordionStyle}>
			<Header
				isOpen={isOpen}
				onClick={onClick}
				accordionHeaderStyle={accordionHeaderStyle}
			>
				{data.icon}
				<h1 className="title">{data.title}</h1>
				<Button isOpen={isOpen} />
			</Header>
			<ContentWrapper
				isOpen={isOpen}
				accordionContentStyle={accordionContentStyle}
			>
				<Content data={data}></Content>
			</ContentWrapper>
		</div>
	);
}

function Header({ isOpen, children, onClick, accordionHeaderStyle }) {
	return (
		<div
			className={`header ${isOpen ? 'open' : ''}`}
			onClick={onClick}
			style={accordionHeaderStyle}
		>
			{children}
		</div>
	);
}

function Button({ isOpen }) {
	return <button className={`btn ${isOpen ? 'open' : ''}`}>⛛</button>;
}

function ContentWrapper({ children, isOpen, accordionContentStyle }) {
	return (
		<div
			className={`content ${isOpen ? 'open' : ''}`}
			style={accordionContentStyle}
		>
			{children}
		</div>
	);
}

function Content({ data }) {
	const [info, setInfo] = useState('');
	return (
		<div className="grid">
			<span className="description">{data.description}</span>
			<ul className="list">
				{data.links.map((link, i) => (
					<ListLink link={link} setInfo={setInfo} key={i}></ListLink>
				))}
			</ul>
			<div className="info">
				<span>{info}</span>
			</div>
		</div>
	);
}

function ListLink({ link, setInfo }) {
	return (
		<li>
			<div
				style={{ display: 'flex', alignContent: 'center', gap: '0.7rem' }}
				onMouseEnter={() => setInfo(link.info)}
				onMouseLeave={() => setInfo('')}
			>
				<Link href={link.link}>{link.name}</Link>
				{link.git && (
					<Link href={link.git}>
						<GitLogo />
					</Link>
				)}
			</div>
		</li>
	);
}

function Link({ href, children, onClick }) {
	return (
		<a href={href} target="_blank" rel="noreferrer noopener" onClick={onClick}>
			{children}
		</a>
	);
}

function GitLogo() {
	return (
		<svg
			viewBox="0 0 1024 1024"
			fill="currentColor"
			height="1.2rem"
			width="1.2rem"
		>
			<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
		</svg>
	);
}
