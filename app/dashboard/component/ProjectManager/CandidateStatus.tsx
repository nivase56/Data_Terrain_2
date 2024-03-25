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
      totalMarks:'24/40',
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
      totalMarks:'...',
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
      totalMarks:'24/40',
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
      totalMarks:'24/40',
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
      totalMarks:'24/40',
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
      totalMarks:'24/40',
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
      totalMarks:'...',
      status: "Reject",
      action: "fa fa-eye",
    },
  ];

  const slicedData = data.slice(0, 6);
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
            {slicedData.map((list) => (
              <tr key={list?.jobId}>
                <td>{list?.jobId}</td>
                <td>{list?.name}</td>
                <td>{list?.position}</td>
                <td>{list?.firstLevel}</td>
                <td>{list?.secondLevel}</td>
                <td>{list?.thirdLevel}</td>
                <td>{list?.fourLevel}</td>
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
                  <img src="image/eye-black.png" alt="" className="text-muted text-dark"  />
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
