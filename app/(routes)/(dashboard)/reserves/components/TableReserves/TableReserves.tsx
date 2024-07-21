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
import { TableReservesProps } from "./TableReservers.types";
import { formatPrice } from "@/lib/formatPrice";

export default function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const total = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);
  return (
    <Table>
      <TableCaption>Tus últimas órdenes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Auto</TableHead>
          <TableHead>Fecha reserva</TableHead>
          <TableHead>Fecha inicio</TableHead>
          <TableHead>Fecha fin</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => {
          const {
            id,
            carName,
            createdAt,
            orderDate,
            orderEndDate,
            status,
            totalAmount,
          } = order;

          return (
            <TableRow key={id}>
              <TableCell>{carName}</TableCell>
              <TableCell>
                {new Date(createdAt).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell>
                {new Date(orderDate).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell>
                {new Date(orderEndDate).toLocaleDateString("es-ES", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell>
                <div className="p-2 text-white bg-green-600 rounded-lg w-fit">
                  {status}
                </div>
              </TableCell>
              <TableCell className="text-right">
                {formatPrice(Number(totalAmount))}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4} className="font-bold">
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
