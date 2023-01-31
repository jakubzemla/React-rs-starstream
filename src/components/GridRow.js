import React from 'react'
import './GridRow.css'

class GridRow extends React.Component {
    render() {
        return <div className="grid-row">
            {this.props.layers}
            {this.props.banksAndActions}
            {this.props.preview}
            {this.props.camera}
            {this.props.banks}
            {this.props.camera2}
            {this.props.statusBar}
        </div>
    }
}

export default GridRow