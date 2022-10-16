import { faGithub } from '../../styles/icons'

type TIcon = typeof faGithub

interface IInfo {
	label: string;
	icon: TIcon;
}

interface ITagProps {
	info: IInfo;
	gridArea?: string;
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'

export const Tag = ({ info, gridArea }: ITagProps) => {
	return (
		<S.Tag variant={gridArea ?? 'initial'}>
			<div>
				<FontAwesomeIcon icon={info.icon} />
			</div>
			<span>{info.label}</span>
		</S.Tag>
	)
}