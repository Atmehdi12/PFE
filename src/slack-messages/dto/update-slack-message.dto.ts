import { PartialType } from '@nestjs/mapped-types';
import { CreateSlackMessageDto } from './create-slack-message.dto';

export class UpdateSlackMessageDto extends PartialType(CreateSlackMessageDto) {}
