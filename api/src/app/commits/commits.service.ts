import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom, map } from "rxjs";
import { ICommit } from "./types/commits.types";
import commitInterceptor from "./commit.interceptor";
import { AxiosError } from "axios";

@Injectable()
export class CommitsService {
  constructor(private readonly Axios: HttpService) {}

  async findAll(): Promise<ICommit[]> {
    return firstValueFrom(
      this.Axios.get<ICommit[]>(
        `https://api.github.com/repos/${process.env.GIT_USER}/${process.env.REPO}/commits`
      )
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error);
            throw new Error("Dang, An error happened!");
          })
        )
        .pipe(map((data) => commitInterceptor(data.data)))
    );
  }
}
