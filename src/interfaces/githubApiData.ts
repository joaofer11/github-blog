export interface IUser {
	avatar_url: string;
	bio: string;
	followers: number;
	login: string;
	name: string;
	html_url: string;
}

export interface IIssue {
	id: number;
	number: number;
	title: string;
	body: string;
	created_at: string;
	comments: string;
	html_url: string;
	user: Record<string, any>;
}