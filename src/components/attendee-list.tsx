import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { IconButton } from "./icon-button";

export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-3 items-center'>
        <h1 className='text-2xl font-bold'>Participantes</h1>
        <div className='flex items-center px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 gap-3'>
          <Search className='size-4 text-emerald-300' />
          <input
            type='text'
            placeholder='Buscar participante...'
            className='bg-transparent flex-1 outline-none border-0 p-0 text-sm'
          />
        </div>
      </div>

      <div className='border border-white/10 rounded-lg'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/10'>
              <th
                style={{ width: 64 }}
                className='py-3 px-4 text-sm font-semibold text-left'
              >
                <input
                  type='checkbox'
                  className='size-4 bg-black/20 rounded border border-white/10 text-orange-400 focus:ring-offset-0 focus:ring-orange-300 focus:ring-opacity-50'
                />
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>
                Código
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>
                Participante
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>
                Data de inscrição
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>
                Data de check-in
              </th>
              <th
                style={{ width: 64 }}
                className='py-3 px-4 text-sm font-semibold text-left'
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index: number) => {
              return (
                <tr
                  className='border-b border-white/10 hover:bg-white/5'
                  key={index}
                >
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <input
                      type='checkbox'
                      className='size-4 bg-black/20 rounded border border-white/10 text-orange-400 focus:ring-offset-0 focus:ring-orange-300 focus:ring-opacity-50'
                    />
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>52716</td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <div className='flex flex-col gap-1'>
                      <span className='font-semibold text-whitek'>
                        Jorginho Redshild Barcelo
                      </span>
                      <span>Jorginho@email.com</span>
                    </div>
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    7 dias atrás
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    3 dias atrás
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    {/* <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                      <MoreHorizontal className='size-4' />
                    </button> */}
                    <IconButton transparent>
                      <MoreHorizontal className='size-4' />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td
                className='py-3 px-4 text-sm text-zinc-300 text-right'
                colSpan={3}
              >
                <div className='inline-flex items-center gap-8'>
                  <span>Página 1 de 23</span>
                  <div className='flex gap-1.5'>
                    <IconButton>
                      <ChevronsLeft className='size-4' />
                    </IconButton>
                    <IconButton>
                      <ChevronLeft className='size-4' />
                    </IconButton>
                    <IconButton>
                      <ChevronRight className='size-4' />
                    </IconButton>
                    <IconButton>
                      <ChevronsRight className='size-4' />
                    </IconButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

