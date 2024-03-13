"use client"
import Upcomings from '../dashboard/component/ProjectManager/Upcomings';
import HeadersTop from "../dashboard/common/HeadersTop"
import Activity from "../dashboard/component/ProjectManager/Activity"
import CalendarProject from "../dashboard/component/ProjectManager/CalendarProject"
import HiringCandidates from "../dashboard/component/ProjectManager/HiringCandidates"
import SideMenu from "../dashboard/component/SideMenu"
import PostedJobsTop from '../dashboard/component/ProjectManager/PostedJobsTop';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import FilterListIcon from '@mui/icons-material/FilterList'; // Import the filter icon
import Link from 'next/link';
import StraightIcon from '@mui/icons-material/Straight';
const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: FilmOptionType) => option.title,
});



interface FilmOptionType {
    title: string;
    year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];


function P_M_JobDescriptionsFive(params: type) {

    return (
        <section className="">
            <HeadersTop />
            {/* ... rest of your component code */}

            <div className="container-fluid my-md-5 my-4">
                <div className="row">
                    <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
                        <SideMenu />
                    </div>

                    <div className="col-lg-11 pe-lg-4 ps-lg-0">
                        <div className="row justify-content-between  align-items-center">
                            <div className="col-lg-8 projectText">
                                <h1>Job Descriptions Chat Bot</h1>
                                <p className="mt-3">
                                    Enjoy your selecting potential candidates Tracking and
                                    Management System.
                                </p>
                            </div>

                            <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">

                                <button className="btn btn-blue">Create New JD</button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-9">
                                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                                <div className="row justify-between align-items-center p-3">
                                        <div className="col-md-7 col-12 col-lg-7 d-flex align-items-center  mb-3 mb-md-0 ">
                                            <h4 className="text-[22px] text-[#091316] font-family: Poppins-Medium">Job Descriptions Chat Bot</h4>
                                            <h6 className='ms-4'><Link className="text-blue text-[14px]" href="/">History</Link></h6>
                                        </div>

                                        <div className="col-md-5 col-12 col-lg-5 ms-auto ps-lg-5">
                                            <div className="position-relative PostedInput">
                                                <input className="form-control border-0 rouned-2" type="text" placeholder='Search.......' />
                                                <button className="PostedSearch p-0"> <img src="image/search.png" alt="" /></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className='col-lg-3 col-md-4'>
                                            <div className=' p-3'>
                                                <Autocomplete
                                                    id="filter-demo"
                                                    className='filterInputDescriptions text-blue'
                                                    options={top100Films}
                                                    getOptionLabel={(option) => option.title}
                                                    filterOptions={filterOptions}
                                                    sx={{ width: 300 }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            className='text-blue'
                                                            label="History"
                                                            InputProps={{
                                                                ...params.InputProps,
                                                                endAdornment: (
                                                                    <>
                                                                        <FilterListIcon className='text-blue' /> {/* Filter icon */}
                                                                        {params.InputProps.endAdornment}
                                                                    </>
                                                                ),
                                                            }}
                                                        />
                                                    )}
                                                />

                                                <ul className='list-unstyled mt-3'>
                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">Python Developers</Link>
                                                    </li>

                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">Java Developers</Link>
                                                    </li>


                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">UX|UI Designer</Link>
                                                    </li>


                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">SEO Specialist</Link>
                                                    </li>


                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">Python Developers</Link>
                                                    </li>

                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">Python Developers</Link>
                                                    </li>

                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">Java Developers</Link>
                                                    </li>


                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">UX|UI Designer</Link>
                                                    </li>


                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">SEO Specialist</Link>
                                                    </li>


                                                    <li className="py-2">
                                                        <Link className='Poppins-Light text-[15px]' href="/">Python Developers</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='col-lg-9 col-md-8'>
                                            <div className='bg-[#F9F9F9] h-100 p-3 mx-3 flex align-center'>



                                                <div className="bg-white col-lg-12 col-xl-11 m-auto p-3">
                                                    <div className="flex justify-between items-center border-bottom mb-4 pb-3">
                                                        <h2 className="text-[18px] Poppins-Medium">Talent Acquisition</h2>
                                                        <button className="btn btn-blue w-[30px] h-[30px!important] !rounded-[50%] p-0 align-items-center justify-content-center">
                                                            <i className="fa fa-close"></i>
                                                        </button>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-lg-6 col-12 col-md-6">
                                                            <div className='blueBorder p-3'>
                                                                <div className='flex justify-between'>
                                                                    <p className='text-blue text-[13px] Poppins-Regular'><img src="image/question.png" alt="" /> Ask your Questions</p>
                                                                </div>
                                                                <p className='text-[12px] mt-2 leading-[17px]'>
                                                                    Talent Acquisition can answer questions, help your job descriptions only.
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6 col-12 col-md-6">
                                                            <div className='blueBorder p-3'>
                                                                <div className='flex justify-between'>
                                                                    <p className='text-red-500 text-[13px] Poppins-Regular'><img src="image/personal.png" alt="" /> Don’t ask your personal info!</p>
                                                                </div>
                                                                <p className='text-[12px] mt-2 leading-[17px]'>
                                                                    Talent Acquisition can answer questions, help your job descriptions only.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>




                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-12 mt-4">
                                <div className="overflow-hidden d-flex justify-center">
                                    <CalendarProject />
                                </div>
                                <div className="mt-5">
                                    <Upcomings />
                                </div>

                                <div className="mt-5">
                                    <Activity />
                                </div>

                                <div className="mt-5">
                                    <HiringCandidates />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default P_M_JobDescriptionsFive