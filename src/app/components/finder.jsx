import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Finder = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([
    {
      name: 'Pizza',
      calories: 262.9,
      carbohydrates_total_g: 32.9,
      protein_g: 11.4,
      fat_total_g: 9.8,
      cholesterol_mg: 1,
      serving_size_g: 100,
      sugar_g: 3.6,
      sodium_mg: 587,
      potassium_mg: 217,
      fiber_g: 2.3,
    },
  ]);
  const [error, setError] = useState('');
  const [showBanner, setShowBanner] = useState(true);

  const handleSearch = () => {
    fetch('https://api.api-ninjas.com/v1/nutrition?query=' + query, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'qa/Dv3R4KEpWlmYU6EVNuA==5AlphvuWrPdfJt5P',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setError('Food not found. Please enter a valid food name.');
          setResult([]);
          setShowBanner(false);
        } else {
          setResult(data);
          setError('');
          setShowBanner(true);
        }
        console.log(data);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };
  const [chartVisible, setChartVisible] = useState(false);
  useEffect(() => {
    // Delay rendering the chart until after hydration
    setChartVisible(true);
  }, []);

  return (
    <div id='finder' className='w-full lg:h-screen bg-slate-100'>
      <div className='max-w-[1240px] m-auto px-5 mt-4 lg:mt-0 py-7 w-full'>
        <p className='mt-3 lg:mt-0 text-4xl lg:text-5xl tracking-wide uppercase text-center text-[#FB8500]'>
          Calorie Finder
        </p>
        <h2 className='py-3 text-center text-xl lg:text-2xl'>Search for any food & find the nutritional facts.</h2>

        <div className='w-full mt-5 mb-1 md:mb-3'>
          <div className='text-center'>
            <input
              className='w-9/12 lg:w-6/12 bg-white text-gray-700 border border-[#FB8500] rounded py-3 px-5 mb-3 md:mb-0 leading-tight focus:outline-none focus:bg-white'
              id='search'
              type='text'
              placeholder='search for a food...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className='w-3/12 lg:w-1/12 bg-[#FB8500] hover:bg-[#E07701] text-white font-extrabold py-3 px-3 rounded-md hover:scale-105 ease-in duration-300'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {/* Display error message */}
          {error && <p className='text-red-500 text-center'>{error}</p>}
        </div>

        {showBanner && (
          <div className='mb-4 flex justify-center items-center'>
            <div className='container w-96 md:w-5/12 text-center'>
              <h4 className='text-center bg-[#FB8500] text-white p-2 rounded text-xl lg:text-2xl'>
                {result[0].name.charAt(0).toUpperCase() + result[0].name.slice(1)} has a total of{' '}
                <span className='p-1 rounded bg-white text-[#FB8500]'>{result[0].calories}</span> calories
              </h4>
            </div>
          </div>
        )}

        <div className='flex justify-center items-stretch'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full md:w-3/4'>
            {result.map((item, index) => (
              <div className='shadow-xl shadow-gray-400 rounded-xl px-4 py-3' key={index}>
                <h3 className='text-2xl font-semibold'>Nutritional Facts:</h3>
                <ul>
                  <li>
                    <p className='bg-black text-white p-2 text-base mb-2'>Serving Size per 100 Grams</p>
                    <p className='text-base lg:text-lg'>
                      Protein: <span className='float-right'>{item.protein_g} g</span>
                    </p>
                    <hr className='my-1' />
                    <p className='text-base lg:text-lg'>
                      Carbohydrates: <span className='float-right'>{item.carbohydrates_total_g} g</span>
                    </p>
                    <hr className='my-1' />
                    <p className='text-base lg:text-lg'>
                      Fat: <span className='float-right'>{item.fat_total_g} g</span>
                    </p>
                    <hr className='my-1' />
                    <p className='text-base lg:text-lg'>
                      Sugar: <span className='float-right'>{item.sugar_g} g</span>
                    </p>
                    <hr className='my-1' />
                    <p className='text-base lg:text-lg'>
                      Sodium: <span className='float-right'>{item.sodium_mg} mg</span>
                    </p>
                    <hr className='my-1' />
                    <p className='text-base lg:text-lg'>
                      Cholesterol: <span className='float-right'>{item.cholesterol_mg} mg</span>
                    </p>
                    <hr className='my-1' />
                    <p className='text-base lg:text-lg'>
                      Potassium: <span className='float-right'>{item.potassium_mg} mg</span>
                    </p>
                    <hr className='my-1' />
                    <p className='text-base lg:text-lg'>
                      Fiber: <span className='float-right'>{item.fiber_g} g</span>
                    </p>
                  </li>
                </ul>
              </div>
            ))}

            {chartVisible && result[0] && (
              <div className='shadow-xl shadow-gray-400 rounded-xl p-4 h-full flex justify-center items-center'>
                <div className='w-full'>
                  <h3 className='text-2xl font-semibold text-center'>Calorie Breakdown</h3>
                  <h3 className='text-xl font-semibold text-center'>(%)</h3>
                  <PieChart width={400} height={300}>
                    <Pie
                      data={[
                        { name: 'Protein', value: Math.round((result[0].protein_g * 4) / result[0].calories * 100) },
                        { name: 'Carbohydrates', value: Math.round((result[0].carbohydrates_total_g * 4) / result[0].calories * 100) },
                        { name: 'Fat', value: Math.round((result[0].fat_total_g * 9) / result[0].calories * 100) },
                      ]}
                      dataKey='value'
                      cx='50%'
                      cy='50%'
                      innerRadius={80}
                      outerRadius={100}
                      fill='#8884d8'
                      label
                    >
                      <Cell key='protein' fill='#82ca9d' />
                      <Cell key='carbs' fill='#8884d8' />
                      <Cell key='fat' fill='#ff8a00' />
                    </Pie>
                    <Tooltip />
                    <Legend align='center' />
                  </PieChart>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;
