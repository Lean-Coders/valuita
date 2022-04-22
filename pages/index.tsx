import { PDFDownloadLink } from '@react-pdf/renderer';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, LegacyRef, useRef, useState } from 'react';
import * as xlsx from 'xlsx';
import DownloadButton from '../components/download-button';
import { excelFloatToPercentage, excelFloatToString, excelNumberToDate, organizeData, State } from '../utils';
import Template from '../utils/export-template';

const Home: NextPage = () => {
  const [currentState, setCurrentState] = useState<State>(State.IDLE);
  const [exportData, setExportData] = useState<unknown[]>([]);
  const formRef = useRef<HTMLFormElement>();

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();

      reader.onerror = (e) => {
        console.log(e.target?.error);
        setCurrentState(State.ERROR);
      };

      reader.onload = (loader) => {
        formRef.current?.reset();
        const workbook = xlsx.read(loader.target?.result, { type: 'array' });
        const data = ['Prognoserech.', 'Rendite - Detail', 'Rendite - Gesamt'].map((sheetName) =>
          xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 }),
        );
        const organizedData = organizeData(data);
        setExportData(organizedData);
        setCurrentState(State.DONE);
      };

      setCurrentState(State.LOADING);
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Valuita PDF Generator</title>
        <link rel="icon" href="https://valuita.at/icons/icon_64x64.6dd12f.png" />
        <link rel="shortcut icon" href="https://valuita.at/icons/icon_64x64.6dd12f.png" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-10 text-center md:px-20">
        <h1 className="text-5xl font-bold text-primary md:text-7xl">
          <Link href="/">Valuita</Link> <span className="text-black">PDF Generator</span>
        </h1>

        <div className="flex flex-col gap-2 mt-4">
          <p className="text-xl text-gray-600 md:text-3xl">
            {
              [
                'Please upload the Excel file to be converted below.',
                'Loading, transforming and organizing your data...',
                'An unexpected error occured, please try again.',
                'Please download your exported PDF below.',
              ][currentState]
            }
          </p>
          <div className="flex flex-col items-center justify-between gap-4 mt-12">
            <label className="flex flex-col justify-center w-full h-40 p-10 text-center border-4 border-gray-600 border-dashed rounded-lg md:w-96">
              <div className="text-lg pointer-none">
                {currentState === State.DONE ? (
                  <DownloadButton data={exportData} />
                ) : currentState === State.LOADING ? (
                  <div className="w-12 h-12 mx-auto border-8 border-solid rounded-full animate-spin border-primary border-t-transparent" />
                ) : (
                  <p className="font-bold text-gray-600">Click here to upload</p>
                )}
              </div>
              <form ref={formRef as LegacyRef<HTMLFormElement>}>
                <input
                  hidden
                  type="file"
                  onChange={handleFileInput}
                  disabled={currentState === State.LOADING || currentState === State.DONE}
                />
              </form>
            </label>
            <p className="text-base font-bold text-gray-600">
              {currentState === State.DONE ? (
                <a className="underline underline-offset-1" href="#" onClick={() => window.location.reload()}>
                  Convert another file
                </a>
              ) : (
                <span>File type: .xslx</span>
              )}
            </p>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-20 border-t border-gray-200 bg-gray-50">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by{' '}
          <a target={'_blank'} href="https://lean-coders.at">
            <span className="text-primary">Lean-Coders GmbH</span>
          </a>
        </a>
      </footer>
    </div>
  );
};

export default Home;
