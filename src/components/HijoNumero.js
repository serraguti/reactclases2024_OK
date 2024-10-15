import { Component } from "react";

class HijoNumero extends Component {
    sumarNumeroHijo = () => {
        var num = parseInt(this.props.numero);
        this.props.sumarNumero(num);
    }

    render() {
        return (<div>
            {
                //CONDICIONAL IF ELSE
                (this.variable == 0 || this.variable == 5)?
                (<h1>CONDICION POSITIVA CERO</h1>):
                this.variable == 1 ?
                (<h1>CONDICION POSITIVA 1</h1>):
                (<h1>CONDICION ELSE</h1>)
            }


            <h1 style={{color:"red"}}>
                Número: {this.props.numero}
            </h1>
            <button onClick={this.sumarNumeroHijo}>
                Sumar {this.props.numero}
            </button>
        </div>)
    }
}

export default HijoNumero;