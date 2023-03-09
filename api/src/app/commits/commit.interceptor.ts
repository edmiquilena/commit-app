import { ICommit } from "./types/commits.types";

export default function (data): ICommit[] {
  return data.map(
    ({
      sha,
      url: mainUrl,
      commit: { author, message, url },
      committer: { avatar_url, gravatar_id, login },
    }) => {
      return {
        url: mainUrl,
        sha,
        commit: { author, message, url },
        committer: { avatar_url, gravatar_id, login },
      };
    }
  );
}
