export default function Header({showingRates}) {


    return(
        <div className="flex flex-col w-2/3 mx-auto mt-12 items-center">
            <h1 className="mb-4">Real-time currency conversion</h1>
            <div>
                <button className="bg-white cursor-pointer px-4 py-2 rounded-l-md">Convert</button>
                <button className="bg-white cursor-pointer px-4 py-2 rounded-r-md">Exchange Rates</button>
            </div>
        </div>
    )
}