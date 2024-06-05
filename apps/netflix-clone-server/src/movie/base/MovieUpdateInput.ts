/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsEnum,
  IsDate,
  ValidateNested,
} from "class-validator";
import { EnumMovieGenre } from "./EnumMovieGenre";
import { Type } from "class-transformer";
import { WatchlistUpdateManyWithoutMoviesInput } from "./WatchlistUpdateManyWithoutMoviesInput";

@InputType()
class MovieUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumMovieGenre,
  })
  @IsEnum(EnumMovieGenre)
  @IsOptional()
  @Field(() => EnumMovieGenre, {
    nullable: true,
  })
  genre?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  releaseDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => WatchlistUpdateManyWithoutMoviesInput,
  })
  @ValidateNested()
  @Type(() => WatchlistUpdateManyWithoutMoviesInput)
  @IsOptional()
  @Field(() => WatchlistUpdateManyWithoutMoviesInput, {
    nullable: true,
  })
  watchlists?: WatchlistUpdateManyWithoutMoviesInput;
}

export { MovieUpdateInput as MovieUpdateInput };
