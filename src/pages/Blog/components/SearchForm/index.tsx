import { useState, useContext } from 'react'
import { githubApiDataContext } from '../../../../contexts/GithubApiDataContext'

import * as S from './styles'

export const SearchForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const { issues, fetchIssuesByQuery } = useContext(githubApiDataContext)
	
	const onSubmitting = (event: any) => {
		event.preventDefault()
		event.target.reset()
		setIsSubmitting(true)
		
		return () => {
			setIsSubmitting(false)
		}
	}
	
	const handleFormSubmitting = async (event: any) => {
		const queryValue = event.target.query.value
		const finishSubmitting = onSubmitting(event)
		
		await fetchIssuesByQuery(queryValue, finishSubmitting)
	}
	
	return (
		<S.SearchForm onSubmit={handleFormSubmitting}>
			<h2>Publicações</h2>
			<span>{issues.length} publicações</span>
			<input disabled={isSubmitting} name="query" type="text" placeholder="Buscar conteúdo" />
			<input type="submit" value="Buscar" disabled={isSubmitting} />
		</S.SearchForm>
	)
}