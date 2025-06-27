import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Message extends Document {
  @Prop()
  source: string; // Slack, Zendesk, etc.

  @Prop()
  content: string;

  @Prop()
  sender: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
