'use client'
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { HiOutlineDownload } from 'react-icons/hi';

interface DownloadImagesProps {
  imageUrls: string[]
  color: string;
}

export function DownloadImages({ imageUrls, color }: DownloadImagesProps) {

  const downloadAllImagesAsZip = async () => {
    const zip = new JSZip(); // Cria uma nova instância de JSZip
    const imgFolder = zip.folder('imagens'); // Pasta dentro do zip para as imagens

    // Itera sobre as URLs e faz o download de cada imagem
    const fetchImages = imageUrls.map(async (url, index) => {
      const response = await fetch(url); // Faz o download da imagem
      const blob = await response.blob(); // Converte para Blob
      const filename = `imagem-${index + 1}.jpg`; // Nome da imagem no zip

      // Adiciona a imagem à pasta no zip
      imgFolder?.file(filename, blob);
    });

    // Aguarda o download de todas as imagens
    await Promise.all(fetchImages);

    // Gera o arquivo ZIP e faz o download
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'imagens.zip'); // Salva o arquivo ZIP
    });
  };

  return (
    <button
      style={{ background: color }}
      className="bg-blue text-white text-[14px] lg:text-[22px] font-medium lg:leading-[31px] rounded-tl-[10px] rounded-br-[10px] px-4 lg:px-8 inline-flex tracking-[2.4px] gap-2 lg:gap-4 py-2 lg:py-4 hover:opacity-70 transition-all items-center mb-3 lg:mb-0"
      onClick={downloadAllImagesAsZip}
    >
      BAIXAR IMAGENS
      <HiOutlineDownload className="w-[25px] lg:w-[30px] h-[25px] lg:h-[30px]" />
    </button>
  )
}
