import { Type } from "class-transformer"
import { IsDate, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateLogDTO {

    @IsNotEmpty()
    @IsString()
    pathname: string

    @IsNotEmpty()
    @IsIn(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
    method: string

    @IsNotEmpty()
    @IsNumber()
    status_code: number

    @IsNotEmpty()
    @IsNumber()
    duration: number

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    started_at: Date
}