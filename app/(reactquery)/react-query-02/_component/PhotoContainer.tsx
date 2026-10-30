import { useQuery } from "@tanstack/react-query";

export default function PhotoContainer() {

    const{data, isLoading, error} = useQuery<Photo[]>({
        queryFn: getPhotos,
        queryKey:["Photos"]
    })

    const photos:Photo[] | undefined = data?.slice(0,20)
    const photoList = photos?.map(({id, title, url}: Photo) = >(
        <li key={id} className="flex items-center gap-1 cursor-pointer"
        onClick={() => {router.push(`/react-query-02/${id}`)}}
    ))



    return (
        <>
            
        </>
    );
}

