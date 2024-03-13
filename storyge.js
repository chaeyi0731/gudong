const { dir } = require('console');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const storagePath = path.join(__dirname, 'storage');

const createDirectory = (directoryName) => {
  const directoryPath = path.join(storagePath, directoryName);
  fs.mkdirSync(directoryPath);
};

const createFile = (directoryName, fileName, content) => {
  const directoryPath = path.join(storagePath, directoryName);
  const filePath = path.join(directoryPath, fileName);
  fs.writeFileSync(filePath, content);
};

const readFile = (directoryName, fileName) => {
  const filePath = path.join(storagePath, directoryName, fileName);
  fs.readFileSync(filePath, 'utf8');
};

const updateFile = (directoryName, fileName, content) => {
  const filePath = path.join(storagePath, directoryName, fileName);
  return fs.writeFileSync(filePath, content);
};

const deleteFile = (directoryName, fileName) => {
  const filePath = path.join(storagePath, directoryName, fileName);
  return fs.unlinkSync(filePath);
};

module.exports = {
  createDirectory,
  createFile,
  readFile,
  updateFile,
  deleteFile,
};
