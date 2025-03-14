const Loader = () => {
    return (
        <>
            <div className="flex justify-center items-center h-100">
                <div class="flex flex-row gap-2">
                    <div class="w-2 h-2 rounded-full bg-gray-800 animate-bounce"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-800 animate-bounce [animation-delay:-.1s]"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-800 animate-bounce [animation-delay:-.2s]"></div>
                </div>
            </div>
        </>
    );
};
export default Loader;
