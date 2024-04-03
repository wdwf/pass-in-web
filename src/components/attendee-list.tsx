import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

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

      <Table>
        <thead>
          <tr className='border-b border-white/10'>
            <TableHeader style={{ width: 48 }}>
              <input
                type='checkbox'
                className='size-4 bg-black/20 rounded border border-white/10 text-orange-400 focus:ring-offset-0 focus:ring-orange-300 focus:ring-opacity-50'
              />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data de check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <input
                    type='checkbox'
                    className='size-4 bg-black/20 rounded border border-white/10 text-orange-400 focus:ring-offset-0 focus:ring-orange-300 focus:ring-opacity-50'
                  />
                </TableCell>
                <TableCell>52716</TableCell>
                <TableCell>
                  <div className='flex flex-col gap-1'>
                    <span className='font-semibold text-whitek'>
                      Jorginho Redshild Barcelo
                    </span>
                    <span>Jorginho@email.com</span>
                  </div>
                </TableCell>
                <TableCell>7 dias atrás</TableCell>
                <TableCell>3 dias atrás</TableCell>
                <TableCell>
                  {/* <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                      <MoreHorizontal className='size-4' />
                    </button> */}
                  <IconButton transparent>
                    <MoreHorizontal className='size-4' />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
            <TableCell className='text-right' colSpan={3}>
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
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

