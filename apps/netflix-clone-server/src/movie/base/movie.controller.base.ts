/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MovieService } from "../movie.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MovieCreateInput } from "./MovieCreateInput";
import { Movie } from "./Movie";
import { MovieFindManyArgs } from "./MovieFindManyArgs";
import { MovieWhereUniqueInput } from "./MovieWhereUniqueInput";
import { MovieUpdateInput } from "./MovieUpdateInput";
import { WatchlistFindManyArgs } from "../../watchlist/base/WatchlistFindManyArgs";
import { Watchlist } from "../../watchlist/base/Watchlist";
import { WatchlistWhereUniqueInput } from "../../watchlist/base/WatchlistWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MovieControllerBase {
  constructor(
    protected readonly service: MovieService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Movie })
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMovie(@common.Body() data: MovieCreateInput): Promise<Movie> {
    return await this.service.createMovie({
      data: data,
      select: {
        createdAt: true,
        description: true,
        genre: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Movie] })
  @ApiNestedQuery(MovieFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async movies(@common.Req() request: Request): Promise<Movie[]> {
    const args = plainToClass(MovieFindManyArgs, request.query);
    return this.service.movies({
      ...args,
      select: {
        createdAt: true,
        description: true,
        genre: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Movie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async movie(
    @common.Param() params: MovieWhereUniqueInput
  ): Promise<Movie | null> {
    const result = await this.service.movie({
      where: params,
      select: {
        createdAt: true,
        description: true,
        genre: true,
        id: true,
        releaseDate: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Movie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMovie(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() data: MovieUpdateInput
  ): Promise<Movie | null> {
    try {
      return await this.service.updateMovie({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          genre: true,
          id: true,
          releaseDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Movie })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMovie(
    @common.Param() params: MovieWhereUniqueInput
  ): Promise<Movie | null> {
    try {
      return await this.service.deleteMovie({
        where: params,
        select: {
          createdAt: true,
          description: true,
          genre: true,
          id: true,
          releaseDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/watchlists")
  @ApiNestedQuery(WatchlistFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Watchlist",
    action: "read",
    possession: "any",
  })
  async findWatchlists(
    @common.Req() request: Request,
    @common.Param() params: MovieWhereUniqueInput
  ): Promise<Watchlist[]> {
    const query = plainToClass(WatchlistFindManyArgs, request.query);
    const results = await this.service.findWatchlists(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        movie: {
          select: {
            id: true,
          },
        },

        series: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/watchlists")
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "update",
    possession: "any",
  })
  async connectWatchlists(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() body: WatchlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      watchlists: {
        connect: body,
      },
    };
    await this.service.updateMovie({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/watchlists")
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "update",
    possession: "any",
  })
  async updateWatchlists(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() body: WatchlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      watchlists: {
        set: body,
      },
    };
    await this.service.updateMovie({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/watchlists")
  @nestAccessControl.UseRoles({
    resource: "Movie",
    action: "update",
    possession: "any",
  })
  async disconnectWatchlists(
    @common.Param() params: MovieWhereUniqueInput,
    @common.Body() body: WatchlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      watchlists: {
        disconnect: body,
      },
    };
    await this.service.updateMovie({
      where: params,
      data,
      select: { id: true },
    });
  }
}
