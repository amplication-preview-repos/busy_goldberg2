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
import { Series } from "./Series";
import { SeriesCountArgs } from "./SeriesCountArgs";
import { SeriesFindManyArgs } from "./SeriesFindManyArgs";
import { SeriesFindUniqueArgs } from "./SeriesFindUniqueArgs";
import { CreateSeriesArgs } from "./CreateSeriesArgs";
import { UpdateSeriesArgs } from "./UpdateSeriesArgs";
import { DeleteSeriesArgs } from "./DeleteSeriesArgs";
import { WatchlistFindManyArgs } from "../../watchlist/base/WatchlistFindManyArgs";
import { Watchlist } from "../../watchlist/base/Watchlist";
import { SeriesService } from "../series.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Series)
export class SeriesResolverBase {
  constructor(
    protected readonly service: SeriesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "read",
    possession: "any",
  })
  async _seriesItemsMeta(
    @graphql.Args() args: SeriesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Series])
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "read",
    possession: "any",
  })
  async seriesItems(
    @graphql.Args() args: SeriesFindManyArgs
  ): Promise<Series[]> {
    return this.service.seriesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Series, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "read",
    possession: "own",
  })
  async series(
    @graphql.Args() args: SeriesFindUniqueArgs
  ): Promise<Series | null> {
    const result = await this.service.series(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Series)
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "create",
    possession: "any",
  })
  async createSeries(@graphql.Args() args: CreateSeriesArgs): Promise<Series> {
    return await this.service.createSeries({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Series)
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "update",
    possession: "any",
  })
  async updateSeries(
    @graphql.Args() args: UpdateSeriesArgs
  ): Promise<Series | null> {
    try {
      return await this.service.updateSeries({
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

  @graphql.Mutation(() => Series)
  @nestAccessControl.UseRoles({
    resource: "Series",
    action: "delete",
    possession: "any",
  })
  async deleteSeries(
    @graphql.Args() args: DeleteSeriesArgs
  ): Promise<Series | null> {
    try {
      return await this.service.deleteSeries(args);
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
    @graphql.Parent() parent: Series,
    @graphql.Args() args: WatchlistFindManyArgs
  ): Promise<Watchlist[]> {
    const results = await this.service.findWatchlists(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
