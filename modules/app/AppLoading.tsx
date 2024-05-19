import { Skeleton } from "@/components/ui/skeleton";

const AppLoading = ({ title }: { title: string }) => {
  return (
    <div className="px-4 space-y-1">
      <header className="flex justify-between py-2">
        <h1 className="text-2xl font-medium">{title}</h1>
      </header>
      <div className="h-full flex-grow w-full space-y-4">
        <div className="flex h-72 gap-4">
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
          <Skeleton className="w-full" />
        </div>
        <Skeleton className="h-[calc(100vh-440px)] 3xl:h-[calc(100vh-460px)] w-full" />
      </div>
    </div>
  );
};

export default AppLoading;
