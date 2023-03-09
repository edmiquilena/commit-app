export interface ICommit {
  sha: string;
  commit: ICommitInfo;
  url: string;
  committer: ICommiter;
}

export interface ICommiter {
  login: string;
  avatar_url: string;
  gravatar_id: string;
}

export interface ICommitInfo {
  author: IAuthor;
  message: string;
  url: string;
}

export interface IAuthor {
  name: string;
  email: string;
  date: Date;
}
