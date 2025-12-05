import Image from "next/image";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <Badge>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Something new!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Managing a small business today is already tough.
            </p>
          </div>
          <div className="pt-12 w-full">
            {/* Static Image Container */}
            <div className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none">
              {/* Static Image (No Interactivity) */}
  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
