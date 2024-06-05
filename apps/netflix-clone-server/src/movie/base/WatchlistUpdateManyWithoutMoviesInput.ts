/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WatchlistWhereUniqueInput } from "../../watchlist/base/WatchlistWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WatchlistUpdateManyWithoutMoviesInput {
  @Field(() => [WatchlistWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WatchlistWhereUniqueInput],
  })
  connect?: Array<WatchlistWhereUniqueInput>;

  @Field(() => [WatchlistWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WatchlistWhereUniqueInput],
  })
  disconnect?: Array<WatchlistWhereUniqueInput>;

  @Field(() => [WatchlistWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WatchlistWhereUniqueInput],
  })
  set?: Array<WatchlistWhereUniqueInput>;
}

export { WatchlistUpdateManyWithoutMoviesInput as WatchlistUpdateManyWithoutMoviesInput };
