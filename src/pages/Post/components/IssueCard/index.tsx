import { IIssue } from '../../../../interfaces/githubApiData'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import * as S from './styles'

interface IIssueCardProps {
	issueData: IIssue;
}

export const IssueCard = ({ issueData }: IIssueCardProps) => {
	return (
		<S.Content>
			<ReactMarkdown
				children={issueData.body}
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}
				components={{
					img: ({ children, src, ...props }) => {
						return (
							<div style={{ width: '100%' }}>
								<img 
									src={src}
									style={{ width: '100%' }}
								/>
							</div>
						)
					}
				}}
			/>
		</S.Content>
	)
}