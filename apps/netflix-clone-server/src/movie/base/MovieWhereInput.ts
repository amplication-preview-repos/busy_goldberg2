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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumMovieGenre } from "./EnumMovieGenre";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WatchlistListRelationFilter } from "../../watchlist/base/WatchlistListRelationFilter";

@InputType()
class MovieWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumMovieGenre,
  })
  @IsEnum(EnumMovieGenre)
  @IsOptional()
  @Field(() => EnumMovieGenre, {
    nullable: true,
  })
  genre?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  releaseDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => WatchlistListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WatchlistListRelationFilter)
  @IsOptional()
  @Field(() => WatchlistListRelationFilter, {
    nullable: true,
  })
  watchlists?: WatchlistListRelationFilter;
}

export { MovieWhereInput as MovieWhereInput };
