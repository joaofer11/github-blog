import { useContext } from 'react'
import { githubApiDataContext } from '../../../../contexts/GithubApiDataContext'

import * as I from '../../../../styles/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tag } from '../../../../components/Tag'
import * as S from './styles'

export const Profile = () => {
	const { user } = useContext(githubApiDataContext)
	
	return (
		<S.InheritedProfile>
			<S.Avatar>
				<img src={user?.avatar_url} alt="" />
			</S.Avatar>
			
			<h1>{user?.name}</h1>
			
			<button>
				<a href={user?.html_url} target="_blank">Github</a>
				
				<div>
					<FontAwesomeIcon icon={I.faArrowUpRightFromSquare} />
				</div>
			</button>
			
			<S.Bio>
				{user?.bio}
			</S.Bio>
			
			<Tag 
				info={{ label: user?.login, icon: I.faGithub, }}
				gridArea="name-user"
			/>
			
			<Tag 
				info={{ 
					label: `${user?.followers} seguidores`, 
					icon: I.faUserGroup,
				}}
				gridArea="followers"
			/>
			
		</S.InheritedProfile>
	)
}