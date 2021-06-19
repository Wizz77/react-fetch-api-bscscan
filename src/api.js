import React from "react";
import BigNumber from "bignumber.js";


export default class Api extends React.Component {

    state = {
        loading: true
      };

    async componentDidMount() {

        const url = "https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56"; //Binance-Peg BUSD Token
        const response = await fetch(url);
        const data = await response.json();
        const status = data['status'];  //choose data {"status":"1","message":"OK","result":"1234567890 number from api"}       
        const message = data['message'];
        const result = data['result'];

        const number = new BigNumber(result);
    
        const decimals = 18
        const decimalsBN = new BigNumber(decimals)
        const divisor = new BigNumber(10).pow(decimalsBN)
    
        const value = number.div(divisor)
        
        this.setState({ api: value.toFixed(18), loading: false });
        this.setState({ api1: status.toString(), loading: false });
        this.setState({ api2: message.toString(), loading: false });
                  
    }
    
        render () {

            if (this.state.loading) {
              return (
              <div>
                  <br></br>
                  <div>loading . . .</div>
              </div>
              );
              
            }

            return (
                <div>
                    <br></br>
                    <br></br>
                    <div>result ::::::::::: {this.state.api}</div>
                    <br></br>
                    <div>status :::::::::: {this.state.api1}</div>
                    <br></br>
                    <div>message ::: {this.state.api2}</div>

                </div>
              
            );
          }  
}