'use client'
import { BlobWriter, HttpReader, TextReader, ZipWriter } from "@zip.js/zip.js";

export function DownloadImagesV2() {
  const README_URL = "https://raw.githubusercontent.com/diegoricardosouza/pokedex/main/.github/pokedex.jpg";
  getZipFileBlob()
    .then(downloadFile);

  async function getZipFileBlob() {
    const zipWriter = new ZipWriter(new BlobWriter());
    await Promise.all([
      zipWriter.add("hello.txt", new TextReader("Hello world!")),
      zipWriter.add("image1.jpg", new HttpReader(README_URL)),
    ]);
    return zipWriter.close();
  }

  function downloadFile(blob: Blob | MediaSource) {
    document.body.appendChild(Object.assign(document.createElement("a"), {
      download: "hello.zip",
      href: URL.createObjectURL(blob),
      textContent: "Download zip file",
    }));
  }


  return (
    <div></div>
  )
}
