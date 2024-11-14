"use client"
import { Button } from "@/components/ui/button";
import { ActionsButtonsProps } from "./ActionsButtons.types";
import { ChevronDown, Play, ThumbsUp, X } from "lucide-react";
import { useRouter } from "next/navigation";

export  function ActionsButtons(props: ActionsButtonsProps) {
    const {movieId, movie, isMyList} = props


    const router = useRouter();
    const onPlayButton = () =>{
        router.push(`/movie/${movieId}`)
    }

const onAddToMyList = () =>{
    console.log("a")
}

const onRemoveFromMyList = () =>{
    console.log("a")
}

  return (
    <div className="flex justify-between mb-5 ">
        <div className="flex gap-2 ">
        <Button size="icon" variant="ghost" className="bg-slate-50 rounded-full 
        flex items-center justify-center h-7 w-7 " 
        onClick={() => onPlayButton()}>
<Play className="text-zinc-900 fill-zinc-900 h-3 w-3"/>
        </Button>
        {isMyList ? (
            <Button 
            onClick={() => onRemoveFromMyList()}
            size="icon" 
            variant="ghost" 
            className="bg-zinc-900 border-gray-400 
            border-2 rounded-full flex items-center justify-center 
            h-7 w-7">
                <X  width={10} height={10} 
                className="text-slate-50 fill-zinc-900 
                h-3 w-3 hover:text-zinc-900"/>
            </Button>
        ):(
            <Button 
            onClick={() => onAddToMyList()}
            size={"icon"} 
            variant={"ghost"} 
            className="bg-zinc-900 border-gray-400 
            border-2 rounded-full flex items-center justify-center 
            h-7 w-7">
            <ThumbsUp  width={10} height={10} 
            className="text-slate-50 fill-zinc-900 
                h-3 w-3 hover:text-zinc-900"/>
            </Button>
        )}
        </div>
        <Button size={"icon"} variant={"ghost"} className="bg-zinc-900 border-2 border-gray-400 rounded-full flex items-center justify-center h-7 w-7">
            <ChevronDown className="text-slate-50 h-3 w-3 " width={10} height={10}/> 
        </Button>
    </div>
  )
}
