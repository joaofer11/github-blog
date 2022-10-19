import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { githubApiDataContext } from '../../contexts/GithubApiDataContext'

import * as S from './styles'

export const Login = () => {
	const [errorMsg, setErrorMsg] = useState('')
	const { fetchDataFromGithubApi } = useContext(githubApiDataContext)
	const navigate = useNavigate()
	
	const handleFormSubmitting = async (event: any) => {
		event.preventDefault()
		
		const userNameFieldValue = event.target.user_name.value
		const userRepoFieldValue = event.target.user_repo.value
		
		const errorMsg: string | undefined = await fetchDataFromGithubApi(userNameFieldValue, userRepoFieldValue)
		
		if (!errorMsg) return navigate('/blog')
		
		setErrorMsg(errorMsg)
	}
	
	return (
		<S.FormContainer onSubmit={handleFormSubmitting}>
			<p>
				Digite abaixo o nome do seu usuário de login, e o 
				nome do repositório.
			</p>
			
			<input type="text" name="user_name" />
			<input type="text" name="user_repo" />
			{errorMsg && <span>{errorMsg}</span>}
			<button type="submit">Enviar</button>
		</S.FormContainer>
	)
}