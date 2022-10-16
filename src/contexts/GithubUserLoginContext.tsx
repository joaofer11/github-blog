import { useState, useEffect, createContext, ReactNode } from 'react'
import { api } from '../lib/axios'

interface IGithubUserLogin {
	avatar_url: string;
	bio: string;
	followers: number;
	login: string;
	name: string;
	html_url: string;
}

interface IGithubUserLoginContext {
	userLogin: IGithubUserLogin;
}

export const githubUserLoginContext = createContext(
	{} as IGithubUserLoginContext
)

interface IGithubUserLoginProviderProps {
	children: ReactNode;
}

export const GithubUserLoginProvider = ({ 
	children,
}: IGithubUserLoginProviderProps) => {
	const [userLogin, setUserLogin] = useState<IGithubUserLogin>({})
	
	const fetchUserLoginFromGithub = async () => {
		const response = await api.get(`/users/joaofer11`)
		setUserLogin(response.data)
		
		console.log(response.data)
	}
	
	useEffect(() => {
		fetchUserLoginFromGithub()
	}, [])
	
	return (
		<githubUserLoginContext.Provider
			value={{
				userLogin
			}}
		>
			{children}
		</githubUserLoginContext.Provider>
	)
}