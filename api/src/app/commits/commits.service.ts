import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import { ICommit } from "./types/commits.types";

@Injectable()
export class CommitsService {
  constructor(private readonly Axios: HttpService) {}

  async findAll(): Promise<ICommit[]> {
    const res = firstValueFrom(
      this.Axios.get<ICommit[]>(
        `https://api.github.com/repos/edmiquilena/commit-app/commits`
      )
    );
    const data = (await res).data;
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
}
