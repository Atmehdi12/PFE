import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './schemas/slack-messages.schema';

@Injectable()
export class MessagesService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

  async create(data: any): Promise<Message> {
    const slackMessage = new this.messageModel(data);
    return slackMessage.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().sort({ createdAt: -1 }).exec();
  }
}
