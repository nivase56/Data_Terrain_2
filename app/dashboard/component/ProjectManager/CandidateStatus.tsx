import PostedJobsTop from "./PostedJobsTop"

function CandidateStatus() {
    return (
        <div className=" bg-white p-3 table-responsive ">
           
            <div>
                <table className="table CandidateStatus">
                    <thead>
                        <tr>
                            <th scope="col">Job ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">1st Level</th>
                            <th scope="col">2nd Level</th>
                            <th scope="col">3rd Level</th>
                            <th scope="col">4th Level</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>Designer</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>
                                <button className="bg-[#cbffd7] rounded-2 px-2 py-1 text-green-700">Hired</button>
                            </td>
                            <td>
                               <button className="btn"> <i className="fa fa-eye" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                       
                        <tr>
                            <td>2</td>
                            <td>John Doe</td>
                            <td>Designer</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>
                                <button className="bg-[#cbffd7] rounded-2 px-2 py-1 text-green-700">Hired</button>
                            </td>
                            <td>
                               <button className="btn"> <i className="fa fa-eye" aria-hidden="true"></i></button>
                            </td>
                        </tr>


                        <tr>
                            <td>3</td>
                            <td>John Doe</td>
                            <td>Designer</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>
                            <button className="bg-[#fff3f3] rounded-2 px-2 py-1 text-yellow-400">active</button>
                            </td>
                            <td>
                               <button className="btn"> <i className="fa fa-eye" aria-hidden="true"></i></button>
                            </td>
                        </tr>


                        <tr>
                            <td>4</td>
                            <td>John Doe</td>
                            <td>Designer</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>
                                <button className="bg-[#cbffd7] rounded-2 px-2 py-1 text-green-700">Hired</button>
                            </td>
                            <td>
                               <button className="btn"> <i className="fa fa-eye" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                    
                        <tr>
                            <td>5</td>
                            <td>John Doe</td>
                            <td>Designer</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>
                                <button className="bg-[#cbffd7] rounded-2 px-2 py-1 text-green-700">Hired</button>
                            </td>
                            <td>
                               <button className="btn"> <i className="fa fa-eye" aria-hidden="true"></i></button>
                            </td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>John Doe</td>
                            <td>Designer</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>4/63</td>
                            <td>
                                <button className="bg-[#cbffd7] rounded-2 px-2 py-1 text-green-700">Hired</button>
                            </td>
                            <td>
                               <button className="btn"> <i className="fa fa-eye" aria-hidden="true"></i></button>
                            </td>
                        </tr>


                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CandidateStatus