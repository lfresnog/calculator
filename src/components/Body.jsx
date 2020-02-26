import React from 'react';
import './Styles.css'

const Body  = (props) => {
   
    const {onDisplay,onEqual,onDelete} = props.onClick;

    return (
        <div className="basic">
            <div className="b1">
                <div className="button" onClick = {()=>onDelete()}>DEL</div>
                <div className="button" onClick = {()=>onDisplay("T")}>T</div>
                <div className="button" onClick = {()=>onDisplay("/")}>/</div>
                <div className="button" onClick = {()=>onDisplay("*")}>*</div>
                <div className="button" onClick = {()=>onDisplay("7")}>7</div>
                <div className="button" onClick = {()=>onDisplay("8")}>8</div>
                <div className="button" onClick = {()=>onDisplay("9")}>9</div>
                <div className="button" onClick = {()=>onDisplay("-")}>-</div>
                <div className="button" onClick = {()=>onDisplay("4")}>4</div>
                <div className="button" onClick = {()=>onDisplay("5")}>5</div>
                <div className="button" onClick = {()=>onDisplay("6")}>6</div>
                <div className="button" onClick = {()=>onDisplay("+")}>+</div>
            </div>
            <div className="b2">
                <div className="b2a">
                    <div className="b2a1">
                        <div className="button" onClick = {()=>onDisplay("1")}>1</div>
                        <div className="button" onClick = {()=>onDisplay("2")}>2</div>
                        <div className="button" onClick = {()=>onDisplay("3")}>3</div>
                    </div>
                    <div className="b2a2">
                        <div className="zero" onClick = {()=>onDisplay("0")}>0</div>
                        <div className="button" onClick = {()=>onDisplay(".")}>.</div>
                    </div>
                </div>
                <div className="b2b">
                    <div className="equal" onClick = {()=>onEqual()}>=</div>
                </div>
            </div>
        </div>
    )
};

export {Body as default}