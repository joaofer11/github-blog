import { Route, Routes } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Login } from './pages/Login'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export const Router = () => {
	return (
		<Routes>
			<Route path="" element={<Login />} />
			
			<Route path="/blog" element={<PrivateRoute />}>
				<Route path="/blog" element={<DefaultLayout />}>
					<Route index element={<Blog />} />
					<Route path="post/:issueNumber" element={<Post />} />
				</Route>
			</Route>
		</Routes>
	)
}