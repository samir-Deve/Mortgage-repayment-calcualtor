import React, { Component } from 'react';
import './Styles/leftPart.css';
class LeftPart extends Component {
	render() { 
		return (
			<div className='sizing'>
				<header className='header'>
					<h2>Mortgage Calculator</h2>
					<button className="clear_all">Clear All</button>
				</header>
				<form className="form">
					<div className="Mort_amount_cont">
						<label>Mortgage Amount</label>
						<div>
							<label htmlFor="text" className='currency'>
							£
							</label>
							<input id='text' type="text" className='input_text'
							value={this.props.MortAmount}
							onChange={(e) => {this.props.HandleMortAmount(e)}}
							/>
						</div>
					</div>
					<div className="Mort_term_interest_cont">
						<div className="Mort_term_cont">
							<label className='termLabel'>Mortgage Term</label>
							<div>
								<input type="text" id='mortgageYear' className='termText' value={this.props.MortTerm}
								onChange={(e) => {this.props.HandlMortTerm(e)}}
								/>
								<label htmlFor="mortgageYear" className='mortYear'>Years</label>
							</div>
						</div>
						<div className="Mort_interest_cont">
							<label className='interest_label'>Interest Rate</label>
							<div>
								<input type="text" id='mortInterest' className='interest_text'
								value={this.props.MortPerc}
								onChange={(e) => {this.props.HandleMortPerc(e)}}
								/>
								<label htmlFor="mortInterest" className='iterest_perc_label'>%</label>
							</div>
						</div>
					</div>
					<div className="Mort_type">
						<label className='mortTypeLabel'>Morgage Type</label>
						<div>
							<label className="repayment">
								<input className='radio' type="radio" name="Mort_type" id='repayment'
								onChange={(e) => {this.props.HandleRadio(e)}}
								/>
								<label htmlFor='repayment'>Repayment</label>
							</label>
							<label className="interest_only">
								<input className='radio2' type="radio" name="Mort_type" id="interest_only" 
									onChange={(e) => {this.props.HandleRadio(e)}}
								/>
								<label htmlFor="interest_only">Interest Only</label>
						</label>
						</div>
					</div>
					<div className="calcualte_mort">
						<button onClick={(e) => {
							this.props.HandleMonthlyPayment(e)
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/>
							</svg>
							Calculate
						</button>
					</div>
				</form>
			</div>
		);
	}
}
 
export default LeftPart;