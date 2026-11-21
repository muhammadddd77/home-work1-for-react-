import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";

export type Todo = {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  images: {
    id: number;
    imageName: string;
  }[];
};

type Props = {
  todos: Todo[];
};

function CardImage({ todos }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Carousel>
        <CarouselContent>
          {todos.map((todo) => (
            <CarouselItem key={todo.id} className="md:basis-1/3">
              <Card className="w-full">
                <div className="flex aspect-video items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-500">
                      #{todo.id}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      {todo.images.length} Images
                    </p>
                  </div>
                </div>

                <CardHeader>
                  <CardAction>
                    <Badge variant="secondary">
                      {todo.isCompleted ? "Completed" : "Not Completed"}
                    </Badge>
                  </CardAction>

                  <CardTitle>{todo.name}</CardTitle>

                  <CardDescription>
                    {todo.description}
                  </CardDescription>
                </CardHeader>

                <CardFooter>
                  <p className="text-xs text-gray-500">
                    {todo.images.map((image) => image.imageName).join(", ")}
                  </p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CardImage;