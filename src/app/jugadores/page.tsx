import api from "@/services/api";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";

export default async function PlayersPage() {
  const players = await api.player.list();

  return (
    <Table className="m-auto max-w-md border">
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead className="text-center">Partidos</TableHead>
          <TableHead className="text-right">Valoración</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map(({ name, score, matches }) => (
          <TableRow key={name}>
            <TableCell>{name}</TableCell>
            <TableCell className="text-center">{matches}</TableCell>
            <TableCell className="text-right">{score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
