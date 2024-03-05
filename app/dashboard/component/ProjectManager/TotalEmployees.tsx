import ManGraph from "./ManGraph";

function TotalEmployees() {
    return (
        <>
            <div className="TotalEmployees shadow bg-white rounded-3 p-3 d-flex flex-column justify-content-between h-100">
                <div className="flex align-items-center">
                    <h3 className="projectManHeading">Total Employees</h3>
                    <img className="h-5 ml-5" src="image/eyeicon.png" alt="" />
                    <div className="ml-auto">
                        <h4 className="totalCount Poppins-SemiBold">72</h4>
                    </div>
                </div>
                <hr className="my-2" />
                <div className="flex pt-4 justify-center h-[300px] position-relative  overflow-hidden">
                    <ManGraph/>
                    <ManGraph/>
                </div>
               
            </div>
        </>
    )
}

export default TotalEmployees;