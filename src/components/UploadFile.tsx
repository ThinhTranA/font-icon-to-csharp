import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadFile.css';
import dragDropFilesImage from '../assets/images/dragdropfiles.svg';
import { getTypeFontGlyphs } from '../font-parsers/typeFont';
import { toUnicodeString } from '../utils/stringUtils';
import { generateCsharpCode } from '../code-gen/csharpCodegen';

interface UploadFileProps {}

export const UploadFile: React.FC<UploadFileProps> = ({}) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0] as File;
    if (
      file.name.endsWith('.ttf') ||
      file.name.endsWith('.otf') ||
      file.name.endsWith('.woff')
    ) {
      if (!file) return;

      const glyphs = await getTypeFontGlyphs(file);

      console.log(generateCsharpCode('bob', glyphs!));
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="Upload-container">
      <img src={dragDropFilesImage} alt="drag drop files" />
      <input {...getInputProps()} />
      <p>Drag & Drop Files</p>
      <p>Drop any TTF/OTF/WOFF file</p>

      <button>
        <span>BROWSE YOUR COMPUTER FILES</span>
      </button>
      {/* TODO */}
      {/* {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )} */}
    </div>
  );
};
