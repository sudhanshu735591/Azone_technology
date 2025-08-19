import React from "react";

function Card(){
    return(
        <div className="flex gap-10 items-center text-black">
            <div className="w-[700px] md:w-[400px] text-start">
                <img src="https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/64f724c8947d4e3df0610892_quote_marks.svg" alt="" />
                <p className="mt-5">Student feedback is currently not available. We are in the process of collecting valuable responses from our learners. Please stay tuned — this section will soon reflect their experiences, insights, and appreciation for the learning journey they've undertaken with us.</p>
            </div>
        </div>
    )
}
export default Card;