import {MinLength, MaxLength, IsEnum} from "class-validator";

export class CreateYzzDto {
    @MinLength(2)
    @MaxLength(100)
    name:string;

    @IsEnum(["ms-word","ms-powerPoint"],{message:" that tool is unavailabe for this user at the moment !!!"})
    tool:"ms-word"|"ms-powerPoint"

}
