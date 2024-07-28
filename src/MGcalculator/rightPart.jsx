import React, { Component } from 'react';
import '../MGcalculator/Styles/rightPart.css'

class RightPart extends Component {
	state = {  } 
	render() { 
		return (
			<div className='sizing_right'>
				<header>
					<h2 className='header'>Your Results</h2>
						<span className="header_text">
							Your results are shown below based on the information
							you provided. To adjust the results, edit the form and click "Calculate" again.
						</span>
				</header>
				<div className="calculation_box">
					<div className="monthly_repayment">
						<span className="your_monthly_repay_text">
							Your monthly repayments
						</span>
						<h1 onChange={() => {this.props.HandleOverTermPayment}} className="your_monthly_repay">
							£ {this.props.MonthlyPayment}
						</h1>
					</div>
					<div className="total_repayment">
						<span className="your_total_repay_text">
							Total you'll repay over the time
						</span>
						<span className="your_total_repayment">
						£ {this.props.MortOverTermPay}
						</span>
					</div>
				</div>
			</div>
		);
	}
}
 
export default RightPart;