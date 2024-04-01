"use client";
import { dashboardSelector, getCandidateStatusList } from "@/store/reducers/dashboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CandidateStatus() {
  const data = [
    {
      jobId: 1,
      name: "John Doe",
      position: "Designer",
      firstLevel: "4/63",
      secondLevel: "4/63",
      thirdLevel: "4/63",
      fourLevel: "4/63",
      totalMarks: '24/40',
      status: "Hired",
      action: "fa fa-eye",
    },
    {
      jobId: 2,
      name: "John Doe",
      position: "Designer",
      firstLevel: "4/63",
      secondLevel: "4/63",
      thirdLevel: "4/63",
      fourLevel: "4/63",
      totalMarks: '...',
      status: "Active",
      action: "fa fa-eye",
    },
    {
      jobId: 3,
      name: "John Doe",
      position: "Designer",
      firstLevel: "4/63",
      secondLevel: "4/63",
      thirdLevel: "4/63",
      fourLevel: "4/63",
      totalMarks: '24/40',
      status: "Hired",
      action: "fa fa-eye",
    },
    {
      jobId: 4,
      name: "John Doe",
      position: "Designer",
      firstLevel: "4/63",
      secondLevel: "4/63",
      thirdLevel: "4/63",
      fourLevel: "4/63",
      totalMarks: '24/40',
      status: "active",
      action: "fa fa-eye",
    },
    {
      jobId: 5,
      name: "John Doe",
      position: "Designer",
      firstLevel: "4/63",
      secondLevel: "4/63",
      thirdLevel: "4/63",
      fourLevel: "4/63",
      totalMarks: '24/40',
      status: "hired",
      action: "fa fa-eye",
    },
    {
      jobId: 6,
      name: "John Doe",
      position: "Designer",
      firstLevel: "4/63",
      secondLevel: "4/63",
      thirdLevel: "4/63",
      fourLevel: "4/63",
      totalMarks: '24/40',
      status: "Reject",
      action: "fa fa-eye",
    },
    {
      jobId: 7,
      name: "John Doe",
      position: "Designer",
      firstLevel: "4/63",
      secondLevel: "4/63",
      thirdLevel: "4/63",
      fourLevel: "4/63",
      totalMarks: '...',
      status: "Reject",
      action: "fa fa-eye",
    },
  ];

  const slicedData = data.slice(0, 6);

  const dispatch = useDispatch()
  const dashboardData = useSelector(dashboardSelector)

  useEffect(() => {
    dispatch(getCandidateStatusList())
  }, [])

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
              <th scope="col">Total Marks</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData?.candidate_status_list?.slice(0, 6)?.map((list) => (
              <tr key={list?.candidate_details?.id}>
                <td>{list?.job_details?.id}</td>
                <td>{list?.candidate_details?.candidate_firstName + " " + list?.candidate_details?.candidate_lastName}</td>
                <td>{list?.job_details?.jobRequest_Role}</td>
                <td>{list?.meeting_details[0]?.status}</td>
                <td>{list?.meeting_details[1]?.status}</td>
                <td>{list?.meeting_details[2]?.status}</td>
                <td>{list?.meeting_details[3]?.status}</td>
                <td>{list?.totalMarks}</td>
                {list?.status === "Hired" || list?.status === "hired" ? (
                  <td>
                    <button className="bg-[#cbffd7] rounded-2 px-2 py-1 text-green-700">
                      {list?.status.toUpperCase()}
                    </button>
                  </td>
                ) : null}

                {list?.status === "Active" || list?.status === "active" ? (
                  <td>
                    <button className="bg-[#fff3f3] rounded-2 px-2 py-1 text-yellow-400">
                      {list?.status.toUpperCase()}
                    </button>
                  </td>
                ) : null}

                {list?.status === "Reject" || list?.status === "reject" ? (
                  <td>
                    <button className="bg-[#E73B3B26] rounded-2 px-2 py-1 redColor">
                      {list?.status.toUpperCase()}
                    </button>
                  </td>
                ) : null}

                <td>
                  <button className="btn">
                    <img src="image/eye-black.png" alt="" className="text-muted text-dark" />
                    {/* <i className="fa fa-eye text-muted" aria-hidden="true"></i> */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateStatus;
