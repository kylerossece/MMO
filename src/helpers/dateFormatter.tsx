
 export const dateFormatter = (val : string | undefined) => {
    if (!val) return "No Date"; 
    const date = new Date(val)
    return date.toLocaleString("en-US",  {
        year: "numeric",
        month: "short",
        day: "2-digit",
    
        }).replace("at ", " ");
}