import { IsString, IsNotEmpty } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateCarDTO{    
    @IsString()
    @IsNotEmpty()
    readonly brand: string;

    @IsString()
    @IsNotEmpty()
    readonly model: string;
}

export class UpdateCardDTO extends PartialType(CreateCarDTO){}