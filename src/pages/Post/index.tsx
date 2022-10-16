import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { githubIssuesContext } from '../../contexts/GithubIssuesContext'

import { Profile } from './components/Profile'
import { IssueCard } from './components/IssueCard'
import * as S from './styles'

export const Post = () => {
	const { issues } = useContext(githubIssuesContext)
	const params = useParams()
	
	const selectedIssue = issues.find(issue => issue.number === +params.issueNumber)
	
	return (
		<>
			<Profile issueData={selectedIssue} />
			<IssueCard issueData={selectedIssue} />
		</>
	)
}