import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Res,
  Req,
} from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';
import { Request, Response } from 'express';

interface response {
  status: boolean;
  data: unknown;
  message: string;
  function: string;
}

@Controller('uploader')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/images/',
        filename: (req, file, cb) => {
          const mypath = join('./', 'public/images');
          const originalname = file.originalname;
          const extension = originalname.split('.').pop();
          const truncatedName = originalname.substring(0, 10);
          const filename = `${new Date().valueOf()}_${truncatedName}.${extension}`;
          cb(null, filename);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() response: Response,
    @Req() req: Request,
  ) {
    if (!file) {
      const res: response = {
        data: [],
        function: 'uploadFile',
        status: false,
        message: 'Unable to store image',
      };

      response.send(res);
      response.end();
    }
    const filePath = `/public/images/${file.filename}`;

    const filename = `${req.protocol}://${req.get('Host')}${filePath.replace(
      /\\/g,
      '/',
    )}`;

    const res: response = {
      data: filename,
      function: 'uploadFile',
      status: true,
      message: 'image store sussfully',
    };

    response.send(res);
    response.end();
  }
}
