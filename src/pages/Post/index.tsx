import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { githubApiDataContext } from '../../contexts/GithubApiDataContext'

import { Profile } from './components/Profile'
import { IssueCard } from './components/IssueCard'

export const Post = () => {
	const { issues } = useContext(githubApiDataContext)
	const params = useParams()
	
	const selectedIssue = issues.find(issue => 
		issue.number === Number(params.issueNumber)
	)!
	
	return (
		<>
			<Profile issueData={selectedIssue} />
			<IssueCard issueData={selectedIssue} />
		</>
	)
}