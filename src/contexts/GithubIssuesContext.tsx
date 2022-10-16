import { useState, useEffect, createContext, ReactNode } from 'react'
import { IIssue } from '../interfaces/issue'
import { api } from '../lib/axios'

interface IGithubIssuesContext {
	issues: IIssue[];
}

interface IGithubIssuesProviderProps {
	children: ReactNode;
}

export const githubIssuesContext = createContext({} as IGithubIssuesContext)

export const GithubIssuesProvider = ({ 
	children,
}: IGithubIssuesProviderProps) => {
	const [issues, setIssues] = useState<IIssue[]>([])
	
	const fetchIssues = async () => {
		//const response = await api.get('/search/issues?q=closure%20repo:joaofer11/github-blog')
		const response = await api.get(`/repos/joaofer11/github-blog/issues`)
		setIssues(response.data)
	}
	
	useEffect(() => {
		fetchIssues()
	}, [])
	
	return (
		<githubIssuesContext.Provider	
			value={{
				issues,
			}}
		>
			{children}
		</githubIssuesContext.Provider>
	)
}