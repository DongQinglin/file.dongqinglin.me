import { extname } from 'path';

export const imageFileFilter = (req, file, callback) => {
  const imageFilterTemplete = new RegExp("\.(jpg|jpeg|png|gif｜bmp｜hdr)$", "i")
  if (!file.originalname.match(imageFileFilter)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

export const movieFileFilter = (req, file, callback) => {
  const movieFilterTemplete = new RegExp("\.(mp3|cda|wav|aif|aiff|mid|wma|ra|vqf|ape|aac)$", "i")
  if (!file.originalname.match(movieFilterTemplete)) {
    return callback(new Error('Only movie files are allowed!'), false);
  }
  callback(null, true);
};

export const musicFileFilter = (req, file, callback) => {
  const musicFilterTemplete = new RegExp("\.(mp3|cda|wav|aif|aiff|mid|wma|ra|vqf|ape|aac)$", "i")
  if (!file.originalname.match(musicFilterTemplete)) {
    return callback(new Error('Only music files are allowed!'), false);
  }
  callback(null, true);
};

export const documentFileFilter = (req, file, callback) => {
  const documentFilterTemplete = new RegExp("\.(azw3|epub|fb2|lrf|mobi|pdb|rtf|txt|pdf|wps|doc|docx|xls|xlsx|xps|html|dotx|csc)$", "i")
  if (!file.originalname.match(documentFilterTemplete)) {
    return callback(new Error('Only document files are allowed!'), false);
  }
  callback(null, true);
};


export const excludeCmdFileFilter = (req, file, callback) => {
  const cmdFilterTemplete = new RegExp("\.(php|cmd|sh)$", "i")
  if (file.originalname.match(cmdFilterTemplete)) {
    return callback(new Error('not command files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {

  const extensionIndex = file.originalname.toString().lastIndexOf(".")
  const name = file.originalname.toString().substring(0, extensionIndex);
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}${fileExtName}`);
};