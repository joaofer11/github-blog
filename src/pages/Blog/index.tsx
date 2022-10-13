import { SearchForm } from './components/SearchForm'
import { Post } from './components/Post'

import * as S from './styles'

export const Blog = () => {
	return (
		<S.Blog>
			<SearchForm />
			<Post />
		</S.Blog>
	)
}