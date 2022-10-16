import { Link } from 'react-router-dom'

import * as I from '../../../../styles/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tag } from '../../../../components/Tag'
import * as S from './styles'

import { IIssue } from '../../../../interfaces/issue'
import { formatDistanceToNow } from '../../../../utils/formatDate'

interface IProfileProps {
	issueData?: IIssue;
}

export const Profile = ({ issueData }: IProfileProps) => {
	console.log(issueData)
	
	return (
		<S.InheritedProfile>
			<button>
				<div>
					<FontAwesomeIcon icon={I.faChevronLeft} />
				</div>
				<Link to="/">voltar</Link>
			</button>
			<button>
				<div>
					<FontAwesomeIcon icon={I.faArrowUpRightFromSquare} />
				</div>
				 <a href={issueData?.html_url} target="_blank">ver no github</a>
			</button>
			
			<h1>{issueData?.title}</h1>
			
			<Tag 
				info={{ label: issueData?.user.login, icon: I.faGithub }}
				gridArea="github-user"
			/>
			
			<Tag 
				info={{ 
					label: formatDistanceToNow(issueData?.created_at), 
					icon: I.faCalendarDay,
				}}
				gridArea="date"
			/>
			
			<Tag 
				info={{ label: issueData?.comments, icon: I.faComment }}
				gridArea="comments"
			/>
		</S.InheritedProfile>
	)
}