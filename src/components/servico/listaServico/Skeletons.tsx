import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

interface ServiceSkeletonsProps {
    isVisible: boolean
}

export function ServiceSkeletons({ isVisible }: ServiceSkeletonsProps) {
    return (
        isVisible ? (
            <div className="my-14 container md:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className='flex flex-col gap-2'>
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"150px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"40px"} /> 
          </div>
          <div className='flex flex-col gap-2'>
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"150px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"40px"} /> 
          </div>
          <div className='flex flex-col gap-2'>
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"150px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"40px"} /> 
          </div>
          <div className='flex flex-col gap-2'>
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"150px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"40px"} /> 
          </div>
          <div className='flex flex-col gap-2'>
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"150px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"24px"} /> 
            <Skeleton className="rounded-lg transform transition duration-300" width={"100%"} height={"40px"} /> 
          </div>
        </div>
        ) : null
    )
}