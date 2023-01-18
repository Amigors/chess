import { useState } from 'react';

function App() {
  const [selectedCell, setSelectedCell] = useState([])
  const row = []
  for (let i = 0; i < 8; i++){
    row.push(null)
  }
  const board = []
  for (let i = 0; i < 8; i++){
    board.push(row)
  }

  const handleClick = (rowIndex, cellIndex) => {
    if ((rowIndex === selectedCell[0]) && (cellIndex === selectedCell[1])) {
      setSelectedCell([null, null])
    } else {
      setSelectedCell([rowIndex, cellIndex])
    }
  }
  
  return (
    <>
    <h1>Шахматная доска</h1>
    <ol>
      <li>Нарисовать шахматную доску в виде таблицы 8*8</li>
      <li>Раскарасить ячейки в базовый цвет (черный/светло-серый)</li>
      <li>Реализовать возможность выделения и снятия выделения ячейки по нажатию</li>
      <li>Может быть выделена только одна ячейка</li>
      <li>Приложение должно знать о выделенной ячейке</li>
    </ol>

    <table>
      <tbody>
        {board.map((row, rowIndex)=> (<tr key={rowIndex}>
          {row.map((cell, cellIndex)=> {
            const k = rowIndex % 2;
            if ((rowIndex === selectedCell[0]) && (cellIndex === selectedCell[1])) {
              return (
              <td onClick={()=>handleClick(rowIndex, cellIndex)} key={`row-${rowIndex}cell-${cellIndex}`} style={{ width: 40, height: 40, backgroundColor: 'green' }} />
              )
            }
            if (cellIndex % 2 === k) {
              return <td onClick={()=>handleClick(rowIndex, cellIndex)} key={`row-${rowIndex}cell-${cellIndex}`} style={{ width: 40, height: 40, backgroundColor: 'black' }} />
            } else {
              return <td onClick={()=>handleClick(rowIndex, cellIndex)} key={`row-${rowIndex}cell-${cellIndex}`} style={{ width: 40, height: 40, backgroundColor: 'lightgray' }} />
            }
          })}
        </tr>))}
        <tr>
          <td style={{ width: 40, height: 40, backgroundColor: 'black' }} />
          <td style={{ width: 40, height: 40, backgroundColor: 'lightgray' }} />
          <td style={{ width: 40, height: 40, backgroundColor: 'green' }} />
        </tr>
      </tbody>
    </table>
  </>
  )
}

export default App
