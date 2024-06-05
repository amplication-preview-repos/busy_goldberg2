/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Movie } from "./Movie";
import { MovieCountArgs } from "./MovieCountArgs";
import { MovieFindManyArgs } from "./MovieFindManyArgs";
import { MovieFindUniqueArgs } from "./MovieFindUniqueArgs";
import { CreateMovieArgs } from "./CreateMovieArgs";
import { UpdateMovieArgs } from "./UpdateMovieArgs";
import { DeleteMovieArgs } from "./DeleteMovieArgs";
import { WatchlistFindManyArgs } from "../../watchlist/base/WatchlistFindManyArgs";
import { Watchlist } from "../../watchlist/base/Watchlist";
import { MovieService } from "../movie.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Movie)
export class MovieResolverBase {
  constructor(
    protected readonly service: MovieService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "read",
    possession: "any",
  })
  async _moviesMeta(
    @graphql.Args() args: MovieCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Movie])
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "read",
    possession: "any",
  })
  async movies(@graphql.Args() args: MovieFindManyArgs): Promise<Movie[]> {
    return this.service.movies(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Movie, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "read",
    possession: "own",
  })
  async movie(
    @graphql.Args() args: MovieFindUniqueArgs
  ): Promise<Movie | null> {
    const result = await this.service.movie(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Movie)
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "create",
    possession: "any",
  })
  async createMovie(@graphql.Args() args: CreateMovieArgs): Promise<Movie> {
    return await this.service.createMovie({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Movie)
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "update",
    possession: "any",
  })
  async updateMovie(
    @graphql.Args() args: UpdateMovieArgs
  ): Promise<Movie | null> {
    try {
      return await this.service.updateMovie({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Movie)
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "delete",
    possession: "any",
  })
  async deleteMovie(
    @graphql.Args() args: DeleteMovieArgs
  ): Promise<Movie | null> {
    try {
      return await this.service.deleteMovie(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Watchlist], { name: "watchlists" })
  @nestAccessControl.UseRoles({
    resource: "Watchlist",
    action: "read",
    possession: "any",
  })
  async findWatchlists(
    @graphql.Parent() parent: Movie,
    @graphql.Args() args: WatchlistFindManyArgs
  ): Promise<Watchlist[]> {
    const results = await this.service.findWatchlists(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
