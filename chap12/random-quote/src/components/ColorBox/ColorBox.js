import React, { Component } from 'react';
import './ColorBox.css'

export default class ColorBox extends Component {
	render() {
		const { colors, activeColor, handeActiveColor } = this.props;

		return (
			<div className="ColorBox">
				{colors.map(color => {
					const style = { backgroundColor: color }
					const cls = color === activeColor ? 'Color-item active' : 'Color-item';

					return (
						<span
							className={cls}
							key={color}
							style={style}
							onClick={()=>{
								handeActiveColor(color)
							}}
						/>
						
					)
				})}
			</div>
		)
	}
}