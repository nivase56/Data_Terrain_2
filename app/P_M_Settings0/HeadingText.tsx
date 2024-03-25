function HeadingText(params: type) {
    return (
        <>
            <div className="row">
                <div className="col-lg-7 col-md-7">
                    <h3 className="text-[24px]">General Information</h3>
                    <p className="mt-2 text-[14px]">Please filled your valid inputs for General Information.</p>
                </div>
                <div className="col-lg-5 col-md-5 text-md-end mt-3 mt-md-0">
                    <button className="btn btnOutlineBlack me-3 mx-lg-2">Cancel</button>
                    <button className="btn btn-blue me-3 mx-lg-2">Save</button>
                </div>
            </div>
            <hr />

        </>
    )
}

export default HeadingText