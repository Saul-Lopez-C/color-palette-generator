import { useCallback, useRef, useState } from 'react';
import ColorPlate from "./ColorPlate"
import { toPng } from 'html-to-image';
import Header from './Header';

const PALETTE_SIZE = 5;

const generateRandomColors = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

const PaletteContainer = () => {

  const ref = useRef(null);
  const [lockStatusArray, setLockStatusArray] = useState(Array.from( {length: PALETTE_SIZE}, () => { return false }));  
  const [colors, setColors] = useState(Array.from( {length: PALETTE_SIZE}, generateRandomColors));

  const handleDownload = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = "color-palette.png"
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  const generateNewColorPalette = () => {
    let newColors = []

    for (let i = 0; i < PALETTE_SIZE; i++) {
        if (lockStatusArray[i]) {
          newColors[i] = colors[i]; 
        } else {
          newColors[i] = generateRandomColors();
        }
    }
    setColors(newColors);
  }

  const toggleLock = (index) => {
    const newLockStatusArray = [...lockStatusArray]
    newLockStatusArray[index] = !lockStatusArray[index];
    setLockStatusArray(newLockStatusArray)
  }

  document.body.onkeyup = function(e) {
    if (e.key === " " || e.code === "space") {
        generateNewColorPalette();
    }
  }


  return (
    <div className="flex flex-col h-screen">
      <Header handleDownload={handleDownload}/>
      <div ref={ref} className="h-full grid grid-cols-1 md:grid-cols-5 mx-3 mb-3">
        {colors.map((color, index) => {
            return <ColorPlate key={index} color={color} index={index} onIconClick={toggleLock} lockStatus={lockStatusArray[index]} />
        })}
    </div>
    </div>
  )
}

export default PaletteContainer