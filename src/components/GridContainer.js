import React from 'react'
import './GridContainer.css'
import GridRow from './GridRow'
import Layers from './Layers'
import BanksAndActions from './BanksAndActions'
import FirstMiddle from './FirstMiddle'
import SecondMiddle from './SecondMiddle'
import Camera from './Camera'
import Camera2 from './Camera2'


class GridContainer extends React.Component {
    render() {
        return (
            <section className="studio-grid">
                <GridRow layers={<Layers />} preview={<FirstMiddle />} camera={<Camera />} />
                <GridRow banksAndActions={<BanksAndActions />} banks={<SecondMiddle />} camera2={<Camera2 />}/>
            </section>
        )
    }
}

export default GridContainer