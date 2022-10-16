import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import * as S from './styles'


export const DefaultLayout = () => {
	return (
		<>
			<Header />
			
			<S.Main>
				<Outlet />
			</S.Main>
		</>
	)
}