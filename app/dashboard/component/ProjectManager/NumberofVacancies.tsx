function NumberofVacancies() {
    return (
        <>
            <section className="TotalEmployees shadow bg-white rounded-3 p-3 d-flex flex-column justify-content-between h-100">
                <div className="flex align-items-center">
                    <h3 className="projectManHeading">Number of Vacancies</h3>
                    <img className="h-5 ml-5" src="image/eyeicon.png" alt="" />
                    <div className="ml-auto">
                        <h4 className="totalCount Poppins-SemiBold">36</h4>
                    </div>
                </div>
                <hr className="my-2" />
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div className="PythonDeveloper border rouded-2 p-2">
                            <h4 className="text-[13px] md:text-[14px]">Python Developer</h4>
                            <div className="d-flex justify-content-between mt-3">
                                <h5 className="text-[25px] md:text-[29px] Poppins-SemiBold">18</h5>
                                <img src="image/python.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="PythonDeveloper border rouded-2 p-2">
                            <h4 className="text-[13px] md:text-[14px]">java Developer</h4>
                            <div className="d-flex justify-content-between mt-3">
                                <h5 className="text-[25px] md:text-[29px] Poppins-SemiBold">18</h5>
                                <img src="image/java.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <div className="PythonDeveloper border rouded-2 p-2">
                            <h4 className="text-[13px] md:text-[14px]">Anguls Developer</h4>
                            <div className="d-flex justify-content-between mt-3">
                                <h5 className="text-[25px] md:text-[29px] Poppins-SemiBold">18</h5>
                                <img src="image/Angularicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <div className="PythonDeveloper border rouded-2 p-2">
                            <h4 className="text-[13px] md:text-[14px]">UX|UI Designer</h4>
                            <div className="d-flex justify-content-between mt-3">
                                <h5 className="text-[25px] md:text-[29px] Poppins-SemiBold">18</h5>
                                <img src="image/graphic.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NumberofVacancies;