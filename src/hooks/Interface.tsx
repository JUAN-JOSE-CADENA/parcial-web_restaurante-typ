import { useState, useEffect } from "react";

interface ReturnInfo {
    status: string;
    handleClick: (index: number) => void;
  handleRestart: () => void;
  handleStart: (players: string[]) => void;
}

export default (): ReturnInfo => {
    const [status, setStatus] = useState("created");

    useEffect(() => {
        if (status !== "started") return;
        const 
    })
}