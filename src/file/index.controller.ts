import { Response } from 'express';
import { diskStorage } from 'multer';
import * as os from 'os';
import * as path from 'path';

import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

import { directories } from '../main.const';
import {
  documentFileFilter,
  editFileName,
  excludeCmdFileFilter,
  imageFileFilter,
  movieFileFilter,
  musicFileFilter,
} from './file.filter';

/**
  "Public",
  "Documents",
  "Movies",
  "Pictures",
  "Music",
 */
@Controller()
export class IndexController {
  @Get()
  index(@Res() res: Response) {
    res.sendFile(path.join(os.homedir(), directories[0], 'index.html'))
  }

  @Post(directories[0])
  @UseInterceptors(FilesInterceptor('files', 20, {
    storage: diskStorage({
      destination: path.join(os.homedir(), directories[0]),
      filename: editFileName,
    }),
    fileFilter: excludeCmdFileFilter,
  }))
  uploadPublicFiles(@Req() req, @UploadedFiles() files: Array<Express.Multer.File>) {
    if (!files) return new BadRequestException("Pls provide a parameter named files")
    const response = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
        path: `${req.headers.host}${req.url}/${file.filename}`
      };
      response.push(fileReponse);
    });
    return response;
  }


  @Post(directories[1])
  @UseInterceptors(FilesInterceptor('files', 20, {
    storage: diskStorage({
      destination: path.join(os.homedir(), directories[1]),
      filename: editFileName,
    }),
    fileFilter: documentFileFilter,
  }))
  uploadDocumentsFiles(@Req() req, @UploadedFiles() files: Array<Express.Multer.File>) {
    if (!files) return new BadRequestException("Pls provide a parameter named files")
    const response = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
        path: `${req.headers.host}${req.url}/${file.filename}`
      };
      response.push(fileReponse);
    });
    return response;
  }

  @Post(directories[2])
  @UseInterceptors(FilesInterceptor('files', 20, {
    storage: diskStorage({
      destination: path.join(os.homedir(), directories[2]),
      filename: editFileName,
    }),
    fileFilter: movieFileFilter,
  }))
  uploadMoviesFiles(@Req() req, @UploadedFiles() files: Array<Express.Multer.File>) {
    if (!files) return new BadRequestException("Pls provide a parameter named files")
    const response = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
        path: `${req.headers.host}${req.url}/${file.filename}`
      };
      response.push(fileReponse);
    });
    return response;
  }

  @Post(directories[3])
  @UseInterceptors(FilesInterceptor('files', 20, {
    storage: diskStorage({
      destination: path.join(os.homedir(), directories[3]),
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  }))
  uploadPicturesFiles(@Req() req, @UploadedFiles() files: Array<Express.Multer.File>) {
    if (!files) return new BadRequestException("Pls provide a parameter named files")
    const response = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
        path: `${req.headers.host}${req.url}/${file.filename}`
      };
      response.push(fileReponse);
    });
    return response;
  }

  @Post(directories[4])
  @UseInterceptors(FilesInterceptor('files', 20, {
    storage: diskStorage({
      destination: path.join(os.homedir(), directories[4]),
      filename: editFileName,
    }),
    fileFilter: musicFileFilter,
  }))
  uploadMusicFiles(@Req() req, @UploadedFiles() files: Array<Express.Multer.File>) {
    if (!files) return new BadRequestException("Pls provide a parameter named files")
    const response = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
        path: `${req.headers.host}${req.url}/${file.filename}`
      };
      response.push(fileReponse);
    });
    return response;
  }
}
