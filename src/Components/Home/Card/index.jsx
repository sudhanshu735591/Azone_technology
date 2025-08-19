import React from "react";

function Card() {
  return (
    <div class="flex flex-col shadow-sm  rounded-lg my-6 w-80">
      <div class="m-2.5 overflow-hidden rounded-md h-60 flex justify-center items-center">
        <img
          class=" h-full object-cover rounded-full"
          src="https://docs.material-tailwind.com/img/team-3.jpg"
          alt="profile-picture"
        />
      </div>
      <div class="p-6 text-center">
        <h4 class="mb-1 text-xl font-semibold text-slate-800">
          Natalie Paisley
        </h4>
        <p class="text-sm font-semibold text-slate-500 uppercase">
          Product Manager
        </p>
        <p class="text-base text-slate-600 mt-4 font-light ">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to Naviglio where you can enjoy the main night life in
          Barcelona.
        </p>
      </div>
    </div>
  );
}
export default Card;
