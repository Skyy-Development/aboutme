import React from 'react'
const github_username = 'skyy-Development'
const discord_usertag = 'skyycodee'
const discord_userid = '1131236182899052696'
const email = ''

const projects = [
	'',
	'',
	'',
	'',
	'',
	'',
]

const links = [
	{
		name: 'GitHub',
		icon: 'fab fa-fw fa-github',
		link: 'https://github.com/Skyy-Development',
		description: 'My profile on GitHub',
	},
	{
		name: 'Website',
		icon: 'fas fa-fw fa-coffee',
		link: 'https://e-z.bio/dashboard',
		description: 'Personal website',
	},
	{
		name: 'Discord',
		link: `https://discord.com/users/${discord_userid}`,
		icon: 'fab fa-fw fa-discord',
		description: `${discord_usertag} | Add me as friend!`,
	},
	/*
	{
		name: 'Contact',
		icon: 'fas fa-fw fa-at',
		link: `DM me on discord:${email}`,
		description: 'Lets get in touch!',
	},
*/
]

const info = (
	<>
		<p>Hello i'm a developer from germany:)</p>
		<p>
			I've got intermediate experience with{' '}
			<span className="highlighted">JavaScript</span> and{' '}
			<span className="highlighted">Node.js</span>.
		</p>
		<p>
			I've been doing{' '}
			<span className="highlighted">front-end web designing</span> as a
			fun pastime for a couple of years now. Currently, I'm learning{' '}
			<span className="highlighted">React</span> and{' '}
			<span className="highlighted">Next.js</span>
		</p>
		<p>
			Aside from that, I have basic knowledge of{' '}
			<span className="highlighted">python</span>,{' '}
			<span className="highlighted">java</span> and{' '}
			<span className="highlighted">shell scripting.</span>
		</p>
	</>
)

export {
	github_username,
	discord_usertag,
	discord_userid,
	email,
	projects,
	links,
	info,
}
