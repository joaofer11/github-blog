import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { githubApiDataContext } from '../../../../contexts/GithubApiDataContext'

import { api } from '../../../../lib/axios'
import { formatDate, formatDistanceToNow } from '../../../../utils/formatDate'
import * as S from './styles'



export const Post = () => {
	const { issues } = useContext(githubApiDataContext)
	const thereAreResults = issues.length >= 1
	const navigate = useNavigate()
	
	return (
		<>
			{thereAreResults 
				? issues.map(issue => (
					<S.Post key={issue.id} onClick={() => navigate(`post/${issue.number}`)}>
						<h1>{issue.title}</h1>
						<time title={formatDate(issue.created_at)} dateTime={issue.created_at}>{formatDistanceToNow(issue.created_at)}</time>
						<p>{issue.body}</p>
					</S.Post>
				))
				: (
					<S.WarningMessage>
						Sem Resultados
					</S.WarningMessage>
				)
			}
		</>
	)
}