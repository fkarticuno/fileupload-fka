import React from "react";
import jquery from 'jquery';
import moment from 'moment';
import './Images.css'
var $ = jquery;

function images() {
  $(".time").text(moment().format("LLLL") );
}
function startTime() {
    $(".time").text( moment().format("LLLL") )
    setTimeout(()=> startTime() , 500);
}

function Images() {
    images()
    startTime()
        return (
            <div className="weatherContainer container-fluid">
                <div className="row">
                    <div className="time col-md-12"/>
                </div>
            </div>
        )
}

export default Images