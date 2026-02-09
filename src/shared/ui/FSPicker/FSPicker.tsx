import React, { type ChangeEvent, type ChangeEventHandler, type InputEventHandler } from 'react'
import { Button } from '../Button/Button';

function FSPicker() {

    const browseResult = (event: ChangeEvent<HTMLInputElement>) => {
        const fileselector = document.getElementById('fileselector') as HTMLInputElement;
        console.log(fileselector.value);
    }

  return (
    <div>
        <div>FSPicker</div>
        <input id="fileselector" type="file" onChange={ browseResult } dir="" multiple={ false } style={{ display: "none" }} />
        <Button onClick={ () => document.getElementById('fileselector')!.click() }>Select directory</Button>
    </div>
  )
}

export default FSPicker;