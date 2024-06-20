import React,{useState} from 'react';

const BarGraph = ({ data }) => {
    const maxValue = Math.max(...data.map(item => item.value));
  
    return (
      <div className="flex flex-col items-center w-full h-full">
        <h2 className="text-xl font-bold mb-4">Numbers Of Books</h2>
        <div className="flex w-full justify-around items-baseline space-x-1 h-full">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center h-full">
              <div
                className="bg-blue-500  w-8 md:w-5 xl:w-10"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              ></div>
              <span className="mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };


  const ExpandableContainer = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div
        onClick={toggleExpand}
        className={`transition-all duration-500 ease-in-out bg-gray-100 cursor-pointer overflow-hidden ${
          isExpanded ? 'fixed inset-0 bg-slate-400 z-50 flex items-center justify-center p-4' : 'w-full h-60 md:h-80'
        }`}
      >
        <BarGraph data={data} />
      </div>
    );
  };



  const H_graph = () => {
    const data = [
      { label: 'Che', value: 5 },
      { label: 'Mech', value: 80 },
      { label: 'CSE', value: 65 },
      { label: 'EP', value: 90 },
      { label: 'MnC', value: 70 },
      { label: 'BS-MS', value: 85 },
    ];
  
    return (
      <div >
        <ExpandableContainer data={data} />
      </div>
    );
  };
  
  
  export default H_graph;
