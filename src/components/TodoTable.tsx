import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "./ui/table";

export type Todo = {
  id: number;
  isCompleted: boolean;
  name: string;
  description: string;
};

type Props = {
  data: Todo[];
  onInfo: (id: number) => void;
  onEdit: (item: Todo) => void;
  onDelete: (id: number) => void;
};

function TodoTable({ data, onInfo, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((e) => (
            <TableRow key={e.id}>
              <TableCell className="font-medium">
                {e.name}
              </TableCell>

              <TableCell>
                {e.description}
              </TableCell>

              <TableCell>
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="secondary" onClick={() => onInfo(e.id)}>
                    Info
                  </Button>

                  <Button size="sm" variant="outline" onClick={() => onEdit(e)}>
                    Edit
                  </Button>

                  <Button size="sm" variant="destructive" onClick={() => onDelete(e.id)}>
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TodoTable;
