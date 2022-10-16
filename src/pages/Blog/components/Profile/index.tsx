import { useContext } from 'react'
import { githubUserLoginContext } from '../../../../contexts/GithubUserLoginContext'

import { api } from '../../../../lib/axios'

import * as I from '../../../../styles/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tag } from '../../../../components/Tag'
import * as S from './styles'

export const Profile = () => {
	const { userLogin } = useContext(githubUserLoginContext)
	
	return (
		<S.InheritedProfile>
			<S.Avatar>
				<img src={userLogin.avatar_url} alt="" />
			</S.Avatar>
			
			<h1>{userLogin.name}</h1>
			
			<button>
				<a href={userLogin.html_url} target="_blank">Github</a>
				
				<div>
					<FontAwesomeIcon icon={I.faArrowUpRightFromSquare} />
				</div>
			</button>
			
			<S.Bio>
				{userLogin.bio}
			</S.Bio>
			
			<Tag 
				info={{ label: userLogin.login, icon: I.faGithub, }}
				gridArea="name-user"
			/>
			
			<Tag 
				info={{ 
					label: `${userLogin.followers} seguidores`, 
					icon: I.faUserGroup,
				}}
				gridArea="followers"
			/>
			
		</S.InheritedProfile>
	)
}