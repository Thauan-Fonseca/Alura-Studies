import React from "react";
import style from './botao.module.scss';

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined, onCLick?: () => void
  }> {
    render() {
      const { type = "button", onCLick } = this.props;
      return (
        <button  type={type} className={style.botao}>
          {this.props.type}
        </button>
      )
    }
  }
  
  export default Botao;