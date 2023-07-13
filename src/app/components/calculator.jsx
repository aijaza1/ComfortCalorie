import React, { useState } from 'react';

const Calculator = () => {
  const [calories, setCalories] = useState(null);

  const calculateCalorie = (event) => {
    event.preventDefault();

    const form = event.target;
    const age = parseInt(form.age.value);
    const gender = form.gender.value;
    const feet = parseInt(form.feet.value);
    const inches = parseInt(form.inches.value);
    const height = (feet * 12 + inches) * 2.54;
    const weight = parseFloat(form.weight.value) / 2.205;
    const goal = form.goal.value;
    const activity = parseFloat(form.activity.value);

    const BMR = Mifflin(gender, age, height, weight);

    let ret = parseFloat(BMR) * parseFloat(activity);

    if (goal === '2') {
      ret += 500;
    } else if (goal === '3') {
      ret -= 500;
    }

    setCalories(Math.ceil(ret));
  };

  const Mifflin = (gender, age, height, weight) => {
    let BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    if (gender === '1') {
      // Female
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    return BMR;
  };

  return (
    <div id="calculator" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-5 py-10 w-full">
        <p className="text-4xl lg:text-5xl tracking-wide uppercase text-center mt-2 text-[#FB8500]">
          Calorie Calculator
        </p>

        <h2 className="py-4 text-center text-xl lg:text-2xl">
          Determine how many calories you should eat daily based on your goals.
        </h2>

        <form
          onSubmit={calculateCalorie}
          className="mt-3 lg:mt-10 w-full items-center shadow-xl shadow-gray-400 rounded-xl p-4"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-1 md:mb-3">
              <label className="block uppercase tracking-wide text-[#FB8500] text-md font-bold mb-2">
                Age
              </label>
              <div>
                <input
                  className="w-10/12 bg-gray-200 text-gray-700 border border-[#FB8500] rounded py-3 px-4 mb-3 md:mb-0 leading-tight focus:outline-none focus:bg-white"
                  id="age"
                  type="number"
                  placeholder="Years"
                />
                <button className="w-2/12 bg-[#FB8500] text-white rounded py-3 px-4">
                  Yrs
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-1 md:mb-3">
              <label className="block uppercase tracking-wide text-[#FB8500] text-md font-bold mb-2">
                Gender
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-[#FB8500] text-gray-700 py-3 px-4 pr-8 mb-3 md:mb-0 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="gender"
                >
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-1 md:mb-3">
              <label className="block uppercase tracking-wide text-[#FB8500] text-md font-bold mb-2">
                Goal
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-[#FB8500] text-gray-700 py-3 px-4 pr-8 mb-3 md:mb-0 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="goal"
                >
                  <option value="1">Maintain Weight</option>
                  <option value="2">Gain Weight</option>
                  <option value="3">Lose Weight</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-1 md:mb-3">
              <label className="block uppercase tracking-wide text-[#FB8500] text-md font-bold mb-2">
                Height
              </label>
              <div className="flex">
                <div className="mr-1">
                  <input
                    className="w-8/12 lg:w-9/12 bg-gray-200 text-gray-700 border border-[#FB8500] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="feet"
                    type="number"
                    placeholder="Feet"
                  />
                  <button className="w-4/12 lg:w-3/12 bg-[#FB8500] text-white rounded py-3 px-4">
                    Ft
                  </button>
                </div>
                <div>
                  <input
                    className="w-8/12 lg:w-9/12 bg-gray-200 text-gray-700 border border-[#FB8500] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="inches"
                    type="number"
                    placeholder="Inches"
                  />
                  <button className="w-4/12 lg:w-3/12 bg-[#FB8500] text-white rounded py-3 px-4">
                    In
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-1 md:mb-3">
              <label className="block uppercase tracking-wide text-[#FB8500] text-md font-bold mb-2">
                Weight
              </label>
              <div>
                <input
                  className="w-10/12 bg-gray-200 text-gray-700 border border-[#FB8500] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="weight"
                  type="number"
                  placeholder="Weight"
                />
                <button className="w-2/12 bg-[#FB8500] text-white rounded py-3 px-4">
                  lbs
                </button>
              </div>
            </div>

            <div className="w-full md:w-full px-3 mb-1 md:mb-3">
              <label className="block uppercase tracking-wide text-[#FB8500] text-md font-bold mb-2">
                Activity Level
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-[#FB8500] text-gray-700 py-3 px-4 pr-8 mb-3 md:mb-0 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="activity"
                >
                  <option value="1">Basal Metabolic Rate (BMR)</option>
                  <option value="1.2">Sedentary: little or no exercise</option>
                  <option value="1.375">Light: exercise 1-3 times/week</option>
                  <option value="1.465">Moderate: exercise 4-5 times/week</option>
                  <option value="1.55">
                    Active: daily exercise or intense exercise 3-4 times/week
                  </option>
                  <option value="1.725">
                    Very Active: intense exercise 6-7 times/week
                  </option>
                  <option value="1.9">
                    Extra Active: very intense exercise daily or physical job
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Display calculated calories */}
          {calories && (
            <div className="container">
              <h4 className="text-center bg-[#FB8500] text-white mb-8 p-2 rounded text-base lg:text-xl">
                You should consume around{' '}
                <span className="p-1 rounded bg-white text-[#FB8500]">
                  {calories}
                </span>{' '}
                calories a day.
              </h4>
            </div>
          )}

          <div className="text-center flex items-center justify-center align-items-center">
            <button
              type="submit"
              className="bg-[#FB8500] hover:bg-[#E07701] text-white font-extrabold text-l lg:text-xl py-3 px-4 border-2 border-black rounded-md hover:scale-105 ease-in duration-300"
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
