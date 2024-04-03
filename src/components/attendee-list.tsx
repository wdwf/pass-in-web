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
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendees";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function AttendeeList() {
  const [inputSearch, setInputSearch] = useState("");
  const [page, setPage] = useState(1);

  const totalAttendeens = Math.ceil(attendees.length / 10);

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setInputSearch(event.target.value);
  }

  function goToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalAttendeens);
  }

  function goToPreviousPage() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  }

  function goToNextPage() {
    if (page === totalAttendeens) {
      return;
    }
    setPage(page + 1);
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-3 items-center'>
        <h1 className='text-2xl font-bold'>Participantes</h1>
        <div className='flex items-center px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 gap-3'>
          <Search className='size-4 text-emerald-300' />
          <input
            type='text'
            placeholder='Buscar participante...'
            className='bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0'
            onChange={onSearchInputChanged}
            value={inputSearch}
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
          {attendees.slice((page - 1) * 10, page * 10).map((user) => {
            return (
              <TableRow key={user.id}>
                <TableCell>
                  <input
                    type='checkbox'
                    className='size-4 bg-black/20 rounded border border-white/10 text-orange-400 focus:ring-offset-0 focus:ring-orange-300 focus:ring-opacity-50'
                  />
                </TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <div className='flex flex-col gap-1'>
                    <span className='font-semibold text-whitek'>
                      {user.name}
                    </span>
                    <span>{user.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(user.createdAt)}</TableCell>
                <TableCell>{dayjs().to(user.checkedInAt)}</TableCell>
                <TableCell>
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
            <TableCell colSpan={3}>
              Mostrando 10 de {attendees.length} itens
            </TableCell>
            <TableCell className='text-right' colSpan={3}>
              <div className='inline-flex items-center gap-8'>
                <span>
                  Página {page} de {totalAttendeens}
                </span>
                <div className='flex gap-1.5'>
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className='size-4' />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className='size-4' />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalAttendeens}
                  >
                    <ChevronRight className='size-4' />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalAttendeens}
                  >
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

