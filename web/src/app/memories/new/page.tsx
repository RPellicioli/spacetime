import { Camera, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <input type="file" id="media" className="invisible h-0 w-0" />

        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Anexar mídea
          </label>

          <label
            htmlFor="isPublic"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 cursor-pointer rounded border-gray-400 bg-gray-700 text-purple-500"
            />
            Tornar essa memória publica
          </label>
        </div>

        <textarea
          name="content"
          spellCheck={false}
          className="w-full flex-1 resize-none rounded border-gray-400 bg-transparent p-2 pl-4 pr-4 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:border-gray-400"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        ></textarea>
      </form>
    </div>
  );
}
