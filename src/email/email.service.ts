import {
  ISendMailOptions,
  MailerService,
} from '@nestjs-modules/mailer';
import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { emailconf } from '../main.const';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailer: MailerService
  ) { }

  send(toEmail: string, suject: string, html: string): void {
    const emailOptions: ISendMailOptions = {
      to: toEmail,
      from: emailconf.defaults.from,
      subject: suject,
      html: html
    }

    this.mailer.sendMail(emailOptions).then(
      _ => {
        Logger.log("Send mail success.")
      }
    ).catch(
      err => Logger.error(err)
    )
  }

  sendCode(toEmail, code) {
    const emailOptions = {
      to: toEmail,
      from: emailconf.defaults.from,
      subject: "请查收你的验证码",
      template: "src/email/code.template.ejs",
      context: {
        code: code,
        date: new Date(),
        sign: '系统邮件,回复无效。'
      }
    }

    this.mailer.sendMail(emailOptions).then(
      _ => {
        Logger.log("Send mail success.")
      }
    ).catch(
      err => Logger.error(err)
    )
  }
}
