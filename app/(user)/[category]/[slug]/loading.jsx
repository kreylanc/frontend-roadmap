import Skeleton from "../../../../components/Skeleton";

function loading() {
  return (
    <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[15em_1fr] xl:grid-cols-[1fr_3fr] gap-8 w-full 2xl:max-w-7xl mx-auto my-8 px-4 lg:px-8">
      <div className="hidden lg:flex flex-col gap-4 self-start top-8 px-4 xl:w-4/5 ">
        <Skeleton className="h-6" />
        <Skeleton className="h-6 ml-4 w-3/4" />
        <Skeleton className="h-6 ml-4 w-3/4" />
        <Skeleton className="h-6 ml-4 w-3/4" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6 ml-4 w-3/4" />
        <Skeleton className="h-6 ml-4 w-3/4" />
        <Skeleton className="h-6 ml-4 w-3/4" />
        <Skeleton className="h-6" />
        <Skeleton className="h-6 ml-4 w-3/4" />
        <Skeleton className="h-6 ml-4 w-3/4" />
        <Skeleton className="h-6 ml-4 w-3/4" />
      </div>
      <div className="lg:px-4 w-full md:w-3/4 flex flex-col gap-4 ">
        <Skeleton className="w-24 h-6" />
        <Skeleton className="w-36 h-6" />
        <Skeleton className="w-36 h-6" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-36 h-6" />
        <Skeleton className="w-full h-40" />
        <Skeleton className="w-full h-40" />
      </div>
    </div>
  );
}

export default loading;
