import { PartialType } from '@nestjs/mapped-types';
import { CreateYzzDto } from './create-yzz.dto';

export class UpdateYzzDto extends PartialType(CreateYzzDto) {}
