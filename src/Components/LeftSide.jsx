import React from 'react'

const LeftSide = () => {
    return (
        <div className="p-2 lg:p-0 max-w-max lg:w-full">
            <div className="lg:border-t lg:border-l lg:border-r lg:border-b lg:rounded-lg">
                <form className="space-y-8 divide-gray-200 lg:p-5">
                    <div>
                        <p className="text-lg font-bold text-gray-600">
                            COMPANY NAME*
                        </p>
                        <input type="text" className=" border-l border-t border-r border-b rounded-lg flex-1 block w-full focus:ring-indigo-500 mt-3 h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                        <p className="lg:ml-1 max-w-2xl text-xs text-gray-400">
                            Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg font-bold text-gray-600">
                            POSITION*
                        </p>
                        <input type="text" className=" border-l border-t border-r border-b rounded-lg flex-1 block w-full focus:ring-indigo-500 mt-3 h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                        <p className="lg:ml-1 w-full lg:w-full text-xs text-gray-400">
                            Please specify as single job position like "Marketing Manager" or "Node JS Developer", not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please.
                        </p>
                    </div>

                    <div>
                        <p className="font-bold text-gray-600">
                            PRIMARY TAG
                        </p>
                        <div className="flex lg:flex lg:w-1/5 w-2/4 ml-0 mt-2 text-center border-l border-t border-r border-b rounded-lg">
                            <select name="" id="">
                                <option>Software Developer</option>    
                                <option>Designer</option>
                            </select> 
                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-gray-600">
                            EXTRA TAGS
                        </p>
                        <input type="text" placeholder="  design, customer support etc." className=" border-l border-t border-r border-b rounded-lg flex-1 block w-full focus:ring-indigo-500 mt-3 h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                        <p className="lg:ml-1 w-full text-xs text-gray-400">
                            Use tags like industry and tech stack, and separate multiple tags by comma. Short words are preferred. The first 3 tags are shown on the site, the other tags aren't but the job will be shown on each tag specific page (like /remote-react-jobs). We also generate tags automatically after you post/edit.
                        </p>
                    </div>
                    
                    <div>
                        <p className="font-bold text-gray-600">
                            JOB IS RESTRICTED TO LOCATION?
                        </p>
                        <input type="text" placeholder="  Location this remote job is restricted to" className=" border-l border-t border-r border-b rounded-lg flex-1 block w-full focus:ring-indigo-500 mt-3 h-9 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                        <p className="lg:ml-1 text-xs text-gray-400 w-full">
                            Use tags like industry and tech stack, and separate multiple tags by comma. Short words are preferred. The first 3 tags are shown on the site, the other tags aren't but the job will be shown on each tag specific page (like /remote-react-jobs). We also generate tags automatically after you post/edit.
                        </p>
                    </div>

                </form>
            </div>
            <div className="md:flex-col md:flex mt-9 lg:border-t lg:border-l lg:border-r lg:border-b lg:rounded-lg">
                <p className="font-bold text-gray-600 mt-4 lg:mb-3 mb-3 ml-2 lg:ml-5">Design your job post!</p>

                <div class="lg:flex md:flex md:flex-row lg:flex-row lg:ml-10 lg:mt-2 lg:mb-2 md:ml-2 flex mt-5">
                    <input id="box" type="checkbox" class="focus:ring-indigo-500 h-6 w-6 text-indigo-600 border-gray-300 rounded" />
                    <p className="ml-3">
                        Show my company color!
                    </p>
                </div>
                <div class="lg:flex md:flex md:flex-row lg:flex-row lg:ml-10 lg:mt-2 lg:mb-2 md:ml-2 flex mt-5">
                    <input id="box" type="checkbox" class="focus:ring-indigo-500 h-6 w-6 text-indigo-600 border-gray-300 rounded" />
                    <p className="ml-3">
                        Show my company color!
                    </p>
                </div>
                <div class="lg:flex md:flex md:flex-row lg:flex-row lg:ml-10 lg:mt-2 lg:mb-2 md:ml-2 flex mt-5">
                    <input id="box" type="checkbox" class="focus:ring-indigo-500 h-6 w-6 text-indigo-600 border-gray-300 rounded" />
                    <p className="ml-3">
                        Show my company color!
                    </p>
                </div>
                <div class="lg:flex md:flex md:flex-row lg:flex-row lg:ml-10 lg:mt-2 lg:mb-2 md:ml-2 flex mt-5 pb-4">
                    <input id="box" type="checkbox" class="focus:ring-indigo-500 h-6 w-6 text-indigo-600 border-gray-300 rounded" />
                    <p className="ml-3">
                        Show my company color!
                    </p>
                </div>
                
            </div>


            <div className="md:flex-col md:flex mt-9 lg:border-t lg:border-l lg:border-r lg:border-b lg:rounded-lg">
                <p className="font-bold text-gray-600 mt-4 lg:mb-3 mb-3 ml-2 lg:ml-5">Job Details</p>
                <div className="ml-5 md:flex md:flex-row lg:flex lg:flex-row">
                    <p>
                        Upload Company Logo
                    </p>
                    <button className="border-l border-t border-r border-b">
                        +
                    </button>
                </div>
                <p className="font-bold text-gray-600 mt-4 lg:mb-3 mb-3 ml-2 lg:ml-5">
                    Annual Salary(USD)
                </p>
                <div className="lg:ml-5 -ml-36 flex lg:w-4/5 items-center  flex-col md:flex md:flex-row lg:flex lg:flex-row">
                    <input type="text" className="lg:mr-4 border-l border-t border-r border-b rounded-lg lg:w-full w-2/5" /> 
                    - 
                    <input type="text" className="lg:ml-4 border-l border-t border-r border-b rounded-lg lg:w-full w-2/5" />
                </div>
                <p className="lg:ml-6 w-4/5 text-xs text-gray-400">
                    Not required but HIGHLY recommended, because Google does NOT index jobs without salary data! Write it preferrably in US DOLLARS PER YEAR, like $75,000. If you pay hourly, or monthly, please convert to annual equivalent yourself (hourly rate * 8h * 22d * 12mo OR monthly salary * 12mo). Our robot can also convert it but it's not perfect and it might make a mistake if you enter it differently than annual. If not sure, write an indication of the salary.
                </p>

                <div>
                    <p className="font-bold text-gray-600 lg:mt-9 mt-4 lg:mb-3 mb-0 ml-0 lg:ml-5 lg:mb-3">Job Description</p>
                    <textarea id="about" name="about" rows="3" class="ml-5 w-full -ml-1 lg:ml-4 lg:w-full max-w-lg shadow-sm block focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md border-l border-r border-t border-b"></textarea>
                </div>

                <div>
                    <p className="font-bold text-gray-600 lg:mt-9 lg:mt-4 lg:mb-3 mt-2 mb-0 ml-0 lg:ml-5">How to apply</p>
                    <textarea id="about" name="about" rows="3" class="ml-5 w-full -ml-1 lg:ml-4 lg:w-full max-w-lg shadow-sm block focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md border-l border-r border-t border-b"></textarea>
                    <p className="-ml-1 lg:ml-5 max-w-2xl text-xs text-gray-400">
                        Not required
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
