const data = {
	// styles: {
	// 	wrapperStyle: {
	// 		fontFamily: 'Candara',
	// 		backgroundColor: '#eee',
	// 	},
	// 	profileStyle: {
	// 		backgroundColor: '#ffc078',
	// 		color: '#343a40',
	// 		borderColor: '#343a40',
	// 		borderStyle: 'solid',
	// 		borderWidth: '0.15rem',
	// 		borderRadius: '5rem',
	// 		marginBottom: '2rem',
	// 		padding: '1rem',
	// 	},
	// 	nameStyle: { fontWeight: 500 },
	// 	professionStyle: { fontWeight: 500 },
	// 	accordionStyle: {
	// 		backgroundColor: '#ffe066',
	// 		color: '#343a40',
	// 		fontWeight: 600,
	// 	},
	// 	accordionHeaderStyle: {
	// 		backgroundColor: '#c0eb75',
	// 	},
	// },
	user: {
		logo: (
			<svg
				className="user-logo"
				width="6rem"
				height="6rem"
				viewBox="0 0 152.64226 123.1253"
				xmlns="http://www.w3.org/2000/svg"
				id="svg1"
			>
				<defs>
					<marker
						id="marker5"
						refX="0"
						refY="0"
						orient="auto"
						markerWidth="2"
						markerHeight="2"
						viewBox="0 0 1 1"
						preserveAspectRatio="xMidYMid"
						markerUnits="userSpaceOnUse"
						style={{ overflow: 'visible' }}
					>
						<path
							transform="scale(0.45)"
							style={{
								fill: 'context-stroke',
								fillRule: 'evenodd',
								stroke: 'none',
							}}
							d="M 0,-7.0710768 -7.0710894,0 0,7.0710589 7.0710462,0 Z"
							id="path5"
						/>
					</marker>

					<marker
						id="marker4"
						refX="0"
						refY="0"
						orient="auto"
						markerWidth="2"
						markerHeight="2"
						viewBox="0 0 1 1"
						preserveAspectRatio="xMidYMid"
						markerUnits="userSpaceOnUse"
						style={{ overflow: 'visible' }}
					>
						<path
							transform="scale(0.45)"
							style={{
								fill: 'context-stroke',
								fillRule: 'evenodd',
								stroke: 'none',
							}}
							d="M 0,-7.0710768 -7.0710894,0 0,7.0710589 7.0710462,0 Z"
							id="path4"
						/>
					</marker>

					<marker
						id="Diamond"
						refX="0"
						refY="0"
						orient="auto"
						markerWidth="2"
						markerHeight="2"
						viewBox="0 0 1 1"
						preserveAspectRatio="xMidYMid"
						markerUnits="userSpaceOnUse"
						style={{ overflow: 'visible' }}
					>
						<path
							transform="scale(0.45)"
							style={{
								fill: 'context-stroke',
								fillRule: 'evenodd',
								stroke: 'none',
							}}
							d="M 0,-7.0710768 -7.0710894,0 0,7.0710589 7.0710462,0 Z"
							id="path19"
						/>
					</marker>
				</defs>

				<g transform="translate(-23.750812,-103.43268)" id="layer1">
					<path
						d="M 49.813338,220.19995 79.923339,109.79664 110.03334,220.19995 29.740002,153.95796 h 80.293338 l 10.03667,-44.16131 20.07334,110.4033 30.11,-110.4033"
						style={{
							fill: 'none',
							stroke: 'currentColor',
							strokeWidth: 3.2,
							strokeLinecap: 'round',
							strokeLinejoin: 'round',
							strokeMiterlimit: 4.7,
							markerStart: 'url(#Diamond)',
							markerMid: 'url(#marker4)',
							markerEnd: 'url(#marker5)',
						}}
						id="path1"
					/>
				</g>
			</svg>
		),
		contacts: [
			{
				link: 'https://drive.google.com/file/d/1d8Dhlcx2lvQ6Fteyvvm3roI0rCWj8BsU/view',
				icon: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						fill="currentColor"
						height="2.5rem"
						width="2.5rem"
						viewBox="0 0 100 100"
					>
						<path d="m75 9.375h-50c-4.0195 0.023438-7.2695 3.2734-7.293 7.293v66.664c0.023438 4.0195 3.2734 7.2695 7.293 7.293h50c4.0195-0.023438 7.2695-3.2734 7.293-7.293v-66.664c-0.023438-4.0195-3.2734-7.2695-7.293-7.293zm1.043 73.957c0 0.27734-0.10938 0.54297-0.30469 0.73828-0.19531 0.19531-0.46094 0.30469-0.73828 0.30469h-50c-0.57422 0-1.043-0.46484-1.043-1.043v-66.664c0-0.57812 0.46875-1.043 1.043-1.043h50c0.27734 0 0.54297 0.10938 0.73828 0.30469 0.19531 0.19531 0.30469 0.46094 0.30469 0.73828zm-38.543-30.207h25c1.7148-0.023438 3.1016-1.4102 3.125-3.125-0.011719-2.7422-0.74609-5.4336-2.1289-7.8047-1.3828-2.3711-3.3633-4.3359-5.7461-5.6953 1.0664-1.543 1.6367-3.375 1.625-5.25 0-5.1758-4.1992-9.375-9.375-9.375s-9.375 4.1992-9.375 9.375c-0.011719 1.875 0.55859 3.707 1.625 5.25-2.3828 1.3594-4.3633 3.3242-5.7461 5.6953-1.3828 2.3711-2.1172 5.0625-2.1289 7.8047 0.023438 1.7148 1.4102 3.1016 3.125 3.125zm12.5-25c1.2656 0 2.4023 0.76172 2.8867 1.9297 0.48438 1.168 0.21484 2.5117-0.67578 3.4062-0.89453 0.89062-2.2383 1.1602-3.4062 0.67578-1.168-0.48438-1.9297-1.6211-1.9297-2.8867 0.023438-1.7148 1.4102-3.1016 3.125-3.125zm0 12.5c3.9727 0.003906 7.5078 2.5078 8.832 6.25h-17.664c1.3242-3.7422 4.8594-6.2461 8.832-6.25zm-9.375 34.375c-0.023438 1.7148-1.4102 3.1016-3.125 3.125h-4.168c-1.7227 0-3.125-1.3984-3.125-3.125s1.4023-3.125 3.125-3.125h4.168c1.7148 0.023438 3.1016 1.4102 3.125 3.125zm0-12.5c-0.023438 1.7148-1.4102 3.1016-3.125 3.125h-4.168c-1.7227 0-3.125-1.3984-3.125-3.125s1.4023-3.125 3.125-3.125h4.168c1.7148 0.023438 3.1016 1.4102 3.125 3.125zm29.168 12.5c-0.023438 1.7148-1.4102 3.1016-3.125 3.125h-16.668c-1.7266 0-3.125-1.3984-3.125-3.125s1.3984-3.125 3.125-3.125h16.668c1.7148 0.023438 3.1016 1.4102 3.125 3.125zm0-12.5c-0.023438 1.7148-1.4102 3.1016-3.125 3.125h-16.668c-1.7266 0-3.125-1.3984-3.125-3.125s1.3984-3.125 3.125-3.125h16.668c1.7148 0.023438 3.1016 1.4102 3.125 3.125z" />
					</svg>
				),
			},
			{
				link: 'https://www.linkedin.com/in/arthur-negosanu',
				icon: (
					<svg
						viewBox="0 0 1024 1024"
						fill="currentColor"
						height="2.5rem"
						width="2.5rem"
					>
						<path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z" />
					</svg>
				),
			},
			{
				text: 'arthuroking30@yahoo.com',
				icon: (
					<svg
						viewBox="0 0 1024 1024"
						fill="currentColor"
						height="2.5rem"
						width="2.5rem"
					>
						<path d="M859.9 681.4h-14.1c-27.1 0-49.2 22.2-49.2 49.3v14.1c0 27.1 22.2 49.3 49.2 49.3h14.1c27.1 0 49.2-22.2 49.2-49.3v-14.1c0-27.1-22.2-49.3-49.2-49.3zM402.6 231C216.2 231 65 357 65 512.5S216.2 794 402.6 794s337.6-126 337.6-281.5S589.1 231 402.6 231zm0 507C245.1 738 121 634.6 121 512.5c0-62.3 32.3-119.7 84.9-161v48.4h37l159.8 159.9v65.3h-84.4v56.3h225.1v-56.3H459v-65.3l103.5-103.6h65.3v-56.3H459v65.3l-28.1 28.1-93.4-93.5h37v-56.3H216.4c49.4-35 114.3-56.6 186.2-56.6 157.6 0 281.6 103.4 281.6 225.5S560.2 738 402.6 738zm534.7-507H824.7c-15.5 0-27.7 12.6-27.1 28.1l13.1 366h84.4l65.4-366.4c2.7-15.2-7.8-27.7-23.2-27.7z" />
					</svg>
				),
			},
		],
		username: 'Arthur Negosanu',
		occupation: 'Software Developer',
	},
	projects: [
		{
			title: 'React',
			description:
				"Projects I did following Jonas Schmedtmann's React course. Most of the layout and css was allready implemented. I added functionality using react",
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" height="2rem" width="2rem">
					<path d="M13.785 11.245 A1.785 1.785 0 0 1 12 13.03 A1.785 1.785 0 0 1 10.215 11.245 A1.785 1.785 0 0 1 13.785 11.245 z" />
					<path d="M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 001.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 01-.985-2.542zm10.572 6.095l-.11-.392a19.628 19.628 0 00-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 01-.987 2.542z" />
					<path d="M6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 00-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 00-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 011.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 002.021-2.477l.112-.16.194-.019a19.473 19.473 0 003.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 01-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 01-1.71 2.124z" />
					<path d="M17.58 8.695l-.395-.099a19.477 19.477 0 00-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0011.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 01-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 01-1.713-2.123 20.692 20.692 0 01-2.696-.419z" />
					<path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 01-1.126-1.769 26.028 26.028 0 01-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 014.198 0l.194.019.113.16a25.136 25.136 0 012.1 3.628l.083.179-.083.177a24.742 24.742 0 01-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 001.832-3.168 23.916 23.916 0 00-1.832-3.168 23.877 23.877 0 00-3.667 0 23.743 23.743 0 00-1.832 3.168 24.82 24.82 0 001.832 3.168z" />
				</svg>
			),
			links: [
				{
					name: 'link-tree',
					link: 'https://r2-link-tree.netlify.app/',
					git: 'https://github.com/arthuroking30/link-tree',
					info: 'Made this portfolio link-tree from scratch (HTML, CSS, React). Interactive particle background (tsParticles). You can configure the particles in the tsParticles.js file and the data and styles in data.js. Copy to clipboard feature',
				},
				{
					name: 'to-do-list',
					link: 'https://r2-list.netlify.app/',
					git: 'https://github.com/arthuroking30/to-do-list',
					info: 'Made this from scratch (HTML, CSS, React). Mobile compatible. You can create and remove small lists (6 per page). Each list has a maximum of 7 steps. Steps and titles have a maximum length of characters. Saved in Local Storage',
				},
				{
					name: 'travel-list',
					link: 'https://r2-travel-list.netlify.app/',
					git: 'https://github.com/arthuroking30/travel-list',
					info: 'Practice for React state and events. You can add or remove items you want to pack for your travel. You can also sort them by input order, description or packed status',
				},
				{
					name: 'eat-n-split',
					link: 'https://r2-eat-n-split.netlify.app/',
					git: 'https://github.com/arthuroking30/eat-n-split',
					info: 'Practice for React state, forms, events. The app calculates how much the other person owes after splitting the bill. You can add new friends and set their picture using an url',
				},
			],
		},
		{
			title: 'JavaScript',
			description:
				"Projects I did following Jonas Schmedtmann's JavaScript course. Most of the layout and css was allready implemented. I added functionality using Vanilla JavaScript",
			icon: (
				<svg fill="none" viewBox="0 0 15 15" height="2rem" width="2rem">
					<path
						stroke="currentColor"
						strokeWidth="0.7"
						d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3h-1A1.5 1.5 0 018.5 11m-2-5v5a1.5 1.5 0 01-3 0M.5.5h14v14H.5V.5z"
					/>
				</svg>
			),
			links: [
				{
					name: 'mapty',
					link: 'https://r2-mapty.netlify.app/',
					git: 'https://github.com/arthuroking30/mapty',
					info: 'Activity tracker using leaflet API for the map. Click on the map, set the parameters and hit Enter. The marker will appear on the map and it will also be saved in the local storage. I implemented the delete functionality by myself.',
				},
				{
					name: 'bankist',
					link: 'https://r2-bankist.netlify.app/',
					git: 'https://github.com/arthuroking30/bankist',
					info: 'Log in using (user:js pass:1111). You can transfer money to (user:jd pass:2222). Request a loan (loan<in). Close the account. Session timeout in 2 minutes',
				},
				{
					name: 'bankist-dom',
					link: 'https://r2-bankist-dom.netlify.app/',
					git: 'https://github.com/arthuroking30/bankist-dom',
					info: 'Lazy loading, smooth scrolling, added functionality to  accordion and carousel. On hover effect and sticky navigation. Modal Sign In window',
				},
				{
					name: '2-player-dice',
					link: 'https://r2-dice.netlify.app/',
					git: 'https://github.com/arthuroking30/pig-game',
					info: 'Roll the dice. If you get a 1, your score is reset to the last held value. First to 20 wins. Have fun!',
				},
				{
					name: 'guess-my-number',
					link: 'https://r2-guess.netlify.app/',
					git: 'https://github.com/arthuroking30/guess-my-number',
					info: 'Guess a number between 1 and 20. The game will tell you if the guess is wrong and point you in the right direction. It tracks your Score and Highscore. Have fun!',
				},
			],
		},
		{
			title: 'Html Css',
			description:
				"Projects I did following Jonas Schmedtmann's HTML CSS Course. Most of the course had small codepen challanges or focused on single components. This is the only fully fledged website I made during the course",
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" height="2rem" width="2rem">
					<path d="M20.87 2.162A.5.5 0 0020.5 2h-17a.5.5 0 00-.498.544l1.5 17a.5.5 0 00.36.437l6.99 2a.51.51 0 00.275 0l7.01-2a.5.5 0 00.361-.437l1.5-17a.5.5 0 00-.129-.382zm-2.338 16.951L11.99 20.98l-6.522-1.866L4.046 3h15.908l-1.422 16.113zM7.96 7.5h7.534l-.266 3H10a.5.5 0 000 1h5.139l-.345 3.883-2.794.635-2.794-.635-.128-1.428a.513.513 0 00-.543-.453.5.5 0 00-.453.543l.16 1.79a.5.5 0 00.388.442l3.26.74a.487.487 0 00.22 0l3.26-.74a.5.5 0 00.388-.443l.426-4.803c0-.01.006-.02.006-.031l-.002-.012.35-3.944a.5.5 0 00-.498-.544H7.96a.5.5 0 100 1z" />
				</svg>
			),
			links: [
				{
					name: 'omnifood',
					link: 'https://r2-omnifood.netlify.app/',
					git: 'https://github.com/arthuroking30/omnifood',
					info: 'Website about weekly healty food. Mobile compatible. Learned about Flexbox and CSS Grid, relative sizing, styling and design guides. Added simple JavaScript functionality.',
				},
			],
		},
		{
			title: 'Express MongoDB',
			description: 'Made an API',
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" height="2rem" width="2rem">
					<path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 01-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 01-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
				</svg>
			),
			links: [],
		},
		{
			title: 'Python',
			description: 'Projects I did in python',
			icon: (
				<svg fill="none" viewBox="0 0 15 15" height="2rem" width="2rem">
					<path
						stroke="currentColor"
						d="M6 2.5h1M4.5 4V1.5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1h-4a1 1 0 00-1 1v5a1 1 0 001 1h4a1 1 0 001-1V11M8 4.5H1.5a1 1 0 00-1 1v5a1 1 0 001 1h3m2.5-1h6.5a1 1 0 001-1v-5a1 1 0 00-1-1h-3m-2.5 9h1"
					/>
				</svg>
			),
			links: [
				{
					name: 'sudoku-solver',
					link: 'https://github.com/arthuroking30/sudoku-solver',
					info: 'It combines computer vision techniques to extract Sudoku puzzles from images and uses a recursive backtracking algorithm to solve them. OpenCV is used for image processing, while TensorFlow is leveraged to read the digits from captured images.',
				},
				{
					name: 'kahoot-cheater',
					link: 'https://github.com/arthuroking30/kahoot-cheater',
					info: 'Uses selenium to copy the multiple choice question and pastes it into a ChatGPT prompt and submits. The user has to manually click the answer after ChatGPT responds.',
				},
			],
		},
	],
};
export default data;
