import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CategorySkeletonsProps {
  isVisible: boolean;
}

export function CategorySkeletons({ isVisible }: CategorySkeletonsProps) {
  return isVisible ? (
    <div className="">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"100%"}
            height={"150px"}
          />
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"300px"}
            height={"24px"}
          />
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"100%"}
            height={"40px"}
          />
          </div>
          <div className="flex flex-col gap-4">
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"100%"}
            height={"150px"}
          />
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"300px"}
            height={"24px"}
          />
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"100%"}
            height={"40px"}
          />
          </div>
          <div className="flex flex-col gap-4">
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"100%"}
            height={"150px"}
          />
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"300px"}
            height={"24px"}
          />
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"100%"}
            height={"40px"}
          />
          </div>
          <div className="flex flex-col gap-4">
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"100%"}
            height={"150px"}
          />
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"300px"}
            height={"24px"}
          />
          <Skeleton
            className="rounded-lg transform transition duration-300"
            width={"100%"}
            height={"40px"}
          />
          </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
