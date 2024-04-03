"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import TextField from "@mui/material/TextField";


function Login() {
    return (
        <div className="h-[100vh] bg-blue d-flex align-items-center justify-content-center px-3">
            <div className="shadow bg-white mt-4 rounded-3 pb-3 col-lg-5 col-md-8 my-md-5 mx-auto p-md-5 p-3">

                <h1 className="text-center">
                    Login
                </h1>

                <div className="mt-5">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mb-4">
                            <TextField
                                className="w-100"
                                required
                                id="CandidateName"
                                label="User Name"
                                defaultValue="John Smith"
                            />
                        </div>

                        <div className="col-lg-12 col-md-12 mb-4">
                            <TextField
                                className="w-100"
                                required
                                id="CandidateName"
                                label="Password"
                                defaultValue="*********"
                            />
                        </div>
                        <div className="col-lg-12 col-md-12 mb-4">
                            <button
                                className="btn btn-blue w-100 btn-lg fs-5 h-auto"

                            >
                                Login
                            </button>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Login