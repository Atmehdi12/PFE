import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesController } from './slack-messages.controller';
import { MessagesService } from './slack-messages.service';
import { Message, MessageSchema } from './schemas/slack-messages.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }])],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
