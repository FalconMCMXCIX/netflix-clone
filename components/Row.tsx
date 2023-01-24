import React,{useRef, useState} from 'react';
import {Movie} from "../typings";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";
import Thumbnail from './Thumbnail';

interface Props {
    title: string;
    //  movie: Movie | DocumentData[]
    movies: Movie[]
}

const Row = ({title, movies}: Props) => {

    const rowReference = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState<boolean>( false);

    const handleClick = (direction: string) => {
        setIsMoved(true)
        if(rowReference.current){
           const {scrollLeft, clientWidth} = rowReference.current
            const scrollTo = direction === "left"
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth;
           rowReference.current.scrollTo({left: scrollTo, behavior: "smooth"})
    }
}
    return (
        <div className="h-40 space-y-0.5 md: space-y-2">
            <h2 className="w-56 cursor-pinter text-sm font-semibold text-[#fcf7f7]  transition duration-200 hover:text-white md:text-2xl">{title}</h2>
            <div className="group relative md:-ml-2">
                <ChevronLeftIcon className={`absolute top-0 bottom-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition
                    hover:scale-125 group-hover:opacity-100 ${!isMoved && "hide"}`}
                 onClick={() =>{handleClick("left")}}
                />
                    <div ref={rowReference} className="flex items-center space-x-0.5  overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">

                        {movies.map((movie, index) =>(
                            <Thumbnail key={movie.id} movie={movie}/>
                        ))}


                    </div>
                <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition
                 hover:scale-125 group-hover:opacity-100"
                 onClick={() =>{handleClick("right")}}
                 />
            </div>
        </div>
    );
};

export default Row;
