import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TableReservesProps } from "./TableReserves.types";
import { formatPrice } from "@/lib/formatPrice";

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const total = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);
  return (
    <Table>
      <TableCaption>Todas las órdenes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID cliente</TableHead>
          <TableHead>Fecha reserva</TableHead>
          <TableHead>Auto</TableHead>
          <TableHead>Fecha inicio</TableHead>
          <TableHead>Fecha fin</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const {
            id,
            userId,
            carName,
            createdAt,
            orderDate,
            orderEndDate,
            status,
            totalAmount,
          } = order;

          return (
            <TableRow key={id}>
              <TableCell className="font-medium max-w-[100px] truncate">
                {userId}
              </TableCell>
              <TableCell className="font-medium truncate">
                {new Date(createdAt).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="font-medium">{carName}</TableCell>
              <TableCell className="font-medium">
                {new Date(orderDate).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="font-medium">
                {new Date(orderEndDate).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className=" font-medium text-right">
                {formatPrice(Number(totalAmount))}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5} className="font-bold">
            Total
          </TableCell>
          <TableCell className="text-right font-bold">
            {formatPrice(Number(total))}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
