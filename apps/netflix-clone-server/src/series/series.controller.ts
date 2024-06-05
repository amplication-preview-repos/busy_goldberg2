import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SeriesService } from "./series.service";
import { SeriesControllerBase } from "./base/series.controller.base";

@swagger.ApiTags("series")
@common.Controller("series")
export class SeriesController extends SeriesControllerBase {
  constructor(
    protected readonly service: SeriesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
