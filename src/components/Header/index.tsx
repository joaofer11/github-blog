import headerCoverSVG from '../../assets/header_cover.svg'
import * as S from './styles'


export const Header = () => {
	return (
		<S.Header>
			<img src={headerCoverSVG} alt="" />
		</S.Header>
	)
}