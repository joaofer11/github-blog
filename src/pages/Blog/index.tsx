import { useContext } from 'react'
import { githubIssuesContext } from '../../contexts/GithubIssuesContext'

import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { Post } from './components/Post'

export const Blog = () => {
	const { issues } = useContext(githubIssuesContext)
	
	return (
		<>
			<Profile />
			<SearchForm />
			
			{issues.map((issue) => {
				return (
					<Post 
						key={issue.id}
						number={issue.number}
						title={issue.title}
						body={issue.body}
						createdAt={issue.created_at}
					/>
				)
			})}
		</>
	)
}