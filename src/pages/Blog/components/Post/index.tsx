import { useNavigate } from 'react-router-dom'

import { api } from '../../../../lib/axios'
import { formatDate, formatDistanceToNow } from '../../../../utils/formatDate'

import * as S from './styles'

interface IPostProps {
	number: number;
	title: string
	body: string
	createdAt: string;
}

export const Post = ({ number, title, body, createdAt }: IPostProps) => {
	const navigate = useNavigate()
	
	return (
		<S.Post onClick={() => navigate(`post/${number}`)}>
			<h1>{title}</h1>
			<time title={formatDate(createdAt)} dateTime={createdAt}>{formatDistanceToNow(createdAt)}</time>
			<p>{body}</p>
		</S.Post>
	)
}