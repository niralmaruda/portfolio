import React from 'react';

interface IObj {
  ch: string;
  num: number;
}

class obj implements IObj {
  constructor(s: string, n: number) {
    this.ch = s;
    this.num = n;
  }
  ch: string;
  num: number;
}

const Charactors: IObj[][] = [
  [new obj('C', 2), new obj('%', 0), new obj('<-', 0), new obj('/', 0)],
  [new obj('7', 1), new obj('8', 1), new obj('9', 1), new obj('*', 0)],
  [new obj('4', 1), new obj('5', 1), new obj('6', 1), new obj('-', 0)],
  [new obj('1', 1), new obj('2', 1), new obj('3', 1), new obj('+', 0)],
  [new obj('00', 1), new obj('0', 1), new obj('.', 1), new obj('=', 2)],
];

function Calculator() {
  return (
    <>
      <section className="bg-gray-900 m-3 rounded-lg overflow-hidden">
        <div className="text-white text-3xl p-3 font-bold bg-gray-950">
          Calculator
        </div>
        <hr></hr>
        <div className="my-10">
          <div className="grid grid-cols-1 m-5">
            <input className="rounded-sm bg-gray-700 text-teal-400 mx-20 scale-y-150 p-1 my-2"></input>
          </div>

          {Charactors.map((row) => (
            <div className={`grid grid-cols-4 gap-3 pb-5 px-5 mx-20 `}>
              {row.map((col) => (
                <button
                  className={`${
                    (col.num === 2 &&
                      'bg-red-700 hover:bg-red-600 hover:shadow-red-500') ||
                    (col.num === 1 &&
                      'bg-gray-500 hover:bg-gray-400 hover:shadow-gray-300') ||
                    (col.num === 0 &&
                      'bg-gray-300 hover:bg-gray-400 hover:shadow-gray-300')
                  } rounded-md hover:cursor-pointer p-2 font-medium hover:shadow-inner `}
                >
                  {col.ch}
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Calculator;
