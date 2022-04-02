import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";

import { emailconf } from "../main.const";
import { EmailService } from "./email.service";

@Module({
  imports: [MailerModule.forRoot(emailconf)],
  providers: [EmailService],
})
export class AppMailModule {}
