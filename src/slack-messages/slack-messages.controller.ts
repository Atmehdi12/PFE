import { Controller, Post, Body, Get } from '@nestjs/common';
import { MessagesService } from './slack-messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('slack')
  async createMessage(@Body() body: any) {
    const { source, content, sender } = body;
    return this.messagesService.create({ source, content, sender });
  }

  @Get()
  async getAllMessages() {
    return this.messagesService.findAll();
  }
}
