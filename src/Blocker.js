import React from 'react';

class Blocker extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onCheckedChange(e.target.checked);
    }

    render() {
        const isChecked = this.props.isChecked;
        return (
            <div>
                <input type="checkbox" checked={isChecked} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Blocker