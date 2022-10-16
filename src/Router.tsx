import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<Blog />} />
				<Route path="post/:issueNumber" element={<Post />}/>
			</Route>
		</Routes>
	)
}