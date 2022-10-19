import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { githubApiDataContext } from './contexts/GithubApiDataContext'

export const PrivateRoute = () => {
	const { logged } = useContext(githubApiDataContext)
	
	return logged ? <Outlet /> : <Navigate to="/" />
}