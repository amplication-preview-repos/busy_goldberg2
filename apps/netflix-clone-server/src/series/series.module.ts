import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SeriesModuleBase } from "./base/series.module.base";
import { SeriesService } from "./series.service";
import { SeriesController } from "./series.controller";
import { SeriesResolver } from "./series.resolver";

@Module({
  imports: [SeriesModuleBase, forwardRef(() => AuthModule)],
  controllers: [SeriesController],
  providers: [SeriesService, SeriesResolver],
  exports: [SeriesService],
})
export class SeriesModule {}
