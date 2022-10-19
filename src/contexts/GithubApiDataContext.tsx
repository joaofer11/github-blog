import { useState, createContext, ReactNode } from 'react'
import { IIssue, IUser } from '../interfaces/githubApiData'
import { api } from '../lib/axios'

interface IGithubApiData {
	user: IUser;
	issues: IIssue[];
	logged: boolean;
}

interface IGithubApiDataContext {
	user: IUser;
	issues: IIssue[];
	logged: boolean;
	
	fetchDataFromGithubApi: (userName: string, repo: string) => Promise<string | undefined>
	fetchIssuesByQuery: (query: string, finishSubmitting: () => void) => Promise<void>
}

interface IGithubApiDataProvider {
	children: ReactNode;
}

const initialState = {
	user: {} as IUser,
	issues: [],
	logged: false,
} as IGithubApiData

export const githubApiDataContext = createContext({} as IGithubApiDataContext)

export const GithubApiDataProvider = ({ 
	children,
}: IGithubApiDataProvider) => {
	const [githubApiData, setGithubApiData] = useState(initialState)
	const { user, issues, logged } = githubApiData
	
	const fetchDataFromGithubApi = async (userName: string, repo: string) => {
		const userPromise = api.get(`/users/${userName}`)
		const issuesPromise = api.get(`/repos/${userName}/${repo}/issues`)
		
		try {
			const [userResponse, issuesResponse] = await Promise.all([
				userPromise, 
				issuesPromise,
			])
			
			setGithubApiData({ 
				user: userResponse.data, 
				issues: issuesResponse.data,
				logged: true,
			})
		} catch (error) {
			return 'O nome do usuário ou repositório, não são válidos.'
		}
	}
	
	const fetchIssuesByQuery = async (query: string, finishSubmitting: () => void) => {
		const response = await api.get(`/search/issues?q=${query}%20repo:${user.login}/github-blog`)
		setGithubApiData(state => ({
			...state,
			issues: response.data.items
		}))
		finishSubmitting()
	} 
	
	return (
		<githubApiDataContext.Provider	
			value={{
				user,
				issues,
				logged,
				fetchIssuesByQuery,
				fetchDataFromGithubApi,
			}}
		>
			{children}
		</githubApiDataContext.Provider>
	)
}