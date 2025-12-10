import Image from "next/image";
import { Badge } from "@/components/ui/badge";

function Feature2() {
  return (
    <div className="w-full section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
          {/* Text Section (moved first for consistent mobile ordering) */}
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1 text-center lg:text-left">
            <div>
              <Badge>Platform</Badge>
            </div>

            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                This is the start of something new
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative bg-muted rounded-md w-full aspect-square flex-1 overflow-hidden">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Feature Image"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export { Feature2 };
