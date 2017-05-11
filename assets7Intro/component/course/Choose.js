/**
 * Created by yiran on 2017/5/5.
 */
const $ = window.$ = require('jquery');
const React = require('react');
const OnFire = require('onfire.js');

const ChooseBar = React.createClass({

    // getInitialState(){
    //     return{
    //         playbarWidth: 0
    //     }
    // },


    getInitialState: function() {
        return {
            choose: -1,
            answer: 0,
        };
    },

    componentWillMount() {

    },


    handleClick(index) {
        // this.setState({liked: !this.state.liked});
        console.log('click' + index)
        if(index === this.props.question.trueindex[0])
        {
            console.log('right');
            this.setState({answer: 1});
            this.props.passCallBack(this.props.index);
        } else {
            this.setState({answer: -1});
        }
    },

    render() {
        var question = this.props.question
        return(
        <div className="choose-bar">
            <div className="choose-question">
                <h1>问题</h1>
                {question.introduce}
            </div>
            {this.optionRender()}
            {this.tipsRender()}
        </div>
        )
    },

    optionRender () {
        var question = this.props.question
        console.log('choose render')
        let arr=[];
        let count = 0
        for (let item of question.answerList) {
            arr.push( <div className="choose-options" key={count}>
                <p onClick={this.handleClick.bind(this, count)}>{item.detail}</p>
            </div>)
            count++;
        }
        let answer = this.state.answer
        if ( answer!== 0) {
           if(answer === -1) {
               arr.push(<div>再想想</div>)
           } else {
                arr.push(<div>回答对了少年</div>)
            }
        }
        return arr;
    },

    tipsRender () {
        return (<div className="choose-tips">
            <h1>Tips:</h1>
            <p>知识点1</p>
        </div>);
    }
});

module.exports = ChooseBar;