import React from 'react'
import tw from 'twin.macro'
import omame from '@/assets/icon.webp'
import zzz from '@/assets/1f4a4.svg'
import CyberOS from '@/assets/cyberos.webp'
import StellaNode from '@/assets/stellanode.webp'
import '@fontsource/rubik/300.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGitAlt, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import Project from '@/components/Project'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const SocialLink = styled.a`
	${tw`m-4`};
`

const App = (): JSX.Element => {
	return (
		<div css={tw`w-full flex flex-col items-center`}>
			<div css={tw`w-full flex flex-col items-center p-16 max-w-container`}>
				<div css={tw`w-full flex justify-between flex-col lg:flex-row`}>
					<div css={tw`flex flex-col lg:flex-row items-center`}>
						<img src={omame} css={tw`rounded-full w-64 h-auto shadow-lg`}/>
						<div css={tw`lg:ml-16 text-center lg:text-left`}>
							<p css={tw`text-6xl font-light pt-8 lg:pt-0`}>omame</p>
							<p css={tw`text-2xl pt-4`}>just a sleepy kot <img src={zzz} css={tw`inline-block w-8 ml-2 h-auto`}/></p>
						</div>
					</div>

					<div css={tw`flex lg:flex-col text-4xl justify-center items-center pt-4 lg:pt-0`}>
						<SocialLink href="https://twitter.com/omametech">
							<FontAwesomeIcon icon={faTwitter} />
						</SocialLink>
						<SocialLink href="https://discord.gg/WSMyh5fdUg">
							<FontAwesomeIcon icon={faDiscord} />
						</SocialLink>
						<SocialLink href="https://github.com/omaemae">
							<FontAwesomeIcon icon={faGithub} />
						</SocialLink>
					</div>
				</div>

				<p css={tw`text-5xl pt-16 font-light`}>projects</p>

				<Project
					name="CyberOS"
					image={CyberOS}
					description="CyberOS is a Linux distribution based on Arch Linux and Qt Quick. I'm a maintainer of the project."
					links={{
						'https://getcyberos.org': faGlobe,
						'https://twitter.com/CyberOS_Linux': faTwitter,
						'https://git.omame.tech/CyberOS': faGitAlt
					}}
				/>
				<Project
					name="StellaNode"
					image={StellaNode}
					description="I'm a software developer at StellaNode. I've created their unique website and panel. I also do support for some of their products."
					links={{
						'https://stellanode.com': faGlobe,
						'https://twitter.com/stellanode': faTwitter,
					}}
				/>
			</div>
		</div>
	)
}

export default App
