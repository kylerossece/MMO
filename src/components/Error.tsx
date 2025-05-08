const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-900  text-white">
       <h1 className="font-bold text-9xl">404</h1>
         <h2 className="font-semibold text-4xl">Page Not Found</h2>
         <div className="mt-10">
         <button>
            <a href="/" className=" bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Go Back Home
            </a>
         </button>
         </div>
         </div>
    )
}

export default Error