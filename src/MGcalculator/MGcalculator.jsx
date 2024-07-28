import React, { Component } from 'react';
import '../MGcalculator/Styles/MGcalculator.css';
import LeftPart from './leftPart';
import RightPart from './rightPart';
class mGcalcultor extends Component {

	state = {
		MortAmount: 0,
		MortTerm: 0,
		MortPerc: 0,
		MortType: undefined,
		MonthlyPayment: 0,
		MortOverTermPay: 0
	} 

	HandleOverTermPayment = () => {
		const MonthlyPayment = this.state.MonthlyPayment;
		const MortTerm = this.state.MortTerm;
		this.setState(prev => ({...prev, MortOverTermPay: MonthlyPayment * (MortTerm * 12)}))
	}

	HandleMortAmount = (e) => {
		this.setState(prev => ({...prev, MortAmount: e.target.value}))
	}

	HandlMortTerm = (e) => {
		this.setState(prev => ({...prev, MortTerm: e.target.value}))
	}

	HandleMortPerc = (e) => {
		this.setState(prev => ({...prev, MortPerc: e.target.value}))
	}

	HandleRadio = (e) => {
		this.setState(prev => ({...prev, MortType: e.target.id}))
		console.log(this.state)
		this.HandleMonthlyPayment()
	}

	HandleMonthlyPayment = (e) => {
		e.preventDefault();
		const P = Number(this.state.MortAmount);  
    const r = Number(this.state.MortPerc) / 100 / 12;  
    const n = Number(this.state.MortTerm) * 12;
		const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);  
		this.setState(prev => ({...prev, MonthlyPayment: M.toFixed(2)}))

		const MonthlyPayment = this.state.MonthlyPayment;
		const MortTerm = this.state.MortTerm;
		this.setState(prev => ({...prev, MortOverTermPay: MonthlyPayment * (MortTerm * 12)}))
	}

	render() { 
		return (
			<div className='Main_container'>
				<div className="calc_cont">
					<div className="leftPart">
						<LeftPart 
								MortAmount={this.state.MortAmount}
								MortTerm={this.state.MortTerm}
								MortPerc={this.state.MortPerc}
								MortType={this.state.MortType}
								MonthlyPayment={this.state.MonthlyPayment}
								HandleMonthlyPayment={this.HandleMonthlyPayment}
								HandleRadio={this.HandleRadio}
								HandleMortPerc={this.HandleMortPerc}
								HandlMortTerm={this.HandlMortTerm}
								HandleMortAmount={this.HandleMortAmount}
						/>
					</div>
					<div className="rightPart">
						<RightPart 
							MortAmount={this.state.MortAmount}
							MortTerm={this.state.MortTerm}
							MortPerc={this.state.MortPerc}
							MortType={this.state.MortType}
							MonthlyPayment={this.state.MonthlyPayment}
							MortOverTermPay={this.state.MortOverTermPay}
							HandleOverTermPayment={this.HandleOverTermPayment}
						/>
					</div>
				</div>
			</div>
		);
	}
}
 
export default mGcalcultor;